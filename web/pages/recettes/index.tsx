import config from "@components/Recipe/Item/view/node_modules/@config/config";
import fetch from 'node-fetch'
import { FunctionComponent } from 'react';
import { useRouter } from 'next/router';
import Title from '@components/Title';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Container from '@components/Container';
import Recipes from "@components/List/Recipes";

type IndexProps = {
  recipes: object,
  page: number,
  lastPage : number
}

const Index: FunctionComponent<IndexProps> = ( { recipes, page, lastPage } ) => {

  const router = useRouter();

  return (
    <Container mt={5}>
      <Title size={1} color="primary.main">Recettes</Title>
      <Recipes recipes={recipes} mt={2} />
      <Box display="flex" justifyContent="center">
        <Button
          style={{marginRight: "5px"}}
          variant="outlined"
          onClick={() => router.push(`/recettes?page=${page - 1}`)}
          disabled={page <= 1 }
          > Précedent</Button>
        <Button
          variant="outlined"
          onClick={() => router.push(`/recettes?page=${page + 1}`)}
          disabled={page >= lastPage}
          > Suivant</Button>
      </Box>
    </Container>
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
