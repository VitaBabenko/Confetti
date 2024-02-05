import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { About } from "./components/about";

// import styles from "./App.module.scss";
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
    <Router>
      <Header />
      <main>
        <Hero />
        <About mobile={isMobile} />
      </main>
    </Router>
  );
}

export default App;
