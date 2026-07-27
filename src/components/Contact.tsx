"use client";
import { motion } from "motion/react";
import { GitHub, Linkedin, Mail } from "./shared/Icons";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto grid max-w-6xl gap-16 px-6 py-20 md:grid-cols-2">
      <motion.form
        className="space-y-5"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}>
        <input
          placeholder="Your name"
          className="h-14 w-full rounded-lg border-2 border-black px-5 outline-none placeholder:text-neutral-500"
        />
        <input
          type="email"
          placeholder="Email"
          className="h-14 w-full rounded-lg border-2 border-black px-5 outline-none placeholder:text-neutral-500"
        />
        <input
          placeholder="Your website (If exists)"
          className="h-14 w-full rounded-lg border-2 border-black px-5 outline-none placeholder:text-neutral-500"
        />
        <textarea
          placeholder="How can I help?*"
          className="h-40 w-full resize-none rounded-lg border-2 border-black px-5 py-4 outline-none placeholder:text-neutral-500"
        />

        <div className="flex items-center gap-6">
          <button
            type="submit"
            className="h-11 rounded-lg bg-black px-6 font-extrabold text-xs sm:text-base text-white">
            Get In Touch
          </button>

          <div className="flex items-center gap-5">
            {[
              {
                href: "https://github.com/mohsen104",
                label: "Github",
                icon: <GitHub />,
              },
              {
                href: "https://www.linkedin.com/in/mohsenkarimvand",
                label: "Linkedin",
                icon: <Linkedin />,
              },
              {
                href: "mailto:m.karimvand.84@gmail.com",
                label: "Mail",
                icon: <Mail />,
              },
            ].map(({ href, label, icon }, i) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                  delay: 0.4 + i * 0.1,
                }}>
                <button
                  type="button"
                  aria-label={label}
                  className="inline-flex cursor-pointer size-10 items-center justify-center rounded-md border-2 border-black bg-white transition -translate-y-0.5 shadow-[3px_3px_0_#000] hover:translate-0 hover:shadow-none">
                  <span className="[&>svg]:h-5 [&>svg]:w-5">{icon}</span>
                </button>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.form>

      <motion.div
        className="pt-2"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}>
        <h3 className="text-4xl font-black leading-tight md:text-5xl">
          Let's{" "}
          <span className="relative -mx-1 inline-block rounded px-1">
            <span className="relative z-10">talk</span>
            <span className="absolute inset-0 z-0 rounded bg-white ring-2 ring-black shadow-[6px_6px_0_#000]" />
          </span>{" "}
          for
          <br />
          <span className="mt-2 inline-block">Something special</span>
        </h3>

        <motion.p
          className="mt-5 max-w-xl leading-7 text-neutral-500"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}>
          I seek to push the limits of creativity to create high-engaging,
          user-friendly, and memorable interactive experiences.
        </motion.p>

        <motion.div
          className="mt-8 space-y-2 text-xl font-extrabold"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.45 }}>
          <div>m.karimvand.84@gmail.com</div>
          <div>+989196404757</div>
        </motion.div>
      </motion.div>
    </section>
  );
}
