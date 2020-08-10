import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import Item from '@components/Recipe/Item/Item';

const Recipes = (props) => {
    const theme = useTheme();
    const isSmallScreen = (!useMediaQuery(theme.breakpoints.up('sm')));
    const isMediumScreen = (!useMediaQuery(theme.breakpoints.up('md')));

    const getRecipesSize = (isMediumScreen, isSmallScreen) => {
        if(isSmallScreen === true) return "95%";

        if(isMediumScreen === true) return "47%";

        return "25%";
    }

    const { recipes } = props;
    return (
        <>
        {recipes.length > 0 && (
            <Box 
              display="flex" 
              flexDirection={isSmallScreen === true ? 'column': 'row'} 
              flexWrap={isMediumScreen === true ? "wrap": "nowrap"} 
              justifyContent={isMediumScreen === true ? "space-around": "space-between"}
              {...props}
            >
              {recipes.map((recipe) => {
                return <Item item={recipe} type="large" width={getRecipesSize(isMediumScreen, isSmallScreen)} />
              })}
            </Box>
          )}
        </>
    )
}

export default Recipes;