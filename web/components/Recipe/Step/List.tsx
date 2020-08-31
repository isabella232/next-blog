import { FunctionComponent } from 'react';
import Title from '@components/Title';
import Step from '@components/Recipe/Step/Step';
import Box from '@material-ui/core/Box';

type ListProps = {
    steps: array
}

export const List : FunctionComponent<ListProps> = ({steps}) => {
    
    let countStep = 0;
    return(
        <Box marginY={1}>
            {steps.map((step) => {
                if(step.__component === "step.step") {
                    countStep++;
                    return <Step step={step} number={countStep} />
                }
                if(step.__component === "step.title") {
                    countStep = 0;
                    return <Title size={3} fontSize="1.3rem" mb={0}  >{step.content}</Title>;
                }
            })}
        </Box>
    )
}
