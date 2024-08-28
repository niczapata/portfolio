import Layout from "../components/Layout";
import { skills, experiences, projects } from "../profile";
import Link from "next/link";

/**
 * `Index` is a functional component that displays the homepage of a portfolio.
 *
 * It returns a `Layout` component which contains a header card with a profile image,
 * name, job title, a brief description, and a 'Hire me!' button. It also includes a
 * section for displaying skills, experiences and a portfolio.
 *
 * The header card is divided into two columns:
 * - The first column (col-md-4) contains an image.
 * - The second column (col-md-8) contains the name, job title, a brief description,
 *   and a 'Hire me!' button.
 *
 * The skills section maps through an array of `skills` and for each skill, it displays
 * the skill name and a progress bar indicating the skill level.
 *
 * The experiences section maps through an array of `experiences` and for each experience,
 * it displays the title, duration, and description.
 *
 * The portfolio section maps through an array of `projects` and for each project, it
 * displays an image, name, and description.
 *
 * @returns {JSX.Element} A `Layout` component containing the header card with profile details,
 * skills, experiences, and a portfolio.
 */
const Index = () => (
  <Layout>
    {/* Header card */}
    <header className="row">
      <div className="col-md-12">
        <div className="card card-body bg-secondary text-light">
          <div className="row">
            <div className="col-md-4">
              <img
                src="nicolas.jpg"
                className="rounded img-fluid"
                alt="Nicolas Zapata"
              />
            </div>
            <div className="col-md-8">
              <h1>Nicolas Zapata</h1>
              <h3>Software Engineer</h3>
              <p>
                I am a informatic engineer with a lot of years developing
                pieces of software for diferent enviroments such as Mobile 📱, Desktop💻 and Web🌐.
                I have much knoledge in a lot of programming lenguages, frameworks and libraries 🧠🤓.

              </p>
              <p>
                I started in the Java development🍵, I did a Carreer on Platzi so I learned Java for personal
                and enterprise uses, equals in Android development, I did few courses there too.
             </p>
             <p>
               This lastest years, I started to develop in Python🐍 and JavaScript, I was interested in the 
               Data Scients so I did a lot of projects with my classmates when I was in the university🧑‍🔬, after, I got my first formal 
               job as Developer after I finished my bachelor, we did a lot of custom modules in Odoo using Python, 
               XML, Sass, and JavaScript🏢.
             </p>
                <a href="https://www.linkedin.com/in/nicolas-zapata-alzate/">
                  <img src="linkedin.png" alt="Linkedin_header" className="img-fluid" />
                  Watch my Linkedin!🤓
                </a>
            </div>
          </div>
        </div>
      </div>
    </header>

    <br/>

    {/* Second section */}
    <div className="row">
      <div className="col-md-4">
        <div className="card bg-light">
          <div className="card-body">
            <h1>Skills💪</h1>
            {skills.map(({ skill, percentage }, i) => (
              <div className="py-3" key={i}>
                <h5>{skill}</h5>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${percentage}%` }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="col-md-8">
        <div className="card bg-light">
          <div className="card-body">
            <h1>Experience👨‍💻</h1>
            <ul>
              {experiences.map(({ title, from, to, description }, index) => (
                <li key={index}>
                  <h3>{title}</h3>
                  <h5>
                    {from} - {to}
                  </h5>
                  <p>{description}</p>
                </li>
              ))}
            </ul>
            <div>
              <Link href="/experiences" className="btn btn-primary">
              <img src="linkedin.png" alt="Linkedin" className="img-fluid" />
                Know More about My Experience in my Linkedin
              </Link>
            </div>
         </div>
        </div>
      </div>
    </div>

    <br/>

    {/* Portfolio */}
    <div className="row">
      <div className="col-md-12">
        <div className="card card-body bg-light">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center text-dark">My Projects📎🤙</h1>
            </div>
            {projects.map(({ name, description, image, repo }, i) => (
              <div className="col-md-4 p-2" key={i}>
                <div className="card h-100">
                  <div className="overflow">
                    <img src={`/${image}`} alt="" className="card-img-top" />
                  </div>
                  <div className="card-body">
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <Link className="btn btn-outline-light" href={`${repo}`}>
                      <img src="github.png" alt="Github" className="img-fluid" />
                      Watch Repository
                    </Link>
                  </div>
                </div>
              </div>
            ))}
            <div className="text-center">
              <Link href="https://github.com/NicolasZapata?tab=repositories" className="btn btn-outline-light">
                <img src="github.png" alt="Github" className="img-fluid" />
                Watch More Projects in my GitHub!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Index;
