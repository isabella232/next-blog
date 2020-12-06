import Box from '@material-ui/core/Box';
import Image from '@components/Image/Image';

export const Item = ({item}) => {

    return (
        <Box width="160px" border={1} borderColor={"grey.200"} display="flex" flexDirection="column" >
            <Image 
                width="160px" 
                height="120px" 
                alt={`${item.name} photo`}
                img={item.cover}
                objectFit={false}
            />
            <Box bgcolor="grey.200" pl={0.5}>
                <span style={{fontSize: "13px"}} >{item.name}</span>
            </Box>
        </Box>
    );
}