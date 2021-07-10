import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Camping Pancakes" />
    <div style={{backgroundColor: "red", color: "white", padding: 4, marginBottom: "1.45rem"}}>
      <p style={{margin: 0}}>Pancakes are available from 9am to 11:50am</p>
    </div>
    <p style={{fontSize: 24}}>
      Bringing pancakes to the world from 9am to 11:50am!
    </p>
    <div style={{border: "2px solid lightGray", padding: 15, margin: "0 auto 1.45rem", maxWidth: 600}}>
      <blockquote style={{margin: 0, fontSize: 20, marginBottom: "0.7rem"}}>
        These are the best camping pancakes out there! I always go back for
        seconds! He cooks pancakes just like my dad used to.
      </blockquote>
      <p style={{margin: 0}}>–Jared Norman, happy customer</p>
    </div>
    <div style={{border: "2px solid lightGray", padding: 15, margin: "0 auto 1.45rem", maxWidth: 600}}>
      <blockquote style={{margin: 0, fontSize: 20, marginBottom: "0.7rem"}}>
        Not the best customer service, but great vibe and good pancakes.
      </blockquote>
      <p style={{margin: 0}}>–Alistair Norman, satisfied customer</p>
    </div>
    <div style={{margin: "0 auto", maxWidth: 300}}>
    <StaticImage
      src="../images/pancakes1.jpg"
      width={300}
      quality={93}
      formats={["AUTO", "WEBP"]}
      alt="pancakes"
      style={{ marginBottom: `1.45rem` }}
    />
    </div>
    <div style={{margin: "0 auto", maxWidth: 300}}>
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
    <div style={{margin: "0 auto", maxWidth: 300}}>
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
