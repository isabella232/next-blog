import { FunctionComponent, useState } from 'react';
import Link from 'next/link';
import Box from '@material-ui/core/Box';
import Title from '@components/Title';
import Image from '@components/Image/Image';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

type ItemProps = {
    title: string,
    cover,
    created_at: string,
    description,
    link: {
        href: string,
        as: string
    },
    width: string,
    maxWidth: string
}

const Large: FunctionComponent<ItemProps> = ( {title, cover, created_at, description, link } ) => {

    const theme = useTheme();
    const isSmallScreen = (!useMediaQuery(theme.breakpoints.up('sm')));

    const [isShown, setIsShown] = useState(false);

    const getMaxWidth = () => {
        const PAGINATION_VALUE = 16;

        if(isSmallScreen === true) return 360 - PAGINATION_VALUE;

        const RECIPE_TOTAL = 4;

        return `${(1280/RECIPE_TOTAL)-PAGINATION_VALUE}px`;
    }

    return(
        <Box 
            boxShadow={1}  
            bgcolor="background.main" 
            margin={1}
            mb={4}
            width="100%" 
            maxWidth={getMaxWidth()} 
            height={310}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
        >
            <Link href={link.href} as={link.as} >
                <Box 
                    style={{
                        cursor: "pointer",
                    }}
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}
                >
                    <Box 
                        display="flex" 
                        justifyContent="center" 
                        padding={1} 
                        height={55} 
                        flexDirection="column"
                    >
                        <Title m={0} size={3} overflow="hidden">{title}</Title>
                    </Box>
                
                    <Box position="relative">
                        {cover && (
                            <Image 
                                width="100%" 
                                height="250px"
                                alt={`${title} photo`}
                                img={cover}
                                top={0}
                                position="absolute"
                                zIndex="modal"
                                
                            />
                        )}
                        <Box 
                            bgcolor={isShown === true ? "rgba(0, 0, 0, 0.2)" : "rgba(0, 0, 0, 0)"}
                            zIndex="tooltip" 
                            position="absolute"  
                            height="250px" 
                            width="100%"
                            top={0}
                        >

                        </Box>
                    </Box>
                </Box>
            </Link>

        </Box>
    )
}

export default Large;
