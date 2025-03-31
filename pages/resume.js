import Layout from "../components/Layout";
import _error from "./_error";
import Link from "next/link";

export default function Resume() {
  return (
    <Layout>
      <div class="row">
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">🇪🇸 Spanish Resume</h5>
              <p class="card-text">Resume wrotten in Spanish</p>
              <a href="/es_cv.pdf" download={true} class="btn btn-primary">
                Download
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">🇬🇧 English Resume</h5>
              <p class="card-text">Resume wrotten in English</p>
              <a href="/en_cv.pdf" download={true} class="btn btn-primary">
                Download
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
