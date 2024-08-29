import Layout from "../components/Layout";
import Link from "next/link";

/**
 * Render a custom 404 page
 * @returns {JSX.Element} The custom 404 page
 */
const custom404 = () => (
  <Layout> {/* Render the Layout component */}
    <div className="text-center"> {/* Center the content */}
      <h1>404</h1> {/* Display the 404 heading */}
      <p>
        This page dont exist, please return to <Link href="/">Home</Link> {/* Display the message and a link to the Home page */}
      </p>
    </div>
  </Layout>
);

export default custom404;
