import React, { Component, Suspense } from 'react';
import elem from './img/elem.svg';
import hs from './img/hsofficial.png';
import college from './img/HS.png';



export default class Educational extends Component {
    render() {
        return (
            <div>

                <div className="row">
                    <div className="container">
                        <div className="center">
                            <h3 id="headers">Educational Attainment</h3>
                        </div>

                        {/* Cards */}
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
                                    <h1 className="card-title center">Primary<br />
                                        <img src={hs} height="100" />
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

                        {/* College */}
                        <div className="col s12 m4">
                            <div className="card">
                                <div className="card-content">
                                    <h1 className="card-title center">Primary<br />
                                        <img src={college} height="100" />
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

                    </div>
                </div>

            </div>

        )
    }
}