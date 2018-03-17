import React from 'react'
import Link from 'gatsby-link'
const NotFoundPage = () => (
  <div>
    <section className="hero is-white ">
      <div className="hero-body">
        <div className="container is-half is-offset-one-quarter" >
          <p className="title glitch is-size-1" data-text="404">
            404
          </p>
          <Link  to="/"  className="button is-text">
            Home
          </Link>
        </div>
      </div>
    </section>
  </div>
)

export default NotFoundPage
