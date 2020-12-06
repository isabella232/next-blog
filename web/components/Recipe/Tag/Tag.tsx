import Box from '@material-ui/core/Box';

const Tag  = ({tag, color}) => {
    
    return(
        <Box 
            component="span" 
            m={1} 
            p={0.8}
            border={2} 
            //borderColor="grey.100"
            borderColor={color}
            //bgcolor={color}
            borderRadius={20}
            fontSize="0.9rem"
            color="grey.600"
        >
            {tag.name}
        </Box>
    )
}

export default Tag;