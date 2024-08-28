import Layout from "../components/Layout";
import _error from "./_error";

const Github = ({ user, statusCode }) => {
  if (statusCode) {
    return <Error />;
  }

  return (
    <Layout footer={false}>
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="card card-body text-light text-center bg-secondary" >
            <h1>{user.name}</h1>
            <img className="rounded" src={user.avatar_url} alt="" />
            <p>{user.bio}</p>
            <a
              href={user.html_url}
              target="_blank"
              className="btn btn-primary"
            >
              Go to my account!
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  const res = await fetch("https://api.github.com/users/NicolasZapata");
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
