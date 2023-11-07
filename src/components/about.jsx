import React from 'react';

//Skills images
import html from '../img/skills/html.png';
import css from '../img/skills/css.png';
import js from '../img/skills/js.png';
import php from '../img/skills/php.png';
import mysql from '../img/skills/mysql.png';
import node from '../img/skills/node.png';
import express from '../img/skills/express.png';
import react from '../img/skills/react.png';
import mongodb from '../img/skills/mongodb.png';
import codeigniter from '../img/skills/codeigniter.png';
import materialize from '../img/skills/materialize.png';
import bootstrap from '../img/skills/bootstrap.png';
import materialUi from '../img/skills/material-ui.png';
import reactstrap from '../img/skills/reactstrap.png';
import git from '../img/skills/git.png';
import reactNative from '../img/skills/react-native.png';
import azureFunctions from '../img/skills/azureFunction.png';

const about_me = [
  {
    id: 'first-p-about',
    content:
      "Hi, I'm Gabriel Agoncillo. I'm a software developer/engineer who loves engineering things to enhance my ability, skills, learn more and build solutions to answer someones problem through the use of technology.",
  },
  {
    id: 'second-p-about',
    content:
      'Most stack of technology that I used is the MERN stack. I also have knowledge in Microsoft Azure Solutions such as Azure Functions for serverless solutions in creating REST APIs, cron timer triggers and service bus.',
  },
  {
    id: 'third-p-about',
    content:
      "But I'm interested in learning new things. I learn and adapt fast and it's one of my strenths. Whether it will be mobile development, devops or full stack development. I can able to lead a team also, sharing my skills and experience for the better of the team and the project that I will work with.",
  },
];

function About() {
  return (
    <section id='about' className='about-mf sect-pt4 route'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12'>
            <div className='box-shadow-full'>
              <div className='row'>
                <div className='col-md-6 skills'>
                  <div className='title-box-2 '>
                    <h5 className='title-left'>My Skills</h5>
                  </div>

                  <div className='skill-mf text-center'>
                    {/* Skills to be divided by 3  */}

                    <div className='row'>
                      <div className='col-sm-4'>
                        <img src={html} alt='HTML' width='80' />
                      </div>

                      <div className='col-sm-4'>
                        <img src={css} alt='CSS' width='80' />
                      </div>

                      <div className='col-sm-4'>
                        <img src={js} alt='JS' width='80' />
                      </div>
                    </div>
                    {/* row */}

                    <div className='row pt-4'>
                      <div className='col-sm-4'>
                        <img src={php} alt='PHP' width='80' />
                      </div>

                      <div className='col-sm-4'>
                        <img src={mysql} alt='MySQL' width='80' />
                      </div>

                      <div className='col-sm-4'>
                        <img src={mongodb} alt='MongoDB' width='100' />
                      </div>
                    </div>
                    {/* row */}

                    <div className='row pt-4'>
                      <div className='col-sm-4'>
                        <img src={express} alt='ExpressJS' width='100' />
                      </div>

                      <div className='col-sm-4'>
                        <img src={react} alt='ReactJS' width='100' />
                      </div>

                      <div className='col-sm-4'>
                        <img src={node} alt='NodeJS' width='100' />
                      </div>
                    </div>
                    {/* row */}

                    {/* <div className='row pt-4'>
                    

                      <div className='col-sm-4'>
                        <img src={android} alt='Android studio(java)' width='80' />
                      </div>

                      <div className='col-sm-4'>
                        <img src={wordpress} alt='Wordpress' width='80' />
                      </div>
                    </div> */}
                    {/* row */}

                    <div className='row pt-4'>
                      <div className='col-sm-4 pt-4'>
                        <img src={codeigniter} alt='CodeIgniter' width='100' />
                      </div>

                      <div className='col-sm-4'>
                        <img src={materialize} alt='Materialize-css' width='100' />
                      </div>

                      <div className='col-sm-4'>
                        <img src={bootstrap} alt='Bootstrap' width='100' />
                      </div>
                    </div>
                    {/* row */}

                    <div className='row pt-4'>
                      <div className='col-sm-4 pt-4'>
                        <img src={materialUi} alt='Material-UI' width='100' />
                      </div>

                      <div className='col-sm-4'>
                        <img src={reactstrap} alt='Reactstrap' width='150' height='120' />
                      </div>

                      <div className='col-sm-4'>
                        <img src={git} alt='git' width='100' />
                      </div>
                    </div>
                    {/* row */}

                    <div className='row pt-4'>
                      <div className='col-sm-4'>
                        <img src={reactNative} alt='React-Native' width='80' />
                      </div>
                      <div className='col-sm-4'>
                        <img src={azureFunctions} alt='Azure Functions' width='150' height='80' />
                      </div>
                      {/* <div className='col-sm-4 pt-4'>
                        <img src={sendgrid} alt='SendGrid' width='140' />
                      </div>

                      

                      <div className='col-sm-4'>
                        <img src={mailchimp} alt='Mailchimp' width='100' />
                      </div> */}
                    </div>
                    {/* row */}
                  </div>
                  {/* skill-mf */}
                </div>
                {/* col-md-6 */}

                <div className='col-md-6'>
                  <div className='about-me pt-4 pt-md-0'>
                    <div className='title-box-2'>
                      <h5 className='title-left'>About Me</h5>
                    </div>
                    {about_me.map((content) => {
                      return (
                        <p className='lead' key={content.id}>
                          {content.content}
                        </p>
                      );
                    })}
                  </div>
                  {/* Remove for now */}
                  {/* <a className='btn btn-primary btn js-scroll px-4' href='#work' role='button'>
                    <i className='fa fa-download'></i>
                    &nbsp; Download my CV
                  </a> */}
                </div>
                {/* col-md-6 */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
