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
} from "@/components/shared/Icons";

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
      <h3 className="mb-6 text-center text-2xl font-extrabold">
        My <span className="font-black">Skills</span>
      </h3>

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
          <div
            key={i}
            className="group rounded-xl border-2 border-neutral-900 p-4 transition -translate-y-1 shadow-[6px_6px_0_#000] hover:translate-0 hover:shadow-none bg-white">
            <div className="mb-4 p-1 inline-flex h-10 w-10 items-center justify-center rounded-lg border-2 border-neutral-900 bg-white">
              {icon}
            </div>
            <p className="text-sm font-semibold">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
