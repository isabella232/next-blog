import Layout from "@components/Layout"
import config from "@config/config";
import fetch from 'node-fetch'
import { FunctionComponent } from 'react';
import Item from '@components/Receipt/Item/Item';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';

type HomeProps = {
  homeContent: {
    content: string,
},
  recipes
}

const Home: FunctionComponent<HomeProps> = ( { homeContent, recipes : { first, others } } ) => {
  return (
    <Layout>
      <section className="section">
        <div className="container">
          <h1 className="title has-text-primary	is-size-2">Page title</h1>
          <div className="mb-6">
              <p><ReactMarkdown source={homeContent.content} /></p>
          </div>

          <div>
            
            <div className="is-flex">
              <h2 className="title has-text-secondary" >Dernières recettes</h2>
              <Link href="/recettes">
                <a className="button is-secondary ml-3" >Voir toutes les recettes</a>
              </Link>
            </div>
            {first !== null && (
              <div className="columns is-variable is-6">
              <div className="column is-two-fifths">
                <Item item={first} type="large" />
              </div>
              {others.length > 0 && (
                <div className="column">
                  {others.map((recipe) => {
                    return <div className="column" ><Item item={recipe} type="small" /></div>
                  })}
                </div>
              )}
            </div>
            )}
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

  // last receipts request
  const reponseRecipes = await fetch(config.strapiUrl + '/recipes?_limit=4&_sort=id:DESC');
  const jsonResponseRecipes = (await reponseRecipes.json() || [] )
  
  var firstReceipt = null;
  if(jsonResponseRecipes.length > 0){
    firstReceipt = jsonResponseRecipes[0];
  }

  var lastReceipts = [];
  if(jsonResponseRecipes.length > 1){
    lastReceipts = jsonResponseRecipes.slice(1);
  }
  
  return {
    props: { 
      homeContent: {
          content: jsonResponseHome.content,
      },
      recipes: {
        first: firstReceipt,
        others: lastReceipts
      }
    }

  }
}
