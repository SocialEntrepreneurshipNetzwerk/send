import React from 'react';
import Triangle from '../svg/Triangle.js';
import ReactMarkdown from 'react-markdown';
import PositionenIcon from '../svg/PositionenIcon';
import styles from './triangle-boxes.module.css';
import Link from 'gatsby-link';

const TriangleBox = ( props ) => {
  const box_styles = props.article ? styles.box_small_article : styles.box_small;
  return (
    <div className={box_styles}>
      {props.box.icon && <PositionenIcon {... props.box}/>}
      <div>
        <Triangle/>
      </div>
      {props.article ?
        <article>
          <h1>{props.box.title}</h1>
          <h2>{props.box.date} | {props.box.category}</h2>
          <Link to={props.slug}><span>Mehr lesen</span></Link>
        </article> :
        <ReactMarkdown source={props.box.description}/>
      }
    </div>

  );
};
export default TriangleBox;
