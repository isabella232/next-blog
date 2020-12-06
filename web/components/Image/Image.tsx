
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'

const Image = (props) => {

    const 
        { width, height, src, alt, objectFit = true, img, ...otherProps } :
        { width: string, height?: string, src: string, alt: string, objectFit: boolean, img: any } 
    = props;

    /** Style */

    let styles = {
        square: {
            height: `${height}`,
            width: `${width}`,
            objectFit: `${objectFit === true ? 'cover' : 'fill'}`,
        },
    };

    const useStyles = makeStyles(styles);
    const classes = useStyles();

    /**
     * Get smallest image format, if the small format doesn't exist return just the image
     * @param img strapi img object
     */
    const getImage = (img) : string => {
        if(img.formats.small === undefined) {
            return img.url
        }
        return img.formats.small.url;
    }

    return <Box 
            component={"img"} 
            src={process.env.IMG_URL + getImage(img)} 
            alt={alt} 
            className={classes.square} 
            {...otherProps} 
        ></Box>
}

export default Image;