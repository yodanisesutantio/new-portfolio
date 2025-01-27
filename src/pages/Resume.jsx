import React, { useEffect } from "react";

const Resume = () => {
  useEffect(() => {
    // Redirect to the PDF file
    window.open("/docs/ATS-en.pdf", "_blank"); // Adjust the filename as needed
  }, []);

  return (
    <section className="pt-6 pb-16 px-32 flex flex-col gap-5 grow items-center justify-center">
      <div className="font-nunito font-normal text-lg text-[#fffbfc]/85 text-center leading-tight">
        <p>
          You have opened Yodanis' Resume, you can return by{" "}
          <a href="/" className="underline hover:no-underline">
            click here
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default Resume;
