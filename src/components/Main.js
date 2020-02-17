import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LandingPage from './LandingPage'
import About from './About'
import Contact from './Contact'
import Projects from './Projects'

export default function Main() {

    return (
        <Switch>
            <Route exact path="/" component ={LandingPage} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/projects" component={Projects} />
        </Switch>
    )
}
