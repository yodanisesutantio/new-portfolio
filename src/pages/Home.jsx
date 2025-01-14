import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Quotes from "../components/Quotes";

const Home = () => {
  return (
    <section className="pt-10 pb-16 px-32 flex flex-col flex-grow items-center justify-center">
      <h1 className="text-7xl font-mclaren font-bold text-[#fffbfc] text-center leading-snug">
        I do Design during the{" "}
        <span className="text-[#fffbfc] animate-changeColorDay">Day</span>, then
        Code at{" "}
        <span className="text-[#fffbfc] animate-changeColorNight">Night</span>
      </h1>

      <div className="mt-3 font-nunito font-light text-lg text-[#fffbfc]/75 text-center leading-tight">
        <p>Hi, I'm Yodanis, an IT Enthusiast with a diverse skill set.</p>
        <p>
          Currently working on to figure out what to do in the tech world 🤭
        </p>
      </div>

      <div className="flex flex-row gap-6 items-center justify-center mt-6">
        <button className="font-nunito font-medium text-lg text-[#fffbfc]/30 px-10 py-5 hover:bg-[#fffbfc]/5 duration-500">
          Connect with me
        </button>
        <Link
          to="/projects"
          className="relative font-nunito font-extrabold text-lg text-[#010400] hover:text-[#CAFE48] bg-[#fffbfc] hover:bg-[#57467B] px-10 py-5 duration-500"
        >
          View Projects
        </Link>
      </div>

      <h1 className="mt-24 text-4xl font-mclaren font-bold text-[#fffbfc] text-center leading-snug">
        What I really want to do?
      </h1>
      <p className="mt-2 w-96 font-nunito font-light text-base text-[#fffbfc]/75 text-center leading-tight">
        I haven't decided yet, since I love both of them equally. (Oh, do please
        hover over the image below!)
      </p>

      <div className="mt-8 w-full grid grid-cols-2 gap-4">
        <div className="w-full h-80 rounded overflow-hidden bg-[url('/img/uid.jpeg')] bg-cover bg-bottom saturate-0 hover:saturate-100 group duration-500">
          <div className="p-4 w-full h-full cursor-pointer group-hover:bg-[#010400]/40 group-hover:backdrop-blur-sm duration-500">
            <div className="w-full h-full flex flex-col justify-end transition-transform duration-500 transform translate-y-[calc(100%-6rem)] group-hover:translate-y-0">
              <h2 className="font-mclaren font-medium mb-2 text-2xl text-[#fffbfc]">
                User Interface Design
              </h2>
              <p className="font-nunito font-light text-base text-[#fffbfc]/85 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                Why only UI? While I admire the world of UX Design, I haven’t
                yet had the opportunity to practice it or work on a project that
                truly immerses me in that space. UI Design feels like a natural
                starting point, and I’m excited to build a strong foundation
                before diving deeper into UX.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full h-80 rounded overflow-hidden bg-[url('/img/webdev.jpeg')] bg-cover bg-bottom saturate-0 hover:saturate-100 group duration-500">
          <div className="p-4 w-full h-full cursor-pointer group-hover:bg-[#010400]/40 group-hover:backdrop-blur-sm duration-500">
            <div className="w-full h-full flex flex-col justify-end transition-transform duration-500 transform translate-y-[calc(100%-6rem)] group-hover:translate-y-0">
              <h2 className="font-mclaren font-medium mb-2 text-2xl text-[#fffbfc]">
                Web Development
              </h2>
              <p className="font-nunito font-light text-base text-[#fffbfc]/85 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                It’s a field that excites me because the possibilities feel
                endless. I’ve recently started exploring frameworks like
                Tailwind CSS and Laravel. The ability to build something
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
        <div className="absolute top-2 transform bg-gradient-to-b from-[#555253] via-90% via-[#555253] to-95% to-[#555253]/5 w-[2px] h-full"></div>

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

      <div className="mt-20 grid grid-cols-2 gap-16 items-start w-full">
        <div className="flex flex-col">
          <h1 className="text-4xl font-mclaren font-bold text-[#fffbfc] leading-snug">
            Quotes for Today
          </h1>
          <p className="mt-2 font-nunito font-light text-base text-[#fffbfc]/75 leading-tight">
            It means a lot that you took the time to explore my portfolio. As a
            small token of appreciation, here’s a quote to brighten your day
          </p>
        </div>

        <Quotes />
      </div>
    </section>
  );
};

export default Home;
