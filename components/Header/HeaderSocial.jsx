import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

export default function HeaderSocial() {
  return (
    <div className="absolute mt-[250px] flex flex-col justify-center space-y-5 ">
      <a href="#" className="text-color-primary text-[20px] hover:text-white transition-all duration-200">
        <BsLinkedin />
      </a>
      <a href="#" className="text-color-primary hover:text-white text-[20px] transition-all duration-200">
        <BsGithub />
      </a>
      <a href="#" className="text-color-primary hover:text-white text-[20px] transition-all duration-200">
        <BsInstagram />
      </a>
    </div>
  );
}
