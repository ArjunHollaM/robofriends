import React, { Component } from "react";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
//import { robots } from './robots'
import SearchBox from '../components/SearchBox';
import ErrorBoundry from '../components/ErrorBoundry'
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')  //Using APIs
            .then(response =>  response.json())
            .then(users => this.setState({robots:users}));
    }
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }
    render() {
        const { robots, searchfield } = this.state;
        const filteredRobot = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        if (! robots.length ) {
            return <h1>Loading...</h1>
        }
        else {
            return (
                <div className='tc'>
                    <h1 className='f1'>ROBOFRIENDS</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <br></br>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobot}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
        }
    }
}
export default App;