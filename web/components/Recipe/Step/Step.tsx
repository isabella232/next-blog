import { FunctionComponent, useState } from 'react';
import Box from '@material-ui/core/Box';
import Image from '@components/Image/Image';
import Link from 'next/link';

type StepProps = {
    step: {
        __component: string,
        id: number,
        content: string,
        image?,
        related_recipe?
    }
    number: number
}

const Step : FunctionComponent<StepProps> = ({step, number}) => {

    const [isShown, setIsShown] = useState(false);
    
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
                <p>
                {step.content}
                {step.related_recipe !== null && (
                    <>
                        <br/>
                        <Box component="span" color="primary.main">
                            <Link 
                                href={`/recettes/${step.related_recipe.slug}`}
                                passHref
                            >
                                
                                <Box 
                                    component="a" 
                                    target="blank" 
                                    color="secondary.main"
                                    style={{
                                        textDecoration: `${isShown === true ? "underline" : "none"}`,
                                    }}
                                    fontWeight={600}
                                    onMouseEnter={() => setIsShown(true)}
                                    onMouseLeave={() => setIsShown(false)}
                                >
                                        {step.related_recipe.title}
                                </Box>
                            </Link>
                        </Box>
                    </>
                )}
                </p>
            </Box>
            <Box display="flex" justifyContent="center">
                
                {step.image !== null && (
                    <Image
                        img={step.image}
                        width="350px"
                        objectFit={false}
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