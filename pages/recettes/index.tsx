import Layout from "@components/Layout"
import config from "@config/config";
import fetch from 'node-fetch'
import { FunctionComponent } from 'react';
import Item from '@components/Receipt/Item/Item';
import { useRouter } from 'next/router';

type IndexProps = {
  recipes: object,
  page: number,
  lastPage : number
}

const Index: FunctionComponent<IndexProps> = ( { recipes, page, lastPage } ) => {

  const router = useRouter();

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
          <button className="button is-secondary mr-2" 
            onClick={() => router.push(`/recettes?page=${page - 1}`)}
            disabled={page <= 1 }
            > Précedent</button>
          <button className="button is-secondary" 
            onClick={() => router.push(`/recettes?page=${page + 1}`)}
            disabled={page >= lastPage}
            > Suivant</button>
        </div>
      </section>
    </Layout>
  )
}

export default Index;

export async function getServerSideProps({ query: { page = 1 } }) {

  const limit = 3;
  const start = parseInt(page) === 1 ? 0 : (parseInt(page) - 1) * limit;

  const receiptsResponse = await fetch(`${config.strapiUrl}/recipes?_sort=id:DESC&_limit=${limit}&_start=${start}`);
  const recipes = (await receiptsResponse.json() || [] )

  const numberOfRecipesResponse = await fetch(`${config.strapiUrl}/recipes/count`);
  const numberOfRecipes = await numberOfRecipesResponse.json();

  const lastPage = Math.ceil(numberOfRecipes / limit);

  return {
    props : {
        recipes,
        page: parseInt(page),
        lastPage,
    }
  }

}
