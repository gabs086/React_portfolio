import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
//Materialize
import 'materialize-css/dist/css/materialize.min.css';
//Fancybox
import 'react-fancybox/lib/fancybox.css'

//Components
import NavBar from './components/navBar.component';
import Educational from './components/educational.component';
import IndexPage from './components/index.component';
import PreProExp from './components/exp.component';
import Skills from './components/skill.component';
import Projects from './components/projects.component';
import Seminars from './components/seminars.component';



function App() {
  return (
    <Router>
      <NavBar />
      <Route path="/" exact component={IndexPage}></Route>
      <Route path="/educationalAttainment" exact component={Educational}></Route>
      <Route path="/preProffessional" exact component={PreProExp}></Route>
      <Route path="/skills" exact component={Skills}></Route>
      <Route path="/project" exact component={Projects}></Route>
      <Route path="/seminarTrainings" exact component={Seminars}></Route>
    </Router>
  );
}

export default App;
