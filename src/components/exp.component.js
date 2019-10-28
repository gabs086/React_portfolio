import React, { Component } from 'react';
import imergex from './img/imergex.png'

export default class PreProExp extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div class="container">
                        <div class="typewriter-exp">
                            <h3 class="center" id="headers">Pre-Professional Experience</h3><br />
                        </div>
                    </div>
                    <div class="row">
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