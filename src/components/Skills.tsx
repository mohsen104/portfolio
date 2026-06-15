"use client";
import { motion } from "motion/react";
import {
  DockerIcon,
  GitIcon,
  GoIcon,
  JsIcon,
  NestIcon,
  NextIcon,
  NodeIcon,
  ReactIcon,
  TailwindIcon,
  TsIcon,
} from "@/components/Shared/Icons";

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16"
    >
      <motion.h3
        className="mb-6 text-center text-2xl font-extrabold"
        initial={{ opacity: 0, y: -16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        My <span className="font-black">Skills</span>
      </motion.h3>

      <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-5">
        {[
          ["JavaScript", <TsIcon key="ts" />],
          ["TypeScript", <JsIcon key="js" />],
          ["React", <ReactIcon key="react" />],
          ["Next.js", <NextIcon key="next" />],
          ["Tailwind", <TailwindIcon key="tailwind" />],
          ["Node", <NodeIcon key="node" />],
          ["Nest", <NestIcon key="nest" />],
          ["Go", <GoIcon key="go" />],
          ["Git", <GitIcon key="git" />],
          ["Docker", <DockerIcon key="docker" />],
        ].map(([label, icon], i) => (
          <motion.div
            key={i}
            className="group rounded-xl border-2 border-neutral-900 p-4 transition -translate-y-1 shadow-[6px_6px_0_#000] hover:translate-0 hover:shadow-none bg-white"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.07, ease: "easeOut" }}
          >
            <div className="mb-4 p-1 inline-flex h-10 w-10 items-center justify-center rounded-lg border-2 border-neutral-900 bg-white">
              {icon}
            </div>
            <p className="text-sm font-semibold">{label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
