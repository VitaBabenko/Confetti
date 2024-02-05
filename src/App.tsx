import { useState, useEffect } from "react";

import { Header, Hero, About } from "./components";

import "./App.scss";

function App() {
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
      </main>
    </>
  );
}

export default App;
