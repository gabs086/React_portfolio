import React from 'react';

//import the work images
import divisoria from '../img/works/divisoriaKing.png';
import gtsWebsite from '../img/works/gts_corporate_website.png';
import gtsStore from '../img/works/gts-store.png';
import soa from '../img/works/soa-web-portal.png';
import techniqo from '../img/works/techniqo.png';
import zeus from '../img/works/zeus.png';
import rbankCorpImg from '../img/works/rbank-corporate-onboarding.PNG';

const projects = [
  {
    img: rbankCorpImg,
    alt: 'Rbank Corporate Onboarding',
    title: 'Robinsons Bank Corp Onboarding (Company, Develop )',
    stacks: 'React Node-Sass Redux React-Router',
    link: 'https://corp.robinsonsbank.com.ph/',
  },
  {
    img: zeus,
    alt: 'FIDS (Zeus)',
    title: 'FIDS (Company, Contribute/Develop BETA)',
    stacks: 'Codeigniter MERN Material-UI Android Studio (Java)',
    link: 'https://globaltigersolutions.com/products/enterprise/zeus.php',
  },
  {
    img: gtsStore,
    alt: 'GTS Store',
    title: 'GTS Online Store (Company, Develop BETA version)',
    stacks: 'WordPress WooCommerce PHP',
    link: 'https://store.globaltigersolutions.com/',
  },
  {
    img: gtsWebsite,
    alt: 'Global Tiger Solutions',
    title: 'GTS Corporate Website (Company, Develop)',
    stacks: 'HTML5 CSS3 JavaScript PHP JotForms Bootstrap',
    link: 'https://globaltigersolutions.com/',
  },
  {
    img: techniqo,
    alt: 'TechniQo',
    title: 'TechniQo (Internship, Develop)',
    stacks: 'HTML5 CSS3 JavaScript Bootstrap',
    link: 'https://techniqo.org/',
  },
  {
    img: divisoria,
    alt: 'Divisoria King',
    title: 'Divisoria King (InternShip, Contribution)',
    stacks: 'WordPress WooCommerce PHP',
    link: 'https://divisoriaking.com/',
  },
  {
    img: soa,
    alt: 'SOA Web Portal',
    title: 'Revised version - SOA Web Portal (Thesis, Self study)',
    stacks: 'MERN Material-UI',
    link: 'https://soa-web-portal.herokuapp.com/',
  },
];

function Portfolio() {
  return (
    <section id='work' className='portfolio-mf sect-pt4 route'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12'>
            <div className='title-box text-center'>
              <h3 className='title-a'>Portfolio</h3>
              <p className='subtitle-a'>View my works while learning how to code and while in the software development industry</p>
              <div className='line-mf'></div>
            </div>
          </div>
        </div>

        <div className='row'>
          {projects.map((project, id) => (
            <div className='col-md-4' key={id}>
              <div className='work-box'>
                <div className='work-img'>
                  <img src={project.img} alt={project.alt} className='img-fluid' />
                </div>
                <div className='work-content'>
                  <div className='row'>
                    <div className='col-sm-8'>
                      <h2 className='w-title'>{project.title}</h2>
                      <div className='w-more'>
                        <span className='w-ctegory'>{project.stacks}</span>
                      </div>
                    </div>
                    <div className='col-sm-4 text-center work-view'>
                      <a className='btn btn-primary btn js-scroll px-4' href={project.link} role='button' target='_blank' rel='noopener noreferrer'>
                        View
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
