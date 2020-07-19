import Layout from "@components/Layout"
import config from "@config/config";
import fetch from 'node-fetch'
import { FunctionComponent } from 'react';
import Item from '@components/Receipt/Item/Item';

type IndexProps = {

}

const Index: FunctionComponent<IndexProps> = ( { recipes } ) => {
  return (
    <Layout>
      <section className="section">
        <div className="container">
          <h1 className="title has-text-primary	is-size-2">Recettes</h1>
          {recipes.length > 0 && (
            recipes.map((receipt) => {
              return <Item item={receipt} type="medium" />
            })
          )}
        </div>
      </section>
    </Layout>
  )
}

export default Index;

export async function getStaticProps() {

    const reponseReceipts = await fetch(config.strapiUrl + '/recipes?_sort=id:DESC');
    const jsonResponseReceipts = (await reponseReceipts.json() || [] )

  return {
    props : {
        recipes: jsonResponseReceipts
    }
  }

}
