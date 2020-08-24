import { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

type TitleProps = {
    size?: number,
    color?: string,
    mb?: number,
}

const Title: FunctionComponent<TitleProps> = (props) => {
    const { size, ...otherProps } =  props;
    let title = {
        fontWeight: 100,
        lineHeight: 1.125,
    };

    if(size === 1){
        title = { ...title, fontSize: "3rem"}
    }

    
    const useStyles = makeStyles({title});
    const classes = useStyles();

    return <Box component={`h${size}`} {...otherProps}  className={classes.title}  >{props.children}</Box>

}

export default Title;