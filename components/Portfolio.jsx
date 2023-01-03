import Image from "next/image";
import { portfolios } from "../data/PortfolioData";

export default function Portfolio() {
  return (
    <div id="portfolio" className="section pt-10">
      <h5 className="text-center text-sm font-medium text-color-light">
        My Recent Work
      </h5>
      <h2 className="text-center text-2xl font-medium text-color-primary">
        Portfolio
      </h2>

      <div className="mx-auto mt-10 grid w-full grid-cols-1 gap-5 px-10 sm:w-[75%] sm:grid-cols-2 sm:px-0 xl:grid-cols-3">
        {portfolios.map((project, index) => (
          <article key={index} className="article rounded-3xl p-5">
            <div className="overflow-hidden rounded-3xl">
              <Image
                src="/assets/portfolio1.jpg"
                width={500}
                height={500}
                alt=""
              />
            </div>
            <h3 className="mt-5 mb-8">{project.title}</h3>
            <div className="mb-4 flex gap-4">
              <a
                href="#"
                className="rounded-md border border-color-primary px-3 py-2 text-color-primary hover:bg-white hover:text-color-bg"
              >
                Github
              </a>
              <a
                href="#"
                className=" rounded-md bg-color-primary px-3 py-2 text-color-bg-variant hover:bg-white hover:text-color-bg"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
