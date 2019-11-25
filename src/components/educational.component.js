import React, { Component, Suspense } from 'react';
import elem from './img/elem.svg';
import hs from './img/hsofficial.png';
import college from './img/HS.png';



export default class Educational extends Component {

    componentDidMount() {
        const imgFade = document.querySelector('.fade');

        setTimeout(_ => {

            imgFade.style.display = 'block';

        }, 3600)
    }

    render() {

        return (
            <div>

                <div className="row">
                    <div className="container">

                        <div className="typewriter">
                            <h3 className="center" id="intro2" style={{ marginTop: 40 }}>Educational Attainment</h3>
                        </div><br />

                        {/* Cards */}
                        <div className="fade">
                            {/* Elementary */}
                            <div className="col s12 m4">
                                <div className="card">
                                    <div className="card-content">
                                        <h1 className="card-title center">Primary<br />
                                            <img src={elem} height="100" />
                                        </h1>
                                        <p class="center">
                                            Butong Elementary School
                            <br />Butong Taal,Batangas
                            <br /><br />2005-2010<br />
                                            <a href="https://www.facebook.com/pages/butong-elementary-school/337530653033604"
                                                target="_blank" className="btn blue" id="btn1">More Info...</a>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* HighSchool */}
                            <div className="col s12 m4">
                                <div className="card">
                                    <div className="card-content">
                                        <h1 className="card-title center">Secondary<br />
                                            <img src={hs} height="100" />
                                        </h1>
                                        <p class="center">
                                            St. Mary's Educational Intitute
                            <br />Lemery, Batangas
                            <br /><br />2010-2014<br />
                                            <a href="https://www.facebook.com/St-Marys-Educational-Institute-208443892541397/"
                                                target="_blank" className="btn blue" id="btn1">More Info...</a>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* College */}
                            <div className="col s12 m4">
                                <div className="card">
                                    <div className="card-content">
                                        <h1 className="card-title center">Tertiary<br />
                                            <img src={college} height="100" />
                                        </h1>
                                        <p class="center">
                                            Batangas State University
                            <br />Batangas City
                            <br /><br />2014-2019<br />
                                            <a href="http://batstate-u.edu.ph/"
                                                target="_blank" className="btn blue" id="btn1">More Info...</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        )
    }
}