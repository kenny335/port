import React from "react";
import {Tabs,Tab} from "react-mdl"

class ProjectsTabBar extends React.Component {

    constructor(props) {
        super(props)
        this.state = { activeTab: "jsncj" };
    }
    
    render() {
        
        return(
            <div className="demo-tabs" style={{backgroundColor:"white", marginTop:-25}}>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>ReactJS</Tab>
                    <Tab>React Native</Tab>
                    <Tab>HTML, CSS, JavaScript</Tab>
                </Tabs>
                <section>
                    <div className="content">Content for the tab: {this.state.activeTab}</div>
                </section>
            </div>    
        );
    }
}

export default ProjectsTabBar;