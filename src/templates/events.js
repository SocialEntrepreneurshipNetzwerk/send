import React from 'react';
// UI
import PageHelmet from '../components/PageHelmet';
import TopImage from '../components/top-image/TopImage';
import TriangleBoxContainer from '../components/triangle-boxes/TriangleBoxContainer';
// STYLES
import styles from './events.module.css';

const Events = ({ data }) => {

  const frontmatter = data.markdownRemark.frontmatter;
  const { clip, title, image, content } = frontmatter;

  const getBoxData = rawData => {
    const arr = [];
    rawData.forEach( item => {
      const event = {
        image: item.eventImage,
        title: item.eventTitle,
        description: item.eventDescription,
        link: item.eventLink,
      };
      arr.push( event );
    });
    return arr;
  };

  const boxData = getBoxData( content );

  debugger

  return (
    <div>
      <PageHelmet frontmatter={ frontmatter }/>
      <TopImage imageSource={ image } clip={ clip }/>
      <main>
        <section>
          <h1><span>{ title }</span></h1>
          <TriangleBoxContainer boxes={ boxData } event={ true } />
        </section>
      </main>
    </div>
  );

};

export default Events;

export const eventsPageQuery = graphql`
    query Events {
        markdownRemark(fields: { slug: { eq: "/events" } }) {
            frontmatter {
                clip
                title
                image
                content {
                    eventTitle
                    eventDescription
                    eventImage
                    eventLink
                }
            }
        }
    }
`;
