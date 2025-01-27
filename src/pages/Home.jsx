/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Quotes from "../components/Quotes";
import ScrollToTopButton from "../components/ScrollToTopButton";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToBottom = (duration) => {
    const start = window.scrollY;
    const end = document.body.scrollHeight;
    const distance = end - start;
    const startTime = performance.now();

    const easeInOutQuad = (t) => {
      return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    };

    const scroll = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1); // Cap at 1
      const easing = easeInOutQuad(progress);
      const scrollY = start + distance * easing;

      window.scrollTo(0, scrollY);

      if (elapsed < duration) {
        requestAnimationFrame(scroll);
      }
    };

    requestAnimationFrame(scroll);
  };

  return (
    <section className="pt-10 pb-16 px-32 flex flex-col grow items-center justify-center">
      <ScrollToTopButton />

      <h1 className="text-7xl font-mclaren font-bold text-[#fffbfc] text-center leading-snug">
        <span
          className={`inline-block transform transition-all duration-700 delay-[0ms] ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
          }`}
        >
          I&nbsp;
        </span>
        <span
          className={`inline-block transform transition-all duration-700 delay-[100ms] ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
          }`}
        >
          do&nbsp;
        </span>
        <span
          className={`inline-block transform transition-all duration-700 delay-[200ms] ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
          }`}
        >
          Design&nbsp;
        </span>
        <span
          className={`inline-block transform transition-all duration-700 delay-[300ms] ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
          }`}
        >
          during&nbsp;
        </span>
        <span
          className={`inline-block transform transition-all duration-700 delay-[400ms] ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
          }`}
        >
          the&nbsp;
        </span>
        <span
          className={`inline-block transform transition-all duration-700 delay-[500ms] text-[#CAFE48] ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
          }`}
        >
          Day&nbsp;
        </span>
        <span
          className={`inline-block transform transition-all duration-700 delay-[600ms] ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
          }`}
        >
          then&nbsp;
        </span>
        <span
          className={`inline-block transform transition-all duration-700 delay-[700ms] ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
          }`}
        >
          Code&nbsp;
        </span>
        <span
          className={`inline-block transform transition-all duration-700 delay-[800ms] ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
          }`}
        >
          at&nbsp;
        </span>
        <span
          className={`inline-block transform transition-all duration-700 delay-[900ms] text-[#57467B] ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
          }`}
        >
          Night
        </span>
      </h1>

      {/* Animated Introduction Text */}
      <div
        className={`mt-3 font-nunito font-light text-lg text-[#fffbfc]/75 text-center leading-tight transform transition-all duration-700 delay-[1000ms] ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
        }`}
      >
        <p>Hi, I&rsquo;m Yodanis, an IT Enthusiast with a diverse skill set.</p>
        <p>
          Currently working on to figure out what to do in the tech world 🤭
        </p>
      </div>

      {/* Animated Buttons */}
      <div
        className={`flex flex-row gap-6 items-center justify-center mt-6 transform transition-all duration-700 delay-[1200ms] ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
        }`}
      >
        <button
          className="font-nunito font-medium text-lg cursor-pointer text-[#fffbfc]/30 px-10 py-5 hover:bg-[#fffbfc]/5 duration-500"
          onClick={() => scrollToBottom(1500)}
        >
          Connect with me
        </button>
        <Link
          to="/projects"
          className="relative font-nunito font-extrabold text-lg text-[#010400] hover:text-[#CAFE48] bg-[#fffbfc] hover:bg-[#57467B] px-10 py-5 duration-500"
        >
          View Projects
        </Link>
      </div>

      <h1
        className={`mt-24 text-4xl font-mclaren font-bold text-[#fffbfc] text-center leading-snug transform transition-all duration-700 delay-[1400ms] ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
        }`}
      >
        What I really want to do?
      </h1>

      <p
        className={`mt-2 w-96 font-nunito font-light text-base text-[#fffbfc]/75 text-center leading-tight transform transition-all duration-700 delay-[1600ms] ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
        }`}
      >
        I haven&rsquo;t decided yet, since I love both of them equally. (Oh, do
        please hover over the image below!)
      </p>

      <div
        className={`mt-8 w-full grid grid-cols-2 gap-4 transform transition-all duration-700 delay-[1800ms] ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
        }`}
      >
        {/* UI Design Card */}
        <div className="group/item flex flex-col justify-end w-full h-[22rem] overflow-hidden bg-[url('/img/si-logo-thumb.png')] bg-bottom cursor-pointer rounded-sm saturate-0 hover:saturate-100 duration-700 relative">
          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-[#57467B] transition-transform duration-700 transform translate-y-full group-hover/item:translate-y-0">
            <div className="w-full h-full flex flex-col justify-end gap-1">
              <h2 className="font-mclaren font-bold text-2xl text-[#CAFE48]">
                User Interface Design
              </h2>
              <p className="font-nunito font-light text-base text-[#CAFE48]/85">
                Why only UI? While I admire the world of UX Design, I
                haven&rsquo;t yet had the opportunity to practice it or work on
                a project that truly immerses me in that space. UI Design feels
                like a natural starting point, and I&rsquo;m excited to build a
                strong foundation before diving deeper into UX.
              </p>
            </div>
          </div>
        </div>

        {/* Web Development Card */}
        <div className="group/item flex flex-col justify-end w-full h-[22rem] overflow-hidden bg-[url('/img/webdev.png')] bg-bottom cursor-pointer rounded-sm saturate-0 hover:saturate-100 duration-700 relative">
          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-[#57467B] transition-transform duration-700 transform translate-y-full group-hover/item:translate-y-0">
            <div className="w-full h-full flex flex-col justify-end gap-1">
              <h2 className="font-mclaren font-bold text-2xl text-[#CAFE48]">
                Web Development
              </h2>
              <p className="font-nunito font-light text-base text-[#CAFE48]/85">
                It&rsquo;s a field that excites me because the possibilities
                feel endless. I&rsquo;ve recently started exploring frameworks
                like Tailwind CSS and Laravel. The ability to build something
                tangible—not just daydream about it, but see it come to life
                right in front of my eyes—is truly indescribable.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h1 className="mt-24 text-4xl font-mclaren font-bold text-[#fffbfc] text-center leading-snug">
        My Journey so far
      </h1>
      <p className="mt-2 w-96 font-nunito font-light text-base text-[#fffbfc]/75 text-center leading-tight">
        Come along as I share the steps that brought me here, one chapter at a
        time.
      </p>

      <div className="relative flex flex-col gap-6 justify-center items-center mt-8">
        <div className="absolute top-2 transform bg-linear-to-b from-[#555253] via-90% via-[#555253] to-95% to-[#555253]/5 w-[2px] h-full"></div>

        <div className="relative grid grid-cols-[1fr_2.5rem_1fr] gap-5">
          {/* Date */}
          <div className="flex justify-end items-stretch">
            <h2 className="font-mclaren font-medium text-2xl text-right text-[#fffbfc]">
              July, 2002
            </h2>
          </div>

          {/* Middle Dots */}
          <div className="flex justify-center pt-2">
            <div className="rounded-full w-4 h-4 bg-[#fffbfc]"></div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-3">
            <p className="font-nunito font-light text-base text-justify text-[#fffbfc] leading-snug pt-[5px] pr-24">
              I was born in July 2002, a curious child eager to explore the
              world around me.
            </p>

            <img
              src="https://picsum.photos/700/500"
              alt="Placeholder"
              className="pr-24 object-cover object-center"
            />
          </div>
        </div>

        <div className="relative grid grid-cols-[1fr_2.5rem_1fr] gap-5">
          {/* Date */}
          <div className="flex justify-end items-stretch">
            <h2 className="font-mclaren font-medium text-2xl text-right text-[#fffbfc]">
              January, 2007
            </h2>
          </div>

          {/* Middle Dots */}
          <div className="flex justify-center pt-2">
            <div className="rounded-full w-4 h-4 bg-[#fffbfc]"></div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-3">
            <p className="font-nunito font-light text-base text-justify text-[#fffbfc] leading-snug pt-[5px] pr-24">
              I moved from Surabaya to the neighboring town of Sidoarjo. I
              didn’t fully understand my feelings about the change, but I
              learned to adapt and make do with my new surroundings.
            </p>

            <img
              src="https://picsum.photos/700/500"
              alt="Placeholder"
              className="pr-24 object-cover object-center"
            />
          </div>
        </div>

        <div className="relative grid grid-cols-[1fr_2.5rem_1fr] gap-5">
          {/* Date */}
          <div className="flex justify-end items-stretch">
            <h2 className="font-mclaren font-medium text-2xl text-right text-[#fffbfc]">
              August, 2014
            </h2>
          </div>

          {/* Middle Dots */}
          <div className="flex justify-center pt-2">
            <div className="rounded-full w-4 h-4 bg-[#fffbfc]"></div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-3">
            <p className="font-nunito font-light text-base text-justify text-[#fffbfc] leading-snug pt-[5px] pr-24">
              It marked the start of my junior high years, where I joined
              multiple organizations and discovered what felt like my first
              passion—video production.
            </p>

            <img
              src="https://picsum.photos/700/500"
              alt="Placeholder"
              className="pr-24 object-cover object-center"
            />
          </div>
        </div>

        <div className="relative grid grid-cols-[1fr_2.5rem_1fr] gap-5">
          {/* Date */}
          <div className="flex justify-end items-stretch">
            <h2 className="font-mclaren font-medium text-2xl text-right text-[#fffbfc]">
              July, 2017
            </h2>
          </div>

          {/* Middle Dots */}
          <div className="flex justify-center pt-2">
            <div className="rounded-full w-4 h-4 bg-[#fffbfc]"></div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-3">
            <p className="font-nunito font-light text-base text-justify text-[#fffbfc] leading-snug pt-[5px] pr-24">
              My high school years began in July 2017. By my second year, I
              focused on my Multimedia major, sharpening my video production
              skills and discovering my passion for UI/UX Design.
            </p>

            <img
              src="https://picsum.photos/700/500"
              alt="Placeholder"
              className="pr-24 object-cover object-center"
            />
          </div>
        </div>

        <div className="relative grid grid-cols-[1fr_2.5rem_1fr] gap-5">
          {/* Date */}
          <div className="flex justify-end items-stretch">
            <h2 className="font-mclaren font-medium text-2xl text-right text-[#fffbfc]">
              September, 2020
            </h2>
          </div>

          {/* Middle Dots */}
          <div className="flex justify-center pt-2">
            <div className="rounded-full w-4 h-4 bg-[#fffbfc]"></div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-3">
            <p className="font-nunito font-light text-base text-justify text-[#fffbfc] leading-snug pt-[5px] pr-24">
              Despite the global pandemic, September 2020 marked the start of my
              college journey as an Information Systems student.
            </p>

            <img
              src="https://picsum.photos/700/500"
              alt="Placeholder"
              className="pr-24 object-cover object-center"
            />

            <p className="font-nunito font-light text-base text-justify text-[#fffbfc] leading-snug pt-[5px] pr-24">
              I honed my UI/UX knowledge and, along the way, stumbled upon Web
              Development—a discovery that opened up exciting new possibilities.
            </p>

            <img
              src="https://picsum.photos/700/500"
              alt="Placeholder"
              className="pr-24 object-cover object-center"
            />
          </div>
        </div>

        <div className="relative grid grid-cols-[1fr_2.5rem_1fr] gap-5">
          {/* Date */}
          <div className="flex justify-end items-stretch">
            <h2 className="font-mclaren font-medium text-2xl text-right text-[#fffbfc]">
              December, 2024
            </h2>
          </div>

          {/* Middle Dots */}
          <div className="flex justify-center pt-2">
            <div className="rounded-full w-4 h-4 bg-[#fffbfc]"></div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-3">
            <p className="font-nunito font-light text-base text-justify text-[#fffbfc] leading-snug pt-[5px] pr-24">
              This marked the end of my educational journey with the submission
              of my final assignment—a web-based app for a driving school using
              the incremental model.
            </p>

            <img
              src="https://picsum.photos/700/500"
              alt="Placeholder"
              className="pr-24 object-cover object-center"
            />

            <p className="font-nunito font-light text-base text-justify text-[#fffbfc] leading-snug pt-[5px] pr-24">
              You can find more details on this project on my{" "}
              <Link
                to="/projects"
                className="underline hover:no-underline font-semibold"
              >
                Projects
              </Link>{" "}
              page. While this was a milestone, my journey is far from over, as
              I continue exploring what’s next.
            </p>

            <img
              src="https://picsum.photos/700/500"
              alt="Placeholder"
              className="pr-24 object-cover object-center"
            />
          </div>
        </div>

        <div className="relative grid grid-cols-[1fr_2.5rem_1fr] gap-5">
          {/* Date */}
          <div className="flex justify-end items-stretch">
            <h2 className="font-mclaren font-medium text-2xl text-right text-[#fffbfc]">
              Today
            </h2>
          </div>

          {/* Middle Dots */}
          <div className="flex justify-center pt-2">
            <div className="rounded-full w-4 h-4 bg-[#fffbfc]"></div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-3">
            <p className="font-nunito font-light text-base text-justify text-[#fffbfc] leading-snug pt-[5px] pr-24">
              As of today, I’m open to new opportunities and challenges, with a
              dream of working abroad—perhaps Germany? The chance to grow my
              skills while exploring new cultures excites me, and I’m ready for
              whatever comes next.
            </p>

            <img
              src="https://picsum.photos/700/500"
              alt="Placeholder"
              className="pr-24 object-cover object-center"
            />
          </div>
        </div>

        <div className="relative grid grid-cols-[1fr_2.5rem_1fr] gap-5">
          {/* Date */}
          <div className="flex justify-end items-stretch">
            <h2 className="font-mclaren font-medium text-2xl text-right text-[#fffbfc]">
              May, 2025
            </h2>
          </div>

          {/* Middle Dots */}
          <div className="flex justify-center pt-2">
            <div className="rounded-full w-4 h-4 bg-[#010400] border-2 border-[#fffbfc]"></div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-3">
            <p className="font-nunito font-light text-base text-justify text-[#fffbfc] leading-snug pt-[5px] pr-24">
              I’ll be attending my graduation and officially earning my
              bachelor’s degree. It’s a proud milestone that closes one chapter
              while opening doors to new adventures.
            </p>

            <img
              src="https://picsum.photos/700/500"
              alt="Placeholder"
              className="pr-24 object-cover object-center"
            />
          </div>
        </div>
      </div>

      <div className="mt-20 px-24 w-full">
        <Quotes />
      </div>

      <div className="mt-20 w-full">
        <h1 className="text-4xl font-mclaren font-bold text-[#fffbfc] text-center leading-snug">
          Meet me in digital space!
        </h1>
        <p className="mt-2 font-nunito font-light text-base text-[#fffbfc]/75 text-center leading-tight">
          Find me on my social accounts below - I&rsquo;m always happy to chat
          and share ideas.
        </p>

        <div className="mt-8 px-60 flex flex-row items-center justify-between">
          {/* Github */}
          <div className="w-24 h-24 cursor-pointer bg-none group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full transform transition-all duration-700 group-hover:rotate-y-360"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="#fffbfc"
                className="group-hover:fill-[#CAFE48] duration-700"
                d="M12 .297c-6.63 0-12 5.373-12 12c0 5.303 3.438 9.8 8.205 11.385c.6.113.82-.258.82-.577c0-.285-.01-1.04-.015-2.04c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729c1.205.084 1.838 1.236 1.838 1.236c1.07 1.835 2.809 1.305 3.495.998c.108-.776.417-1.305.76-1.605c-2.665-.3-5.466-1.332-5.466-5.93c0-1.31.465-2.38 1.235-3.22c-.135-.303-.54-1.523.105-3.176c0 0 1.005-.322 3.3 1.23c.96-.267 1.98-.399 3-.405c1.02.006 2.04.138 3 .405c2.28-1.552 3.285-1.23 3.285-1.23c.645 1.653.24 2.873.12 3.176c.765.84 1.23 1.91 1.23 3.22c0 4.61-2.805 5.625-5.475 5.92c.42.36.81 1.096.81 2.22c0 1.606-.015 2.896-.015 3.286c0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
              />
            </svg>
          </div>

          {/* LinkedIn */}
          <div className="w-24 h-24 cursor-pointer bg-none group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full transform transition-all duration-700 group-hover:rotate-y-360"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="#fffbfc"
                className="group-hover:fill-[#CAFE48] duration-700"
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037c-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85c3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.06 2.06 0 0 1-2.063-2.065a2.064 2.064 0 1 1 2.063 2.065m1.782 13.019H3.555V9h3.564zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"
              />
            </svg>
          </div>

          {/* Behance */}
          <div className="w-24 h-24 cursor-pointer bg-none group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full transform transition-all duration-700 group-hover:rotate-y-360"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="#fffbfc"
                className="group-hover:fill-[#CAFE48] duration-700"
                d="M16.969 16.927a2.56 2.56 0 0 0 1.901.677a2.5 2.5 0 0 0 1.531-.475c.362-.235.636-.584.779-.99h2.585a5.1 5.1 0 0 1-1.9 2.896a5.3 5.3 0 0 1-3.091.88a5.8 5.8 0 0 1-2.284-.433a4.9 4.9 0 0 1-1.723-1.211a5.7 5.7 0 0 1-1.08-1.874a7 7 0 0 1-.383-2.393c-.005-.8.129-1.595.396-2.349a5.31 5.31 0 0 1 5.088-3.604a4.9 4.9 0 0 1 2.376.563c.661.362 1.231.87 1.668 1.485a6.2 6.2 0 0 1 .943 2.133c.194.821.263 1.666.205 2.508h-7.699c-.063.79.184 1.574.688 2.187M6.947 4.084a8 8 0 0 1 1.928.198a4.3 4.3 0 0 1 1.49.638c.418.303.748.711.958 1.182c.241.579.357 1.203.341 1.83a3.5 3.5 0 0 1-.506 1.961a3.7 3.7 0 0 1-1.503 1.287a3.6 3.6 0 0 1 2.027 1.437c.464.747.697 1.615.67 2.494a4.6 4.6 0 0 1-.423 2.032a3.95 3.95 0 0 1-1.163 1.413a5.1 5.1 0 0 1-1.683.807a7 7 0 0 1-1.928.259H0V4.084zm-.235 12.9q.464.006.916-.099a2.2 2.2 0 0 0 .766-.332c.228-.158.411-.371.534-.619c.142-.317.208-.663.191-1.009a2.08 2.08 0 0 0-.642-1.715a2.62 2.62 0 0 0-1.696-.505h-3.54v4.279zm13.635-5.967a2.13 2.13 0 0 0-1.654-.619a2.34 2.34 0 0 0-1.163.259a2.5 2.5 0 0 0-.738.62a2.4 2.4 0 0 0-.396.792q-.111.36-.137.734h4.769a3.24 3.24 0 0 0-.679-1.785zm-13.813-.648a2.25 2.25 0 0 0 1.423-.433c.399-.355.607-.88.56-1.413a1.9 1.9 0 0 0-.178-.891a1.3 1.3 0 0 0-.495-.533a1.85 1.85 0 0 0-.711-.274a4 4 0 0 0-.835-.073H3.241v3.631h3.293zM21.62 5.122h-5.976v1.527h5.976z"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
