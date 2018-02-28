import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import TopNav from '../components/top-nav/TopNav';
import StickyCTA from '../components/cta/StickyCTA';
import Footer from '../components/footer/Footer';
import './global.css';


const helmet = () => (
  <helmet>
    <link href="https://fonts.googleapis.com/css?family=Karla" rel="stylesheet"/>
  </helmet>
);

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Social Entrepreneur Netzwerk Deutschland" />
    <StickyCTA/>
    <div>{children()}</div>
    <TopNav />

    <Footer/>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
