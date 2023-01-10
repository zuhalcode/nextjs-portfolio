import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

export default function HeaderSocial() {
  return (
    <div className="absolute mt-[250px] hidden flex-col justify-center space-y-5 sm:flex ">
      <a
        href="https://www.linkedin.com/in/mohammad-dzakiyyul-ashfiya-el-arif-b132a9261/"
        target="_blank"
        className="text-[20px] text-color-primary transition-all duration-200 hover:text-white"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/zuhalcode"
        target="_blank"
        className="text-[20px] text-color-primary transition-all duration-200 hover:text-white"
        rel="noreferrer"
      >
        <BsGithub />
      </a>
      <a
        href="https://www.instagram.com/zuhal239_/"
        target="_blank"
        className="text-[20px] text-color-primary transition-all duration-200 hover:text-white"
        rel="noreferrer"
      >
        <BsInstagram />
      </a>
    </div>
  );
}
