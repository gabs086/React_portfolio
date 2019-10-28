import React, { Component } from 'react';

import soa from './img/soa.png';
import dk from './img/dk.png';
import techniqo from './img/techniqo.png';
import ras from './img/reach-a-spot.png';

export default class Projects extends Component {
    render() {
        return (
            <div>

                <div className="row">

                    <div class="container">
                        <div class="col s12">
                            <div class="typewriter-projects">
                                <h3 class="center" id="headers">Projects</h3><br />
                            </div>
                            <div class="carousel carousel-slider" data-indicators="true">

                                {/* <div class="carousel-fixed-item center middle-indicator">
                                    <div class="left">
                                        <a href="Previo"
                                            class="movePrevCarousel middle-indicator-text waves-effect waves-light content-indicator"><i
                                                class="material-icons left  middle-indicator-text">chevron_left</i></a>
                                    </div>

                                    <div class="right">
                                        <a href="Siguiente"
                                            class=" moveNextCarousel middle-indicator-text waves-effect waves-light content-indicator"><i
                                                class="material-icons right middle-indicator-text">chevron_right</i></a>
                                    </div>
                                </div> */}

                                <a href="https://osas-soa.000webhostapp.com/"
                                    target="_blank"
                                    class="carousel-item hoverable">
                                    <img src={soa} alt="" height="500" />
                                </a>
                                <a href="https://divisoriaking.com/"
                                    target="_blank"
                                    class="carousel-item hoverable">
                                    <img src={dk} alt="" height="500" />
                                </a>
                                <a href="http://techniqo.org/"
                                    target="_blank"
                                    class="carousel-item hoverable">
                                    <img src={techniqo} alt="" height="500" />
                                </a>
                                <a href="https://reach-a-spot.netlify.com/"
                                    target="_blank"
                                    class="carousel-item hoverable">
                                    <img src={ras} alt="" height="500" />
                                </a>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        )
    }
}