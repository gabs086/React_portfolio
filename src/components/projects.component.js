import React, { Component } from 'react';

import soa from './img/soa.png';
import dk from './img/dk.png';
import techniqo from './img/techniqo.png';
import ras from './img/reach-a-spot.png';

export default class Projects extends Component {
    render() {
        return (
            <div className="row">



                <div className="col s12 m3">
                    <div class="card">
                        <div class="card-image waves-effect waves-block waves-light">
                            <img class="activator" src={soa} />
                        </div>
                        <div class="card-content">
                            <span class="card-title activator grey-text text-darken-4">Student Organization & Activities Web Portal for Batangas State University<i class="material-icons right">more_vert</i></span>
                            <p><a target="_blank" href="https://osas-soa.000webhostapp.com/">Click here to visit the page</a></p>
                        </div>
                        <div class="card-reveal">
                            <span class="card-title grey-text text-darken-4"><i class="material-icons right">close</i></span>
                            <p>Our project thesis in college. This web portal is the tool for all the Student Organizations of the University to send request to the school of all their school activities to be implemented. It is developed in HTML,CSS, JavaScript & PHP</p>
                        </div>
                    </div>
                </div>


                <div className="col s12 m3">
                    <div class="card">
                        <div class="card-image waves-effect waves-block waves-light">
                            <img class="activator" src={dk} />
                        </div>
                        <div class="card-content">
                            <span class="card-title activator grey-text text-darken-4 ">
                                Divisoria King<i class="material-icons right">more_vert</i></span>
                            <p><a target="_blank" href="https://divisoriaking.com/">Click here to visit the page</a></p>
                        </div>
                        <div class="card-reveal">
                            <span class="card-title grey-text text-darken-4"><i class="material-icons right">close</i></span>
                            <p>An e-commerce website for all the divisoria items you want to purchase online. As a OJT student, I contributed some functionalities, UI design of the site and debug errors and functionalities of the website using WordPress and PHP.</p>
                        </div>
                    </div>
                </div>

                <div className="col s12 m3">
                    <div class="card">
                        <div class="card-image waves-effect waves-block waves-light">
                            <img class="activator" src={techniqo} />
                        </div>
                        <div class="card-content">
                            <span class="card-title activator grey-text text-darken-4 ">
                                TechniQo, Institute of Science and Technology<i class="material-icons right">more_vert</i></span>
                            <p><a target="_blank" href="http://techniqo.org/">Click here to visit the page</a></p>
                        </div>
                        <div class="card-reveal">
                            <span class="card-title grey-text text-darken-4"><i class="material-icons right">close</i></span>
                            <p>An Institute information website that shows who are techniqo, what they do and the courses they offer for training. I created it in our OJT training using HTML, CSS, JavaScript with the help of CSS framework, Bootstrap</p>
                        </div>
                    </div>
                </div>


                <div className="col s12 m3">
                    <div class="card">
                        <div class="card-image waves-effect waves-block waves-light">
                            <img class="activator" src={ras} />
                        </div>
                        <div class="card-content">
                            <span class="card-title activator grey-text text-darken-4 ">
                                Reach-A-Spot<i class="material-icons right">more_vert</i></span>
                            <p><a target="_blank" href="https://reach-a-spot.netlify.com/">Click here to visit the page</a></p>
                        </div>
                        <div class="card-reveal">
                            <span class="card-title grey-text text-darken-4"><i class="material-icons right">close</i></span>
                            <p>A static web page the I created in our Creative Web Design training in TESDA. I created it using HTML, CSS, JavaScript with the help of CSS framework, Material-CSS </p>
                        </div>
                    </div>
                </div>



            </div>
        )
    }
}