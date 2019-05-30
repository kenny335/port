import React from "react";
import { Spring } from "react-spring/renderprops";

export default function Component1() {
    return(
        <Spring
            from={{opacity:0, marginTop:-500}}
            to={{opacity:1, marginTop:50, marginBottom:-25}}
        >
            {props => (
                <div style={props}>
                <div style={{backgroundColor:"white", paddingTop:20}}>
                <h1>HelloGuest</h1>
            </div>
            </div>
            )}
            
        </Spring>
    );
}

