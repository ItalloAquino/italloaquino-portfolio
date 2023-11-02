function Hero() {
  return (
    <>
      <section>
        <div className="max-w-4xl mx-auto md:my-40 my-20 ">
          <div className="w-full h-11 rounded-t-lg bg-gray-200 flex justify-start items-center space-x-1.5 px-3">
            <span className="w-3 h-3 rounded-full bg-red-400"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
            <span className="w-3 h-3 rounded-full bg-green-400"></span>
          </div>
          <div className="bg-gray-100 border-t-0 w-full md:h-96 h-auto flex flex-col items-start">
            <div className="m-5 flex flex-col items-start">
              <code className=" text-slate-600 opacity-60">{"<body>"}</code>
              <code className=" text-slate-600 opacity-60">{"<p>"}</code>
              <h1 className="flex items-center text-xl leading-10 md:text-3xl ">
                Hello,
                 <img
                  className="mx-1"
                  width="36"
                  height="36"
                  src="https://img.icons8.com/emoji/48/waving-hand-emoji.png"
                  alt="waving-hand-emoji"
                />{" "} 
                I&apos;m Itallo!{" "}
              </h1>
              <p className=" text-start flex items-start flex-col leading-10 font-sans text-lg text-slate-700">
                Welcome to my website. Here, you will find some information
                about me. However, please don&apos;t hesitate to reach out
                and discover what I can do for you.
                <br />
                <span className="flex text-start items-start">
                  I hope you enjoy your time here.{" "}
                  <img
                    className="mx-1 self-end"
                    width="36"
                    height="36"
                    src="https://img.icons8.com/emoji/48/slightly-smiling-face.png"
                    alt="slightly-smiling-face"
                  />
                </span>
              </p>
              <code className=" text-slate-600 opacity-60">{"</p>"}</code>
              <code className=" text-slate-600 opacity-60">{"</body>"}</code>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
