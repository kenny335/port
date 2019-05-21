import React from "react";
import Info from "./Info";
import ScrollAnimation from 'react-animate-on-scroll';
import {Switch} from "react-mdl"


class Landingpage extends React.Component {



    render() {
        return(
        <div>
            <img style={{margin:"50px", height:"300px", width:"300px", borderRadius:"50%", border:"2px solid black"}} src="https://media.licdn.com/dms/image/C5103AQHpdHxmwj6c9w/profile-displayphoto-shrink_200_200/0?e=1564012800&v=beta&t=QHwArkHucm5Nc6tzR2qhAPJ2hUcQ1Nt0WM2ShpK5e70"/>
            <div className="content">
            <div className="columnIt">
            <div className="jumbotron jumbo">
                <h3 className="nameText">Kenny Quach</h3>
                <hr/>
            <div className="languages">
                <h3>HTML5 | CSS | JavaScipt | nodeJS + Express | jQuery | mySQL | API | ReactJS | React Native | Bootstrap</h3>
            </div>
            </div>
            </div>
            </div>
            <div className="specialty">
                <div>
                    <div style={{paddingBottom:50}}>Create responsive websites and mobile apps</div>
                    <img style={{height:"80%"}}src="https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/browser-512.png" />
                </div>
                <div>
                    <div style={{paddingBottom:50}}>Create responsive websites and mobile apps</div>
                    <img src="https://static1.squarespace.com/static/5c8fcdc794d71ad6ad4641df/t/5c93d0d48165f523173543d2/1553191129492/device_intro.png" />
                </div>
                
            </div>
        </div>
            
        );
    }
}


export default Landingpage;