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
                    "Led frontend development across 2 large-scale platforms, owning architecture and technical direction for vehicle tracking and IoT systems.",
                    "Architected and built a Turborepo monorepo from the ground up, consolidating 5+ applications and shared packages for the IoT platform.",
                    "Built 50+ reusable React components for a real-time fleet tracking platform, integrating live vehicle data through SignalR.",
                    "Engineered a high-performance MapLibre live map capable of rendering 5,000+ vehicles simultaneously while maintaining smooth real-time interactions.",
                    "Automated CI/CD for 2 production platforms, reducing deployment time from 20 minutes to 5 minutes.",
                    "Introduced integration testing with Vitest and React Testing Library, covering 40+ critical user flows and reducing regressions.",
                    "Promoted to lead frontend development within 1 year, owning architecture, technical direction, and team-level engineering decisions.",
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
                    "Led frontend development of a real estate management platform used by 1,000+ property managers and agents.",
                    "Contributed to the B2C website built with Next.js, collaborating with the frontend team.",
                    "Built 10+ complex, schema-validated forms using React Hook Form and Zod, standardizing validation across the admin platform.",
                    "Built a PWA architecture with offline support and optimized caching, reducing redundant API requests by 50%.",
                    "Reduced initial bundle size by 60% through lazy loading and code splitting, improving page load performance.",
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
                    "Developed the accounting module for a B2B SaaS platform serving 2,000+ users across 100+ client companies.",
                    "Contributed to the Task Management module, implementing 10+ core workflows across the B2B SaaS platform.",
                    "Delivered 2 production marketing websites from Figma designs for an IoT services platform and a UAE-based aviation company.",
                    "Delivered Tailwind CSS training to frontend teams across 3 companies, standardizing styling practices across the holding group.",
                    "Developed a custom VS Code extension used by 15+ developers to centralize code snippet management.",
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
