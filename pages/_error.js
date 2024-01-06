import Layout from "../components/Layout";

const _error = ({statusCode}) => {
  return (
    <Layout>
    {
      statusCode ? (
        <p className="text-center">Could not load you page: Status Code {statusCode}</p>
      ) : (
        <p className="text-center">Could not get this page</p>
      )
    }
    </Layout>
  );
};

export default _error;
