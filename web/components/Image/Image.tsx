
import { makeStyles } from '@material-ui/core/styles';
import { FunctionComponent } from 'react';
import Box from '@material-ui/core/Box'

const Image = (props) : JSX.Element => {

    const { width, height, src, alt, ...otherProps } = props;

    let styles : object = {
        square: {
            height: `${height}`,
            width: `${width}`,
            objectFit: "cover"
        },
    };

    const useStyles = makeStyles(styles);
    const classes = useStyles();

    return <Box component={"img"} src={src} alt={alt} className={classes.square} {...otherProps} ></Box>
}

export default Image;