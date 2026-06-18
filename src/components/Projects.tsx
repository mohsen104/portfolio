"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Autoplay,
  Pagination,
  Navigation,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-black py-24 text-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h3
          className="mb-20 text-center text-3xl font-bold md:text-5xl"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}>
          Featured Projects
        </motion.h3>

        <div className="space-y-32">
          {projects.map((project, index) => {
            const reverse = index % 2 === 1;

            return (
              <div
                key={project.title}
                className="grid items-center gap-12 lg:grid-cols-2">
                {/* Swiper Container */}
                <motion.div
                  className={reverse ? "lg:order-2" : ""}
                  initial={{ opacity: 0, x: reverse ? 60 : -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}>
                  <Swiper
                    effect="coverflow"
                    grabCursor
                    centeredSlides
                    slidesPerView="auto"
                    coverflowEffect={{
                      rotate: 50,
                      stretch: 0,
                      depth: 100,
                      modifier: 1,
                      slideShadows: true,
                    }}
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false,
                      pauseOnMouseEnter: true,
                    }}
                    pagination={{
                      clickable: true,
                      dynamicBullets: true,
                    }}
                    navigation
                    loop
                    modules={[
                      EffectCoverflow,
                      Autoplay,
                      Pagination,
                      Navigation,
                    ]}
                    className="w-full max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-3xl px-6 py-12">
                    {project.images.map((image, imageIndex) => (
                      <SwiperSlide
                        key={imageIndex}
                        className="w-[320px]! md:w-130!">
                        <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-2xl bg-zinc-900">
                          <Image
                            src={image}
                            alt={`${project.title} - Image ${imageIndex + 1}`}
                            fill
                            className="object-contain"
                            quality={100}
                            priority={index === 0 && imageIndex === 0}
                            sizes="(max-width: 640px) 95vw, (max-width: 768px) 90vw, (max-width: 1024px) 50vw, 520px"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </motion.div>

                {/* Content */}
                <motion.div
                  className={reverse ? "lg:order-1" : ""}
                  initial={{ opacity: 0, x: reverse ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}>
                  <div className="text-6xl font-black text-white/10">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <h4 className="mt-4 text-3xl font-bold">{project.title}</h4>

                  <p className="mt-5 max-w-xl leading-8 text-white/70">
                    {project.description}
                  </p>

                  {project?.href && (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group mt-8 inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-3 transition hover:border-white hover:bg-white hover:text-black">
                      Live Demo
                      <svg
                        className="h-4 w-4 transition group-hover:translate-x-1"
                        viewBox="0 0 24 24"
                        fill="none">
                        <path
                          d="M7 17L17 7M9 7h8v8"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                    </a>
                  )}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
