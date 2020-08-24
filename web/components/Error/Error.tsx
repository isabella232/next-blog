import Layout from "@components/Layout"
import { FunctionComponent } from 'react';

const Error = ({ status : number }) : JSX.Element => {
  return(
    <Layout>
      <h1>{status}</h1>
    </Layout>
  );

}

export default Error;
