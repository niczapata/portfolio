import Navbar from "./Navbar";
import { useEffect } from "react";
import { useRouter } from "next/router";
import nProgress from "nprogress";

const Layout = ({ children, title, footer = true, dark = false }) => {
  const router = useRouter();

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
        <footer className="bg-dark text-light text-center">
          <div className="container p-4">
            <h1>&copy; Nicolás Zapata Portfolio</h1>
            <p>2018 - {new Date().getFullYear()}</p>
            <p>All rights reserve</p>
            <p>This page was create with React using Next.js</p>
          </div>
        </footer>
      )}
    </div>
  );
};

export default Layout;
