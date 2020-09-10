import { FunctionComponent } from 'react';
import CookieConsent, { Cookies } from "react-cookie-consent";
import { useTheme } from '@material-ui/core/styles';


const CookieBanner: FunctionComponent = (props) => {

    const theme = useTheme();
    let backgroundColor = theme.palette.secondary.light;

    return(
        <CookieConsent
            location="bottom"
            buttonText="Accepter"
            style={{ background: backgroundColor }}
            buttonStyle={{ color: "#212121", fontSize: "13px" }}
            >
            Ce site utilise des cookies pour améliorer l'expérience des utilisateurs.
        </CookieConsent>
    )
}

export default CookieBanner;