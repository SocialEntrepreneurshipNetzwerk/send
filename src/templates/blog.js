import React, {Component} from 'react';
import axios from 'axios';
import TopImage from '../components/top-image/TopImage.js';
import TriangleBoxContainer from '../components/triangle-boxes/TriangleBoxContainer';
import PageHelmet from '../components/PageHelmet';
import topImage from '../img/SEND_01.02.18_Internet-343.jpg';
import BackgroundTurquoise from '../components/svg/BackgroundTurquoise';
import ButtonLoadMore from '../components/cta/ButtonLoadMore';
import ButtonCTA from '../components/cta/ButtonCTA';
import ReactMarkdown from 'react-markdown';
import SearchIcon from '../components/svg/SearchIcon';
import styles from './netzwerk.module.css';

export default class Blog extends Component {
  
  state = {
    q: undefined,
    articles: undefined,
    offset: 0,
    limit: 4,
    count: 0,
    suggestion: 0
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
      this.setState({count: data.count, articles: data.rows, q, offset: 0});
      console.log(this.state)
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
      this.setState({count: data.count, articles: data.rows});
    });
  };

  handleLoadMore = () => {
    const articles = this.state.articles;
    const {q, offset, limit} = this.state;
    const newOffset = offset + limit;

    axios({
      method: 'get',
      url: '/api/search',
      params: {q, offset: newOffset, limit}
    }).then(res => {
      const data = res.data;

      articles.push(...data.rows);
      this.setState({count: data.count, articles, offset: newOffset});
    });
  };

  render() {

    const {data} = this.props;
    const {count, offset, limit} = this.state;
    const showLoadMore = count > (offset + limit);

    const frontmatter = data.markdownRemark.frontmatter;
    const articles = this.state.articles || data.allMarkdownRemark.edges.map(i => i.node.frontmatter);
    const {clip, title} = frontmatter;

    return (
      <div>
        <PageHelmet frontmatter={frontmatter}/>
        <TopImage imageSource={topImage} clip={clip}/>
        <main className={styles.main}>
          <section>
            <h1><span>{title}</span></h1>
          <p>Some paragraph</p>
            <br/>
            <div className={styles.search}>
              <span> Artikel finden: </span>
              <input type='text' onChange={this.handleUpdateQuery} />
              <SearchIcon/>
            </div>
            <TriangleBoxContainer boxes={articles} size="large"/>
          </section>
          {showLoadMore && <ButtonLoadMore loadMore={this.handleLoadMore}/>}

        </main>
      </div>
    );
  }
}


export const BlogQuery = graphql`
  query Blog {
    markdownRemark(fields: { slug: { eq: "/blog" } }) {
        frontmatter {
            clip
            title
        }
    }
    allMarkdownRemark (filter: {fileAbsolutePath: {regex: "/src/pages/blog/"}}) {
      edges {
        node {
          frontmatter{
            title
            excerpt
            date (formatString: "DD.MM.YYYY")
            category
            image
          }
        }
      }
    }
}
`;
