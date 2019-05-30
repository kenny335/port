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
                <div style={{height:800, marginTop:-27, fontSize:25, display:"flex", flexDirection:"column", fontWeight:"bold", color:"black", justifyContent:"center"}}>
                        <div style={{paddingBottom:30}}>Phone: (917)257-0115</div>
                        <a href="mailto:kq22@scarletmail.rutgers.edu?subject=Portfolio" style={{fontWeight:"bold"}}>Email:kq22@scarletmail.rutgers.edu</a> 
                    <div style={{display:"flex", flexDirection:"row", justifyContent:"space-around", margin:20}}>
                    <a href="https://www.linkedin.com/in/kennyquach/" target="_blank"><img style={{width:50}} src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"/></a>
                        <a href="https://twitter.com/developer335?lang=en" target="_blank"><img style={{width:70}} src="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c53e.png"/></a>
                        <a href="https://github.com/kenny335" target="_blank"><img style={{width:70}} src="https://github.githubassets.com/images/modules/logos_page/Octocat.png"/></a>
                        

                    </div>
                    </div>
            </div> 
            </div>
            </div>
        );
    }
}


export default Contactme;