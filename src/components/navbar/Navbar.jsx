import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <>
      <header className="flex justify-between">
        <div className="mockup-code font-serif text-xl hover:translate-y-1 hover:duration-200 cursor-pointer">
          <span className=" font-extrabold">{" <"}</span>
          <code>Itallo Aquino</code>
          <span className=" font-extrabold">{" />"}</span>
        </div>
        {/* Desktop Navbar */}
        <nav className="w-1/2 hidden md:flex gap-5">
          <ul className="flex items-center justify-between w-full">
            <li className=" hover:bg-yellow-400 hover:text-black p-1 hover:translate-x-1 hover:translate-y-1  hover:duration-500">
              <a href="#">/ home</a>
            </li>
            <li className=" hover:bg-yellow-400 hover:text-black p-1 hover:translate-x-1 hover:translate-y-1  hover:duration-500">
              <a href="#">/ about-me</a>
            </li>
            <li className=" hover:bg-yellow-400 hover:text-black p-1 hover:translate-x-1 hover:translate-y-1  hover:duration-500">
              <a href="#">/ my-projects</a>
            </li>
            <li className=" hover:bg-yellow-400 hover:text-black p-1 hover:translate-x-1 hover:translate-y-1  hover:duration-500">
              <a href="#">/ hire-me</a>
            </li>
          </ul>
        </nav>

        {/* Hamburger */}
        <FontAwesomeIcon
          icon={navOpen ? faXmark : faBars}
          className="text-3xl md:hidden z-50 cursor-pointer"
          aria-hidden="true"
          onClick={toggleNav}
        />

        {/* Mobile Navbar */}
        {navOpen && (
          <nav className="h-[50%] fixed top-[0px] right-[0px] flex flex-col justify-around items-center w-full md:hidden bg-white z-40 duration-1000">
            <a
              className=" hover:bg-yellow-400 hover:text-black p-1 hover:translate-x-1 hover:translate-y-1  hover:duration-500"
              href="#"
            >
              / home
            </a>
            <a
              className=" hover:bg-yellow-400 hover:text-black p-1 hover:translate-x-1 hover:translate-y-1  hover:duration-500"
              href="#"
            >
              / about-me
            </a>
            <a
              className=" hover:bg-yellow-400 hover:text-black p-1 hover:translate-x-1 hover:translate-y-1  hover:duration-500"
              href="#"
            >
              / my-projects
            </a>
            <a
              className=" hover:bg-yellow-400 hover:text-black p-1 hover:translate-x-1 hover:translate-y-1  hover:duration-500"
              href="#"
            >
              / hire-me
            </a>
          </nav>
        )}
      </header>
    </>
  );
}

export default Navbar;
