import Layout from "../components/Layout";
import { social } from "../profile";

/**
 * Social profiles page: GitHub card (live data from the GitHub API, with a
 * static fallback if the request fails) and a LinkedIn card.
 *
 * @param {Object} props
 * @param {Object|null} props.user - GitHub user data, or null if the fetch failed
 */
const Social = ({ user }) => {
  const gh = {
    name: user?.name || social.github.name,
    bio: user?.bio || social.github.bio,
    url: user?.html_url || social.github.url,
    avatar: user?.avatar_url || null,
  };

  return (
    <Layout footer={false} title="Find me online 🌐">
      <div className="row py-4">
        <div className="col-md-4 offset-md-2 mb-3">
          <div className="card card-body h-100 text-light text-center bg-secondary">
            <h1>🐙 {gh.name}</h1>
            {gh.avatar ? (
              <img className="rounded img-fluid" src={gh.avatar} alt={`${gh.name} avatar`} />
            ) : (
              <img className="img-fluid mx-auto" src="/github.png" alt="GitHub" style={{ maxWidth: 120 }} />
            )}
            <p className="mt-3">👨‍💻 {gh.bio}</p>
            <a href={gh.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-auto">
              Go to my GitHub! 🚀
            </a>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card card-body h-100 text-light text-center bg-secondary">
            <h1>💼 {social.linkedin.name}</h1>
            <img className="img-fluid mx-auto" src="/linkedin.png" alt="LinkedIn" style={{ maxWidth: 120 }} />
            <p className="mt-3">👨‍💻 {social.linkedin.headline}</p>
            <a href={social.linkedin.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-auto">
              Go to my LinkedIn! 🤝
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

/**
 * Fetches the GitHub profile. Never throws: on failure `user` is null and the
 * page falls back to static data from profile.js.
 */
export async function getServerSideProps() {
  try {
    const res = await fetch("https://api.github.com/users/niczapata");
    if (!res.ok) return { props: { user: null } };
    return { props: { user: await res.json() } };
  } catch {
    return { props: { user: null } };
  }
}

export default Social;
