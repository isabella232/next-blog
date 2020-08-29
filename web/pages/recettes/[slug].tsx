import config from "@config/config";
import Error from '@components/Error/Error';
import Box from '@material-ui/core/Box';
import { Item as Ustensil } from "@components/Recipe/Ustensil/Item";
import Carousel from '@components/Recipe/Ustensil/Carousel';
import { FunctionComponent } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Desktop from 'Template/Recipe/Desktop';
import Mobile from 'Template/Recipe/Mobile';

type RecipeProps = {
  recipe,
}

const Recipe :FunctionComponent<RecipeProps> = ({ recipe }) => {

  if (recipe === null) return <Error status={404} />;

  /**
   * Define the number of ustensil first display on the page, depending of the size screen
   */
  const getUstensilLimit = () : number => {
    const theme = useTheme();
    const isMediumScreen = (!useMediaQuery(theme.breakpoints.up('md')));
    const isSmallScreen = (!useMediaQuery(theme.breakpoints.up('sm')));

    if(isMediumScreen === true) return 3;

    if(isSmallScreen === true) return 1;

    return 5;
  }

  /**
   * Return the ustensil JSX element, can be a carousel or simple list
   */
  const renderUstensil = (items : Array<object>) : JSX.Element => {

    let limit = getUstensilLimit();

    if (items.length <= limit) {
      return(
        <Box display="flex">
          {items.map( (item) => {
            return <Box mr={3}><Ustensil item={item} /></Box>
          })}
        </Box>
      );
    }

    return (
      <Carousel items={items} limit={limit} />
    );

  }

  const theme = useTheme();
  const isSmallScreen = (!useMediaQuery(theme.breakpoints.up('sm')));

  return(
    <>
      {isSmallScreen === false ? 
        <Desktop recipe={recipe} renderUstensil={renderUstensil} /> : 
        <Mobile  recipe={recipe} renderUstensil={renderUstensil} /> }
    </>
  )
  

}

export default Recipe;

export async function getServerSideProps({ query: { slug } }) {

  const reponseRecipes = await fetch(`${config.strapiUrl}/recipes?slug=${slug}`);
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