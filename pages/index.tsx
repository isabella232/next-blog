import Layout from "@components/Layout"
import config from "@config/config";
import fetch from 'node-fetch'
import { FunctionComponent } from 'react';
import Item from 'components/Receipt/Item';

type HomeProps = {
  content ?: string,
  cover ?: string
}

const Home: FunctionComponent<HomeProps> = ( { homeContent, receipts } ) => {
  return (
    <Layout>
      <section className="section">
        <div className="container">
          <h1 className="title has-text-primary	">Page title</h1>
          <div className="columns">
            <div className="column is-three-fifths">
              <p>{homeContent.content}</p>
            </div>
            <div className="column">
              <img src={homeContent.cover} />
            </div>
          </div>
          <div>
            <h2 className="title has-text-secondary	" >Dernières recettes</h2>
            <div className="columns">
              {receipts.map((receipt) => {
                return <div className="column is-one-quarter" ><Item item={receipt} /></div>
              })}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Home;

export async function getStaticProps() {
  // home content request
  const reponseHome = await fetch(config.strapiUrl + '/home');
  const jsonResponseHome = (await reponseHome.json() || [] );

  let coverUrl = config.strapiUrl + jsonResponseHome.cover.formats.medium.url;

  // last receipts request
  const reponseReceipts = await fetch(config.strapiUrl + '/receipts?_limit=4&_sort=id:DESC');
  const jsonResponseReceipts = (await reponseReceipts.json() || [] )

  return {
    props: { 
        homeContent: {
          content: jsonResponseHome.content,
          cover: coverUrl
      },
      receipts: jsonResponseReceipts
    }

  }
}
