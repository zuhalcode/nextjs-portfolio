import Image from "next/image";
import HeaderSocial from "./HeaderSocial";

export default function Header() {
  return (
    <div className="text-center pt-14 w-[90%] mx-auto relative">
      <div className="text-lg font-semibold">Hello I&apos;m</div>
      <h1 className="text-2xl font-bold leading-10 ">Mohammad Dzakiyyul</h1>
      <div className="text-lg">Fullstack Developer</div>

      <div className="flex justify-center mt-8 space-x-5">
        <a href="#" className="text-color-primary border-color-primary border px-3 py-2 rounded-md hover:bg-white hover:text-color-bg">
          Download CV
        </a>
        <a href="#" className=" text-color-bg-variant bg-color-primary px-3 py-2 rounded-md hover:bg-white hover:text-color-bg">
          Let&apos;s Talk
        </a>
      </div>

      <a href="#" className="absolute rotate-90 text-[18px] right-6 bottom-[190px] text-color-primary">
        Scroll Down
      </a>

      <HeaderSocial />

      <div className="me mx-auto">
        <Image src={"/assets/me.png"} width={500} height={500} alt="" />
      </div>
    </div>
  );
}
