import React from 'react';
import './App.css';
import $ from "jquery";
import {Layout, Header, Navigation, Drawer, Content} from "react-mdl";
import Main from "./components/Main";
import {Link, BrowserRouter,history,withRouter} from "react-router-dom";


class App extends React.Component {

    constructor(props) {
        super(props);
    }

  goHome=()=> {
      this.props.history.goBack("/landingpage");
      
  }
  
  
  render(){
      console.log(this.props)
    return (
      <BrowserRouter>
      <div className="header-color App">
       <div style={{height: '100vh', position: 'relative'}}>
    <Layout>
        <Header transparent title="My Portfolio" style={{color: 'white', backgroundColor:"black", position:"fixed",top:0}}>
        <h2 onClick={this.goHome}>Home</h2>
            <Navigation>
                <Link to="resume">Resume</Link>
                <Link to="aboutme">About</Link>
                <Link to="projects">Projects</Link>
                <Link to="contactme">Contact Me</Link>
            </Navigation>
        </Header>
        <Main/>
        <Content />
        
    </Layout>
</div>
      </div>
      
      </BrowserRouter>
    );
  }
  
}
  


export default App;
