import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import TopNav from '../components/top-nav/TopNav';
import StickyCTA from '../components/cta/StickyCTA';
import './global.css';


const helmet = () => (
  <helmet>
    <link href="https://fonts.googleapis.com/css?family=Karla" rel="stylesheet"/>
  </helmet>
);


const Footer = () => {
  const style = {
    backgroundColor: '#3daef2',
    height: '100px'
  };
  return <footer style={style}>FOOTER PLACEHOLDER</footer>;
};

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Social Entrepreneur Netzwerk Deutschland" />
    <TopNav />
    <StickyCTA/>
    <div>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
