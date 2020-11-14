import { FunctionComponent, ReactElement } from 'react';
import Link from 'next/link';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Title from '@components/Title';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

type ItemProps = {
    image,
    created_at: string,
    description: string,
    slug: string
}

const Small: FunctionComponent<ItemProps> = ( {title, cover, created_at, description, link, style } ) => {
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('sm'));

    return(
        <Box 
            boxShadow={1} 
            display="flex"
            flexDirection={isLargeScreen === false ? 'column': 'row'}
            margin={1} alignItems="center" 
            padding={isLargeScreen === true ? 1 : 2} 
            bgcolor="background.default"
        >
            {config && (
                <Box width={isLargeScreen === true ? 1/4 : "100%"}>
                    <img width="100%" src={process.env.IMG_URL  + cover.formats.small.url} alt="Placeholder image" />
                </Box>
            )}
            <Box display="flex" flexDirection="column" width={isLargeScreen === true ? 3/4 : "100%"} padding={isLargeScreen === true ? 1 : 0}>

                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Title size={3}>{title}</Title>
                    <time className="has-text-grey" datetime={created_at}>{created_at}</time>
                </Box>

                <p>{description}</p>

                <Box display="flex" justifyContent="flex-end" >
                    <Link href={link.href} as={link.as} >
                        <Button variant="contained" color="secondary" >Lire la suite</Button>
                    </Link>
                </Box>

            </Box>
        </Box>
    )
}

export default Small;
