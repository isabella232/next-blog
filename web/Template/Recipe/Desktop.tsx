import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Title from '@components/Title';
import Image from '@components/Image/Image';
import Info from '@components/Recipe/Info/Info';
import Ingredients from '@components/Recipe/Ingredients/Ingredients';
import Container from '@components/Container';
import { List as StepsList } from '@components/Recipe/Step/List';
import {  getTotalCookTime, getTime } from 'app/helper';
import Box from '@material-ui/core/Box';
import { valueExist } from "app/helper";

const Desktop = ({recipe, renderUstensil}) : JSX.Element => {

    const theme = useTheme();
    const isMediumScreen = (!useMediaQuery(theme.breakpoints.up('md')));
    const isSmallScreen = (!useMediaQuery(theme.breakpoints.up('sm')));

    return (
      <>
        <Container type="full" bgcolor="primary.main">
    
          <Container display="flex" justifyContent="space-between" height={280}>
    
            <Box display="flex" flexDirection="column" justifyContent="flex-end" mb={2} ml={2}  >
              <Title size={1} m={0} color="white">{recipe.title}</Title>
              <Box mt={5} display="flex">
                {valueExist(recipe, "difficulty") && 
                  <Info title="Difficulté" content={recipe.difficulty} mr={4} />
                }
                {valueExist(recipe, "prep_time") && valueExist(recipe, "cook_time") &&
                <>
                <Info title="Temps total" content={getTotalCookTime(recipe.prep_time, recipe.cook_time)} mr={4} />
                <Info title="Temps de cuisson" content={getTime(recipe.cook_time)} mr={4} />
                <Info title="Temps de préparation" content={getTime(recipe.prep_time)} mr={4} />
                </>
                }
              </Box>
            </Box>
    
          </Container>
    
        </Container>
        
        <Container display="flex">
    
          <Box mr={5} ml={2} width="100%">
            {valueExist(recipe, "description") && 
              <Box mb={5} >
                <p>{recipe.description}</p>
                {valueExist(recipe, 'source') && 
                <small>Recette inspiré/traduite de <a target="blank" href={recipe.source}>{recipe.source}</a></small>
                }
              </Box>
            }
            {valueExist(recipe, 'utensils') &&
            <>
            <Title size={2} mt={3} >Ustensiles</Title>
            <Box display="flex" mb={6}>
              {renderUstensil(recipe.utensils, isMediumScreen, isSmallScreen)}
            </Box>
            </>
            }
            { valueExist(recipe, 'steps') && 
            <Box mb={5}>
              <Title size={2} mt={4} mb={0}>Etapes</Title>
              <StepsList steps={recipe.steps} />
            </Box>
            }
          </Box>

          <Box width={isMediumScreen === true ? 300 : 380} mt={-30} mr={1} ml={1}>
          <Image 
            width={isMediumScreen === true ? "300px" : "380px"} 
            height={isMediumScreen === true ? "300px" : "380px"}
            alt={`${recipe.title} photo`}
            img={recipe.cover}
          />
          {valueExist(recipe, "ingredient") && 
          <Box bgcolor="grey.200" p={2} mt={1}>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Title size={2} m={0}>Ingredients</Title>
              {valueExist(recipe, 'person') && 
              <span>{recipe.person} personnes</span>
              }
            </Box>
            
            <Box mt={3}>
              {recipe.ingredient.map((item) => {
                return <Ingredients amount={item.amount} item={item.ingredient} unit={item.unit} />
              })}
            </Box>
          </Box>
          }
        </Box>

        </Container>
      </>
      );
}

export default Desktop;