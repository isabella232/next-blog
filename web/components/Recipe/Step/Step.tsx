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
                width="25px" 
                height="25px" 
                display="flex" 
                justifyContent="center" 
                alignItems="center" 
                mr={1}
            >
                {number}
            </Box>
            <p>{step.content}</p>
        </Box>
    )
}

export default Step;