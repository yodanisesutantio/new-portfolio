import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Quotes from '../components/Quotes';

const Home = () => {
  const pRefs = useRef([]);
  const [lineHeights, setLineHeights] = useState([]);

  useEffect(() => {
    const heights = pRefs.current.map((p) => (p ? p.offsetHeight * 1.3 : 0)); // Calculate 120% height
    setLineHeights(heights);
  }, []);

  return (
    <section className="pt-10 pb-16 px-32 flex flex-col flex-grow items-center justify-center">
        <h1 className="text-7xl font-mclaren font-bold text-[#fffbfc] text-center leading-snug">
            I do Design during the <span className="text-[#fffbfc] animate-changeColorDay">Day</span>, then Code at <span className="text-[#fffbfc] animate-changeColorNight">Night</span>
        </h1>

        <div className="mt-3 font-nunito font-light text-lg text-[#fffbfc]/75 text-center leading-tight">
            <p>Hi, I'm Yodanis, an IT Enthusiast with a diverse skill set.</p>
            <p>Currently working on to figure out what to do in the tech world 🤭</p>
        </div>

        <div className="flex flex-row gap-6 items-center justify-center mt-6">
            <button className="font-nunito font-medium text-lg text-[#fffbfc]/30 px-10 py-5 hover:bg-[#fffbfc]/5 duration-500">Connect with me</button>
            <a href="/projects" className="relative font-nunito font-extrabold text-lg text-[#010400] hover:text-[#CAFE48] bg-[#fffbfc] hover:bg-[#57467B] px-10 py-5 duration-500">View Projects</a>
        </div>

        <h1 className="mt-24 text-4xl font-mclaren font-bold text-[#fffbfc] text-center leading-snug">What I really want to do?</h1>
        <p className="mt-2 w-[34rem] font-nunito font-light text-base text-[#fffbfc]/75 text-center leading-tight">I haven't decided yet, since I love both of them equally. (Oh, do please hover over the image below to reveal a hidden description)</p>

        <div className="mt-8 w-full grid grid-cols-2 gap-4">
          <div className="w-full h-80 rounded overflow-hidden bg-[url('/img/uid.jpeg')] bg-cover bg-bottom saturate-0 hover:saturate-100 group duration-500">
            <div className="p-4 w-full h-full cursor-pointer group-hover:bg-[#010400]/40 group-hover:backdrop-blur-sm duration-500">
              <div className="w-full h-full flex flex-col gap-2 justify-end transition-transform duration-500 transform translate-y-[45%] group-hover:translate-y-0">
                <h2 className="font-mclaren font-medium text-2xl text-[#fffbfc]">User Interface Design</h2>
                <p className="font-nunito font-light text-base text-[#fffbfc]/85 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">Why only UI? While I admire the world of UX Design, I haven’t yet had the opportunity to practice it or work on a project that truly immerses me in that space. UI Design feels like a natural starting point, and I’m excited to build a strong foundation before diving deeper into UX.</p>
              </div>
            </div>
          </div>

          <div className="w-full h-80 rounded overflow-hidden bg-[url('/img/webdev.jpeg')] bg-cover bg-bottom saturate-0 hover:saturate-100 group duration-500">
            <div className="p-4 w-full h-full cursor-pointer group-hover:bg-[#010400]/40 group-hover:backdrop-blur-sm duration-500">
              <div className="w-full h-full flex flex-col gap-2 justify-end transition-transform duration-500 transform translate-y-[45%] group-hover:translate-y-0">
                <h2 className="font-mclaren font-medium text-2xl text-[#fffbfc]">Web Development</h2>
                <p className="font-nunito font-light text-base text-[#fffbfc]/85 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">It’s a field that excites me because the possibilities feel endless. I’ve recently started exploring frameworks like Tailwind CSS and Laravel. The ability to build something tangible—not just daydream about it, but see it come to life right in front of my eyes—is truly indescribable.</p>
              </div>
            </div>
          </div>
        </div>

        <h1 className="mt-24 text-4xl font-mclaren font-bold text-[#fffbfc] text-center leading-snug">My Journey so far</h1>
        <p className="mt-2 w-[34rem] font-nunito font-light text-base text-[#fffbfc]/75 text-center leading-tight">Come along as I share the steps that brought me here, one chapter at a time.</p>

        <div className="mt-5 grid grid-cols-5 gap-2 items-start w-full">
          <div className="col-span-2 flex flex-row gap-2 w-full items-center justify-end">
            <div className="p-3 w-[90%]">
              <h2 className="font-mclaren font-medium text-2xl text-right text-[#fffbfc]">July, 2002</h2>
            </div>
            <div className="p-3 w-[10%] flex flex-col items-center relative">
              <div className="rounded-full w-6 h-6 bg-[#fffbfc] z-20"></div>
              {/* Vertical Lines */}
              <div className="absolute border-l border-r border-[#555253]" style={{ height: `${lineHeights[0] || 0}px` }}></div>
            </div>
          </div>

          <div className="col-span-3 flex flex-row gap-2 p-3">
            <p ref={(el) => (pRefs.current[0] = el)} className="font-nunito font-light text-base text-justify text-[#fffbfc] leading-snug pr-24">This is where it all started—July 2002, in the vibrant city of Surabaya. I made my debut into the world, tiny and curious about everything (or at least that’s how I imagine it). Since then, life has been a constant journey of learning, growing, and figuring things out. While I wasn’t solving puzzles back then, I like to think that this was the first milestone in a story that’s still being written.</p>
          </div>
        </div>

        <div className="mt-3 grid grid-cols-5 gap-2 items-start w-full">
          <div className="col-span-2 flex flex-row gap-2 w-full items-center justify-end">
            <div className="p-3 w-[90%]">
              <h2 className="font-mclaren font-medium text-2xl text-right text-[#fffbfc]">January, 2007</h2>
            </div>
            <div className="p-3 w-[10%] flex flex-col items-center relative">
              <div className="rounded-full w-6 h-6 bg-[#fffbfc] z-20"></div>
              <div className="absolute border-l border-r h-[240%] border-[#555253]" style={{ height: `${lineHeights[1] || 0}px` }}></div>
            </div>
          </div>

          <div className="col-span-3 flex flex-row gap-2 p-3">
            <p ref={(el) => (pRefs.current[1] = el)} className="font-nunito font-light text-base text-justify text-[#fffbfc] leading-snug pr-24">Change came knocking in January 2007 when I left Surabaya, the city of my earliest memories, and moved to the neighboring town of Sidoarjo. At that age, I didn’t quite know how to process the shift—it was just something that happened. A new house, new surroundings, and eventually, new experiences. Looking back, it feels like the first lesson in adapting to life’s twists and turns, even when you don’t fully understand them.</p>
          </div>
        </div>

        <div className="mt-3 grid grid-cols-5 gap-2 items-start w-full">
          <div className="col-span-2 flex flex-row gap-2 w-full items-center justify-end">
            <div className="p-3 w-[90%]">
              <h2 className="font-mclaren font-medium text-2xl text-right text-[#fffbfc]">August, 2014</h2>
            </div>
            <div className="p-3 w-[10%] flex flex-col items-center relative">
              <div className="rounded-full w-6 h-6 bg-[#fffbfc] z-20"></div>
              <div className="absolute border-l border-r h-[240%] border-[#555253]" style={{ height: `${lineHeights[2] || 0}px` }}></div>
            </div>
          </div>

          <div className="col-span-3 flex flex-row gap-2 p-3">
            <p ref={(el) => (pRefs.current[2] = el)} className="font-nunito font-light text-base text-justify text-[#fffbfc] leading-snug pr-24">At the beginning of my junior high school journey, I threw myself into a whirlwind of activities—joining organizations, experimenting with extracurriculars, and even dabbling in video production. Each experience taught me something new, whether it was teamwork, creativity, or just discovering what I enjoyed. It was a vibrant chapter that sparked my curiosity and gave me a glimpse of the things I could be passionate about.</p>
          </div>
        </div>

        <div className="mt-3 grid grid-cols-5 gap-2 items-start w-full">
          <div className="col-span-2 flex flex-row gap-2 w-full items-center justify-end">
            <div className="p-3 w-[90%]">
              <h2 className="font-mclaren font-medium text-2xl text-right text-[#fffbfc]">July, 2017</h2>
            </div>
            <div className="p-3 w-[10%] flex flex-col items-center relative">
              <div className="rounded-full w-6 h-6 bg-[#fffbfc] z-20"></div>
              <div className="absolute border-l border-r h-[240%] border-[#555253]" style={{ height: `${lineHeights[3] || 0}px` }}></div>
            </div>
          </div>

          <div className="col-span-3 flex flex-row gap-2 p-3">
            <p ref={(el) => (pRefs.current[3] = el)} className="font-nunito font-light text-base text-justify text-[#fffbfc] leading-snug pr-24">Marked the start of an unforgettable chapter—my high school years. These three years were filled with friendships that blossomed into lifelong connections. At first, I took the same approach as junior high, diving into various activities and organizations. But by my second year, I shifted gears to focus on my major, Multimedia.

            <br /> <br />
              
            This is where I honed my video production skills and eventually stumbled upon something that truly clicked—UI/UX Design. It felt like finding a path that combined creativity, functionality, and problem-solving, and I’ve been captivated ever since.</p>
          </div>
        </div>

        <div className="mt-3 grid grid-cols-5 gap-2 items-start w-full">
          <div className="col-span-2 flex flex-row gap-2 w-full items-center justify-end">
            <div className="p-3 w-[90%]">
              <h2 className="font-mclaren font-medium text-2xl text-right text-[#fffbfc]">September, 2020</h2>
            </div>
            <div className="p-3 w-[10%] flex flex-col items-center relative">
              <div className="rounded-full w-6 h-6 bg-[#fffbfc] z-20"></div>
              <div className="absolute border-l border-r h-[240%] border-[#555253]" style={{ height: `${lineHeights[4] || 0}px` }}></div>
            </div>
          </div>

          <div className="col-span-3 flex flex-row gap-2 p-3">
            <p ref={(el) => (pRefs.current[4] = el)} className="font-nunito font-light text-base text-justify text-[#fffbfc] leading-snug pr-24">September 2020 was a defining moment, even though the world had been shaken by the pandemic. I refused to let it stop me from moving forward. It was my first year as a college student, pursuing Information Systems, and it became the year I dove headfirst into the world of UI/UX Design. 
              
            <br /> <br />  
              
            I also immersed myself in IT Controls and Management through an internship at the Offices of Cooperative and Small Medium Enterprises of East Java, pushing through the challenges. And, in this time of disruption, I discovered Web Development—a whole new realm that expanded my horizons even further. This journey was proof that no matter what the world throws at you, there’s always room to grow, adapt, and keep moving forward.</p>
          </div>
        </div>

        <div className="mt-3 grid grid-cols-5 gap-2 items-start w-full">
          <div className="col-span-2 flex flex-row gap-2 w-full items-center justify-end">
            <div className="p-3 w-[90%]">
              <h2 className="font-mclaren font-medium text-2xl text-right text-[#fffbfc]">December, 2024</h2>
            </div>
            <div className="p-3 w-[10%] flex flex-col items-center relative">
              <div className="rounded-full w-6 h-6 bg-[#fffbfc] z-20"></div>
              <div className="absolute border-l border-r h-[240%] border-[#555253]" style={{ height: `${lineHeights[5] || 0}px` }}></div>
            </div>
          </div>

          <div className="col-span-3 flex flex-row gap-2 p-3">
            <p ref={(el) => (pRefs.current[5] = el)} className="font-nunito font-light text-base text-justify text-[#fffbfc] leading-snug pr-24">It marked the conclusion of my educational journey as I submitted my final assignment—a web-based app for a driving school built using the incremental model. It was a project that tested my skills and creativity, for more details on this project, feel free to check out my <Link to="/projects" className="underline hover:no-underline font-semibold">Projects</Link> page. However, despite reaching this milestone, I still find myself exploring and questioning what I truly want to pursue next. And that’s the beauty of this journey—it doesn’t have a clear ending. The path keeps unfolding, and I’m excited to continue exploring where it leads me.</p>
          </div>
        </div>

        <div className="mt-3 grid grid-cols-5 gap-2 items-start w-full">
          <div className="col-span-2 flex flex-row gap-2 w-full items-center justify-end">
            <div className="p-3 w-[90%]">
              <h2 className="font-mclaren font-medium text-2xl text-right text-[#fffbfc]">Today</h2>
            </div>
            <div className="p-3 w-[10%] flex flex-col items-center relative">
              <div className="rounded-full w-6 h-6 bg-[#fffbfc] z-20"></div>
              <div className="absolute border-l border-r border-dashed h-[240%] border-[#555253]" style={{ height: `${lineHeights[6] || 0}px` }}></div>
            </div>
          </div>

          <div className="col-span-3 flex flex-row gap-2 p-3">
            <p ref={(el) => (pRefs.current[6] = el)} className="font-nunito font-light text-base text-justify text-[#fffbfc] leading-snug pr-24">As I stand at this point in my journey, I’m open to any opportunities and offers that come my way, excited to explore new paths and challenges. There’s one particular dream on my bucket list though—working in Germany. The idea of gaining experience in a new culture and environment, while further growing my skills, is something I’m truly passionate about. But for now, I remain open to where the next step will take me, knowing that the journey is far from over.</p>
          </div>
        </div>

        <div className="mt-3 grid grid-cols-5 gap-2 items-start w-full">
          <div className="col-span-2 flex flex-row gap-2 w-full items-center justify-end">
            <div className="p-3 w-[90%]">
              <h2 className="font-mclaren font-medium text-2xl text-right text-[#fffbfc]">May, 2025</h2>
            </div>
            <div className="p-3 w-[10%] flex flex-col items-center relative">
              <div className="rounded-full w-6 h-6 bg-[#fffbfc] z-20"></div>
              <div className="absolute hidden border-l border-r h-[240%] border-[#555253]" style={{ height: `${lineHeights[7] || 0}px` }}></div>
            </div>
          </div>

          <div className="col-span-3 flex flex-row gap-2 p-3">
            <p ref={(el) => (pRefs.current[7] = el)} className="font-nunito font-light text-base text-justify text-[#fffbfc] leading-snug pr-24">I’ll finally earn my degree and be able to proudly call myself Yodanis E. Sutantio, B.Tech. It’s a moment of accomplishment and a reminder that the journey has been worth every step. But as much as it’s a conclusion to my academic chapter, it’s also the beginning of what’s next. I’m ready to see where this newfound title and all the experiences I've gained will take me.</p>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-16 items-start w-full">
          <div className="flex flex-col">
            <h1 className="text-4xl font-mclaren font-bold text-[#fffbfc] leading-snug">Quotes for Today</h1>
            <p className="mt-2 font-nunito font-light text-base text-[#fffbfc]/75 leading-tight">It means a lot that you took the time to explore my portfolio. As a small token of appreciation, here’s a quote to brighten your day</p>
          </div>

          <Quotes />
        </div>
    </section>
  )
}

export default Home
