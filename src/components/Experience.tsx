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
              company: "Fara Ofogh",
              role: "Front-end Developer",
              date: "Mar 2025 - PRESENT",
              projects: [
                {
                  items: [
                    "Built nationwide fleet and IoT platforms using React, TypeScript, Vite, Tailwind CSS, Ant Design, and MUI, contributing in a flat-structured cross-functional team.",
                    "Improved frontend performance by optimizing Vite/React 19 builds, increasing Lighthouse scores from 50 to 95 and reducing bundle size by ~80%.",
                    "Engineered a real-time GIS system with MapLibre, WebSocket, and SignalR, rendering 5,000+ live data points with sub-100ms latency.",
                    "Architected scalable frontend infrastructure with Turborepo, Storybook, and type-safe API layers, reducing cross-package build times by ~80% and maintaining 20+ reusable components.",
                    "Strengthened quality and delivery workflows with 50+ Playwright/MSW integration tests, GitLab CI/CD, Docker, Husky, and Semantic Release, reducing deployment time from 20 to 4 minutes.",
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
                  items: [
                    "Architected and developed a responsive real estate management platform using React.js, Next.js, and Tailwind CSS, with a performance-focused frontend architecture supporting scalable feature development.",
                    "Reduced initial JavaScript bundle size by ~70% through code splitting, lazy loading, and tree shaking, improving application load performance and user experience.",
                    "Implemented PWA capabilities with offline support and installable experiences, improving accessibility and enabling users to interact with key application features in low-connectivity environments.",
                    "Engineered a multi-step property listing workflow using React Hook Form and Zod, with client-side validation, custom file uploads, and drag-and-drop image reordering.",
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
                  items: [
                    "Developed and launched Task Management and CRM modules for a large-scale ERP platform serving 2,000+ users across multiple teams, using modern frontend technologies.",
                    "Built a responsive IoT services and products website with a structured product catalog, reusable UI components, and responsive layouts across desktop and mobile devices.",
                    "Developed and delivered an international service website for a UAE-based aviation agency, focusing on responsive design, usability, and cross-device compatibility.",
                    "Collaborated with UI/UX designers and backend engineers to integrate REST APIs, translate designs into reusable frontend components, and participate in Agile sprint planning and delivery.",
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
