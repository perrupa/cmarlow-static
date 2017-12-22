import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () =>
  <div>
    <section>
      <p>Senior Front End Developer @ <a href="https://shopify.ca/">Shopify</a>.</p>
      <p>I uncomplicate things.</p>
      <p><a href="http://www.twitter.com/perrupa">I post photos more than I talk</a></p>
    </section>
    <h2>Pages</h2>
    <Link to="/high-park/">Some photos that I took.</Link>
  </div>

export default IndexPage
