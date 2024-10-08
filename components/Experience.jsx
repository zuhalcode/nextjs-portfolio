import { BsPatchCheckFill } from "react-icons/bs";
import { backEnd } from "../data/BackEnd";
import { frontEnd } from "../data/FrontEnd";

export default function Experience() {
  return (
    <div id="experience" className="section pt-8">
      <h5 className="text-center text-sm font-medium text-color-light">
        What Skill I Have
      </h5>
      <h2 className="pb-5 text-center text-2xl font-medium text-color-primary">
        My Experience
      </h2>

      <div className="mx-auto mt-8 grid w-11/12 grid-cols-1 gap-4 md:w-10/12 md:grid-cols-2 md:gap-8">
        <div className="article mx-auto w-full cursor-default rounded-3xl p-8 md:mx-0  md:px-20">
          <h3 className="mb-8 text-center font-medium uppercase text-color-primary">
            FrontEnd Development
          </h3>
          <div className="grid grid-cols-2 gap-6  sm:p-4 xl:p-0">
            {frontEnd.map((data, index) => (
              <article key={index} className="flex gap-4">
                <BsPatchCheckFill className="mt-1 text-color-primary" />
                <div>
                  <h4 className="text-[90%] font-medium ">{data.name}</h4>
                  {/* <small className="font-medium tracking-wider text-color-light">
                    {data.exp.replace(/^\w/, (c) => c.toUpperCase())}
                  </small> */}
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="article mx-auto w-full cursor-default rounded-3xl p-8 md:mx-0  md:px-20">
          <h3 className="mb-8 text-center font-medium uppercase text-color-primary">
            Backend Development
          </h3>
          <div className="grid grid-cols-2 gap-6  sm:p-4 xl:p-0">
            {backEnd.map((data, index) => (
              <article key={index} className="flex gap-4">
                <BsPatchCheckFill className="mt-1 text-color-primary" />
                <div>
                  <h4 className="text-[90%] font-medium">{data.name}</h4>
                  {/* <small className="font-medium tracking-wider text-color-light">
                    {data.exp.replace(/^\w/, (c) => c.toUpperCase())}
                  </small> */}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
