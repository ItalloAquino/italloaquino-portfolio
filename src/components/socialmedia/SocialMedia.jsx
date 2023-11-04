import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

import { BsWhatsapp } from "react-icons/bs";

function SocialMediaIcons() {
  return (
    <>
      <section className="flex gap-8 mb-4 opacity-60">
        <a
          href="https://www.linkedin.com/in/itallo-aquino/?locale=en_US"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin className="w-8 h-8" />
        </a>
        <a
          href="https://github.com/ItalloAquino"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <AiFillGithub className="w-8 h-8" />
        </a>
        <a href="https://wa.link/7kbnbq" target="_blank" rel="noreferrer">
          {" "}
          <BsWhatsapp className="w-8 h-8" />
        </a>
      </section>
    </>
  );
}

export default SocialMediaIcons;
