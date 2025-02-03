/* eslint-disable no-unused-vars */
import React, { useState, useEffect, Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// Import your components using React.lazy
const Navbar = React.lazy(() => import("./components/Navbar"));
const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const Projects = React.lazy(() => import("./pages/Projects"));
const Footer = React.lazy(() => import("./components/Footer"));
const Resume = React.lazy(() => import("./pages/Resume"));
import LoadingScreen from "./components/LoadingScreen";
import RivePreview from "./components/RivePreview";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [isRiveReady, setIsRiveReady] = useState(false);

  const handleLoadComplete = () => {
    setIsRiveReady(true);
  };

  useEffect(() => {
    if (isRiveReady) {
      // Add a small delay before hiding the loading screen
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
  }, [isRiveReady]);

  // return <RivePreview />

  return (
    <main className="w-full h-dvh flex flex-col bg-[#010400]">
      {isLoading ? (
        <LoadingScreen onLoadComplete={handleLoadComplete} />
      ) : (
        <Router>
          <Suspense fallback={<div className="bg-[#010400]"></div>}>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
            <Footer />
          </Suspense>
        </Router>
      )}
    </main>
  );
};

export default App;
