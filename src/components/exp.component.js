import React, { Component } from 'react';
import imergex from './img/imergex.png'

export default class PreProExp extends Component {


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
                    <div class="container">

                        <div className="typewriter">
                            <h3 className="center" id="intro3" style={{ marginTop: 40 }}>Pre-Proffesional Experience</h3>
                        </div><br />

                    </div>
                    <div class="row fade">
                        <div class="container">
                            <div class="col s12 m8">
                                <h4 class="center">IT-Intern / Wordpress / Web Developer</h4>
                                <h5 class="center">Imergex Information Technology Inc.</h5>
                                <ul class="collection">
                                    <li class="collection-header">
                                        <h5 class="center">Roles</h5>
                                    </li>
                                    <li class="collection-item">
                                        Update the existing wordpress website with new contents and functions
                        </li>
                                    <li class="collection-item">
                                        Optimize and maintain the accessibility of the website
                        </li>
                                    <li class="collection-item">
                                        Developed a website in one of companies projects
                        </li>
                                    <li class="collection-item">
                                        Collaborate with co-workers in their ongoing projects
                        </li>

                                    <li class="collection-header">
                                        <h5 class="center">Tools</h5>
                                    </li>
                                    <li class="collection-item">
                                        HTML CSS JavaScript
                        </li>
                                    <li class="collection-item">
                                        BootStrap
                        </li>
                                    <li class="collection-item">
                                        Wordpress
                        </li>
                                </ul>
                            </div>

                            <div class="col s12 m4 center">
                                <a data-fancybox="gallery" href={imergex}>
                                    <img src={imergex} alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}