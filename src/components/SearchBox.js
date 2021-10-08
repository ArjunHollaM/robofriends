import React from "react";

const SearchBox = ({searchChange}) => {
    return (
        <div>
            <input
            className='pa3 ba b--blue bg-lightest-blue'
            type='search'
            placeholder='Search robot'
            onChange={searchChange}
            />
        </div>
    )
}
export default SearchBox;