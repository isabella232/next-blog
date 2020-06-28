import Layout from "@components/Layout"
import config from "@config/config";
import fetch from 'node-fetch'
import { FunctionComponent } from 'react';

type HomeProps = {
  content ?: string,
  cover ?: string
}

const Home: FunctionComponent<HomeProps> = ({ content, cover }) => {

  return (
    <Layout>
      <section className="section">
        <div className="container">
          <h1 className="title has-text-primary	">Page title</h1>
          <div className="columns">
            <div className="column is-three-fifths">
              <p>{content}</p>
            </div>
            <div className="column">
              <img src={cover} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Home;

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  const reponse = await fetch(config.strapiUrl + '/home');
  const jsonResponse = await reponse.json()

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  let coverUrl = config.strapiUrl + jsonResponse.cover.formats.medium.url;
  return {
    props: {
      content: jsonResponse.content,
      cover: coverUrl
    },
  }
}
