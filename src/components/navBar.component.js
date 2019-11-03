import React, { Component, Suspense } from 'react';
import { Link } from 'react-router-dom'


import avatar from './img/avatar.png';

//Materialize
import M from "materialize-css";


export default class NavBar extends Component {

    componentDidMount() {
        M.AutoInit()
    }
    render() {
        return (

            <div>

                <div className="navbar-fixed">
                    <nav className="blue darlen-2">
                        <div className="nav-wrapper container">

                            <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>

                            <Link to="/" className="brand-logo"><span>Gavee</span></Link>


                            <ul id="nav-mobile" className="right hide-on-med-and-down">
                                <li><Link to="/educationalAttainment"><i className="material-icons">school</i></Link></li>
                                <li><Link to="/preProffessional"><i className="material-icons">code</i></Link></li>
                                <li><Link to="/skills"><i className="material-icons">computer</i></Link></li>
                                <li><Link to="/project"><i className="material-icons">folder</i></Link></li>
                                <li><Link to="/seminarTrainings"><i className="material-icons">dvr</i></Link></li>
                            </ul>
                        </div>
                    </nav>
                </div>

                {/* //SideNave list */}
                <ul className="sidenav" id="mobile-demo">

                    <li>
                        <div className="user-view center">
                            <img src={avatar} height="100" width="100" style={{ textAlign: 'center' }}></img>
                        </div>

                    </li>

                    <li id="list"><Link to="/educationalAttainment"><i className="material-icons">school</i>Educational Attainment</Link></li>
                    <li id="list"><Link to="/preProffessional"><i className="material-icons">code</i><span style={{ fontSize: 12 }}>Pre Proffessional Experience</span></Link></li>
                    <li id="list"><Link to="/skills"><i className="material-icons">computer</i>Skills</Link></li>
                    <li id="list"><Link to="/project"><i className="material-icons">folder</i>Projects</Link></li>
                    <li id="list"><Link to="/seminarTrainings"><i className="material-icons">dvr</i><span>Seminar & Trainings</span></Link></li>
                </ul>
            </div>
        )
    }
}