import React from "react";
import './prism.scss'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import ReadProgress from '../components/ReadProgress'

export default class Template extends React.Component {

  constructor () {
    super()
    this.state = {
      color: 'red',
      readProgress: 0,
      showNav: false
    }
    this.toggleNav = this.toggleNav.bind(this)
  }

  onScroll (event) {

  }

  componentDidMount () {
    document.addEventListener('scroll', this.onScroll.bind(this))
  }

  componentWillUnmount () {
    document.removeEventListener('scroll', this.onScroll.bind(this))
  }

  toggleNav () {
    this.setState({showNav: !this.state.showNav})
  }

  render () {
    const {markdownRemark} = this.props.data; // data.markdownRemark holds our post data
    const {frontmatter, html} = markdownRemark;
    const {featuredImage} = frontmatter
    const {showNav} = this.state
    const {transition} = this.props
    return (
        <div style={transition && transition.style}>
          <Helmet
              title={`${frontmatter.title} | sarath kumar`}
              meta={[
                {name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no'},
                {'http-equiv': 'Content-Type', content: 'text/html; charset=utf-8'},
                {'http-equiv': 'Content-Type', content: 'text/html; charset=ISO-8859-1'},
                {name: 'geo.region', content: 'India Kerala'},
                {name: 'description', content: 'you can...'},
                {
                  name: 'keywords',
                  content: 'sarath kumar,sarathkumars677@gmail.com,sarath@zealmotion.com,developer ,android developer, react ,vue ,node js,coder,blog,php ,laravel,freelancer,kerala,cochin'
                },
              ]}
          >
          </Helmet>
          <section className="hero is-dark is-medium is-la has-bg-img">
            <ReadProgress/>
            <div className="hero-head">
              <nav className="navbar">
                <div className="container">
                  <div className="navbar-brand">
                    <Link to="/" className="navbar-item">
                      Home
                    </Link>
                    <span onClick={this.toggleNav} className={`navbar-burger burger  ${showNav ? 'is-active' : ''}`}>
                  </span>
                  </div>
                </div>
              </nav>
            </div>

            <div className="hero-body">
              <div className="container has-text-centered">
                <h1 className="title">
                  {frontmatter.title}
                </h1>
                <p className="subtitle" style={{marginTop: 22}}>{frontmatter.date}</p>
                <div className="tags is-centered" style={{marginTop: 22}}>
                  {frontmatter.tags.map((tag) => {
                    return (<span className="tag is-medium is-rounded">{tag}</span>)
                  })}
                </div>
              </div>
            </div>
          </section>
          <section className="section ">
            <div className="columns">
              <div className="column is-offset-2 is-8">
                <div className="content" dangerouslySetInnerHTML={{__html: html}}/>
              </div>
            </div>
          </section>
          <footer className="footer" style={{marginTop:28}}>
            <div className="container">
              <div className="content has-text-centered">
                <p>
                  <strong>©</strong> by <a href="https://sarath.me">Sarath kumar</a>.
                </p>
              </div>
            </div>
          </footer>
        </div>
    )
  }

}

export const pageQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                path
                tags
                date(formatString :"DD MMM YYYY")
                title
            }
        }
    }
`;