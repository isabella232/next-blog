// import App from 'next/app'
import Layout from "@components/Layout"
import { AppProps } from 'next/app'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import '../style.css';
import NextApp from 'next/app'

const theme = createMuiTheme({
    palette: {
        primary: {
           main: '#80E1CE',
        },
        secondary: {
            main: '#E18093',
      },
        background: {
            default: '#f7f7f7',
        },
    },
    breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 1025,
          lg: 1280,
          xl: 1920,
        },
    },
});

export default class App extends NextApp {
    componentDidMount() {
        const jssStyles = document.querySelector('#jss-server-side')
        if (jssStyles && jssStyles.parentNode)
        jssStyles.parentNode.removeChild(jssStyles)
    }
    render() {
        const { Component, pageProps } = this.props
        return (
        <ThemeProvider theme={theme}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
        )
    }
}

// tuto : https://medium.com/javascript-in-plain-english/ssr-with-next-js-styled-components-and-material-ui-b1e88ac11dfa