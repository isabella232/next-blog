import { FunctionComponent } from 'react';
import config from "@config/config";
import Link from 'next/link';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Title from '@components/Title';
import Image from '@components/Image/Image';
import ReactMarkdown from 'react-markdown';

type ItemProps = {
    title: string,
    cover,
    created_at: string,
    description: ReactMarkdown,
    link: {
        href: string,
        as: string
    },
    width: string,
    maxWidth: string
}

const Large: FunctionComponent<ItemProps> = ( {title, cover, created_at, description, link, width, maxWidth } ) => {
    

    const getMaxWidth = () => {
        return `${(1280/4)-16}px`;
    }

    return(
        <Box boxShadow={1}  bgcolor="background.main" margin={1} width="100%" maxWidth={getMaxWidth()} >
            <Box display="flex" justifyContent="center" padding={1} minHeight="50px" flexDirection="column">
                <Title m={0} size={3}>{title}</Title>
                <small>{created_at}</small>
            </Box>
            
           {cover && (
                <div>
                    <Image width="100%" height="250px" src={config.strapiUrl + cover.formats.small.url} alt={`${title} photo`} />
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
