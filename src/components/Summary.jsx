import React from "react";


class Summary extends React.Component {

    state = {
        skills:["Responsive Websites", "Incorporate new technologies", "Find industry trends"]
    }
    render() {
        return(
            <div className="summaryContainer">
            <div style={{display:"flex",flexDirection:"column", margin:100}}>
                <h1>Hi.</h1>
                <span style={{fontSize:"3vh"}}>I'm a web developer based in New York City, NY. I have a passion for web development and enjoy creating web and mobile applications.</span>
            </div>
            <div>
                <div style={{backgroundColor:"indigo", color:"black", display:"flex", flexDirection:"row", justifyContent:"space-around", padding:130}}>
                <div style={{color:"white", fontSize:"30px"}}>Design what you want.  I'll create it.</div>
                <img style={{borderRadius:"50%", height:"200px", width:"200px", margin:20}} src="https://global-uploads.webflow.com/55e67eeba2e73cb76514f165/5987c18399d894000124c2e8_Master%20Web%20Design%20.png"/>
                <div style={{color:"white", fontSize:"30px"}}>Create the message you want. I'll convey it. </div>
                </div>
            </div>
            <div style={{marginBottom:50}}>
                <div style={{fontSize:"4vh", margin:30}}>I can help.</div>
            <div style={{display:"flex", flexDirection:"row", justifyContent:"space-around", fontSize:"3vh"}}>
                {this.state.skills.map(skill=> <li>{skill}</li>)}
            </div>
               
            </div>
            </div>
        );
    }
}

export default Summary;