import Link from "next/link";

/**
 * `Navbar` is a functional component that returns a navigation bar.
 *
 * The navigation bar includes a brand logo titled 'Portfolio' which links to the
 * homepage. It also includes a toggle button for collapsing and expanding the
 * navigation links on smaller screens.
 *
 * The navigation links include 'Github' and 'Blog'. 'Github' links to the '/github'
 * route and 'Blog' links to the '/blog' route. The links are displayed on the right
 * side of the navigation bar due to the 'ms-auto' class.
 *
 * @returns {JSX.Element} A navigation bar with a brand logo and links to 'Github' and 'Blog'.
 */
const Navbar = () => (
  // Navigation bar with Bootstrap classes
  <nav className="navbar navbar-expand-lg bg-primary-tertiary">
    <div className="container">
      {/* Link to the home page */}
      <Link className="navbar-brand text-light" href="/">
        Portfolio
      </Link>
      {/* Button to toggle navigation menu */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      {/* Navigation menu */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          {/* Link to the Github page */}
          {/* <li className="nav-item"> */}
          <li className="nav-item">
            <Link href="/github" className="nav-link text-light">
              Github
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/resume" className="nav-link text-light">
              Resume
            </Link>
          </li>
          {/* Link to the Linkedin page */}
          <li className="nav-item">
            <Link
              href="https://www.linkedin.com/in/nicolas-zapata-al/"
              target="_blank"
              className="nav-link text-light"
            >
              Linkedin
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
