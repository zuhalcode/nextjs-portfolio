import { BiCheck } from "react-icons/bi";
import { services } from "../data/ServiceData";

export default function Services() {
  return (
    <div id="service" className="section pt-5">
      <h5 className="text-center text-sm font-medium text-color-light">
        What I Offer
      </h5>
      <h2 className="pb-5 text-center text-2xl font-medium text-color-primary">
        Services
      </h2>

      <div className="mx-auto grid h-auto w-full grid-cols-1 gap-6 px-5 sm:w-[80%] sm:grid-cols-2  sm:gap-8 sm:px-0 md:gap-12 xl:grid-cols-3">
        {services.map((service, index) => (
          <article
            key={index}
            className="article h-fit cursor-default rounded-b-3xl"
          >
            <div className="rounded-b-3xl bg-color-primary p-8 shadow-md">
              <h3 className="text-center text-base text-color-bg">
                {service.name}
              </h3>
            </div>
            <ul className="p-8">
              {service.descriptions.map((desc, index) => (
                <li key={index} className="mb-3 flex gap-4">
                  <BiCheck className="mt-[4px] text-color-primary" />
                  <p className="text-sm">{desc.text}</p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}
