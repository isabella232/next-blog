import Item from "@components/Recipe/Ustensil/Item";
import Box from '@material-ui/core/Box';

import IconButton from '@material-ui/core/IconButton';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

import React, { useState } from 'react';

export const List = ({items, isCarouselActive}) => {

    let numberVisibleImage = 2;
    let defaultVisibleImage = items;

    if(isCarouselActive){
        defaultVisibleImage = items.slice(0, numberVisibleImage);
    }

    const [visibleImageIndex, setVisibleImageIndex]  = useState([0, numberVisibleImage]);
    const [visibleImage, setVisibleImage] = useState(defaultVisibleImage);

    const canMoveBefore: boolean = () => {
        return !(visibleImageIndex[0] === 0);
    }
 
    const canMoveAfter: boolean = () => {
        return !(visibleImageIndex[0] >= (items.length - numberVisibleImage));
    }

    const moveBefore = () => {
        
        if(canMoveBefore() === false) return;

        let startValue = visibleImageIndex[0] - 1;
        let endValue = visibleImageIndex[1] - 1;

        setVisibleImageIndex([startValue, endValue]);
        setVisibleImage(items.slice(startValue, endValue))
    }

    const moveAfter = () => {
        if(canMoveAfter() === false) return;

        let startValue = visibleImageIndex[0] + 1;
        let endValue = visibleImageIndex[1] + 1;

        setVisibleImageIndex([startValue, endValue]);
        setVisibleImage(items.slice(startValue, endValue))

    }

    return (
        <Box display="flex">
            {isCarouselActive && (
                <IconButton onClick={moveBefore} disabled={canMoveBefore() === false} >
                    <NavigateBeforeIcon  />    
                </IconButton>
            )}
            {visibleImage.map((item) => {
                return <Item item={item} />
            })}
            {isCarouselActive && (
                <IconButton onClick={moveAfter} disabled={canMoveAfter() === false} >
                    <NavigateNextIcon  />    
                </IconButton>
            )}
        </Box>
    );
}