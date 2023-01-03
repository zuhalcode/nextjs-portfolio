import { FaFacebook } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
export default function Footer() {
  return (
    <footer className="mt-28 bg-color-primary py-12 text-center text-sm">
      <a
        href="#"
        className=" mb-8 inline-block text-3xl font-semibold uppercase text-color-bg"
      >
        Mohammad Dzakiyyul
      </a>

      <ul className="mx-auto mb-12 flex flex-col flex-wrap justify-center gap-8 uppercase text-color-bg md:flex-row">
        <li className="link">
          <a href="#">Home</a>
        </li>
        <li className="link">
          <a href="#about">About</a>
        </li>
        <li className="link">
          <a href="#experience">Experience</a>
        </li>
        <li className="link">
          <a href="#contact">Contact</a>
        </li>
        <li className="link">
          <a href="#service">Service</a>
        </li>
        <li className="link">
          <a href="#experience">Experience</a>
        </li>
      </ul>

      <div className="mx-auto mb-16 flex justify-center gap-4 text-white ">
        <a
          href="#"
          className="flex rounded-md border border-solid border-transparent bg-color-bg p-3 hover:border-color-bg  hover:bg-transparent hover:text-color-bg"
        >
          <FaFacebook />
        </a>
        <a
          href="#"
          className="flex rounded-md border border-solid border-transparent bg-color-bg p-3 hover:border-color-bg  hover:bg-transparent hover:text-color-bg"
        >
          <FiInstagram />
        </a>
        <a
          href="#"
          className="flex rounded-md border border-solid border-transparent bg-color-bg p-3 hover:border-color-bg  hover:bg-transparent hover:text-color-bg"
        >
          <IoLogoTwitter />
        </a>
      </div>
      <div className="mb-24 text-color-bg">
        <small className="">
          &copy; Mohammad Dzakiyyul. All rights reserved.
        </small>
      </div>
    </footer>
  );
}
