import React from 'react'

const Home = () => {
  return (
    <section className="pt-6 pb-16 px-32 flex flex-col gap-5 flex-grow items-center justify-center">
        <h1 className="text-7xl font-mclaren font-bold text-[#fffbfc] text-center leading-snug">
            I do Design during the <span className="text-[#fffbfc] animate-changeColorDay">Day</span>, then Code at <span className="text-[#fffbfc] animate-changeColorNight">Night</span>
        </h1>

        <div className="font-nunito font-normal text-lg text-[#fffbfc]/85 text-center leading-tight">
            <p>Hi, I'm Yodanis, An IT Enthusiast with a diverse skill set.</p>
            <p>Currently working on to figure out what to do in the tech world 🤭</p>
        </div>

        <div className="flex flex-row gap-6 items-center justify-center mt-6">
            <button className="font-nunito font-medium text-lg text-[#fffbfc]/30 px-10 py-5 hover:bg-[#fffbfc]/5 duration-500">Connect with me</button>
            <a href="/projects" className="relative font-nunito font-extrabold text-lg text-[#010400] hover:text-[#CAFE48] bg-[#fffbfc] hover:bg-[#57467B] px-10 py-5 duration-500">View Projects</a>
        </div>
    </section>
  )
}

export default Home
