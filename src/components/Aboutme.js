import React from "react";
import Component2 from "./Component2"


class Aboutme extends React.Component {


    render() {

        return(
            <div className="aboutContainer">
            <div style={{backgroundColor:"antiquewhite", height:200}}>
            <div style={{height:100}}/>
                <div className="tangerineText" style={{color:"tomato", fontWeight:"bold", fontSize:50}}>About Me</div>
            </div>
                <div className="verlaRound">
                <h1>What I do</h1>
                  <div style={{display:"flex", flexDirection:"row",margin:20, justifyContent:"space-around"}}>
                      <div>
                          <img src="https://media.theukdomain.uk/uploads/2018/03/27155622/jessica-lewis-512224-unsplash.jpg" style={{width:400, height:300, border:"2px solid orange"}}/>
                      <div>Create responsive web and mobile apps that are conucive to a company's objectives and goals</div>
                      </div>
                      <div>
                          <img src="http://seotraining.pk/wp-content/uploads/2019/03/google-analytics-best-reports.jpg" style={{width:400, height:300, border:"2px solid orange"}}/>
                      <div>Analyze trends to see where traffic is coming in from with the help of Google Analytics</div>
                      </div>
                      <div>
                          <img src="https://i2.wp.com/blog.pipelinedeals.com/wp-content/uploads/2019/04/engineering-header-img-v2.png?fit=496%2C338&ssl=1" style={{width:400, height:300, border:"2px solid orange", backgroundColor:"black"}}/>
                      <div>Collaborate with otbers to ensure that the goal is achieved and that all requirements are met</div>
                      </div>
                    </div>  
                
                </div>
                <div className="verlaRound"></div>
               
                <div className="verlaRound">
                <h1>My Favorite Technologies to Use</h1>
                  <div style={{display:"flex", flexDirection:"row",margin:20, justifyContent:"space-around"}}>
                      <div>
                          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" style={{width:400, height:300, border:"2px solid orange"}}/>
                      <div>JavaScript</div>
                      </div>
                      <div>
                          <img src="https://miro.medium.com/max/480/1*To2H39eauxaeYxYMtV1afQ.png" style={{width:400, height:300, border:"2px solid orange", backgroundColor:"white"}}/>
                      <div>ReactJS/React Native</div>
                      </div>
                      <div>
                          <img src="https://i2.wp.com/wp.laravel-news.com/wp-content/uploads/2017/11/bootstrap-4-preset.png?resize=2200%2C1125" style={{width:400, height:300, border:"2px solid orange", backgroundColor:"black"}}/>
                      <div>Bootstrap</div>
                      </div>
                    </div>  
                </div>
            </div>
        );
    }
}


export default Aboutme;