import Title from '@components/Title';
import Image from '@components/Image/Image';
import Ingredients from '@components/Recipe/Ingredients/Ingredients';
import Container from '@components/Container';
import { List as StepsList } from '@components/Recipe/Step/List';
import Box from '@material-ui/core/Box';
import { getTotalCookTime, getTime } from 'app/helper';
import Tabs from "@material-ui/core/Tabs/Tabs";
import Tab from "@material-ui/core/Tab/Tab";
import { useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { valueExist } from "app/helper";
import { List as TagsList } from '@components/Recipe/Tag/List';

const Mobile = ({recipe, renderUstensil}) : JSX.Element => {

    const theme = useTheme();
    const isMediumScreen = (!useMediaQuery(theme.breakpoints.up('md')));
    const isSmallScreen = (!useMediaQuery(theme.breakpoints.up('sm')));
    
    const [ tabValue, setTabValue ] = useState(0);

    const updateTab = (event, value) => {
        setTabValue(value);
    }

    const getStep = (steps) => {
        return  <StepsList steps={steps} />
    }

    const getIngredients = (ingredient) => {
        return (
            <div>
                {ingredient
                .filter(item => item.ingredient !== null) // prevent from adding null value
                .map((item, index) => {
                    return <Ingredients amount={item.amount} item={item.ingredient} unit={item.unit} key={index}/>
                })}
            </div>
        );
        
    }

    const getInformation = (recipe, isMediumScreen, isSmallScreen) => {

        return(
            <>
                {valueExist(recipe, 'source') && 
                    <small>Recette inspiré/traduite de <a target="blank" href={recipe.source}>{recipe.source}</a></small>
                }
                <TableContainer component={Paper}>
                    <Table  aria-label="simple table">
                        <TableBody>
                            {valueExist(recipe, 'difficulty') && 
                            <TableRow key={1}>
                                <TableCell component="th" scope="row" align="center">
                                    Difficulté
                                </TableCell>
                                <TableCell align="center">{recipe.difficulty}</TableCell>
                            </TableRow>
                            }
                            {valueExist(recipe, 'prep_time') && valueExist(recipe, 'cook_time') && 
                            <TableRow key={2}>
                                <TableCell component="th" scope="row" align="center">
                                Temps total
                                </TableCell>
                                <TableCell align="center">{getTotalCookTime(recipe.prep_time, recipe.cook_time)}</TableCell>
                            </TableRow>
                            }
                            {valueExist(recipe, 'cook_time') && 
                            <TableRow key={3}>
                                <TableCell component="th" scope="row" align="center">
                                Temps de cuisson
                                </TableCell>
                                <TableCell align="center">{getTime(recipe.cook_time)}</TableCell>
                            </TableRow>
                            }
                            {valueExist(recipe, 'prep_time') && 
                            <TableRow key={4}>
                                <TableCell component="th" scope="row" align="center">
                                Temps de préparation
                                </TableCell>
                                <TableCell align="center">{getTime(recipe.prep_time)}</TableCell>
                            </TableRow>
                            }
                        </TableBody>
                    </Table>
            </TableContainer>

            {recipe.tags.length > 0 &&
              <Box>
                <TagsList tags={recipe.tags} />
              </Box>
            }
            
            {valueExist(recipe, 'utensils') &&
            <Box mt={1} display="flex" flexDirection="column" alignItems="center">
                <Title size={2}>Ustensil</Title>
                {renderUstensil(recipe.utensils, isMediumScreen, isSmallScreen)}
            </Box>
            }

          </>
        )
    }


    return (
        <Container >

            <Box height="280px">
                <Box position="absolute" zIndex="modal" width="100%" >
                    <Image 
                        width="100%"
                        height="280px"
                        alt={`${recipe.title} photo`}
                        img={recipe.cover}
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
            <Box bgcolor="grey.100">
                <Tabs value={tabValue} p={1} centered onChange={updateTab} >
                    {valueExist(recipe, 'steps') && 
                    <Tab label="Étapes"  />
                    }
                    {valueExist(recipe, 'ingredient') && 
                    <Tab label="Ingredients" />
                    }
                    <Tab label="Informations" />
                </Tabs>
                <Box p={3}>
                    {tabValue === 0 && valueExist(recipe, 'steps') ? getStep(recipe.steps) : ''}
                    {tabValue === 1 && valueExist(recipe, 'ingredient') ? getIngredients(recipe.ingredient) : ''}
                    {tabValue === 2 ? getInformation(recipe, isMediumScreen, isSmallScreen) : ''}
                </Box>
            </Box>
    
        </Container>
      );
}

export default Mobile;