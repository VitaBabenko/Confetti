import { useState, useEffect } from "react";

import { Hero, About, Reviews, Contacts } from "./sections";
import { Header, Footer } from "./components";

export const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About mobile={isMobile} />
        <Reviews />
        <Contacts />
      </main>
      <Footer />
    </>
  );
};
