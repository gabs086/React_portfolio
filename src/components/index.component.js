import React, { Component, Suspense } from 'react';
//Picture
import profilepic from './img/profilepic.jpg';



export default class IndexPage extends Component {

    componentDidMount() {
        const imgFade = document.querySelector('.fade');

        setTimeout(_ => {

            imgFade.style.display = 'block';

        }, 3600)
    }


    render() {

        return (
            <div>
                <Suspense fallback={<div className="center">Loading...</div>} />
                <div className="row">
                    <div className="container">

                        <div className="center">
                            <br />
                            <br />
                            <a data-fancybox="gallery" href={profilepic}>
                                <img src={profilepic} alt="Profile" id="imgg" />
                            </a>
                            {/* typewriter */}

                            <div class="typewriter">
                                <h2 class="center" id="intro">Gabriel V. Agoncillo</h2>
                            </div><br />


                            <div class="center fade">
                                <span class="flow-text">Web / Back-End / FullStack Developer</span><br></br>
                                @
                            <a href="mailto:agoncillogabriel08@gmail.com" target="_top">agoncillogabriel08@gmail.com</a>

                                &nbsp;&nbsp;
                            <i class="fa fa-facebook-square" aria-hidden="true"></i>
                                &nbsp;
                            <a href="https://web.facebook.com/gabsgabs086" target="_blank">@gabsgabs086</a>

                                &nbsp;&nbsp;
    
                            <i class="fa fa-github" aria-hidden="true"></i>
                                &nbsp;
                            <a href="https://github.com/gabs086" target="_blank">gabs086</a>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        )
    }

}