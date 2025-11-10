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
                  React.js, TailwindCSS, Ant Design, and TypeScript
                </li>
                <li>
                  Optimized Performance, Accessibility, and Code Quality,
                  achieving a score improvement from 60 to 95.
                </li>
                <li>
                  Developed a high-performance GIS system with Maplibre,
                  handling thousands of real-time data points
                </li>
                <li>
                  Integrated real-time communication via WebSocket and SignalR
                </li>
                <li>
                  Implemented a Type-Safe API layer and Dockerized the entire
                  frontend for scalable deployment
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
                  Developed a responsive management platform using React.js and
                  Next.js
                </li>
                <li>
                  Optimized application performance through Code Splitting, Lazy
                  Loading, and Tree Shaking.
                </li>
                <li>Implemented PWA for offline access and improved UX</li>
                <li>
                  Built reusable, modular components and collaborated with the
                  backend team (Node.js, MongoDB)
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
                  Delivered core modules including Task Management, CRM, and ERP
                </li>
                <li>
                  Collaborated with UI/UX and backend teams for API integration
                  and sprint planning
                </li>
                <li>
                  Contributed to SQL query writing and data optimization tasks
                </li>
                <li>
                  Developed and maintained several internal and client-facing
                  web applications
                </li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
