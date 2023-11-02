function AboutMe() {
  return (
    <>
      <div className="flex items-center justify-center h-screen md:w-full md:mt-24 font-mono w-screen">
        <div className="w-full p-0 mt-24 h-full mx-auto space-y-1 md:h-full  md:max-w-4xl md:px-0">
          <details className=" rounded-lg">
            <summary className=" font-semibold bg-gradient-to-r from-rose-100 to-teal-100 px-4 py-2  text-lg cursor-pointer text-left">
              A little more about who I am ...
            </summary>
            <div className=" bg-gradient-to-r from-rose-100 to-teal-100">
              <p className="leading-6 px-3 py-2 text-gray-800 text-left md:leading-10">
                I am a half brazilian/portuguese guy, currently living in Portugal. I have various
                dreams, and the main one at the moment is to transition into the
                field of programming. I currently work as a rideshare driver. I
                have two degrees (Computer Networks and Marketing and
                International Business), and I am currently studying for another
                degree, this time in Computer Engineering.
              </p>
            </div>
          </details>
          <details className=" rounded-lg">
            <summary className="font-semibold bg-gradient-to-r from-rose-100 to-teal-100 px-4 py-2  text-lg cursor-pointer text-left">
              The technologies and me ...{" "}
            </summary>
            <div className=" bg-gradient-to-r from-rose-100 to-teal-100">
              <p className="leading-6 px-3 py-2 text-gray-800 text-left md:leading-10">
                My relationship with technology has been there since an early
                age. I&apos;ve always been a gaming enthusiast and naturally
                curious. I greatly enjoy studying and putting into practice
                everything I learn. I typically learn very quickly.
              </p>
            </div>
          </details>
          <details className=" rounded-lg">
            <summary className="font-semibold bg-gradient-to-r from-rose-100 to-teal-100 px-4 py-2  text-lg cursor-pointer text-left">
              And about my experiences ...
            </summary>
            <div className=" bg-gradient-to-r from-rose-100 to-teal-100">
              <p className="leading-6 px-3 py-2 text-gray-800 text-left md:leading-10">
                I&apos;ve previously worked as a support analyst in a major ERP
                systems company called TOTVS, where I led teams and assisted
                clients both remotely and in person. I also worked in Ireland
                for 7 months, where I had the opportunity to learn some English,
                and today my level is considered B1. I&apos;ve been studying
                JavaScript for approximately a year. I&apos;m also studying
                other technologies such as React.js, Tailwind, Next, Vite,
                Node.js, and anything related to the role of a full-stack
                developer, as that&apos;s what I aim to excel in.
              </p>
            </div>
          </details>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
