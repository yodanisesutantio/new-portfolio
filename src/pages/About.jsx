/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="h-[calc(100vh-theme(spacing.16))] py-6 px-32 flex flex-col flex-grow gap-5 items-center justify-center">
      <h1
        className={`text-4xl font-mclaren font-bold text-[#fffbfc] text-center leading-snug transform transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
        }`}
      >
        Hi, it&rsquo;s me!
      </h1>

      <div className="flex-1 w-full min-h-0 grid grid-cols-3 gap-6">
        <div
          className={`rounded bg-[#fffbfc]/5 p-4 h-full transform transition-all duration-700 delay-[100ms] ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
          }`}
        >
          <img
            src="img/yodanisesutantio_mugshot.png"
            alt="Yodanis E. Sutantio | Mugshot"
            className="w-full h-full object-cover rounded-sm"
          />
        </div>

        <div className={`rounded col-span-2 flex flex-col gap-6 justify-between h-full bg-[#fffbfc]/5 p-4 transform transition-all duration-700 delay-[200ms] ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
          }`}>
          <div className="flex flex-col gap-3">
            <p className="font-nunito font-light text-base text-[#fffbfc]/85">
              Hello! I’m Yodanis, a curious explorer of the tech world. I’m
              navigating the boundless opportunities in this field, still
              figuring out my path. Some days I feel like a curious explorer;
              other days, I’m just hitting random buttons to see what works!
            </p>

            <p className="font-nunito font-light text-base text-[#fffbfc]/85">
              I’ve always been inspired by a quote from Arthur Schopenhauer:{" "}
            </p>

            <p className="font-nunito font-extralight text-2xl italic text-[#fffbfc]/50">
              &ldquo;Talent hits a target no one else can hit; Genius hits a
              target no one else can see.&rdquo;
            </p>
          </div>

          <div className="flex flex-col gap-2 items-end">
            <p className="font-nunito font-light text-base text-[#fffbfc]/85">
              Here’s to aiming for targets yet unseen.
            </p>
            <img
              src="/img/yodanisesutantio_signature.png"
              alt="Yodanis E. Sutantio | Signature"
              className="h-20"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
