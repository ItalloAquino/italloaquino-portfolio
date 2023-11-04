import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <>
      <header className="flex md:max-w-full w-full justify-between">
        <div className="flex mockup-code font-serif text-xl hover:translate-y-1 hover:duration-200 cursor-pointer">
          <span className=" font-extrabold">{" <"}</span>
          <code>Itallo Aquino</code>
          <span className=" font-extrabold">{" />"}</span>
        </div>
        {/* Desktop Navbar */}
        <nav className=" md:w-auto  w-1/2 hidden md:flex gap-5">
          <ul className="flex items-center justify-between w-full md:gap-10">
            <li className=" hover:bg-yellow-400 hover:text-black p-1 hover:translate-x-1 hover:translate-y-1  hover:duration-500">
              <Link
                to="hero"
                smooth={true}
                duration={100}
                className="cursor-pointer"
              >
                / home
              </Link>
            </li>
            <li className=" hover:bg-yellow-400 hover:text-black p-1 hover:translate-x-1 hover:translate-y-1  hover:duration-500">
              <Link
                to="about"
                smooth={true}
                duration={100}
                className="cursor-pointer"
              >
                / about-me
              </Link>
            </li>
            <li className=" hover:bg-yellow-400 hover:text-black p-1 hover:translate-x-1 hover:translate-y-1  hover:duration-500">
              <Link
                to="projects"
                smooth={true}
                duration={100}
                className="cursor-pointer"
              >
                / my-projects
              </Link>
            </li>
            <li className=" hover:bg-yellow-400 hover:text-black p-1 hover:translate-x-1 hover:translate-y-1  hover:duration-500">
              <Link
                activeClass="active"
                to="hire"
                smooth={true}
                spy={true}
                offset={-70}
                duration={100}
                className="cursor-pointer"
              >
                / hire-me
              </Link>
            </li>
          </ul>
        </nav>

        {/* Hamburger */}
        <FontAwesomeIcon
          icon={navOpen ? faXmark : faBars}
          className="text-3xl md:hidden z-50 cursor-pointer fixed right-5 top-5"
          aria-hidden="true"
          onClick={toggleNav}
        />

        {/* Mobile Navbar */}
        {navOpen && (
          <nav className="h-[100vh] fixed top-[0px] right-[0px] flex flex-col justify-around items-center w-full md:hidden bg-gradient-to-r from-rose-100 to-teal-100 z-40">
            <a
              onClick={toggleNav}
              className=" hover:bg-yellow-400 hover:text-black p-1 hover:translate-x-1 hover:translate-y-1  hover:duration-500"
              href="#hero"
            >
              / home
            </a>
            <a
              onClick={toggleNav}
              className=" hover:bg-yellow-400 hover:text-black p-1 hover:translate-x-1 hover:translate-y-1  hover:duration-500"
              href="#about"
            >
              / about-me
            </a>
            <a
              onClick={toggleNav}
              className=" hover:bg-yellow-400 hover:text-black p-1 hover:translate-x-1 hover:translate-y-1  hover:duration-500"
              href="#projects"
            >
              / my-projects
            </a>
            <a
              onClick={toggleNav}
              className=" hover:bg-yellow-400 hover:text-black p-1 hover:translate-x-1 hover:translate-y-1  hover:duration-500"
              href="#hire"
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
