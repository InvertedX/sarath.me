import React from 'react';
import Img from "gatsby-image";
import Link from 'gatsby-link'
import {Helmet} from 'react-helmet'
import './index.scss'

class Home extends React.Component {

  state = {
    mobileOpen: false,
  };


  render () {
    const {data} = this.props;
    const {allMarkdownRemark} = data
    const {transition} = this.props
    return (
        <div className="app-root" style={transition && transition.style}>
          <Helmet
              title="Sarath Kumar | my useless blog"
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
          />
          <div className="columns">
            <div className="column is-one-third-desktop is-full-mobile is-full-tablet  top-hero is-paddingless">
              <section className="hero is-fullheight ">
                <div className="hero-body" style={{'align-items': 'center'}}>
                  <div className="container" style={{marginLeft: '8%', marginRight: '8%'}}>
                    <p className="is-size-5 has-text-grey-dark">
                      Hello <span className="glitch " data-text="Internet">Internet</span>, my name is
                    </p>
                    <h5 style={{marginTop: 18}} className="title glitch" data-text="Sarath Kumar">
                      Sarath Kumar
                    </h5>
                    <p style={{marginTop: 15}} className="subtitle is-size-6"
                    >
                      i'm a software engineer . this is where i live on the internet
                    </p>
                    <div className="content has-text-centered">
                      <p>
                        <a href="https://twitter.com/_sarath_kumar" className="icon  is-medium"><i
                            className="fa fa-twitter is-medium fa-lg"/>
                        </a>
                        <a href="https://www.facebook.com/sarath.kumar.677" className="icon  is-medium"><i
                            className="fa fa-facebook-f is-medium fa-lg"/></a>
                        <a href="https://www.instagram.com/_sarath.kumar_" className="icon  is-medium">
                          <i className="fa fa-instagram fa-lg"/>
                        </a>
                        <a href="https://github.com/InvertedX" className="icon  is-medium">
                          <i className="fa fa-github is-medium fa-lg"/>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="column container is-gapless is-multiline is-mobile blog_container ">
              {allMarkdownRemark.edges.map(({node}) => {
                const {frontmatter} = node
                const {tags, featuredImage, featuredImageUrl} = frontmatter
                return (
                    <Link className="column " to={node.frontmatter.path}>
                      <article className="media" style={{marginBottom: 25, marginTop: 25}}>
                        <div className="columns container">
                          <div className="column item is-two-fifths is-centered ">
                            <figure className="image">
                              {featuredImage.childImageSharp.responsiveResolution.originalName !== 'noimage.png' &&
                              <Img
                                  style={{width: '100%'}}
                                  resolutions={featuredImage.childImageSharp.responsiveResolution}
                              />
                              }
                              {featuredImage.childImageSharp.responsiveResolution.originalName === 'noimage.png' &&
                              <img src={featuredImageUrl}/>
                              }
                            </figure>
                          </div>
                          <div className="column item " style={{padding:'14px'}}>
                            <h3 className="title-blog-card">{node.frontmatter.title} </h3>
                            <date className="subtitle is-6">{node.frontmatter.date}</date>
                            <div className="tags" style={{marginTop: 6}}>
                              {tags.map(tag => <span className="tag is-dark is-rounded">{tag}</span>)}
                            </div>
                            <p className="content has-text-dark">
                              {node.excerpt}
                            </p>
                            <Link to={node.frontmatter.path} className="button is-light">Read</Link>
                          </div>
                        </div>
                      </article>
                    </Link>
                )
              })}
            </div>
          </div>
        </div>
    );
  }
}

export const pageQuery = graphql`
    query IndexQuery{
        allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, limit: 1000) {
            edges {
                node {
                    excerpt
                    id
                    frontmatter {
                        path
                        title
                        date(formatString :"DD MMM YYYY")
                        tags
                        featuredImageUrl
                        featuredImage {
                            childImageSharp {
                                responsiveResolution(width: 340) {
                                    base64
                                    originalName
                                    width
                                    height
                                    src
                                    srcSet
                                }
                            }
                        }
                    }
                }
            }
        }
    }`
export default Home;