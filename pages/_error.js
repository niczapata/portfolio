import Layout from "../components/Layout";

/**
 * Custom error page component for Next.js applications.
 * 
 * This component handles both client-side and server-side errors by displaying
 * appropriate error messages based on the HTTP status code. It uses Next.js's
 * built-in error handling mechanism which passes the statusCode as a prop.
 * 
 * @param {Object} props - Component props
 * @param {number} [props.statusCode] - HTTP status code from the error response
 * @returns {JSX.Element} Rendered error page with contextual message
 */
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
