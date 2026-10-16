export default function Experience() {
  return (
    <section className="bg-neutral-900 py-16 text-white" id="experience">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h3 className="mb-8 text-center text-2xl font-extrabold">
          My <span className="font-black">Experience</span>
        </h3>

        <div className="space-y-10 text-sm leading-6">
          {[
            {
              company: "Fara Ofogh Company",
              role: "Senior Frontend Developer / Team Lead",
              date: "Apr 2025 – Present",
              projects: [
                {
                  items: [
                    "Promoted to Lead within a year; led frontend architecture, code quality, and delivery for a team of 3, set code review standards, and mentored 2 junior developers.",
                    "Architected a Turborepo monorepo from scratch: 5+ apps, shared packages, feature-based layout, multi-stage GitLab CI.",
                    "Built a real-time GIS map system with MapLibre and WebSocket, rendering 5,000+ markers and polygons smoothly via clustering.",
                    "Reached ~80% test coverage with Jest, Vitest, and React Testing Library across 40+ critical flows, plus Playwright E2E tests.",
                    "Improved LCP from 4.5s to 0.8s on the latest app, along with INP and CLS, with server state managed through TanStack Query.",
                    "Implemented secure httpOnly cookie authentication across all apps, protecting sessions from XSS-based token theft.",
                  ],
                },
              ],
            },
            {
              company: "Dubz Startup Company",
              role: "Frontend Developer",
              date: "Jul 2024 – Mar 2025",
              projects: [
                {
                  items: [
                    "Built a real estate listing management system and admin dashboard serving 1,000+ users, managers and agents.",
                    "Built 10+ complex forms with React Hook Form and Zod, reducing validation errors and improving form completion rate by 80%.",
                    "Developed an installable PWA with offline caching, cutting initial bundle size by 60% through lazy loading and code splitting.",
                  ],
                },
              ],
            },
            {
              company: "Manzoomeh Negaran Holding",
              role: "Frontend Developer",
              date: "Sep 2023 – Mar 2024",
              projects: [
                {
                  items: [
                    "Developed accounting and task management modules of a B2B ERP used by 2,000+ users and companies.",
                    "Delivered an IoT product catalog and a UAE aviation products platform from Figma designs, with semantic HTML and SEO.",
                    "Built a VS Code snippets extension for the internal component library, speeding up 15+ developers.",
                    "Trained the holding’s frontend teams on Tailwind CSS for adoption across subsidiary companies.",
                  ],
                },
              ],
            },
            {
              company: "Freelance (Remote)",
              role: "Frontend Developer",
              date: "Oct 2021 – Sep 2023",
              projects: [
                {
                  items: [
                    "Built the frontend of a crypto trading platform with real-time price streaming for currencies and gold.",
                    "Developed a full-stack proctored exam platform with classroom management and anti-cheating protection.",
                    "Used React, Next.js, TypeScript, Tailwind, and shadcn/ui on the frontend, with Go (Gin), PostgreSQL, and Redis on the backend.",
                    "Owned both projects end to end, from architecture to deployment.",
                  ],
                },
              ],
            },
          ].map((exp, i) => (
            <article
              key={i}
              className="rounded-xl border-2 border-white/15 bg-white/5 p-5">
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
