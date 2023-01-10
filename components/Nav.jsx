import { useState } from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

export default function Nav() {
  const [activeNav, setActiveNav] = useState("#");
  console.log(activeNav);

  return (
    <nav className=" fixed left-1/2 bottom-10 z-10 flex w-[max-content] -translate-x-1/2 gap-3 rounded-full bg-[rgba(0,0,0,.3)] py-3 px-7 backdrop-blur-lg">
      <a
        href="#"
        className={`nav-btn ${activeNav === "#" && "active"}`}
        onClick={() => setActiveNav("#")}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        className={`nav-btn ${activeNav === "#about" && "active"}`}
        onClick={() => setActiveNav("#about")}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        className={`nav-btn ${activeNav === "#experience" && "active"}`}
        onClick={() => setActiveNav("#experience")}
      >
        <BiBook />
      </a>
      <a
        href="#portfolio"
        className={`nav-btn ${activeNav === "#portfolio" && "active"}`}
        onClick={() => setActiveNav("#portfolio")}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        className={`nav-btn ${activeNav === "#contact" && "active"}`}
        onClick={() => setActiveNav("#contact")}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
}
