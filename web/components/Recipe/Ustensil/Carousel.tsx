import React, { useState } from 'react';
import { FunctionComponent } from 'react';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import { Item as Ustensil } from "@components/Recipe/Ustensil/Item";

type CarouselProps = {
    items, 
    limit: number,
}

const Carousel :FunctionComponent<CarouselProps>  = (props) => {

    const { items, limit } = props;

    const [visibleImageIndex, setVisibleImageIndex]  = useState([0, limit]);
    const [visibleImage, setVisibleImage] = useState(items.slice(0, limit));

    const canMoveBefore = () : boolean => {
        return !(visibleImageIndex[0] === 0);
    }
 
    const canMoveAfter = () : boolean => {
        return !(visibleImageIndex[0] >= (items.length - limit));
    }

    const moveBefore = () : void => {
        
        if(canMoveBefore() === false) return;

        let startValue = visibleImageIndex[0] - 1;
        let endValue = visibleImageIndex[1] - 1;

        setVisibleImageIndex([startValue, endValue]);
        setVisibleImage(items.slice(startValue, endValue))
    }

    const moveAfter = () : void => {
        if(canMoveAfter() === false) return;

        let startValue = visibleImageIndex[0] + 1;
        let endValue = visibleImageIndex[1] + 1;

        setVisibleImageIndex([startValue, endValue]);
        setVisibleImage(items.slice(startValue, endValue))
    }

    return (
        <Box display="flex">
            <IconButton onClick={moveBefore} disabled={canMoveBefore() === false} >
                <NavigateBeforeIcon  />    
            </IconButton>
            {visibleImage.map((item) => {
                return <Ustensil item={item} />
            })}
            <IconButton onClick={moveAfter} disabled={canMoveAfter() === false} >
                <NavigateNextIcon  />    
            </IconButton>
        </Box>
    );
}

export default Carousel;