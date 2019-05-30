import React from "react";
import {Spring} from "react-spring/renderprops"

const AppsExperience =()=> {
    return(
        <Spring
            from={{opacity:0, marginRight:-500}}
            to={{opacity:1, marginRight:20}}>
            {props=>(
                <div style={props}>
                <div style={{marginRight:20, marginLeft:20}}>
               <h3>ProductHunt Apps Assistant</h3>
           <div>
               <div class="card">
               <img class="card-img-top" src="..." alt="Card image cap"/>
               <div class="card-body">
                   <h5>HowMuchToBuildAnApp</h5>
                   <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
               </div>
           </div>
               </div>
               <div>
               <div class="card">
               <img class="card-img-top" src="..." alt="Card image cap"/>
               <div class="card-body">
                   <h5>HowMuchToBuildAnApp</h5>
                   <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
               </div>
           </div>
               </div>
               <div>
               <div class="card">
               <img class="card-img-top" src="..." alt="Card image cap"/>
               <div class="card-body">
                   <h5>HowMuchToBuildAnApp</h5>
                   <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
               </div>
           </div>
               </div>
               <div>
               <div class="card">
               <img class="card-img-top" src="..." alt="Card image cap"/>
               <div class="card-body">
                   <h5>HowMuchToBuildAnApp</h5>
                   <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
               </div>
           </div>
               </div>
           </div>
           </div>
            )}
            
        </Spring>
        
       
    );
}


export default AppsExperience;