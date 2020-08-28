import config from "@config/config";
import { FunctionComponent } from 'react';
import Box from '@material-ui/core/Box';
import Image from '@components/Image/Image';

type StepProps = {
    step: {
        __component: string,
        id: number,
        content: string,
        image?,
    }
    number: number
}

const Step : FunctionComponent<StepProps> = ({step, number}) => {
    
    return(
        <Box display="flex" flexDirection="column">
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
            <Box display="flex" justifyContent="center">
                {step.image !== null && (
                    <Image 
                        src={config.strapiUrl + step.image.formats.small.url} 
                        width="450px"
                        height="250px"
                        alt={`Etape ${number} illustration`}
                        borderColor="grey.200"
                        border={1} 
                    />
                )}
            </Box>
        </Box>
    )
}

export default Step;