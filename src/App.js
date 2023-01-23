import { useState } from "react";
import { animated, config, useSpring } from "react-spring";
import { About, Content, Footer, Header, Home } from "./components";
import { Route, Routes } from "react-router-dom";

const App = () => {
  // Background Scroll Function
  window.addEventListener(
    "scroll",
    () => {
      document.body.style.setProperty(
        "--scroll",
        window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
      );
    },
    false
  );

  const noDelay = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: config.slow,
    delay: 100,
  });
  const shortDelay = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: config.slow,
    delay: 500,
  });
  const mediumDelay = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: config.slow,
    delay: 900,
  });
  const longDelay = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: config.slow,
    delay: 1200,
  });
  const [showContent, setShowContent] = useState(false);

  return (
    <>
      <div className="site-wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
