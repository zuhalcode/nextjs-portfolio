import { MdOutlineEmail } from "react-icons/md";
import emailJS from "@emailjs/browser";
import { useRef } from "react";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailJS
      .sendForm(
        "service_at9xoam",
        "template_yk3ha36",
        form.current,
        "wSAZBrRVnbGtF6s7h"
      )
      .then(
        () => e.target.reset(),
        (error) => console.log(error.text)
      );
  };
  return (
    <div id="contact" className="section">
      <h5 className="text-center text-sm font-medium text-color-light">
        Get in Touch
      </h5>
      <h2 className="text-center text-2xl font-medium text-color-primary">
        Contact Me
      </h2>

      <div className="font-poppins mx-auto grid w-[90%] grid-cols-1 gap-8 pt-10 sm:w-[58%] md:grid-cols-35-50 md:gap-[12%]">
        <div className="flex flex-col gap-6">
          <article className="article -space-y-0 rounded-3xl p-3 text-center">
            <MdOutlineEmail className="mx-auto mb-2 text-center text-xl" />
            <h4 className="text-base font-medium">Email</h4>
            <h5 className="text-sm font-normal">dzakiyyulashfiya@gmail.com</h5>
            <a
              href="mailto:dzakiyyulashfiya@gmail.com"
              className="inline-block text-sm text-color-primary"
            >
              Send a message
            </a>
          </article>
          <article className="article -space-y-0 rounded-3xl p-3 text-center">
            <RiMessengerLine className="mx-auto mb-2 text-center text-xl" />
            <h4 className="text-base font-medium">Messenger</h4>
            <h5 className="text-sm font-normal">dzakiyyulashfiya</h5>
            <a
              href="https://m.me/dzakiyyulashfiya"
              className="inline-block text-sm text-color-primary"
            >
              Send a message
            </a>
          </article>
          <article className="article -space-y-0 rounded-3xl p-3 text-center">
            <BsWhatsapp className="mx-auto mb-2 text-center text-xl" />
            <h4 className="text-base font-medium">WhatsApp</h4>
            <h5 className="text-sm font-normal">+62 878-9116-2361</h5>
            <a
              href="https://wa.me/+6287891162361"
              className="inline-block text-sm text-color-primary"
            >
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Your Name"
            autoComplete="off"
            name="name"
            required
            className="w-full resize-none rounded-lg border border-solid border-color-primary-variant bg-transparent p-6 text-white"
          />
          <input
            type="text"
            name="email"
            autoComplete="off"
            required
            placeholder="Your Email"
            className="w-full resize-none rounded-lg border border-solid border-color-primary-variant bg-transparent p-6 text-white"
          />
          <textarea
            autoComplete="off"
            name="message"
            rows={7}
            required
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
