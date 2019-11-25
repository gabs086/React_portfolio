import React, { Component } from 'react';

export default class Seminars extends Component {

    componentDidMount() {
        const imgFade = document.querySelector('.fade');

        setTimeout(_ => {

            imgFade.style.display = 'block';

        }, 3600)
    }


    render() {
        return (
            <div>

                <div class="col s12">
                    <div class="container">

                        <div className="typewriter">
                            <h3 className="center" id="intro6" style={{ marginTop: 40 }}>Seminars & Trainings</h3>
                        </div><br />


                        <table class="striped white highlight fade">
                            <thead>
                                <tr>
                                    <th>Seminar/Training</th>
                                    <th>Address</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        BATANGAS INFORMATION TECHNOLOGY SOCIETY (BITS)
                            </td>
                                    <td>
                                        SM City Lipa Cinema, Ayala Highway, Lipa City
                            </td>
                                    <td>
                                        February 25 2017
                            </td>
                                </tr>
                                <tr>
                                    <td>
                                        SOFTWARE FREEDOM DAY
                            </td>
                                    <td>
                                        Batangas State University Pablo Borbon Main I
                            </td>
                                    <td>
                                        September 16 2017
                            </td>
                                </tr>
                                <tr>
                                    <td>
                                        DEVELOPING CAREER IN INFORMATION TECHNOLOGY
                            </td>
                                    <td>
                                        Batangas State University Pablo Borbon Main I
                            </td>
                                    <td>
                                        October 2 2017
                            </td>
                                </tr>
                                <tr>
                                    <td>
                                        SOFTWARE DEVELOPMENT AND IMPLEMENTATION IN BANKING TECHNOLOGY
                            </td>
                                    <td>
                                        Batangas State University Pablo Borbon Main I
                            </td>
                                    <td>
                                        October 16 2017
                            </td>
                                </tr>
                                <tr>
                                    <td>
                                        THE ROLE OF IT IN SOCIAL SERVICES AND DEVELOPMENT
                            </td>
                                    <td>
                                        Batangas State University Pablo Borbon Main II
                            </td>
                                    <td>
                                        November 20 2017
                            </td>
                                </tr>
                                <tr>
                                    <td>
                                        A DAY WITH ATI - HUION
                            </td>
                                    <td>
                                        Batangas State University Pablo Borbon Main II
                            </td>
                                    <td>
                                        December 4 2017
                            </td>
                                </tr>
                                <tr>
                                    <td>
                                        PHILIPPINE COMPUTER SOCIETY (PCS)
                            </td>
                                    <td>
                                        El Cielito Hotel, Makati City
                            </td>
                                    <td>
                                        March 21 2019
                            </td>
                                </tr>
                                <tr>
                                    <td>
                                        e-Global International Communications Inc. Web Development training III
                            </td>
                                    <td>
                                        Mezzanine A, 707 Shaw Blvd Pasig, 1603, Pasig Kalakhang Maynila
                            </td>
                                    <td>
                                        July 12 2019 - July 31 2019
                            </td>
                                </tr>
                                <tr>
                                    <td>
                                        e-Global International Communications Inc. Creative Web Design III
                            </td>
                                    <td>
                                        Mezzanine A, 707 Shaw Blvd Pasig, 1603, Pasig Kalakhang Maynila
                            </td>
                                    <td>
                                        August 08 2019 – August 24 2019
                            </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        )
    }
}