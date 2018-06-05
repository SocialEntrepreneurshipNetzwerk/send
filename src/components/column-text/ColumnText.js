import React from 'react';
import ReactMarkdown from 'react-markdown';
import styles from './column-text.module.css';



const ColumnText = ( props ) => {
  return (
    <div className={styles.columns} >
      <ReactMarkdown source={props.text}/>
    </div> );

};

export default ColumnText;
