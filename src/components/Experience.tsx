export default function Experience() {
  return (
    <section className="bg-neutral-900 py-16 text-white" id="experience">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h3 className="mb-8 text-center text-2xl font-extrabold">
          My <span className="font-black">Experience</span>
        </h3>

        <div className="space-y-10 text-sm leading-6">
          <article className="rounded-xl border-2 border-white/15 bg-white/5 p-5">
            <div className="flex flex-wrap gap-1 items-start justify-between">
              <div>
                <h4 className="text-lg font-extrabold">Fara Ofogh</h4>
                <div className="mt-0.5 text-sm text-neutral-300">
                  Front-end Developer
                </div>
              </div>
              <div className="text-sm text-neutral-300">Mar 2025 - PRESENT</div>
            </div>

            <div className="my-3 h-px w-full bg-white/20" />

            <div className="space-y-2">
              <div className="font-semibold">
                National Vehicle &amp; License Plate Management System
              </div>
              <ul className="list-disc space-y-1 pl-5 text-neutral-200">
                <li>
                  Built a nationwide vehicle management dashboard using
                  React.js, TailwindCSS, Ant Design, and TypeScript.
                </li>
                <li>
                  Optimized performance, accessibility, and code quality,
                  improving overall scores from 50 to 95.
                </li>
                <li>
                  Developed a high-performance GIS system with Maplibre, capable
                  of handling thousands of real-time data points.
                </li>
                <li>
                  Integrated real-time communication using WebSocket and
                  SignalR.
                </li>
                <li>Implemented a type-safe API layer.</li>
                <li>
                  Dockerized the entire frontend for scalable and efficient
                  deployment.
                </li>
                <li>
                  Built an admin-side icon selector system similar to React
                  Icons for panel icon management.
                </li>
                <li>
                  Implemented a real-time connection log terminal to monitor
                  connection and disconnection events.
                </li>
                <li>
                  Developed a fully secure authentication & authorization
                  system.
                </li>
                <li>
                  Configured enterprise-level ESLint and Husky setup for
                  commit-time formatting and linting.
                </li>
                <li>Created backend API response mocks using MSW.</li>
                <li>
                  Implemented professional configurations for Vite and React 19,
                  resulting in 80% reduction in bundle size.
                </li>
              </ul>
            </div>
          </article>

          <article className="rounded-xl border-2 border-white/15 bg-white/5 p-5">
            <div className="flex flex-wrap gap-1 items-start justify-between">
              <div>
                <h4 className="text-lg font-extrabold">Dubz</h4>
                <div className="mt-0.5 text-sm text-neutral-300">
                  Front-end Developer
                </div>
              </div>
              <div className="text-sm text-neutral-300">
                Jul 2024 - Apr 2025
              </div>
            </div>

            <div className="my-3 h-px w-full bg-white/20" />

            <div className="space-y-2">
              <div className="font-semibold">
                Vehicle Management Dashboard (Team Member)
              </div>
              <ul className="list-disc space-y-1 pl-5 text-neutral-200">
                <li>
                  Collaborated in a flat-structured team to build a nationwide
                  vehicle management dashboard using React.js, TypeScript,
                  Tailwind, and Ant Design
                </li>
                <li>
                  Optimized build pipeline with Vite and React 19, improving
                  Lighthouse scores from 50 to 95 and reducing bundle size by
                  ~80%
                </li>
                <li>
                  Engineered a high-performance GIS system with MapLibre,
                  rendering 5,000+ real-time data points with under 100ms
                  latency
                </li>
                <li>
                  Integrated real-time communication via WebSocket and SignalR
                  for live vehicle tracking
                </li>
                <li>
                  Established a type-safe API layer using generic APIResponse
                  types, significantly reducing runtime type errors
                </li>
                <li>
                  Shipped a secure Authentication & Authorization system
                  supporting 1,000+ users across 3 roles
                </li>
                <li>
                  Dockerized the frontend and configured Husky, Commitlint,
                  Semantic Release, and MSW to streamline the release pipeline
                </li>
              </ul>
              <div className="font-semibold">IOT Platform (Tech Lead)</div>
              <ul className="list-disc space-y-1 pl-5 text-neutral-200">
                <li>
                  Led a 3-person frontend team as Tech Lead, owning architecture
                  decisions and technical direction over 4 months
                </li>
                <li>
                  Architected a Monorepo with Turborepo, reducing cross-package
                  build time by ~80%
                </li>
                <li>Crafted UI with React, Vite, and Material UI (MUI)</li>
                <li>
                  Wrote 50+ integration tests using Playwright and MSW,
                  validating API contracts and critical user flows across key
                  application modules
                </li>
                <li>
                  Documented and maintained a component library in Storybook
                  with 20+ components
                </li>
                <li>
                  Configured CI/CD pipelines via GitLab, reducing deployment
                  time from 20 min to 4 min
                </li>
              </ul>
            </div>
          </article>

          <article className="rounded-xl border-2 border-white/15 bg-white/5 p-5">
            <div className="flex flex-wrap gap-1 items-start justify-between">
              <div>
                <h4 className="text-lg font-extrabold">Manzoomeh Negaran</h4>
                <div className="mt-0.5 text-sm text-neutral-300">
                  Front-end Developer
                </div>
              </div>
              <div className="text-sm text-neutral-300">
                Sep 2023 - Feb 2024
              </div>
            </div>

            <div className="my-3 h-px w-full bg-white/20" />

            <div className="space-y-2">
              <div className="font-semibold">
                Enterprise Platform (Task Management, CRM, ERP)
              </div>
              Developed and Completed 4+ projects using Tailwind and JavaScript,
              including:
              <ul className="list-disc space-y-1 pl-5 text-neutral-200">
                <li>
                  Launched Task Manager and CRM modules for a large-scale ERP
                  platform serving 2,000+ users across multiple teams
                </li>
                <li>
                  Built a responsive website for IoT services and products with
                  a structured product catalog
                </li>
                <li>
                  Delivered an international service website for a UAE-based
                  aviation agency
                </li>
                <li>
                  Collaborated with UI/UX and backend teams on API integration
                  and agile sprint planning
                </li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
