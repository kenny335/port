import React from "react";
import Component2 from "./Component2";
import {Tab, Tabs} from "react-mdl"



class Projects extends React.Component {

  constructor(props) {
    super(props)
    this.state = { activeTab: 0 };
}

toggleCatgegories=()=> {
  if(this.state.activeTab===0) {
    return <div class="card-deck" style={{marginTop:120}}>
    <div class="card">
      <img src="http://www.cray.com/blog/wp-content/uploads/2015/09/Weather-Blog-Image.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">React Weather App</h5>
        <p class="card-text">A weather app that allows you to search the weather in your city</p>
        <button className="btn btn-success"><a href="https://modest-boyd-17a9c7.netlify.com/" target="_blank">Check it out</a></button>
      </div>
    </div>
    <div class="card">
      <img src="https://github.githubassets.com/images/modules/open_graph/github-octocat.png" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">React Github RepoCounter</h5>
        <p class="card-text">React App that finds how many repositories there are from a github user</p>
        <button className="btn btn-success"><a href="https://adoring-turing-eeb95a.netlify.com/" target="_blank">Check it out</a></button>
      </div>
    </div>
    <div class="card">
      <img src="https://cdn.semrush.com/blog/static/media/62/17/621787f15d2e16b500d13d8b433477a9/resize/885x-/ecommerce.png" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">React Ecommerce Sample App</h5>
        <p class="card-text">A sample App</p>
        <button className="btn btn-success"><a href="https://eloquent-mahavira-871f5c.netlify.com/" target="_blank">Check it out</a></button>
      </div>
    </div>
  </div>
  } else if(this.state.activeTab===1) {
    return <h1>jquery</h1>
  } else {
    return <h1>CSS</h1>
  }
}

    render() {
        return(
          <div>
          <Component2/>
          <div className="demo-tabs" style={{backgroundColor:"white", marginTop:-25}}>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>ReactJS</Tab>
                    <Tab>React Native</Tab>
                    <Tab>HTML, CSS, JavaScript</Tab>
                </Tabs>
            </div> 
            {this.toggleCatgegories()}   
           
          </div>
        );
    }
}


export default Projects;