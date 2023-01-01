import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

export default function HeaderSocial() {
  return (
    <div className="absolute mt-[250px] hidden flex-col justify-center space-y-5 sm:flex ">
      <a
        href="#"
        className="text-[20px] text-color-primary transition-all duration-200 hover:text-white"
      >
        <BsLinkedin />
      </a>
      <a
        href="#"
        className="text-[20px] text-color-primary transition-all duration-200 hover:text-white"
      >
        <BsGithub />
      </a>
      <a
        href="#"
        className="text-[20px] text-color-primary transition-all duration-200 hover:text-white"
      >
        <BsInstagram />
      </a>
    </div>
  );
}
