import React, {Component} from 'react';
import axios from 'axios';
import StickyCTA from '../components/cta/StickyCTA';
import TopImage from '../components/top-image/TopImage.js';
import TriangleBoxContainer from '../components/triangle-boxes/TriangleBoxContainer';
import PageHelmet from '../components/PageHelmet';
import topImage from '../img/SEND_01.02.18_Internet-343.jpg';
import BackgroundTurquoise from '../components/svg/BackgroundTurquoise';
import ButtonLoadMore from '../components/cta/ButtonLoadMore';
import ButtonCTA from '../components/cta/ButtonCTA';
import ReactMarkdown from 'react-markdown';
import SearchIcon from '../components/svg/SearchIcon';
import Dropdown from '../components/dropdown/Dropdown';
import styles from './netzwerk.module.css';



const impactArea = [
    "Alle Wirkungsbereiche",
    "Armut",
    "Bildung",
    "Demographischer Wandel",
    "Demokratie & Engagement von Bürger*innen",
    "Dienstleistungen für Sozialunternehmen",
    "Entrepreneurshipförderung",
    "Flucht und Migration",
    "Gesundheit",
    "Inklusion von Menschen mit Behinderung",
    "Integration","Internationale Zusammenarbeit",
    "Menschenrechte",
    "Stadtentwicklung",
    "Umwelt– & Klimaschutz",
    "Zukunft der Arbeit",
    "Sonstige"
  ]
const federalState = [
    "Alle Bundesländer",
    "Baden-Württemberg",
    "Bayern","Berlin",
    "Brandenburg",
    "Bremen",
    "Hamburg",
    "Hessen",
    "Mecklenburg-Vorpommern",
    "Niedersachsen",
    "Nordrhein-Westfalen",
    "Rheinland-Pfalz",
    "Saarland",
    "Sachsen",
    "Sachsen-Anhalt",
    "Schleswig-Holstein",
    "Thüringen"
]



export default class Netzwerk extends Component {

  state = {
    q: undefined,
    facets: {
      city: undefined,
      impactArea: undefined,
      federalState: undefined
    },
    members: undefined,
    offset: 0,
    limit: 12,
    count: 0,
    suggestion: 0
  };

  suggestMember = (e) => {
    const suggestionArray = this.props.data.allMarkdownRemark.edges.map(i => i.node.frontmatter.title);
    const bias = Array(Math.round(suggestionArray.length/3)).fill("N3XTCODER");
    const biasedSuggestion = suggestionArray.concat(bias);
    this.setState({suggestion: biasedSuggestion[Math.floor(Math.random()*biasedSuggestion.length)] })
  }


  handleUpdateQuery = (e) => {
    const q = e.target.value;

    this.suggestMember();

    this.setState({q: q})
    this.handleSearch(q, this.state.facets);
  };

  handleUpdateFacet = (string, facet, startOption) => {
    const facets = {...this.state.facets}
    console.log("string: ", string, "startOption: ", startOption)
    string===startOption ? facets[facet] = undefined : facets[facet] = string
    this.setState({ facets: facets});
    this.handleSearch( this.state.q, facets)
  }

  handleSearch = (q, facets) => {

    const {offset, limit} = this.state;
    const newOffset = offset + limit;
    const type = "member";

    console.log("state of q in handleSearch is" , Boolean(q))
    console.log("state of facet in handleSearch is" , facets)
    axios({
      method: 'get',
      url: '/api/search',
      params: {q, limit, type, facets}
    }).then(res => {
      const data = res.data;
      this.setState({count: data.count, members: data.rows, q,  offset: 0});
    });
  }


  componentDidMount = () => {
    const {q, offset, limit, facets} = this.state;
    const type = "member";

    this.suggestMember();

    axios({
      method: 'get',
      url: '/api/search',
      params: {q, offset, limit, type, facets}
    }).then(res => {
      const data = res.data;
      this.setState({count: data.count, members: data.rows});
    });
  };

  handleLoadMore = () => {
    const members = this.state.members;
    const {q, offset, limit, facets} = this.state;
    const newOffset = offset + limit;
    const type = "member";

    axios({
      method: 'get',
      url: '/api/search',
      params: {q, offset: newOffset, limit, type, facets}
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
        <StickyCTA/>
        <main className={styles.main}>
          <section>
            <h1><span>{section_1.title}</span></h1>
            <ReactMarkdown source={section_1.paragraph}/>
            <br/>
            <div className={styles.search}>
              <span> Mitglieder finden: </span>
              <input type='text' placeholder={`z.B. "${this.state.suggestion}"`} onChange={this.handleUpdateQuery} />
              <SearchIcon/>
            </div>
            {/*
              <Dropdown facet="impactArea" startOption={impactArea[0]} options={impactArea} handleUpdate={this.handleUpdateFacet}/>
              <Dropdown facet="federalState" startOption={federalState[0]} options={federalState} handleUpdate={this.handleUpdateFacet}/>
              */}

            <TriangleBoxContainer boxes={members} size="large"/>
          </section>
          {showLoadMore && <ButtonLoadMore loadMore={this.handleLoadMore}/>}

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
