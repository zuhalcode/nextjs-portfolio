import Image from "next/image";
import HeaderSocial from "./HeaderSocial";
import me from "../../public/assets/anjay3.png";

export default function Header() {
  return (
    <div className="relative mx-auto w-[90%] pt-14 text-center">
      <div className="text-lg font-semibold">Hello I&apos;m</div>
      <h1 className="text-2xl font-bold leading-10 ">
        Mohammad Dzakiyyul Ashfiya&apos; El Arif
      </h1>
      <div className="text-lg">JavaScript Enthusiast</div>

      <div className="mt-8 flex justify-center space-x-5 ">
        <a
          href="/assets/Dzakiyyul-Ashfiya-CV.pdf"
          target="_blank"
          className="rounded-md border border-color-primary px-3 py-2 text-color-primary hover:bg-white hover:text-color-bg"
        >
          Download CV
        </a>
        <a
          href="#contact"
          className=" rounded-md bg-color-primary px-3 py-2 text-color-bg-variant hover:bg-white hover:text-color-bg"
        >
          Let&apos;s Talk
        </a>
      </div>

      <a
        href="#contact"
        className="absolute right-0 bottom-[160px] hidden rotate-90 text-[18px] text-color-primary sm:inline"
      >
        Scroll Down
      </a>

      <HeaderSocial />

      <div className="me mx-auto">
        <Image
          src={me}
          className="rounded-3xl"
          width={500}
          height={500}
          alt=""
        />
      </div>
    </div>
  );
}
