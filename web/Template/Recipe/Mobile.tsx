import config from "@config/config";
import Title from '@components/Title';
import Image from '@components/Image/Image';
import Info from '@components/Recipe/Info/Info';
import Ingredients from '@components/Recipe/Ingredients/Ingredients';
import Container from '@components/Container';
import { List as StepsList } from '@components/Recipe/Step/List';
import Box from '@material-ui/core/Box';
import { getTotalCookTime, getTime } from 'app/helper';

const Mobile = ({recipe, renderUstensil}) : JSX.Element => {

    return (
        <Container >

            <Box height="280px">
                <Box position="absolute" zIndex="modal" >
                    <Image 
                        width="100%"
                        height="280px"
                        src={config.strapiUrl + recipe.cover.formats.small.url} 
                        alt={`${recipe.title} photo`}
                    />
                </Box>
                <Box
                    position="absolute"
                    zIndex="tooltip"
                    height="280px"
                    width="100%"
                    display="flex"
                    alignItems="flex-end"
                >
                    <Title size={1} style={{backgroundColor: "rgba(255, 255, 255, 0.8)"}} m={0} p={0.5} width="100%" color="secondary.main" >
                        {recipe.title}
                    </Title>
                </Box>
            </Box>
    
            <Box p={1} bgcolor="grey.100">

              <Box mt={3}>
                <Title size={2} m={0}>Informations</Title>
                <Box display="flex" justifyContent="space-around" mt={2}>
                    <Box display="flex" flexDirection="column" alignItems="center">
                        <span>Difficulté</span><span>{recipe.difficulty}</span>
                    </Box>
                    <Box display="flex" flexDirection="column" alignItems="center">
                        <span>Temps total </span><span>{getTotalCookTime(recipe.prep_time, recipe.cook_time)}</span>
                    </Box>
                </Box>
                <Box display="flex" justifyContent="space-around">
                    <Box display="flex" flexDirection="column" alignItems="center">
                        <span>Temps de préparation</span><span>{getTime(recipe.prep_time)}</span>
                    </Box>
                    <Box display="flex" flexDirection="column" alignItems="center">
                        <span>Temps de cuisson</span><span>{getTime(recipe.cook_time)}</span>
                    </Box>
                </Box>
                <Box display="flex" justifyContent="space-between" alignItems="center" mt={3}>
                  <Title size={2} m={0}>Ingredients</Title>
                  <span>{recipe.person} personnes</span>
                </Box>
                <Box mt={3}>
                  {recipe.ingredient.map((item) => {
                    return <Ingredients amount={item.amount} item={item.ingredient} unit={item.unit} />
                  })}
                </Box>
              </Box>
            </Box>
    
        </Container>
      );
}

export default Mobile;