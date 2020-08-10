import { FunctionComponent } from 'react';
import Link from 'next/link';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { useTheme } from '@material-ui/core/styles';

const Navbar: FunctionComponent = () => {

    const theme = useTheme();
    let containerSize = theme.breakpoints.values.lg;
    return(
        <Box display="flex" justifyContent="center" bgcolor="primary.main" padding={1} minHeight="40px" alignItems="center">
            <Box display="flex"  style={{maxWidth: `${containerSize}px`, width: "100%"}}>

                <Box mr={5}>
                    <Link href="/">
                        <Button>
                            logo
                        </Button>
                    </Link>
                </Box>

                <Box>
                    <Link href="/recettes">
                        <Button >
                            Recettes
                        </Button>
                    </Link>
                    <Link href="/recettes">
                        <Button >
                            page 2
                        </Button>
                    </Link>
                </Box>

            </Box>
           
        </Box>
    );
}

export default Navbar;