import React, { Component } from 'react';

import html from './img/PinClipart.com_how-to-create-clipart_106437.png';
import css from './img/css.png';
import js from './img/js.png';
import php from './img/ph.png';
import mysql from './img/MySQL.png';
import mongodb from './img/mongoDB.png';
import express from './img/Expressjs.png';
import react from './img/react.png';
import node from './img/node.png';
import ci from './img/codeigniter_logo.png'
import m from './img/kisspng-logo-brand-product-design-font-5ba402dde7ce56.5292481715374752939495.png';
import bootstrap from './img/bootstrap.png';
import wordpress from './img/wordpress.png';
import material_ui from './img/material-ui.png';
import reactstrap from './img/reactstrap.jpg';
import powerdiector from './img/powerdiector.png';
import git from './img/git_logo.png';

export default class Skills extends Component {

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
                            <h3 className="center" id="intro4" style={{ marginTop: 40 }}>Skills</h3>
                        </div><br />

                        <div className="fade">

                            <div class="row">
                                <h4 class="center">Web Development</h4>
                                <div class="col s12 m4 center">
                                    <img src={html} width="100" alt="HTML" />
                                </div>
                                <div class="col s12 m4 center">
                                    <img src={css} width="100" alt="css" />
                                </div>
                                <div class="col s12 m4 center">
                                    <img src={js} width="100" alt="JS" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col s12 m6 center">
                                    <img src={php} width="200" alt="PHP" />
                                </div>
                                <div class="col s12 m6 center">
                                    <img src={mysql} width="200" alt="MySQL" />
                                </div>
                            </div>
                            <div class="row">
                                <h4 class="center">Full Stack Development</h4>
                                <div class="col s12 m4 center">
                                    <img src={mongodb} width="170" alt="MongoDB" />
                                </div>
                                <div class="col s12 m4 center">
                                    <img src={express} width="170" alt="Expressjs" />
                                </div>
                                <div class="col s12 m4 center">
                                    <img src={react} width="170" alt="Reactjs" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col s12 m6 center" >
                                    <img src={node} width="170" alt="Nodejs" />
                                </div>
                                <div class="col s12 m6 center">
                                    <img src={ci} width="170" alt="Codeigniter" />
                                </div>
                            </div>
                            <div class="row">
                                <h4 class="center">Frameworks</h4>
                                <div class="col s12 m4 center">
                                    <img src={m}
                                        width="150" alt="Materialize" />
                                </div>
                                <div class="col s12 m4 center">
                                    <img src={bootstrap} width="150" alt="Bootstart" />
                                </div>
                                <div class="col s12 m4 center">
                                    <img src={wordpress} width="150" alt="Wordpress" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col s12 m6 center" >
                                    <img src={material_ui} width="170" alt="Material-ui" />
                                </div>
                                <div class="col s12 m6 center">
                                    <img src={reactstrap} width="300" height="200" alt="Reactstrap" />
                                </div>
                            </div>
                            <div class="row">
                                <h4 class="center">Others</h4>
                                <div class="col s12 m6 center">
                                    <img src={powerdiector} width="150" alt="Power Director" />
                                </div>

                                <div class="col s12 m6 center">
                                    <img src={git} width="150" alt="Git" />
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        )
    }
}