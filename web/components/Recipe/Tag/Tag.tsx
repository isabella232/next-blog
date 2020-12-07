import { colors } from '@material-ui/core';
import Box from '@material-ui/core/Box';

const Tag  = ({tag, color}) => {
    
    return(
        <Box 
            component="li"
            ml={0}
            mr={2}
            my={1}
            py={0.5}
            px={2.2}
            bgcolor={color}
            borderRadius={20}
            fontSize="0.8rem"
            color="grey.900"
            style={{
                textTransform: 'uppercase',
                listStyleType: "none",
                fontWeight : 500,
                letterSpacing: 0.3
            }}
        >
            {tag.name}
        </Box>
    )
}

export default Tag;