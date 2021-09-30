import React from 'react';

//import the work images
import divisoria from '../img/works/divisoriaKing.png';
import gtsWebsite from '../img/works/gts_corporate_website.png';
import gtsStore from '../img/works/gts-store.png';
import soa from '../img/works/soa-web-portal.png';
import techniqo from '../img/works/techniqo.png';
import zeus from '../img/works/zeus.png';

class Portfolio extends React.Component {
  render() {
    return (
      <section id='work' className='portfolio-mf sect-pt4 route'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12'>
              <div className='title-box text-center'>
                <h3 className='title-a'>Portfolio</h3>
                <p className='subtitle-a'>
                  View my works while learning how to code and while in the software development industry
                </p>
                <div className='line-mf'></div>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-md-4'>
              <div className='work-box'>
                <div className='work-img'>
                  <img src={soa} alt='SOA Web Portal' className='img-fluid' />
                </div>
                <div className='work-content'>
                  <div className='row'>
                    <div className='col-sm-8'>
                      <h2 className='w-title'>Revised version - SOA Web Portal (Thesis, Self study)</h2>
                      <div className='w-more'>
                        <span className='w-ctegory'>MERN Material-UI</span>
                      </div>
                    </div>
                    <div className='col-sm-4 text-center work-view'>
                      <a
                        className='btn btn-primary btn js-scroll px-4'
                        href='https://soa-web-portal.herokuapp.com/'
                        role='button'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        View
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* col-md-4 */}

            <div className='col-md-4'>
              <div className='work-box'>
                <div className='work-img'>
                  <img src={divisoria} alt='Divisoria King' className='img-fluid' />
                </div>
                <div className='work-content'>
                  <div className='row'>
                    <div className='col-sm-8'>
                      <h2 className='w-title'>Divisoria King (InternShip, Contribution)</h2>
                      <div className='w-more'>
                        <span className='w-ctegory'>WordPress WooCommerce PHP</span>{' '}
                      </div>
                    </div>
                    <div className='col-sm-4 text-center work-view'>
                      <a
                        className='btn btn-primary btn js-scroll px-4'
                        href='https://divisoriaking.com/'
                        role='button'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        View
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* col-md-4 */}

            <div className='col-md-4'>
              <div className='work-box'>
                <div className='work-img'>
                  <img src={techniqo} alt='TechniQo' className='img-fluid' />
                </div>
                <div className='work-content'>
                  <div className='row'>
                    <div className='col-sm-8'>
                      <h2 className='w-title'>TechniQo (Internship, Develop)</h2>
                      <div className='w-more'>
                        <span className='w-ctegory'>HTML5 CSS3 JavaScript Bootstrap</span>
                        {/*} / <span className="w-date">18 Sep. 2018</span>*/}
                      </div>
                    </div>
                    <div className='col-sm-4 text-center work-view'>
                      <a
                        className='btn btn-primary btn js-scroll px-4'
                        href='https://techniqo.org/'
                        role='button'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        View
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* col-md-4 */}

            <div className='col-md-4'>
              <div className='work-box'>
                <div className='work-img'>
                  <img src={gtsWebsite} alt='Global Tiger Solutions' className='img-fluid' />
                </div>
                <div className='work-content'>
                  <div className='row'>
                    <div className='col-sm-8'>
                      <h2 className='w-title'>GTS Corporate Website (Company, Develop)</h2>
                      <div className='w-more'>
                        <span className='w-ctegory'>HTML5 CSS3 JavaScript PHP JotForms Bootstrap</span>
                      </div>
                    </div>
                    <div className='col-sm-4 text-center work-view'>
                      <a
                        className='btn btn-primary btn js-scroll px-4'
                        href='https://globaltigersolutions.com/'
                        role='button'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        View
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-md-4'>
              <div className='work-box'>
                <div className='work-img'>
                  <img src={gtsStore} alt='GTS Store' className='img-fluid' />
                </div>
                <div className='work-content'>
                  <div className='row'>
                    <div className='col-sm-8'>
                      <h2 className='w-title'>GTS Online Store (Company, Develop BETA version)</h2>
                      <div className='w-more'>
                        <span className='w-ctegory'>WordPress WooCommerce PHP</span>
                      </div>
                    </div>
                    <div className='col-sm-4 text-center work-view'>
                      <a
                        className='btn btn-primary btn js-scroll px-4'
                        href='https://store.globaltigersolutions.com/'
                        role='button'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        View
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* col-md-4 */}

            <div className='col-md-4'>
              <div className='work-box'>
                <div className='work-img'>
                  <img src={zeus} alt='FIDS (Zeus)' className='img-fluid' />
                </div>
                <div className='work-content'>
                  <div className='row'>
                    <div className='col-sm-8'>
                      <h2 className='w-title'>FIDS (Company, Contribute/Develop BETA)</h2>
                      <div className='w-more'>
                        <span className='w-ctegory'>Codeigniter MERN Material-UI Android Studio (Java)</span>
                      </div>
                    </div>
                    <div className='col-sm-4 text-center work-view'>
                      <a
                        className='btn btn-primary btn js-scroll px-4'
                        href='https://globaltigersolutions.com/products/enterprise/zeus.php'
                        role='button'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        View
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* col-md-4 */}
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
