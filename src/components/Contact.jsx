
import { useState } from "react";
import { Mail, Send } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const subject = encodeURIComponent(
      "Portfolio enquiry from " + form.name
    );

    const body = encodeURIComponent(
      "Name: " + form.name +
      "\nEmail: " + form.email +
      "\n\nMessage:\n" + form.message
    );

    const mailto =
      "mailto:greeshmita.bhogadi@gmail.com?subject=" +
      subject +
      "&body=" +
      body;

    window.location.href = mailto;
  }

  return (
    <section
      id="contact"
      className="bg-[#101a16] px-6 py-20 text-[#f0f5f1] sm:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#a3e635]">
            Get In Touch
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Contact Me
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-[#aab8af]">
            Open to software development opportunities,
            collaborations, and interesting projects.
            Feel free to get in touch.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-[#304438] bg-[#17251e] p-7 sm:p-8">
            <h3 className="text-2xl font-bold">
              Let's Connect
            </h3>

            <p className="mt-3 leading-7 text-[#aab8af]">
              Have an opportunity or project in mind?
              Reach out by email or connect with me professionally.
            </p>

            <a
              href="mailto:greeshmita.bhogadi@gmail.com"
              className="mt-7 flex items-center gap-4 rounded-xl border border-[#304438] p-4 transition hover:border-[#a3e635]"
            >
              <Mail
                size={22}
                className="shrink-0 text-[#a3e635]"
              />

              <div>
                <p className="font-semibold">Email</p>
                <p className="break-all text-sm text-[#aab8af]">
                  greeshmita.bhogadi@gmail.com
                </p>
              </div>
            </a>

            <div className="mt-6 flex gap-4">
              <a
                href="https://www.linkedin.com/in/greeshmita-bhogadi/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#304438] text-[#a3e635] transition hover:bg-[#26392d]"
              >
                <FaLinkedinIn size={21} />
              </a>

              <a
                href="https://github.com/Greeshmita-23"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#304438] text-[#a3e635] transition hover:bg-[#26392d]"
              >
                <FaGithub size={21} />
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-[#304438] bg-[#17251e] p-7 sm:p-8"
          >
            <h3 className="text-2xl font-bold">
              Send a Message
            </h3>

            <div className="mt-6 space-y-5">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-medium"
                >
                  Your Name
                </label>

                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  autoComplete="name"
                  required
                  placeholder="Enter your name"
                  className="w-full rounded-lg border border-[#304438] bg-[#101a16] px-4 py-3 text-[#f0f5f1] outline-none placeholder:text-[#718078] focus:border-[#a3e635]"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-medium"
                >
                  Your Email
                </label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  autoComplete="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-[#304438] bg-[#101a16] px-4 py-3 text-[#f0f5f1] outline-none placeholder:text-[#718078] focus:border-[#a3e635]"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-medium"
                >
                  Message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your opportunity or project..."
                  className="w-full resize-y rounded-lg border border-[#304438] bg-[#101a16] px-4 py-3 text-[#f0f5f1] outline-none placeholder:text-[#718078] focus:border-[#a3e635]"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#a3e635] px-6 py-3 font-bold text-[#101a16] transition hover:bg-[#bef264]"
              >
                <Send size={18} />
                Open Email to Send
              </button>

              <p className="text-xs leading-5 text-[#aab8af]">
                Your default email application will open with
                your message prepared. It will not be sent
                automatically.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
