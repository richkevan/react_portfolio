import React from 'react'
import "./navigation.css"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import {Home, Project, Contact} from '../../screens'


  export const Navigation = () => {
    return (
        <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/projects">
          <Project />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
  </Router>
    )}