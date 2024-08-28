import Navbar from "./Navbar";
import { useEffect } from "react";
import { useRouter } from "next/router";
import nProgress from "nprogress";

/**
 * Layout component for the application
 * 
 * @param {Object} props - The properties for the Layout component
 * @param {React.ReactNode} props.children - The child components
 * @param {string} props.title - The title for the layout
 * @param {boolean} props.footer - Whether to display the footer
 * @param {boolean} props.dark - Whether to use dark mode
 */
const Layout = ({ children, title, footer = true, dark = false }) => {
  const router = useRouter();

/**
 * This is an effect hook that is executed after the component is mounted and 
 * every time the component updates. It sets up event listeners for route changes 
 * using the `router.events.on` method from Next.js router.
 *
 * When a route change starts, it logs the URL of the new route and starts the 
 * nProgress loading bar. When a route change completes, it stops the nProgress 
 * loading bar.
 *
 * It also returns a cleanup function that removes the event listener for 
 * 'routeChangeStart' when the component is unmounted.
 *
 * @param {type} url - The URL of the new route when a route change starts.
 * @returns {undefined} The effect does not return anything.
 */
useEffect(() => {
  const handleRouteChange = (url) => {
    console.log(url);
    nProgress.start();
  };

  router.events.on("routeChangeStart", handleRouteChange);
  router.events.on("routeChangeComplete", () => nProgress.done());
  return () => {
    router.events.off("routeChangeStart", handleRouteChange);
  };
}, []);


  // Render the layout with the specified components and properties
  return (
    <div className={dark ? 'bg-dark' : ''}>
      <Navbar />

      <main className="container py-4">
        {title && (
          <h1 className="text-center">
            {title}
          </h1>
        )}

        {children}
      </main>

      {footer && (
        <footer className="bg-primary text-light text-center">
          <div className="container p-4">
            <h1>&copy; Nicolás Zapata Alzate's Portfolio</h1>
            <p>{new Date().getFullYear()}</p>
            <p>All rights reserve</p>
            <p>This page was create with React using Next.js</p>
          </div>
        </footer>
      )}
    </div>
  );
};

export default Layout;
