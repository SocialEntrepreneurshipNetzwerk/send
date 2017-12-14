import React from 'react';
import './global.css';


const Wrapper = ({ children }, props ) => {
  console.log( props );
  return ( <div>
    <div>{children()}</div>
  </div> );

};

export default Wrapper;
