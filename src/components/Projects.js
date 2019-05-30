import React from "react";
import Component2 from "./Component2"


class Projects extends React.Component {
    render() {
        return(
          <div>
          <Component2/>
            <div class="card-deck" style={{marginTop:120}}>
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
          </div>
        );
    }
}


export default Projects;