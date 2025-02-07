/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import FlippingCard from "../components/FlippingCard";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const [isFlipped, setIsFlipped] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // Function to check screen size
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 1280);
    };

    // Initial check
    checkScreenSize();

    // Add resize listener
    window.addEventListener("resize", checkScreenSize);

    // Cleanup
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    let initialDelay;
    let interval;

    if (isSmallScreen) {
      // Only set up animation if screen is small
      initialDelay = setTimeout(() => {
        setIsFlipped(true);
      }, 1000);

      interval = setInterval(() => {
        setIsFlipped((prev) => !prev);
      }, 4000);
    } else {
      // Reset to front side on large screens
      setIsFlipped(false);
    }

    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
    };
  }, [isSmallScreen]);

  return (
    <section className="h-[calc(100vh-(--spacing(16)))] py-4 md:py-6 px-4 sm:px-10 lg:px-32 2xl:px-44 flex flex-col grow gap-3 md:gap-5 xl:gap-6 items-center justify-center">
      {/* Page Header */}
      <h1
        className={`text-2xl md:text-4xl font-mclaren font-bold text-[#fffbfc] text-center leading-snug transform transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
        }`}
      >
        Recent Projects
      </h1>

      <div
        className={`flex-1 w-full min-h-0 grid grid-cols-2 sm:flex sm:flex-row md:grid md:grid-cols-2 xl:flex xl:flex-row gap-2 md:gap-3 xl:gap-2 xl:px-10 items-center justify-center transform transition-all duration-700 delay-150 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
        }`}
      >
        {/* Kemudi */}
        <FlippingCard
          backgroundImage="/img/kemudi-thumb.png"
          year="2024"
          category="Web Development"
          title="KEMUDI"
          description="A web-based platform transforming driver education by connecting learners with schools through interactive lessons, smart quizzes, and seamless scheduling."
          initialDelay={1000}
        />

        {/* 70 RAD */}
        <FlippingCard
          backgroundImage="/img/70rad-thumb.png"
          year="2024"
          category="UI Design"
          title="70RAD Design Challenge"
          description="A self-driven design exploration challenging my creative boundaries through daily UI recreations and focused 10-day design projects, documenting my skill progression."
          initialDelay={1200}
        />

        {/* Logo SI */}
        <FlippingCard
          backgroundImage="/img/si-logo-thumb.png"
          year="2023"
          category="Logo Design"
          title="Information Systems of ITATS"
          description="Navigating a design challenge with minimal experience, I created a winning logo that became the official emblem for my college department."
          initialDelay={1400}
        />

        {/* Archdaily UX Case Study */}
        <FlippingCard
          backgroundImage="/img/archdaily-thumb.png"
          year="2023"
          category="Case Study"
          title="Archdaily UX Case Study"
          description="Crafting a comprehensive UX case study with permission from Archdaily, diving deep into design principles and gaining valuable industry insights."
          initialDelay={1600}
        />
      </div>
    </section>
  );
};

export default Projects;
