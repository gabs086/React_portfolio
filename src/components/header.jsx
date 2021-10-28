import React from 'react';
import { Helmet } from 'react-helmet';

function Header() {
  return (
    <Helmet>
      <meta name='keywords' content='Gab Agoncillo, Gabriel Agoncillo, gab, gabriel, agoncillo' />
      <meta name='author' content='Gab Agoncillo' />
      <meta name='description' content='Software Developer/Engineer open for new career opportunities ' />
      <meta name='robots' content='index' />
      <link rel='canonical' href='https://gabrielagoncillo.netlify.app/' />
    </Helmet>
  );
}

export default Header;
