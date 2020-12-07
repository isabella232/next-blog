import { FunctionComponent } from 'react';
import Title from '@components/Title';
import Tag from '@components/Recipe/Tag/Tag';
import Box from '@material-ui/core/Box';

type ListProps = {
    tags: array
}

export const List : FunctionComponent<ListProps> = ({tags}) => {

    /**
     * Get the color of the tag based on its order
     * @param index 
     */
    const getColor = (index : number) : string => {
        let colors = [
            "#80E19E",
            "#57D7BE",
            "#80C3E1",
        ];

        let modulo = (index + 1) % colors.length;

        return colors[modulo];
    }

    return(
        <Box marginY={1} component="ul" display="flex" flexWrap="wrap" p={0}>
            {tags.map((tag, index) => {
                return <Tag 
                    tag={tag} 
                    color={getColor(index)}
                    key={tag.id}
                    style={{ 
                        wordWrap: "break-word", 
                    }}
                />
            })}
        </Box>
    )
}
