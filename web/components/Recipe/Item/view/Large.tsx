import { FunctionComponent } from 'react';
import Link from 'next/link';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Title from '@components/Title';
import Image from '@components/Image/Image';
import ReactMarkdown from 'react-markdown';
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

    const getMaxWidth = () => {
        const PAGINATION_VALUE = 16;

        if(isSmallScreen === true) return 360 - PAGINATION_VALUE;

        const RECIPE_TOTAL = 4;

        return `${(1280/RECIPE_TOTAL)-PAGINATION_VALUE}px`;
    }

    return(
        <Box boxShadow={1}  bgcolor="background.main" margin={1} width="100%" maxWidth={getMaxWidth()} >
            <Box display="flex" justifyContent="center" padding={1} minHeight="50px" flexDirection="column">
                <Title m={0} size={3}>{title}</Title>
                <small>{created_at}</small>
            </Box>
            
           {cover && (
                <div>
                    <Image width="100%" height="250px" src={process.env.IMG_URL + cover.formats.small.url} alt={`${title} photo`} />
                </div>
           )}
            <Box display="flex" flexDirection="column" padding={1} justifyContent="space-between" height="150px">

                <Box color="grey.600">
                    {description}
                </Box>

                <Box display="flex" justifyContent="flex-end" >
                    <Link href={link.href} as={link.as} >
                        <Button variant="contained" color="secondary" size="small">Lire la suite</Button>
                    </Link>
                </Box>

            </Box>
        </Box>
    )
}

export default Large;
