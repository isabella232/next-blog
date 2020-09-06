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

    const getStyles = () => {
    
        let styles = {
            container: {
                maxWidth : "1280px",
                marginLeft: 'auto',
                marginRight: 'auto',
            },
            containerFull: {
                height: '280px'
            },
            containerFullAuto: {
                height: 'auto'
            }
        };

        return styles;
    }

    const getClassName = (type : string) : string => {

        const useStyles = makeStyles(getStyles());
        const classes = useStyles();
        switch(type) {
            case 'full':
              return  classes.containerFull;
            case 'fullAuto':
                return  classes.containerFullAuto;
            default:
              return classes.container;
          }

    }

    return(
        <Box className={getClassName(props.type)} {...props}>
            {props.children}
        </Box>
    );
}

export default Container;