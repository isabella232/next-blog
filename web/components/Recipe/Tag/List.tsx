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
            "#9E80E1",
            "#E18093",
            "#C3E180",
        ];

        let modulo = (index + 1) % colors.length;

        return colors[modulo];
    }


    return(
        <Box marginY={1}>
            {tags.map((tag, index) => {
                return <Tag 
                    tag={tag} 
                    color={getColor(index)} 
                    isFirst={index === 0 ? true: false}
                    key={tag.id}
                    style={{ wordWrap: "break-word" }}
                />
            })}
        </Box>
    )
}
