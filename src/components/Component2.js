import React from "react";
import {Spring} from "react-spring/renderprops" 

const Component2 =()=> {
    return(
        <Spring
            from={{opacity:0, marginTop:-700}}
            to={{opacity:1, marginTop:60}}
            >
            {props=> (
                <div style={props}className="projectsHeader">
                <h1>My Projects</h1>
            </div>
            )}
        </Spring>
    )
}


export default Component2;

