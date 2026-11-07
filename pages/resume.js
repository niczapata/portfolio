import Layout from "../components/Layout";

export default function Resume() {
  return (
    <Layout title="Resume">
      <div className="row">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">🇪🇸 Spanish Resume</h5>
              <p className="card-text">Resume written in Spanish</p>
              <a href="/es_cv.pdf" download={true} className="btn btn-primary">
                Download
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">🇬🇧 English Resume</h5>
              <p className="card-text">Resume written in English</p>
              <a href="/en_cv.pdf" download={true} className="btn btn-primary">
                Download
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
