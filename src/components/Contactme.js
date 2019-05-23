import React from "react";


class Contactme extends React.Component {
    render() {
        return(
            <div>
                <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1>Have any questions about me?</h1>
                    <p>Feel free to contact me from the info below</p>
                </div>
            </div>
            <div className="heroContainer">
            <div>
                <div style={{height:800, marginTop:-27, fontSize:25, display:"flex", flexDirection:"column", fontWeight:"bold", color:"tomato", justifyContent:"center"}}>
                        <div style={{padding:10}}>Phone: (917)257-0115</div>
                        <div style={{padding:10}}>Email: kq22@scarletmail.rutgers.edu</div>
                        <div style={{padding:10}}><a href="https://www.linkedin.com/in/kennyquach/">My Linkedin</a></div>
                    </div>
            </div> 
            </div>
            </div>
        );
    }
}


export default Contactme;