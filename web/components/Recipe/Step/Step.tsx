import { FunctionComponent } from 'react';
import Box from '@material-ui/core/Box';

type StepProps = {
    step: {
        __component: string,
        id: number,
        content: string,
        image?: string
    }
    number: number
}

const Step : FunctionComponent<StepProps> = ({step, number}) => {
    
    return(
        <Box display="flex" alignItems="center">
            <Box 
                borderRadius="50%" 
                bgcolor="secondary.main" 
                color="white"
                minWidth="30px" 
                maxHeight="30px" 
                display="flex" 
                justifyContent="center" 
                alignItems="center"
                fontWeight="bold"
                fontSize="20px"
                fontFamily="Sniglet"
                mr={1}
            >
                {number}
            </Box>
            <p >{step.content}</p>
        </Box>
    )
}

export default Step;