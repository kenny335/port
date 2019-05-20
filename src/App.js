import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import $ from "jquery";
import {Layout, Header, Navigation, Drawer, Content} from "react-mdl";
import Main from "./components/Main";
import {Link, BrowserRouter} from "react-router-dom";


class App extends React.Component {

  
  
  render(){
    return (
      <BrowserRouter>
      <div className="header-color App">
       <div style={{height: '100vh', position: 'relative'}}>
    <Layout>
        <Header transparent title="My Portfolio" style={{color: 'white', backgroundColor:"black"}}>
            <Navigation>
                <Link to="resume">Resume</Link>
                <Link to="aboutme">About</Link>
                <Link to="projects">Projects</Link>
                <Link to="contactme">Contact Me</Link>
            </Navigation>
        </Header>
        <Drawer style={{color:"blue", backgroundColor:"lightgray"}} title="My Portfolio">
            <Navigation>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
            </Navigation>
        </Drawer>
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
