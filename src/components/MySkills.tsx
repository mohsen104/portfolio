import Image from "next/image";

export default function MySkills() {
  const skills = [
    { img: "javascript", title: "JavaScript" },
    { img: "typescript", title: "TypeScript" },
    { img: "react", title: "React" },
    { img: "next", title: "Next.js" },
    { img: "tailwind", title: "Tailwind" },
    { img: "node", title: "Node" },
    { img: "nest", title: "Nest" },
    { img: "go", title: "Go" },
    { img: "git", title: "Git" },
    { img: "docker", title: "Docker" },
  ];

  return (
    <section id="my-skills" className="flex flex-col items-center gap-5 w-full">
      <p className="text-2xl md:text-5xl space-x-4 py-6">
        <span>My</span>
        <span className="font-extrabold">Skills</span>
      </p>
      <div className="w-full grid grid-cols-2 md:grid-cols-5 gap-5 md:gap-y-10 md:gap-x-20 md:py-5">
        {skills.map((i) => (
          <div
            key={i.title}
            className="aspect-1/1 border-2 rounded-md p-10 flex flex-col items-center justify-center gap-8 overflow-hidden group relative">
            <Image
              src={`/my-skills/${i.img}.svg`}
              alt={i.title}
              width={56}
              height={56}
              className="group-hover:invert transition-all duration-500"
            />
            <p className="text-xl font-bold group-hover:text-white transition-colors duration-500">
              {i.title}
            </p>
            <div className="absolute inset-0 bg-black translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-500 -z-10" />
          </div>
        ))}
      </div>
    </section>
  );
}
