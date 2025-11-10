import Image from "next/image";

export default function Projects() {
  return (
    <section id="projects" className="bg-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h3 className="mb-12 text-center text-[28px] font-bold md:text-[32px]">
          My <span className="font-extrabold">Projects</span>
        </h3>

        <div className="grid gap-20">
          <div className="grid items-start gap-10 md:grid-cols-2">
            <Image
              src="/project-1.png"
              alt="Admin Panel preview"
              className="h-auto w-full rounded-2xl shadow-[0_0_0_1px_rgba(255,255,255,0.15)]"
              width={600}
              height={400}
            />
            <div>
              <div className="text-3xl font-extrabold">01</div>
              <h4 className="mt-2 text-[22px] font-bold">
                Admin Panel (Dashboard)
              </h4>
              <p className="mt-3 max-w-[36rem] text-[14px] leading-6 text-white/70">
                A modern responsive admin dashboard built with Next js and
                TailwindCSS, featuring user and role management, real-time data
                visualization, interactive charts, sortable tables, and
                authentication system. Modular structure, and optimized codebase
                for scalability.
              </p>
              <a
                href="https://admin-panel-theta-teal.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm text-white/80">
                Visit project
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                  <path
                    d="M7 17L17 7M9 7h8v8"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <div className="text-3xl font-extrabold">02</div>
              <h4 className="mt-2 text-[22px] font-bold">
                Crypto Tracker Application
              </h4>
              <p className="mt-3 max-w-[36rem] text-[14px] leading-6 text-white/70">
                A real-time cryptocurrency tracking platform with live market
                data, dynamic price updates, and detailed coin analytics.
                Includes search, sorting, watchlist functionality, and
                responsive charts powered by APIs. Built with React, TypeScript,
                and TailwindCSS for seamless performance.
              </p>
              <a
                href="https://crypto-app-one-sigma.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm text-white/80">
                Visit project
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                  <path
                    d="M7 17L17 7M9 7h8v8"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </a>
            </div>
            <Image
              src="/project-2.png"
              alt="Crypto Tracker preview"
              className="order-1 h-auto w-full rounded-2xl shadow-[0_0_0_1px_rgba(255,255,255,0.15)] md:order-2"
              width={600}
              height={400}
            />
          </div>

          <div className="grid items-start gap-10 md:grid-cols-2">
            <Image
              src="/project-3.png"
              alt="Mobile Shop preview"
              className="h-auto w-full rounded-2xl shadow-[0_0_0_1px_rgba(255,255,255,0.15)]"
              width={600}
              height={400}
            />
            <div>
              <div className="text-3xl font-extrabold">03</div>
              <h4 className="mt-2 text-[22px] font-bold">
                Mobile Shop (E-commerce)
              </h4>
              <p className="mt-3 max-w-[36rem] text-[14px] leading-6 text-white/70">
                A clean and minimal e-commerce web app for mobile devices.
                Includes product listing, filtering, cart management, and
                responsive layout. Designed for fast browsing experience and
                optimized for conversions. Built with Next js and TailwindCSS
                following best UI practices.
              </p>
              <a
                href="https://mobile-shop-rust.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm text-white/80">
                Visit project
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                  <path
                    d="M7 17L17 7M9 7h8v8"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <div className="text-3xl font-extrabold">04</div>
              <h4 className="mt-2 text-[22px] font-bold">AI Chat Interface</h4>
              <p className="mt-3 max-w-[36rem] text-[14px] leading-6 text-white/70">
                A clean, responsive ChatGPT-style UI with streaming responses,
                Markdown rendering (code blocks, lists), and message
                persistence. Supports keyboard shortcuts, system prompts. Built
                with Next, TypeScript, and TailwindCSS focusing on accessibility
                and smooth UX.
              </p>
              <a
                href="https://chat-openai-one.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm text-white/80">
                Visit project
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                  <path
                    d="M7 17L17 7M9 7h8v8"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </a>
            </div>

            <Image
              src="/project-4.png"
              alt="AI Chat Interface preview"
              className="order-1 h-auto w-full rounded-2xl shadow-[0_0_0_1px_rgba(255,255,255,0.15)] md:order-2"
              width={600}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
