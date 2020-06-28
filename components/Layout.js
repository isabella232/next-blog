import Head from 'next/head';
import Navbar from '../components/Navbar';

const Layout = (props) => {
    return(
        <div>
            <Head>
                <title>web app</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.2/css/bulma.min.css" />
                <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
            </Head>
            <Navbar />
            <div className="container">
                {props.children}
            </div>
        </div>
    )
}

export default Layout;