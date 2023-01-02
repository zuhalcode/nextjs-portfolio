import { MdOutlineEmail } from "react-icons/md";
export default function Contact() {
  return (
    <div id="contact" className="section">
      <h5 className="text-center text-sm font-medium text-color-light">
        Get in Touch
      </h5>
      <h2 className="text-center text-2xl font-medium text-color-primary">
        Contact Me
      </h2>

      <div className="mx-auto grid w-[90%] grid-cols-1 gap-8 pt-10 font-poppins sm:w-[58%] md:grid-cols-35-50 md:gap-[12%]">
        <div className="flex flex-col gap-6">
          <article className="article -space-y-0 rounded-3xl p-3 text-center">
            <MdOutlineEmail className="mx-auto mb-2 text-center text-xl" />
            <h4 className="text-base font-medium">Email</h4>
            <h5 className="text-sm font-normal">zuhal@gmail.com</h5>
            <a href="#" className="inline-block text-sm text-color-primary">
              Send a message
            </a>
          </article>
          <article className="article -space-y-0 rounded-3xl p-3 text-center">
            <MdOutlineEmail className="mx-auto mb-2 text-center text-xl" />
            <h4 className="text-base font-medium">Email</h4>
            <h5 className="text-sm font-normal">zuhal@gmail.com</h5>
            <a href="#" className="inline-block text-sm text-color-primary">
              Send a message
            </a>
          </article>
          <article className="article -space-y-0 rounded-3xl p-3 text-center">
            <MdOutlineEmail className="mx-auto mb-2 text-center text-xl" />
            <h4 className="text-base font-medium">Email</h4>
            <h5 className="text-sm font-normal">zuhal@gmail.com</h5>
            <a href="#" className="inline-block text-sm text-color-primary">
              Send a message
            </a>
          </article>
        </div>
        <form action="" className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Your Message"
            className="w-full resize-none rounded-lg border border-solid border-color-primary-variant bg-transparent p-6 text-white"
          />
          <input
            type="text"
            placeholder="Your Message"
            className="w-full resize-none rounded-lg border border-solid border-color-primary-variant bg-transparent p-6 text-white"
          />
          <textarea
            type="text"
            rows={7}
            placeholder="Your Message"
            className="w-full resize-none rounded-lg border border-solid border-color-primary-variant bg-transparent p-6 text-white"
          />
          <button className="rounded-md bg-color-primary px-3 py-2 text-color-bg-variant hover:bg-white hover:text-color-bg">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
