import React from 'react'

const About = () => {
  return (
    <section className="py-6 px-32 flex flex-col gap-5 items-center justify-center">
      <h1 className="text-4xl font-mclaren font-bold text-[#fffbfc] text-center leading-snug">Hi, it's me!</h1>

      <div className="w-full grid grid-cols-3 gap-6">
        <div className="rounded-lg bg-[#fffbfc]/5 p-4">
          <img src="img/yodanisesutantio_mugshot.png" alt="Yodanis E. Sutantio | Mugshot" className="w-full h-[23rem] object-cover rounded-md" />
        </div>

        <div className="rounded-lg col-span-2 flex flex-col gap-6 justify-between bg-[#fffbfc]/5 p-4">
          <div className="flex flex-col gap-3">
            <p className="font-nunito text-base text-[#fffbfc]">Hello! I’m Yodanis, born and raised in Surabaya, where I’m actively working and exploring the tech world. I’m navigating the boundless opportunities in this field, still figuring out my path. Some days I feel like a curious explorer; other days, I’m just hitting random buttons to see what works!</p>

            <p className="font-nunito text-base text-[#fffbfc]">For now, I take inspiration from Arthur Schopenhauer’s words: </p>

            <p className="font-nunito font-extralight text-2xl italic text-[#fffbfc]/40">"Talent hits a target no one else can hit; Genius hits a target no one else can see."</p>
          </div>

          <div className="flex flex-col items-end">
            <p className="font-nunito text-base text-[#fffbfc]">Here’s to aiming for targets yet unseen</p>
            <img src="/img/yodanisesutantio_signature.png" alt="Yodanis E. Sutantio | Signature" className="h-[5.5rem]" />
          </div>
        </div>
      </div>

      <h1 className="mt-12 text-4xl font-mclaren font-bold text-[#fffbfc] text-center leading-snug">What I really want to do?</h1>
    </section>
  )
}

export default About
