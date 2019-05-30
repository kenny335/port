import React from "react";
import {Spring} from "react-spring/renderprops"

const AppsExperience =()=> {
    
    return(
        <Spring
            from={{opacity:0, marginRight:-500}}
            to={{opacity:1, marginRight:190}}>
            {props=>(
                <div style={props}>
                <div style={{marginRight:20, marginLeft:20}}>
               <h2 style={{color:"antiquewhite", marginTop:70}}>Assisted On</h2>
           <div style={{marginBottom:20}}>
               <div className="card cardB">
               <img className="card-img-top" src="https://ph-files.imgix.net/e0f27a4a-7bb3-42fd-a764-538aa0f972bc?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=754.50337512054&h=380&fit=max&dpr=2" alt="Card image cap"/>
               <div className="card-body">
                   <p className="card-text"><a href="https://www.producthunt.com/posts/investor-intelligence" target="_blank">Investor Intelligence - An app that will help you find investors</a></p>
               </div>
           </div>
               </div>
               <div style={{marginBottom:20}}>
               <div className="card cardB">
               <img className="card-img-top" src="https://ph-files.imgix.net/039fa64b-680c-4c02-8a3a-3fd7172e08ef?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=636.8233387358184&h=380&fit=max&dpr=2" alt="Card image cap"/>
               <div className="card-body">
                   <p className="card-text"><a href="https://www.producthunt.com/posts/slides-76cd4756-17e0-43b9-a93e-e1a4aa459907" target="_blank">Slides - A pitch deck that will get the job done</a></p>
               </div>
           </div>
               </div>
               <div style={{marginBottom:20}}>
               <div className="card cardB">
               <img className="card-img-top" src="https://ph-files.imgix.net/7fca94f0-30c0-49c7-925a-8c479ff26151?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=667.7224736048265&h=380&fit=max&dpr=2" alt="Card image cap"/>
               <div className="card-body">
                   <p className="card-text"><a href="https://www.producthunt.com/posts/how-much-does-it-cost-to-build-an-app" target="">HowMuchDoesItCost - An app that will determine the price to build an app</a></p>
               </div>
           </div>
               </div>
               <div style={{marginBottom:20}}>
               <div className="card cardB">
               <img className="card-img-top" src="https://ph-files.imgix.net/f058403c-e844-4a36-8b17-04b272495000?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=634&h=380&fit=max&dpr=2" alt="Card image cap"/>
               <div className="card-body">
                   <p className="card-text"><a href="https://www.producthunt.com/posts/mockdown" target="_blank">Mockdown - An app that will mockup your user interface</a></p>
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