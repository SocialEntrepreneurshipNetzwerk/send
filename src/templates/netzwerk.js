import React, {Component} from 'react';
import axios from 'axios';
import TopImage from '../components/top-image/TopImage.js';
import TriangleBoxContainer from '../components/triangle-boxes/TriangleBoxContainer';
import PageHelmet from '../components/PageHelmet';
import topImage from '../img/SEND_01.02.18_Internet-343.jpg';
import BackgroundTurquoise from '../components/svg/BackgroundTurquoise';
import Button from '../components/cta/Button';
import ButtonCTA from '../components/cta/ButtonCTA';
import ReactMarkdown from 'react-markdown';
import SearchIcon from '../components/svg/SearchIcon';
import styles from './netzwerk.module.css';

export default class Netzwerk extends Component {

  state = {
    q: undefined,
    members: undefined,
    offset: 0,
    limit: 12,
    count: 0,
    suggestion: 0,
    view: "listView",
  };

  suggestMember = (e) => {
    const suggestionArray = this.props.data.allMarkdownRemark.edges.map(i => i.node.frontmatter.title);
    const bias = Array(Math.round(suggestionArray.length/3)).fill("N3XTCODER");
    const biasedSuggestion = suggestionArray.concat(bias);
    this.setState({suggestion: biasedSuggestion[Math.floor(Math.random()*biasedSuggestion.length)] })
  }

  handleUpdateQuery = (e) => {
    const q = e.target.value;
    const limit = this.state.limit;
    const type = "member";

    this.suggestMember();

    axios({
      method: 'get',
      url: '/api/search',
      params: {q, limit, type}
    }).then(res => {
      const data = res.data;
      this.setState({count: data.count, members: data.rows, q, offset: 0});
    });
  };

  componentDidMount = () => {
    const {q, offset, limit} = this.state;
    const type = "member";

    this.suggestMember();

    axios({
      method: 'get',
      url: '/api/search',
      params: {q, offset, limit, type}
    }).then(res => {
      const data = res.data;
      this.setState({count: data.count, members: data.rows});
    });
  };

  handleLoadMore = () => {
    const members = this.state.members;
    const {q, offset, limit} = this.state;
    const newOffset = offset + limit;
    const type = "member";

    axios({
      method: 'get',
      url: '/api/search',
      params: {q, offset: newOffset, limit, type}
    }).then(res => {
      const data = res.data;

      members.push(...data.rows);
      this.setState({count: data.count, members, offset: newOffset});
    });
  };

  toggleView = (e) => {
    this.state.view === "listView" ? this.setState({view: "mapView"}) : this.setState({view: "listView"})
    console.log(this.state.view)
  }

  render() {

    const {data} = this.props;
    const {count, offset, limit} = this.state;
    const showLoadMore = this.state.view === "listView" ? count > (offset + limit) : null;

    const frontmatter = data.markdownRemark.frontmatter;
    const members = this.state.members || data.allMarkdownRemark.edges.map(i => i.node.frontmatter);
    const {clip, section_1, section_2} = frontmatter;

    const toggleLabel = this.state.view === "listView" ? "Kartenansicht" : "Listenansicht"
    const listView =  <TriangleBoxContainer boxes={members} size="large"/>
    const mapView =  (
      <div className={styles.map}>
        <iframe  src={"https://www.kartevonmorgen.org/#/?center=52.002,9.099&zoom=7.23&search=%23send-ev"}>
          <a href={"http://kartevonmorgen.org/"} target={"_blank"}>zur karte</a>
        </iframe>
      <a href={"https://www.kartevonmorgen.org"} target={"_blank"}>Große Karte öffnen</a>
      </div>)
    const searchStyle = this.state.view === "listView" ? styles.search : styles.search_disabled;


    return (
      <div>
        <PageHelmet frontmatter={frontmatter}/>
        <TopImage imageSource={topImage} clip={clip}/>
        <main className={styles.main}>
          <section>
            <h1><span>{section_1.title}</span></h1>
            <ReactMarkdown source={section_1.paragraph}/>
            <br/>
            <div className={searchStyle}>
              <span> Mitglieder finden: </span>
              <input type='text' placeholder={`z.B. "${this.state.suggestion}"`} onChange={this.handleUpdateQuery} />
              <SearchIcon/>
              <div className={styles.view_toggle_button}>
                <Button label={toggleLabel} action={this.toggleView}/>
              </div>
            </div>
            {this.state.view === "listView" ? listView : mapView}
          </section>
          {showLoadMore && <Button action={this.handleLoadMore} label={"Mehr anzeigen"} color={"active"}/>}
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
