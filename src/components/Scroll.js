import React from "react";

const Scroll = (props) => {
    let style = {
        overflowY: 'scroll',
        border: "4px solid black",
        height: "467px"
    }
    return (
        <div style={style} >
            {props.children}
        </div>
        );
}

export default Scroll;