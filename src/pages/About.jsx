import React from 'react'

const About = () => {
  return (
    <section className="py-6 px-32 flex flex-col flex-grow gap-5 items-center justify-center">
      <h1 className="text-4xl font-mclaren font-bold text-[#fffbfc] text-center leading-snug">Hi, it's me!</h1>

      <div className="w-full grid grid-cols-3 gap-6">
        <div className="rounded bg-[#fffbfc]/5 p-4">
          <img src="img/yodanisesutantio_mugshot.png" alt="Yodanis E. Sutantio | Mugshot" className="w-full h-[23rem] object-cover rounded-sm" />
        </div>

        <div className="rounded col-span-2 flex flex-col gap-6 justify-between bg-[#fffbfc]/5 p-4">
          <div className="flex flex-col gap-3">
            <p className="font-nunito font-light text-base text-[#fffbfc]/85">Hello! I’m Yodanis, a curious explorer of the tech world. I’m navigating the boundless opportunities in this field, still figuring out my path. Some days I feel like a curious explorer; other days, I’m just hitting random buttons to see what works!</p>

            <p className="font-nunito font-light text-base text-[#fffbfc]/85">I’ve always been inspired by a quote from Arthur Schopenhauer: </p>

            <p className="font-nunito font-extralight text-2xl italic text-[#fffbfc]/50">"Talent hits a target no one else can hit; Genius hits a target no one else can see."</p>
          </div>

          <div className="flex flex-col gap-2 items-end">
            <p className="font-nunito font-light text-base text-[#fffbfc]/85">Here’s to aiming for targets yet unseen.</p>
            <img src="/img/yodanisesutantio_signature.png" alt="Yodanis E. Sutantio | Signature" className="h-20" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
