import { FunctionComponent } from 'react';
import Link from 'next/link';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { useTheme } from '@material-ui/core/styles';

const Footer: FunctionComponent = () => {

    const theme = useTheme();
    let containerSize = theme.breakpoints.values.lg;
    return(
        <Box display="flex" justifyContent="center" bgcolor="primary.main" padding={1} minHeight="90px" alignItems="center" mt={5}>
            <Box display="flex"  style={{maxWidth: `${containerSize}px`, width: "100%"}} justifyContent="center">

                <Box>
                    <Link href="/">
                        <Button size="small" >
                            Politique de confidentialité
                        </Button>
                    </Link>
                </Box>

            </Box>
           
        </Box>
    );
}

export default Footer;