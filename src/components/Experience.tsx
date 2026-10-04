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
                    "Promoted to frontend lead within the first year. Own architecture, code review for the vehicle-tracking and IoT platforms.",
                    "Architected a Turborepo monorepo (5+ apps and shared packages, feature-based layout) and shipped it with multi-stage GitLab CI and Docker, one production image per app.",
                    "Built 50+ React components, including compound components, and a MapLibre map rendering 5,000+ vehicles over SignalR, with effect and subscription cleanup on long-lived sessions.",
                    "Improved LCP, INP, and CLS on the latest app. Server state is on TanStack Query, with explicit loading and error states.",
                    "Added frontend unit tests with Jest, Vitest and React Testing Library for 40+ critical flows, plus Playwright end-to-end tests.",
                    "Set auth to httpOnly cookies and treated untrusted input as an XSS boundary. Shipped a dark theme with readable contrast, semantic HTML, control labels, and keyboard access.",
                    "Use Cursor and Claude daily (AGENTS.md, Cursor rules, Figma MCP); generated diffs go through the same review before merge.",
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
                    "Led frontend for a real-estate platform used by 1,000+ property managers and agents, including the Next.js B2C site: React Server Components, streaming with Suspense, a server/client split, and semantic HTML for SEO.",
                    "Built 10+ forms with React Hook Form and Zod, each validated from a single schema.",
                    "Shipped a PWA with offline caching that cut redundant API requests by 50%, and cut the initial bundle by 60% with lazy loading and code splitting.",
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
                    "Built the accounting module of a B2B SaaS product (2,000+ users, 100+ companies) and 10+ workflows in task management.",
                    "Shipped two production marketing sites from Figma, for an IoT company and a UAE aviation company, with semantic HTML for SEO.",
                    "Mentored frontend developers in a Tailwind CSS training series for teams at three companies, and built a VS Code extension used by 15+ developers.",
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
