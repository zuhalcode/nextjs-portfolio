import Image from "next/image";
import HeaderSocial from "./HeaderSocial";

export default function Header() {
  return (
    <div className="relative mx-auto w-[90%] pt-14 text-center">
      <div className="text-lg font-semibold">Hello I&apos;m</div>
      <h1 className="text-2xl font-bold leading-10 ">Mohammad Dzakiyyul</h1>
      <div className="text-lg">Fullstack Developer</div>

      <div className="mt-8 flex justify-center space-x-5 ">
        <a
          href="#"
          className="rounded-md border border-color-primary px-3 py-2 text-color-primary hover:bg-white hover:text-color-bg"
        >
          Download CV
        </a>
        <a
          href="#"
          className=" rounded-md bg-color-primary px-3 py-2 text-color-bg-variant hover:bg-white hover:text-color-bg"
        >
          Let&apos;s Talk
        </a>
      </div>

      <a
        href="#"
        className="absolute right-0 bottom-[160px] hidden rotate-90 text-[18px] text-color-primary sm:inline"
      >
        Scroll Down
      </a>

      <HeaderSocial />

      <div className="me mx-auto">
        <Image src={"/assets/me.png"} width={500} height={500} alt="" />
      </div>
    </div>
  );
}
