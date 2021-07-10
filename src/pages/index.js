import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Camping Pancakes" />
    <div style={{backgroundColor: "red", color: "white", padding: 4, marginBottom: "1rem"}}>
      <p style={{margin: 0}}>Pancakes are available from 9am to 11:50am</p>
    </div>
    <p style={{fontSize: 24}}>
      Bringing pancakes to the world from 9am to 11:50am!
    </p>
    <div>
    <StaticImage
      src="../images/pancakes1.jpg"
      width={300}
      quality={93}
      formats={["AUTO", "WEBP"]}
      alt="pancakes"
      style={{ marginBottom: `1.45rem` }}
    />
    </div>
    <div>
    <StaticImage
      src="../images/pancakes2.jpg"
      width={300}
    height={400}
      quality={92}
      formats={["AUTO", "WEBP"]}
      alt="pancakes"
      style={{ marginBottom: `1.45rem` }}
    />
    </div>
    <div>
    <StaticImage
      src="../images/pancakes3.jpg"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP"]}
      alt="pancakes"
      style={{ marginBottom: `1.45rem` }}
    />
    </div>
  </Layout>
)

export default IndexPage
