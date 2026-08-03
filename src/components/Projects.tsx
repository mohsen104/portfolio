"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Autoplay,
  Pagination,
  Navigation,
  Keyboard,
  Mousewheel,
  Zoom,
} from "swiper/modules";
import { useState } from "react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/zoom";

import { projects } from "@/data/projects";

export default function Projects() {
  const [fullscreen, setFullscreen] = useState<{
    projectIndex: number;
    imageIndex: number;
  } | null>(null);

  return (
    <section
      id="projects"
      className="overflow-hidden bg-black py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.h3
          className="mb-20 text-center text-3xl font-bold md:text-5xl"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Featured Projects
        </motion.h3>

        <div className="space-y-32">
          {projects.map((project, index) => {
            const reverse = index % 2 === 1;

            return (
              <div
                key={project.title}
                className="grid items-center gap-12 lg:grid-cols-2"
              >
                <motion.div
                  className={reverse ? "lg:order-2" : ""}
                  initial={{ opacity: 0, x: reverse ? 60 : -60 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                >
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
                    className="w-full max-w-xs px-6 py-12 sm:max-w-xl md:max-w-2xl lg:max-w-3xl"
                  >
                    {project.images.map((image, imageIndex) => (
                      <SwiperSlide
                        key={imageIndex}
                        className="!w-[320px] md:!w-[520px]"
                      >
                        <div
                          className="group relative aspect-video w-full cursor-pointer overflow-hidden rounded-2xl bg-zinc-900 shadow-2xl"
                          onClick={() =>
                            setFullscreen({
                              projectIndex: index,
                              imageIndex,
                            })
                          }
                        >
                          <Image
                            src={image}
                            alt={`${project.title} ${imageIndex + 1}`}
                            fill
                            className="object-contain transition duration-300 group-hover:scale-105"
                            quality={100}
                            priority={index === 0 && imageIndex === 0}
                            sizes="(max-width:640px)95vw,(max-width:768px)90vw,(max-width:1024px)50vw,520px"
                          />

                          <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition group-hover:bg-black/20">
                            <svg
                              className="h-12 w-12 text-white opacity-0 transition group-hover:opacity-100"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                              />
                            </svg>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </motion.div>

                <motion.div
                  className={reverse ? "lg:order-1" : ""}
                  initial={{ opacity: 0, x: reverse ? -60 : 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  <div className="text-6xl font-black text-white/10">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <h4 className="mt-4 text-3xl font-bold">
                    {project.title}
                  </h4>

                  <p className="mt-5 max-w-xl leading-8 text-white/70">
                    {project.description}
                  </p>

                  {project.href && (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group mt-8 inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-3 transition hover:border-white hover:bg-white hover:text-black"
                    >
                      Live Demo

                      <svg
                        className="h-4 w-4 transition group-hover:translate-x-1"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
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

      <AnimatePresence>
        {fullscreen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/95"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setFullscreen(null)}
          >
            <button
              onClick={() => setFullscreen(null)}
              className="absolute right-6 top-6 z-50 rounded-full bg-black/40 p-2 text-white backdrop-blur transition hover:bg-black/70"
            >
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <motion.div
              className="h-full w-full"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Swiper
                initialSlide={fullscreen.imageIndex}
                navigation
                pagination={{ clickable: true }}
                keyboard={{
                  enabled: true,
                }}
                mousewheel
                zoom
                loop
                modules={[
                  Navigation,
                  Pagination,
                  Keyboard,
                  Mousewheel,
                  Zoom,
                ]}
                className="h-full w-full"
              >
                {projects[fullscreen.projectIndex].images.map((image, i) => (
                  <SwiperSlide key={i}>
                    <div className="swiper-zoom-container relative h-screen w-full">
                      <Image
                        src={image}
                        alt={`${projects[fullscreen.projectIndex].title} ${i + 1}`}
                        fill
                        quality={100}
                        className="object-contain"
                        sizes="100vw"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}