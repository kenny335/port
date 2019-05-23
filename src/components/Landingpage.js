import React from "react";
import Info from "./Info";
import ScrollAnimation from 'react-animate-on-scroll';
import {Switch} from "react-mdl";
import LazyHero from 'react-lazy-hero';
import $ from "jquery";



class Landingpage extends React.Component {

    render() {
        return(
        <div>
            <div>
            <LazyHero style={{minHeight:"90vh", opacity:0.80}} imageSrc="https://www.independent.co.ug/wp-content/uploads/2017/11/forest.jpg">
                <h1>Welcome to my profile</h1>
                <h1>Please have a look around</h1>
                <button className="btn btn-success btn-lg"><a href="#tron">See my profile</a></button>
            </LazyHero>
        </div>
            <img style={{margin:"50px", height:"300px", width:"300px", borderRadius:"50%", border:"2px solid black"}} src="https://media.licdn.com/dms/image/C5103AQHpdHxmwj6c9w/profile-displayphoto-shrink_200_200/0?e=1564012800&v=beta&t=QHwArkHucm5Nc6tzR2qhAPJ2hUcQ1Nt0WM2ShpK5e70"/>
            <div className="content">
            <div className="columnIt">
            <div id="tron" className="jumbotron jumbo">
                <h3 className="nameText">Kenny Quach</h3>
                <h3 style={{fontWeight:"bold"}}>Front-End Web Developer</h3>
                <hr/>
            <div className="languages">
                <h3>HTML5 | CSS | JavaScipt | nodeJS + Express | jQuery | mySQL | API | ReactJS | React Native | Bootstrap</h3>
            </div>
            </div>
            </div>
            </div>
            <div className="specialty">
                <div>
                    <div className="specialtytextstyle" style={{marginBottom:"20px"}}>Creating responsive websites and mobile apps</div>
                    <img className="specialtyImage" src="https://webkul.com/wp-content/uploads/2018/04/illustration-expertise-mobile-apps.png?v=1" />
                </div>
                <div>
                    <div className="specialtytextstyle" style={{marginBottom:"20px"}}>Discovering new trends to incorporate into apps</div>
                    <img className="specialtyImage" src="http://pngriver.com/wp-content/uploads/2018/03/Download-Technology-PNG-Pic-For-Designing-Projects.png" />
                </div>
                <div>
                    <div className="specialtytextstyle" style={{marginBottom:"20px"}}>Using various database systems to store data</div>
                    <img className="specialtyImage" src="https://s3-us-west-2.amazonaws.com/cdn.viewpoint.corporate/illustrations/Isometrics-Cropped/Isometrics-Desktop-Checklist-600px.png" />
                </div>
            </div>
            <div style={{height:"100px"}}>

            </div>
        </div>
            
        );
    }
}


export default Landingpage;