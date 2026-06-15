"use client";
import { motion } from "motion/react";
import Image from "next/image";

const projects = [
  {
    title: "Admin Panel (Dashboard)",
    description:
      "A modern responsive admin dashboard built with Next js and TailwindCSS, featuring user and role management, real-time data visualization, interactive charts, sortable tables, and authentication system. Modular structure, and optimized codebase for scalability.",
    imageSrc: "/project-1.png",
    imageAlt: "Admin Panel preview",
    href: "https://admin-panel-theta-teal.vercel.app/",
  },
  {
    title: "Crypto Tracker Application",
    description:
      "A real-time cryptocurrency tracking platform with live market data, dynamic price updates, and detailed coin analytics. Includes search, sorting, watchlist functionality, and responsive charts powered by APIs. Built with React, TypeScript, and TailwindCSS for seamless performance.",
    imageSrc: "/project-2.png",
    imageAlt: "Crypto Tracker preview",
    href: "https://crypto-app-one-sigma.vercel.app/",
  },
  {
    title: "Levenshtein Playground",
    description:
      "A minimal interactive playground for testing the Levenshtein Distance — the same typo-tolerance algorithm used by Google. Type a word and a text, and it instantly shows the closest match and similarity score. Built with Next.js & TailwindCSS.",
    imageSrc: "/project-5.png",
    imageAlt: "Levenshtein Playground",
    href: "https://levenshtein-playground.vercel.app/",
  },
  {
    title: "Mobile Shop (E-commerce)",
    description:
      "A clean and minimal e-commerce web app for mobile devices. Includes product listing, filtering, cart management, and responsive layout. Designed for fast browsing experience and optimized for conversions. Built with Next js and TailwindCSS following best UI practices.",
    imageSrc: "/project-3.png",
    imageAlt: "Mobile Shop preview",
    href: "https://mobile-shop-rust.vercel.app/",
  },
  {
    title: "AI Chat Interface",
    description:
      "A clean, responsive ChatGPT-style UI with streaming responses, Markdown rendering (code blocks, lists), and message persistence. Supports keyboard shortcuts, system prompts. Built with Next, TypeScript, and TailwindCSS focusing on accessibility and smooth UX.",
    imageSrc: "/project-4.png",
    imageAlt: "AI Chat Interface preview",
    href: "https://chat-openai-one.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h3
          className="mb-12 text-center text-2xl font-bold md:text-3xl"
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          My <span className="font-extrabold">Projects</span>
        </motion.h3>

        <div className="grid gap-20">
          {projects.map((project, index) => {
            const numberLabel = String(index + 1).padStart(2, "0");
            const isEven = index % 2 === 1;

            return (
              <div
                key={project.title}
                className={`grid gap-10 md:grid-cols-2 ${
                  isEven ? "items-center" : "items-start"
                }`}
              >
                <motion.div
                  className={isEven ? "order-1 md:order-2" : ""}
                  initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.05 }}
                >
                  <Image
                    src={project.imageSrc}
                    alt={project.imageAlt}
                    className="h-auto w-full rounded-2xl shadow-[0_0_0_1px_rgba(255,255,255,0.15)]"
                    width={600}
                    height={400}
                  />
                </motion.div>

                <motion.div
                  className={isEven ? "order-2 md:order-1" : ""}
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.05 + 0.15 }}
                >
                  <div className="text-3xl font-extrabold">{numberLabel}</div>
                  <h4 className="mt-2 text-xl font-bold">{project.title}</h4>
                  <p className="mt-3 max-w-xl text-sm leading-6 text-white/70">
                    {project.description}
                  </p>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm text-white/80"
                  >
                    Visit project
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                      <path
                        d="M7 17L17 7M9 7h8v8"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  </a>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
