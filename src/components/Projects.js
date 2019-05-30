import React from "react";


class Projects extends React.Component {
    render() {
        return(
            <div class="card-deck" style={{marginTop:120}}>
            <div class="card">
              <img src="http://www.cray.com/blog/wp-content/uploads/2015/09/Weather-Blog-Image.jpg" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">React Weather App</h5>
                <p class="card-text">A weather app that allows you to search the weather in your city</p>
                <button className="btn btn-success">Check it out</button>
              </div>
            </div>
            <div class="card">
              <img src="https://github.githubassets.com/images/modules/open_graph/github-octocat.png" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">React Github RepoCounter</h5>
                <p class="card-text">React App that finds how many repositories there are from a github user</p>
                <button className="btn btn-success">Check it out</button>
              </div>
            </div>
            <div class="card">
              <img src="https://images-gmi-pmc.edge-generalmills.com/2347c25a-455e-4c91-aebf-8235d8f02f8b.jpg" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">React RecipeBook</h5>
                <p class="card-text">A recipe book that will tell you all you need to know about a dish</p>
                <button className="btn btn-success">Check it out</button>
              </div>
            </div>
          </div>
        );
    }
}


export default Projects;