import { BsGithub } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

export default function Footer() {
  const socialMedia = [
    {
      name: "Facebook",
      icon: FaFacebook,
      href: "https://www.facebook.com/dzakiyyulashfiya/",
    },
    {
      name: "Github",
      icon: BsGithub,
      href: "https://github.com/zuhalcode",
    },
    {
      name: "Instagram",
      icon: FiInstagram,
      href: "https://www.instagram.com/zuhal239_/",
    },
  ];

  return (
    <footer className="mt-28 bg-color-primary py-12 text-center text-sm">
      <a
        href="#"
        className=" mb-8 inline-block text-2xl font-semibold uppercase text-color-bg sm:text-3xl"
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
        {socialMedia.map((sm) => (
          <a
            key={sm.name}
            href={sm.href}
            target="_blank"
            rel="noreferrer"
            className="flex rounded-md border border-solid border-transparent bg-color-bg p-3 hover:border-color-bg  hover:bg-transparent hover:text-color-bg"
          >
            <sm.icon />
          </a>
        ))}
      </div>
      <div className="mb-24 text-color-bg">
        <small>&copy; Mohammad Dzakiyyul. All rights reserved.</small>
      </div>
    </footer>
  );
}
