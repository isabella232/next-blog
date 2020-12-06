import Error from '@components/Error/Error';
import Box from '@material-ui/core/Box';
import { Item as Ustensil } from "@components/Recipe/Ustensil/Item";
import Carousel from '@components/Recipe/Ustensil/Carousel';
import { FunctionComponent } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Desktop from 'Template/Recipe/Desktop';
import Mobile from 'Template/Recipe/Mobile';
import { getUstensilLimit } from 'app/helper';

type RecipeProps = {
  recipe,
}

const Recipe :FunctionComponent<RecipeProps> = ({ recipe }) => {

  const theme = useTheme();
  const isSmallScreen = (!useMediaQuery(theme.breakpoints.up('sm')));

  if (recipe === null) return <Error status={404} />;

  /**
   * Return the ustensil JSX element, can be a carousel or simple list
   */
  const renderUstensil = (items : Array<object>, isMediumScreen: boolean, isSmallScreen : boolean) : JSX.Element => {

    let limit = getUstensilLimit(isMediumScreen, isSmallScreen);

    if (items.length <= limit) {
      return(
        <Box display="flex">
          {items.map( (item) => {
            return <Box mr={3} key={item.id}><Ustensil item={item} /></Box>
          })}
        </Box>
      );
    }

    return (
      <Carousel items={items} limit={limit} />
    );

  }

  return(
    <>
      {isSmallScreen === false ? 
        <Desktop recipe={recipe} renderUstensil={renderUstensil} /> 
      : 
        <Mobile  recipe={recipe} renderUstensil={renderUstensil} /> 
      }
    </>
  )
  

}

export default Recipe;

export async function getServerSideProps({ query: { slug } }) {

  const reponseRecipes = await fetch(`${process.env.API_URL}/recipes?slug=${slug}`);
  let recipe = (await reponseRecipes.json() || []);

  if (recipe.length === 0) {
    recipe = null;
  }

  return {
    props: {
      recipe: recipe[0]
    }
  }

}