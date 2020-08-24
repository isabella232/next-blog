import Box from '@material-ui/core/Box';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { FunctionComponent } from 'react';

type IngredientsProps = {
    amount: number,
    item,
    unit,
}

const Ingredients : FunctionComponent<IngredientsProps> = ({amount, item, unit}) => {
    return(
        <Box mt={1.5} mb={1.5} display="flex" alignItems="center">
            <FiberManualRecordIcon color="primary" fontSize="small" />
            <span>{amount} {unit !== null ? unit.abbreviation : ''} - {item.name}</span>
        </Box>
    );
}

export default Ingredients;