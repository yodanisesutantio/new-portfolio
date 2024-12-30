import React from 'react'

const Home = () => {
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
              <div className="rounded-full w-6 h-6 bg-[#fffbfc]"></div>
              <div className="absolute border-r-2 h-[240%] border-[#fffbfc]/30 transform translate-x-1/2"></div>
            </div>
          </div>

          <div className="col-span-3 flex flex-row gap-2 p-3">
            <p className="font-nunito font-light text-base text-justify text-[#fffbfc] leading-tight pr-24">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima nam, ut recusandae eos exercitationem, ad commodi, cupiditate vitae vero aspernatur fugit fuga quos corporis doloremque a soluta voluptates nisi eum.</p>
          </div>
        </div>

        <div className="mt-3 grid grid-cols-5 gap-2 items-start w-full">
          <div className="col-span-2 flex flex-row gap-2 w-full items-center justify-end">
            <div className="p-3 w-[90%]">
              <h2 className="font-mclaren font-medium text-2xl text-right text-[#fffbfc]">January, 2007</h2>
            </div>
            <div className="p-3 w-[10%] flex flex-col items-center relative">
              <div className="rounded-full w-6 h-6 bg-[#fffbfc]"></div>
              <div className="absolute border-r-2 h-[240%] border-[#fffbfc]/30 transform translate-x-1/2"></div>
            </div>
          </div>

          <div className="col-span-3 flex flex-row gap-2 p-3">
            <p className="font-nunito font-light text-base text-justify text-[#fffbfc] leading-tight pr-24">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima nam, ut recusandae eos exercitationem, ad commodi, cupiditate vitae vero aspernatur fugit fuga quos corporis doloremque a soluta voluptates nisi eum.</p>
          </div>
        </div>

        <div className="mt-3 grid grid-cols-5 gap-2 items-start w-full">
          <div className="col-span-2 flex flex-row gap-2 w-full items-center justify-end">
            <div className="p-3 w-[90%]">
              <h2 className="font-mclaren font-medium text-2xl text-right text-[#fffbfc]">August, 2014</h2>
            </div>
            <div className="p-3 w-[10%] flex flex-col items-center relative">
              <div className="rounded-full w-6 h-6 bg-[#fffbfc]"></div>
              <div className="absolute border-r-2 h-[240%] border-[#fffbfc]/30 transform translate-x-1/2"></div>
            </div>
          </div>

          <div className="col-span-3 flex flex-row gap-2 p-3">
            <p className="font-nunito font-light text-base text-justify text-[#fffbfc] leading-tight pr-24">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima nam, ut recusandae eos exercitationem, ad commodi, cupiditate vitae vero aspernatur fugit fuga quos corporis doloremque a soluta voluptates nisi eum.</p>
          </div>
        </div>

        <div className="mt-3 grid grid-cols-5 gap-2 items-start w-full">
          <div className="col-span-2 flex flex-row gap-2 w-full items-center justify-end">
            <div className="p-3 w-[90%]">
              <h2 className="font-mclaren font-medium text-2xl text-right text-[#fffbfc]">July, 2017</h2>
            </div>
            <div className="p-3 w-[10%] flex flex-col items-center relative">
              <div className="rounded-full w-6 h-6 bg-[#fffbfc]"></div>
              <div className="absolute border-r-2 h-[240%] border-[#fffbfc]/30 transform translate-x-1/2"></div>
            </div>
          </div>

          <div className="col-span-3 flex flex-row gap-2 p-3">
            <p className="font-nunito font-light text-base text-justify text-[#fffbfc] leading-tight pr-24">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima nam, ut recusandae eos exercitationem, ad commodi, cupiditate vitae vero aspernatur fugit fuga quos corporis doloremque a soluta voluptates nisi eum.</p>
          </div>
        </div>

        <div className="mt-3 grid grid-cols-5 gap-2 items-start w-full">
          <div className="col-span-2 flex flex-row gap-2 w-full items-center justify-end">
            <div className="p-3 w-[90%]">
              <h2 className="font-mclaren font-medium text-2xl text-right text-[#fffbfc]">September, 2020</h2>
            </div>
            <div className="p-3 w-[10%] flex flex-col items-center relative">
              <div className="rounded-full w-6 h-6 bg-[#fffbfc]"></div>
              <div className="absolute border-r-2 h-[240%] border-[#fffbfc]/30 transform translate-x-1/2"></div>
            </div>
          </div>

          <div className="col-span-3 flex flex-row gap-2 p-3">
            <p className="font-nunito font-light text-base text-justify text-[#fffbfc] leading-tight pr-24">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima nam, ut recusandae eos exercitationem, ad commodi, cupiditate vitae vero aspernatur fugit fuga quos corporis doloremque a soluta voluptates nisi eum.</p>
          </div>
        </div>

        <div className="mt-3 grid grid-cols-5 gap-2 items-start w-full">
          <div className="col-span-2 flex flex-row gap-2 w-full items-center justify-end">
            <div className="p-3 w-[90%]">
              <h2 className="font-mclaren font-medium text-2xl text-right text-[#fffbfc]">December, 2024</h2>
            </div>
            <div className="p-3 w-[10%] flex flex-col items-center relative">
              <div className="rounded-full w-6 h-6 bg-[#fffbfc]"></div>
              <div className="absolute border-r-2 h-[240%] border-[#fffbfc]/30 transform translate-x-1/2"></div>
            </div>
          </div>

          <div className="col-span-3 flex flex-row gap-2 p-3">
            <p className="font-nunito font-light text-base text-justify text-[#fffbfc] leading-tight pr-24">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima nam, ut recusandae eos exercitationem, ad commodi, cupiditate vitae vero aspernatur fugit fuga quos corporis doloremque a soluta voluptates nisi eum.</p>
          </div>
        </div>

        <div className="mt-3 grid grid-cols-5 gap-2 items-start w-full">
          <div className="col-span-2 flex flex-row gap-2 w-full items-center justify-end">
            <div className="p-3 w-[90%]">
              <h2 className="font-mclaren font-medium text-2xl text-right text-[#fffbfc]">Today</h2>
            </div>
            <div className="p-3 w-[10%] flex flex-col items-center relative">
              <div className="rounded-full w-6 h-6 bg-[#fffbfc]"></div>
              <div className="absolute border-r-2 border-dashed h-[240%] border-[#fffbfc]/30 transform translate-x-1/2"></div>
            </div>
          </div>

          <div className="col-span-3 flex flex-row gap-2 p-3">
            <p className="font-nunito font-light text-base text-justify text-[#fffbfc] leading-tight pr-24">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima nam, ut recusandae eos exercitationem, ad commodi, cupiditate vitae vero aspernatur fugit fuga quos corporis doloremque a soluta voluptates nisi eum.</p>
          </div>
        </div>

        <div className="mt-3 grid grid-cols-5 gap-2 items-start w-full">
          <div className="col-span-2 flex flex-row gap-2 w-full items-center justify-end">
            <div className="p-3 w-[90%]">
              <h2 className="font-mclaren font-medium text-2xl text-right text-[#fffbfc]">May, 2025</h2>
            </div>
            <div className="p-3 w-[10%] flex flex-col items-center relative">
              <div className="rounded-full w-6 h-6 bg-[#fffbfc]"></div>
              <div className="absolute hidden border-r-2 h-[240%] border-[#fffbfc]/30 transform translate-x-1/2"></div>
            </div>
          </div>

          <div className="col-span-3 flex flex-row gap-2 p-3">
            <p className="font-nunito font-light text-base text-justify text-[#fffbfc] leading-tight pr-24">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima nam, ut recusandae eos exercitationem, ad commodi, cupiditate vitae vero aspernatur fugit fuga quos corporis doloremque a soluta voluptates nisi eum.</p>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-16 items-center w-full">
          <div className="flex flex-col">
            <h1 className="text-4xl font-mclaren font-bold text-[#fffbfc] leading-snug">Quotes of Today</h1>
            <p className="mt-2 font-nunito font-light text-base text-[#fffbfc]/75 leading-tight">It means a lot that you took the time to explore my portfolio. As a small token of appreciation, here’s a quote to brighten your day</p>
          </div>

          <div className="rounded bg-[#fffbfc] p-8">
            
          </div>
        </div>
    </section>
  )
}

export default Home
