import React, { Component } from 'react';
import M from 'materialize-css'

import soa from './img/soa.png';
import dk from './img/dk.png';
import techniqo from './img/techniqo.png';
import ras from './img/reach-a-spot.png';
import zeus from './img/zeus.png';

export default class Projects extends Component {

    componentDidMount() {
        M.AutoInit();
    }

    render() {
        return (
            <div className="row">

                <div className="container">

                    <div className="typewriter">
                        <h3 className="center" id="intro5" style={{ marginTop: 40 }}>Projects</h3>
                    </div><br />

                    <div class="carousel carousel-slider">
                        <a class="carousel-item" target="_blank" href="https://osas-soa.000webhostapp.com/"><img src={soa} /></a>
                        <a class="carousel-item" target="_blank" href="https://divisoriaking.com/"><img src={dk} /></a>
                        <a class="carousel-item" target="_blank" href="http://techniqo.org/"><img src={techniqo} /></a>
                        <a class="carousel-item" target="_blank" href="https://reach-a-spot.netlify.com/"><img src={ras} /></a>
                        <a class="carousel-item" target="_blank" href="http://globaltigersolutions.com/products/enterprise/zeus.php"><img src={zeus} /></a>
                    </div>
                </div>

            </div>

        )
    }
}