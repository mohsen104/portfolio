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
              <div className="font-semibold">Real Estate Management Panel</div>
              <ul className="list-disc space-y-1 pl-5 text-neutral-200">
                <li>
                  Developed a responsive real estate management platform using
                  React.js and Next.js.
                </li>
                <li>
                  Optimized application performance through Code Splitting, Lazy
                  Loading, and Tree Shaking.
                </li>
                <li>Implemented PWA for offline access and improved UX</li>
                <li>
                  Provided guidance to the backend team (Node.js, MongoDB) while
                  building reusable, modular frontend components.
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
              <ul className="list-disc space-y-1 pl-5 text-neutral-200">
                <li>
                  Implemented Task Manager and CRM modules for a large-scale ERP
                  services project.
                </li>
                <li>
                  Developed a website for delivering IoT services and products.
                </li>
                <li>
                  Built an international service website for a UAE-based airline
                  agency.
                </li>
                <li>
                  Collaborated with UI/UX and backend teams for API integration
                  and sprint planning
                </li>
                <li>
                  Contributed to SQL query writing and data optimization tasks
                </li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
