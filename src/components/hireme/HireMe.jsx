import { Element } from "react-scroll";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function HireMe() {
  const form = useRef();
  emailjs.init("57Ni_ifAPNBNMZ2U4");

  const [buttonText, setButtonText] = useState("Send Message");
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8tkgtqs",
        "template_vz3zoxv",
        form.current,
        "57Ni_ifAPNBNMZ2U4"
      )
      .then(
        (result) => {
          console.log(result.text);
          setButtonText("Message Sent");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <Element
        name="hire"
        className="flex md:flex-col items-center justify-center md:w-full font-mono w-screen md:h-auto h-auto md:mt-24  mt-16"
      >
        <section
          id="hire"
          className="flex md:flex-col items-center justify-center md:w-full font-mono w-screen md:h-auto h-auto px-4 md:px-0 mb-24 md:mb-0 md:mt-24 mt-16"
        >
          <form
            id="form"
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col items-center justify-center md:w-full font-mono w-screen md:h-auto h-auto mb-24"
          >
            <div className="md:w-full">
              <h1 className="text-4xl font-bold text-left md:mb-9 mb-4">
                <span className="text-slate-600 font-mono"># </span>Get in touch
              </h1>
              <p className="text-start font-sans text-lg text-slate-700">
                I&apos;d love to hear from you. Please fill out the form below
                and I will get back to you as soon as possible.
              </p>
              <div className="flex items-center border-b border-gray-400 py-2">
                <input
                  className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  type="text"
                  name="from_name"
                  placeholder="Text your best name. E.g. John Travolta."
                  aria-label="Full name"
                ></input>
              </div>
              <div className="flex items-center border-b border-gray-400 py-2">
                <input
                  className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  type="email"
                  name="from_email"
                  placeholder="Text your best email. E.g. johntravolta@email.com"
                  aria-label="Email"
                ></input>
              </div>

              <div className="col-span-full border-b border-gray-400 py-2">
                <div className="mt-2">
                  <textarea
                    id="message"
                    name="message"
                    rows="3"
                    placeholder="Tell me about your project. Let me know how I can help!"
                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none resize-none"
                    defaultValue={""}
                  ></textarea>
                </div>
              </div>
            </div>
            <button type="submit" value="Send" id="btn">
              <a
                href="#_"
                className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-gray-800 transition-all duration-300 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 rounded-md cursor-pointer hover:bg-gradient-to-bl focus:ring-4 focus:ring-red-100 dark:focus:ring-red-400 ease focus:outline-none mt-10"
              >
                <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-0 group-hover:translate-x-0"></span>
                <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                <span className="relative z-20 flex items-center text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="relative w-5 h-5 mr-2 text-gray-800"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                    />
                  </svg>
                  {buttonText}
                </span>
              </a>
            </button>
          </form>
        </section>
      </Element>
    </>
  );
}

export default HireMe;
