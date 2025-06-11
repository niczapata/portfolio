import Layout from "../components/Layout";
import Error from "./_error";

/**
 * GitHub profile page component for Next.js applications.
 * 
 * Displays a user's GitHub profile information including name, avatar, bio,
 * and a link to their GitHub account. If an error occurs during data fetching,
 * it renders the custom error page.
 * 
 * @param {Object} props - Component props
 * @param {Object} props.user - GitHub user data object
 * @param {number} [props.statusCode] - HTTP status code from data fetching (if error)
 * @returns {JSX.Element} Rendered GitHub profile page or error component
 */
const Github = ({ user, statusCode }) => {
  if (statusCode) {
    return <Error />;
  }

  return (
    <Layout footer={false}>
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="card card-body text-light text-center bg-secondary">
            <h1>{user.name}</h1>
            <img className="rounded" src={user.avatar_url} alt="" />
            <p>{user.bio}</p>
            <a href={user.html_url} target="_blank" className="btn btn-primary">
              Go to my account!
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

/**
 * Next.js server-side data fetching function for GitHub profile data.
 * 
 * Fetches user data from GitHub API for the specified username ('niczapata').
 * Returns the fetched data and status code as props to the page component.
 * 
 * @returns {Promise<Object>} Promise that resolves to an object containing:
 *   props: { 
 *     user: Object - GitHub user data,
 *     statusCode: number | boolean - HTTP status code if error, otherwise false
 *   }
 */
export async function getServerSideProps() {
  const res = await fetch("https://api.github.com/users/niczapata");
  const data = await res.json();
  const statusCode = res.status > 200 ? res.status : false;
  return {
    props: {
      user: data,
      statusCode,
    },
  };
}

export default Github;
