import React from 'react'

const About = () => {
  return (
    <section className="py-6 px-32 flex flex-col gap-5 items-center justify-center">
      <h1 className="text-4xl font-mclaren font-bold text-[#fffbfc] text-center leading-snug">About Me</h1>

      <div className="grid grid-cols-2 gap-6">
        <img src="" alt="Yodanis E. Sutantio | Mugshot" className="w-full" />

        <div className="flex flex-col gap-4">
          <p className="font-nunito font-normal text-base/snug"></p>
          <p className="font-nunito font-normal text-base/snug"></p>
        </div>
      </div>

      <h1 className="text-4xl font-mclaren font-bold text-[#fffbfc] text-center leading-snug">What I really want to do?</h1>
    </section>
  )
}

export default About
