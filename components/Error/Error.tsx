import Layout from "@components/Layout"

const Error = ({ status }) => {
  return(
    <Layout>
      <h1>{status}</h1>
    </Layout>
  );

}

export default Error;
