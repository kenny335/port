import React from "react";
import sunset from "../Pics/sunset-4223901_1920.jpg"


class Aboutme extends React.Component {
    render() {

        return(
            <div className="aboutContainer">
                 <h1>What I Do</h1>
                 <div>Im always serving up some distinct designs to web apps and mobile applications. I mix a great combination of digital marketing srategy with a generous splash of creative juices, with customized solutions o ensure uniqueness.</div>
                <div>
                <span>
                    <img src={sunset}/>
                </span>

                </div>
                
            </div>
        );
    }
}


export default Aboutme;