import React, {Component} from 'react';
import axios from 'axios';
import TopImage from '../components/top-image/TopImage.js';
import TriangleBoxContainer from '../components/triangle-boxes/TriangleBoxContainer';
import PageHelmet from '../components/PageHelmet';
import topImage from '../img/netzwerk_min.jpg';
import BackgroundTurquoise from '../components/svg/BackgroundTurquoise';
import ButtonCTA from '../components/cta/ButtonCTA';
import ReactMarkdown from 'react-markdown';
import styles from './netzwerk.module.css';

export default class Netzwerk extends Component {

  state = {
    q: undefined,
    members: undefined,
    offset: 0,
    limit: 4,
    count: 0
  };


  handleUpdateQuery = (e) => {
    const q = e.target.value;
    const limit = this.state.limit;

    axios({
      method: 'get',
      url: '/api/search',
      params: {q, limit}
    }).then(res => {
      const data = res.data;
      this.setState({count: data.count, members: data.rows, q, offset: 0});
    });
  };

  componentDidMount = () => {
    const {q, offset, limit} = this.state;

    axios({
      method: 'get',
      url: '/api/search',
      params: {q, offset, limit}
    }).then(res => {
      const data = res.data;
      this.setState({count: data.count, members: data.rows});
    });
  };

  handleLoadMore = () => {
    const members = this.state.members;
    const {q, offset, limit} = this.state;
    const newOffset = offset + limit;

    axios({
      method: 'get',
      url: '/api/search',
      params: {q, offset: newOffset, limit}
    }).then(res => {
      const data = res.data;

      members.push(...data.rows);
      this.setState({count: data.count, members, offset: newOffset});
    });
  };

  render() {

    const {data} = this.props;
    const {count, offset, limit} = this.state;
    const showLoadMore = count > (offset + limit);

    const frontmatter = data.markdownRemark.frontmatter;
    const members = this.state.members || data.allMarkdownRemark.edges.map(i => i.node.frontmatter);
    const {clip, section_1, section_2} = frontmatter;

    return (
      <div>
        <PageHelmet frontmatter={frontmatter}/>
        <TopImage imageSource={topImage} clip={clip}/>
        <main className={styles.main}>
          <section>
            <h1><span>{section_1.title}</span></h1>
            <ReactMarkdown source={section_1.paragraph}/>
            <br/>
            <div className={styles.search}>
              <span> Mitglieder finden: </span>
              <input type='text' placeholder="z.B. CRCLR" onChange={this.handleUpdateQuery} />
              <SearchIcon/>
            </div>
            <TriangleBoxContainer boxes={members} size="large"/>
          </section>
          {showLoadMore && <a onClick={this.handleLoadMore}>Load More</a>}

          <section className={styles.turquoise_section}>
            <BackgroundTurquoise/>
            <div className={styles.turquoise_content}>
              <h1><span>{section_2.title}</span></h1>
              <ReactMarkdown source={section_2.paragraph}/>
              <ButtonCTA color="white" label={section_2.cta.label} link={section_2.cta.link}/>
            </div>
          </section>
        </main>
      </div>
    );
  }
}


export const NetzwerkPageQuery = graphql`
  query NetzwerkPage {
    markdownRemark(fields: { slug: { eq: "/netzwerk" } }) {
        frontmatter {
            clip
            title
            section_1 {
              title
              paragraph
            }
            section_2 {
              title
              paragraph
              cta {
                label
                link
              }
            }
        }
    }
    allMarkdownRemark (filter: {fileAbsolutePath: {regex: "/src/members/"}}) {
      edges {
        node {
          frontmatter{
            title
            description
            email
            link
            image
          }
        }
      }
    }
}
`;
