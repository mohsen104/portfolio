"use client";
import { motion } from "motion/react";

export default function Experience() {
  return (
    <section className="bg-neutral-900 py-16 text-white" id="experience">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.h3
          className="mb-8 text-center text-2xl font-extrabold"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}>
          My <span className="font-black">Experience</span>
        </motion.h3>

        <div className="space-y-10 text-sm leading-6">
          {[
            {
              company: "Fara Ofogh",
              role: "Front-end Developer",
              date: "Mar 2025 - PRESENT",
              projects: [
                {
                  title: "Vehicle Management Dashboard",
                  items: [
                    "Collaborated in a flat-structured team to build a nationwide vehicle management dashboard using React.js, TypeScript, Tailwind, and Ant Design",
                    "Optimized build pipeline with Vite and React 19, improving Lighthouse scores from 50 to 95 and reducing bundle size by ~80%",
                    "Engineered a high-performance GIS system with MapLibre, rendering 5,000+ real-time data points with under 100ms latency",
                    "Integrated real-time communication via WebSocket and SignalR for live vehicle tracking",
                    "Established a type-safe API layer using generic APIResponse types, significantly reducing runtime type errors",
                    "Shipped a secure Authentication & Authorization system supporting 1,000+ users across 3 roles",
                    "Dockerized the frontend and configured Husky, Commitlint, Semantic Release, and MSW to streamline the release pipeline",
                  ],
                },
                {
                  title: "IOT Platform",
                  items: [
                    "Architected a Monorepo with Turborepo, reducing cross-package build time by ~80%",
                    "Crafted UI with React, Vite, and Material UI (MUI)",
                    "Wrote 50+ integration tests using Playwright and MSW, validating API contracts and critical user flows across key application modules",
                    "Documented and maintained a component library in Storybook with 20+ components",
                    "Configured CI/CD pipelines via GitLab, reducing deployment time from 20 min to 4 min",
                  ],
                },
              ],
            },
            {
              company: "Dubz",
              role: "Front-end Developer",
              date: "Jul 2024 - Apr 2025",
              projects: [
                {
                  title:
                    "Architected a responsive real estate management platform using React.js ,Next.js and Tailwind with performance-focused architecture",
                  items: [
                    "Reduced initial bundle size by ~70% via Code Splitting, Lazy Loading, and Tree Shaking",
                    "Constructed PWA support, improving offline accessibility and overall user engagement",
                    "Maintained code quality across 40+ components using ESLint and Prettier, achieving near-zero lint errors",
                    "Integrated a multi-step property listing form with React Hook Form and Zod schema validation, featuring a custom pure-HTML file uploader and drag-and-drop image reordering — delivering robust UX with full client-side validation",
                  ],
                },
              ],
            },
            {
              company: "Manzoomeh Negaran",
              role: "Front-end Developer",
              date: "Sep 2023 - Feb 2024",
              projects: [
                {
                  title:
                    "Developed and Completed 4+ projects using Tailwind and JavaScript, including:",
                  items: [
                    "Launched Task Manager and CRM modules for a large-scale ERP platform serving 2,000+ users across multiple teams",
                    "Built a responsive website for IoT services and products with a structured product catalog",
                    "Delivered an international service website for a UAE-based aviation agency",
                    "Collaborated with UI/UX and backend teams on API integration and agile sprint planning",
                  ],
                },
              ],
            },
          ].map((exp, i) => (
            <motion.article
              key={i}
              className="rounded-xl border-2 border-white/15 bg-white/5 p-5"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}>
              <div className="flex flex-wrap gap-1 items-start justify-between">
                <div>
                  <h4 className="text-lg font-extrabold">{exp.company}</h4>
                  <div className="mt-0.5 text-sm text-neutral-300">
                    {exp.role}
                  </div>
                </div>
                <div className="text-sm text-neutral-300">{exp.date}</div>
              </div>

              <div className="my-3 h-px w-full bg-white/20" />

              {exp.projects.map((project, j) => (
                <div key={j} className="space-y-2">
                  <div className="font-semibold">{project.title}</div>
                  <ul className="list-disc space-y-1 pl-5 text-neutral-200">
                    {project.items.map((item, k) => (
                      <li key={k}>{item}</li>
                    ))}
                  </ul>
                  {j < exp.projects.length - 1 && (
                    <div className="my-3 h-px w-full" />
                  )}
                </div>
              ))}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
