import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
//Materialize
import 'materialize-css/dist/css/materialize.min.css';
//Fancybox
import 'react-fancybox/lib/fancybox.css'

//Components (importing default version)
// import NavBar from './components/navBar.component';
// import Educational from './components/educational.component';
// import IndexPage from './components/index.component';
// import PreProExp from './components/exp.component';
// import Skills from './components/skill.component';
// import Projects from './components/projects.component';
// import Seminars from './components/seminars.component';

//Component. (with suspense preloader version)
import NavBar from './components/navBar.component';
const IndexPage = lazy(() => import('./components/index.component'));
const Educational = lazy(() => import('./components/educational.component'));
const PreProExp = lazy(() => import('./components/exp.component'));
const Skills = lazy(() => import('./components/skill.component'));
const Projects = lazy(() => import('./components/projects.component'));
const Seminars = lazy(() => import('./components/seminars.component'));


function App() {
  return (
    <Router>
      <NavBar />
      <Suspense fallback={
        <div className="center" style={{ marginTop: 40 }}>
          <div className="preloader-wrapper big active">
            <div className="spinner-layer spinner-blue-only">
              <div className="circle-clipper left">
                <div className="circle"></div>
              </div><div className="gap-patch">
                <div className="circle"></div>
              </div><div className="circle-clipper right">
                <div className="circle"></div>
              </div>
            </div>
          </div>
        </div>
      }>
        <Switch>
          <Route path="/" exact component={IndexPage}></Route>
          <Route path="/educationalAttainment" exact component={Educational}></Route>
          <Route path="/preProffessional" exact component={PreProExp}></Route>
          <Route path="/skills" exact component={Skills}></Route>
          <Route path="/project" exact component={Projects}></Route>
          <Route path="/seminarTrainings" exact component={Seminars}></Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
