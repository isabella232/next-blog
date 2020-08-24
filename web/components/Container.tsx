import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import { FunctionComponent } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Box from '@material-ui/core/Box';

type ContainerProps = {
    bgcolor?: string,
    height?: number,
    type?: string
    mt?: number,
    display?: string,
    justifyContent?: string
}

const Container : FunctionComponent<ContainerProps> = (props) => {

    const getMaxWidth = (theme) : string => {
        const isSmallScreen = (!useMediaQuery(theme.breakpoints.up('sm')));
        const isMediumScreen = (!useMediaQuery(theme.breakpoints.up('md')));

        if(isSmallScreen === true) return `${theme.breakpoints.values.sm}px`;

        if(isMediumScreen === true) return `${theme.breakpoints.values.md}px`;

        return `${theme.breakpoints.values.lg}px`;
    }

    const theme = useTheme();

    let styles = {
        container: {
            maxWidth : getMaxWidth(theme),
            flexGrow: 1,
            marginLeft: 'auto',
            marginRight: 'auto',
            width: 'auto'
        },
        containerFull: {
            height: '280px',
        }
    };

    const useStyles = makeStyles(styles);
    const classes = useStyles();
    
    return(
        <Box className={props.type === "full" ? classes.containerFull : classes.container} {...props}>
            {props.children}
        </Box>
    );
}

export default Container;