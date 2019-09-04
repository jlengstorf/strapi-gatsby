import React from "react"
import Layout from "../components/layout"
import Title from "../components/global/title"
import Helmet from "react-helmet"
import Article from "../components/global/article"

const About = () => {
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>Food with Friends | About Page</title>
        <meta
          name="description"
          content="There is more to Life than Hustle & Grind. It is about spending time with those you care about, eating good food, drinking great drinks and simply enjoying life."
        />
      </Helmet>

      <Layout>
        <div>
          <Title center title="About Food With Friends" />
          <Article>
            <p>
              Food with Friends is certainly a novel concept in todays society
              where society has trouble leading a balanced life which includes
              work, family and activities that lead to a healthier lifestyle.
            </p>
            <p>
              This is site is about allowing friends to come and dine together.
              Because after all, there is more to life than Hustle and Grind!
            </p>
          </Article>
        </div>
      </Layout>
    </div>
  )
}

export default About
