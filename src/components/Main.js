import React from "react";
import Landingpage from "./Landingpage";
import Aboutme from "./Aboutme";
import Contactme from "./Contactme";
import Projects from "./Projects";
import Resume from "./Resume";
import {Switch, Route} from "react-router-dom"

const Main =()=> (
    <Switch>
        <Route exact path="/" component={Landingpage}/>
        <Route path="/aboutme" component={Aboutme}/>
        <Route path="/contactme" component={Contactme}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/resume" component={Resume}/>
    </Switch>
)


export default Main;