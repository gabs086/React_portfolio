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
import wordpress from '../img/skills/wordpress.png';
import materialUi from '../img/skills/material-ui.png';
import reactstrap from '../img/skills/reactstrap.png';
import git from '../img/skills/git.png';
import reactNative from '../img/skills/react-native.png';
import sendgrid from '../img/skills/sendgrid.png';
import android from '../img/skills/android.png';
import mailchimp from '../img/skills/mailchimp.png';

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      about_me: [
        {
          id: 'first-p-about',
          content:
            "Hi, I'm Gabriel Agoncillo. I'm a software developer/engineer who loves engineering things to enhance my ability, skills, learn more and build solutions to answer someones problem through the use of technology.",
        },
        {
          id: 'second-p-about',
          content:
            "Most stack of technology that I used is the MERN stack and the LAMP stack for web development. But I'm interested in learning new things such us learning about how mobile development works. Interested in using React-native and native android development using java.",
        },
        {
          id: 'third-p-about',
          content:
            'I also have a little bit skills in marketing such using tools of Mailchimp & SendGrid. To learn more about me, Please download my CV or send me a message through the contact form below',
        },
      ],
    };
  }

  componentDid;

  render() {
    return (
      <section id='about' className='about-mf sect-pt4 route'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12'>
              <div className='box-shadow-full'>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='title-box-2 skills'>
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

                      <div className='row pt-4'>
                        <div className='col-sm-4'>
                          <img src={reactNative} alt='React-Native' width='80' />
                        </div>

                        <div className='col-sm-4'>
                          <img src={android} alt='Android studio(java)' width='80' />
                        </div>

                        <div className='col-sm-4'>
                          <img src={wordpress} alt='Wordpress' width='80' />
                        </div>
                      </div>
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
                        <div className='col-sm-4 pt-4'>
                          <img src={sendgrid} alt='SendGrid' width='140' />
                        </div>

                        <div className='col-sm-4'>
                          <img src={mailchimp} alt='Mailchimp' width='100' />
                        </div>
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
                      {this.state.about_me.map((content) => {
                        return (
                          <p className='lead' key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                    <a className='btn btn-primary btn js-scroll px-4' href='#work' role='button'>
                      <i className='fa fa-download'></i>
                      &nbsp; Download my CV
                    </a>
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
}

export default About;
