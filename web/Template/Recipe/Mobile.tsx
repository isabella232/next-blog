import config from "@config/config";
import Title from '@components/Title';
import Image from '@components/Image/Image';
import Info from '@components/Recipe/Info/Info';
import Ingredients from '@components/Recipe/Ingredients/Ingredients';
import Container from '@components/Container';
import { List as StepsList } from '@components/Recipe/Step/List';
import Box from '@material-ui/core/Box';
import { getTotalCookTime, getTime } from 'app/helper';
import Tabs from "@material-ui/core/Tabs/Tabs";
import Tab from "@material-ui/core/Tab/Tab";
import { useState } from 'react';

const Mobile = ({recipe, renderUstensil}) : JSX.Element => {

    let infoStyle = {fontWeight: "500"};

    const [ tabValue, setTabValue ] = useState(0);

    const updateTab = (event, value) => {
        setTabValue(value);
    }

    const getStep = () => {
        return <span>step</span>
    }

    const getIngredients = () => {
        return <span>Ingredient</span>
    }

    const getInformation = () => {
        return <span>information</span>
    }


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
            <Box bgcolor="grey.100">
                <Tabs value={tabValue} p={1} centered onChange={updateTab}>
                    <Tab label="Etapes"  />
                    <Tab label="Ingredients" />
                    <Tab label="Informations" />
                </Tabs>
                <Box>
                    {tabValue === 0 ? getStep() : ''}
                    {tabValue === 1 ? getIngredients() : ''}
                    {tabValue === 2 ? getInformation() : ''}
                </Box>
            </Box>
    
        </Container>
      );
}

export default Mobile;