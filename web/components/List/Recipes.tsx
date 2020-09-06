import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Item from '@components/Recipe/Item/Item';

const Recipes = (props) : JSX.Element => {
    const theme = useTheme();
    const isSmallScreen = (!useMediaQuery(theme.breakpoints.up('sm')));
    const isMediumScreen = (!useMediaQuery(theme.breakpoints.up('md')));

    const { recipes } = props;
    
    return (
        <>
        {recipes.length > 0 && (
            <Box 
              display="flex" 
              flexDirection={isSmallScreen === true ? 'column': 'row'} 
              flexWrap={isMediumScreen === true ? "wrap": "wrap"} 
              justifyContent={isMediumScreen === true ? "space-around": "flex-start"}
              alignItems={isSmallScreen === true ? 'center': 'flex-start'}
              {...props}
            >
              {recipes.map((recipe) => {
                return (
                  <Item 
                    item={recipe} 
                    type="large" 
                  />
                );
              })}
            </Box>
          )}
        </>
    )
}

export default Recipes;