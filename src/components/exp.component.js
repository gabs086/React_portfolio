import React, { Component } from 'react';
import imergex from './img/imergex.png'
import gts from './img/gts.png'

export default class PreProExp extends Component {


    componentDidMount() {
        const imgFade = document.querySelector('.fade');
        const imgFade2 = document.querySelector('.fade2');

        setTimeout(_ => {

            imgFade.style.display = 'block';
            imgFade2.style.display = 'block';

        }, 3600)
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div class="container">

                        <div className="typewriter">
                            <h3 className="center" id="intro3" style={{ marginTop: 40 }}>Proffesional Experience</h3>
                        </div><br />

                    </div>
                    <div class="row fade">

                        <div class="container">
                            <div class="col s12 m8">
                                <h4 class="center">IT-Intern / Wordpress / Web Developer</h4>
                                <h5 class="center"><a href="http://imergex.com/" target="_blank" rel="noopener noreferrer">Imergex Information Technology Inc.</a></h5>
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
                                <a data-fancybox="gallery" href={imergex} href="http://imergex.com/">
                                    <img src={imergex} alt="Imergex" />
                                </a>
                            </div>
                        </div>

                    </div>

                    <div className="row fade2">

                        <div class="container">
                            <div class="col s12 m8">
                                <h4 class="center">Web Developer</h4>
                                <h5 class="center">
                                    <a href="http://globaltigersolutions.com/" target="_blank" rel="noopener noreferrer">
                                    Tiger Consulting & Software Dev't Inc.
                                    </a>
                                </h5>
                                <ul class="collection">
                                    <li class="collection-header">
                                        <h5 class="center">Roles</h5>
                                    </li>
                                    <li class="collection-item">
                                        Creating new functionalities for the companies software product
                        </li>
                                    <li class="collection-item">
                                        Optimizing the software for better performance
                        </li>
                                    <li class="collection-item">
                                        Upgrading of the companies main website and software product
                        </li>
                                    <li class="collection-item">
                                        Lead developer for web development
                        </li>

                                    <li class="collection-header">
                                        <h5 class="center">Tools</h5>
                                    </li>
                                    <li class="collection-item">
                                        HTML CSS JavaScript PHP
                        </li>
                                    <li class="collection-item">
                                        BootStrap
                        </li>
                                    <li class="collection-item">
                                        Codeigniter, NodeJS
                        </li>
                                </ul>
                            </div>

                            <div class="col s12 m4 center">
                                <a data-fancybox="gallery" href={gts}>
                                    <img src={gts} alt="" />
                                </a>
                            </div>
                        </div>

                    </div>
                    
                </div>

            </div>
        )
    }
}