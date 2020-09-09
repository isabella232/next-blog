import { FunctionComponent } from 'react';
import Link from 'next/link';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { useTheme } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import MenuBookIcon from '@material-ui/icons/MenuBook';

const Navbar: FunctionComponent = () => {

    const theme = useTheme();
    let containerSize = theme.breakpoints.values.lg;
    return(
        <Box display="flex" justifyContent="center" bgcolor="primary.main" padding={1} minHeight="40px" alignItems="center">
            <Box display="flex"  style={{maxWidth: `${containerSize}px`, width: "100%"}} >

                <Box mr={5}>
                    <Link href="/">
                        <Button>
                            <HomeIcon fontSize="large" />
                        </Button>
                    </Link>
                </Box>

                <Box>
                    <Link href="/recettes">
                        <Button>
                            <Box mr={1}>
                                <MenuBookIcon fontSize="large" />
                            </Box>
                             <span>Voir toutes les recettes</span>
                        </Button>
                    </Link>
                </Box>

            </Box>
           
        </Box>
    );
}

export default Navbar;