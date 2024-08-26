import Image from "next/image";
import { FaAward } from "react-icons/fa";
import aboutMe from "../public/assets/anjay1.png";

export default function About() {
  return (
    <div id="about" className="section font-poppins pt-5">
      <h5 className="text-center text-sm font-medium text-color-light">
        Get To Know
      </h5>
      <h2 className="text-center text-2xl font-medium text-color-primary">
        About Me
      </h2>

      <div className="mx-auto mt-10 w-full grid-cols-1 place-items-center gap-[15%] px-5 sm:grid-cols-35-50  md:grid">
        <div className="gradient-45 mx-auto grid aspect-square w-2/3 place-items-center rounded-3xl sm:w-1/2 md:w-5/6 xl:ml-36">
          <div className="rotate-[10deg] overflow-hidden rounded-3xl transition-all duration-500 hover:rotate-0">
            <Image width={400} height={400} src={aboutMe} alt="" />
          </div>
        </div>

        <div className="mt-10 mr-5 w-full text-center md:-mt-20">
          {/* <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
            <article className="article cursor-default space-y-2 rounded-lg py-8 text-center">
              <FaAward className="mx-auto mb-5 text-2xl text-color-primary" />
              <p className="font-medium">Experience</p>
              <small className="text-sm text-color-light">
                3+ Years Working
              </small>
            </article>
            <article className="article cursor-default space-y-2 rounded-lg py-8 text-center">
              <FaAward className="mx-auto mb-5 text-2xl text-color-primary" />
              <p className="font-medium">Experience</p>
              <small className="text-sm text-color-light">
                3+ Years Working
              </small>
            </article>
            <article className="article cursor-default space-y-2 rounded-lg py-8 text-center">
              <FaAward className="mx-auto mb-5 text-2xl text-color-primary" />
              <p className="font-medium">Experience</p>
              <small className="text-sm text-color-light">
                3+ Years Working
              </small>
            </article>
          </div> */}

          <p className="my-6 mx-0 text-color-light md:mb-5 md:text-justify xl:mx-10">
            I am an individual with a strong interest in Website Development,
            particularly in JavaScript technology. I focus on developing various
            projects using JavaScript frameworks like ReactJS, NextJS, and
            NestJS, integrated with TailwindCSS to create modern, efficient, and
            scalable web applications. My career goal is contributing to
            building innovative web solutions that support digital
            transformation.
          </p>
          <a
            href="#contact"
            className=" mx-auto rounded-md bg-color-primary px-3 py-2 text-color-bg-variant hover:bg-white hover:text-color-bg"
          >
            Let&apos;s Talk
          </a>
        </div>
      </div>
    </div>
  );
}
