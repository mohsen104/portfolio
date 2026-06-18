"use client";
import { motion } from "motion/react";
import { ChevronDown } from "./Shared1/Icons";

export default function Header() {
  return (
    <motion.header
      className="sticky top-0 z-50 border-b-2 border-neutral-200 bg-white/70 backdrop-blur"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <motion.a
          href="#"
          className="flex items-center gap-2 text-sm font-medium"
          aria-label="Personal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}>
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border-2 border-black">
            <span className="h-2 w-2 rounded-full bg-black" />
          </span>
          Portfolio
        </motion.a>

        <nav className="hidden gap-6 text-sm md:flex">
          {[
            ["About Me", "#about"],
            ["Skills", "#skills"],
            ["Project", "#projects"],
            ["Contact Me", "#contact"],
          ].map(([label, href], index) => (
            <motion.a
              key={label}
              href={href}
              className="transition-colors hover:text-neutral-600"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * (index + 1) }}>
              {label}
            </motion.a>
          ))}
        </nav>

        <motion.a
          href="./resume.pdf"
          download
          className="inline-flex items-center gap-2 rounded-lg border-2 border-black px-3 py-2 text-sm font-semibold transition -translate-y-0.5 shadow-[4px_4px_0_#000] hover:translate-0 hover:shadow-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}>
          <span>Resume</span>
          <ChevronDown className="h-3.5 w-3.5 rotate-270" />
        </motion.a>
      </div>
    </motion.header>
  );
}
