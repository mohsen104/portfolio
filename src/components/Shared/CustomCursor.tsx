"use client";
import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const ref = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const isCoarse =
      typeof window !== "undefined" &&
      matchMedia?.("(pointer: coarse)")?.matches;
    const hasTouch =
      typeof window !== "undefined" &&
      ("ontouchstart" in window || navigator.maxTouchPoints > 0);
    const ua = typeof navigator !== "undefined" ? navigator.userAgent : "";
    const isMobileUA =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);

    setEnabled(!(isCoarse || hasTouch || isMobileUA));
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const el = ref.current!;
    let x = innerWidth / 2;
    let y = innerHeight / 2;
    let tx = x;
    let ty = y;

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
    };

    let raf = 0;
    const tick = () => {
      tx += (x - tx) * 0.22;
      ty += (y - ty) * 0.22;
      el.style.transform = `translate(${tx}px, ${ty}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onScroll = () =>
      onMove(new MouseEvent("mousemove", { clientX: x, clientY: y }));

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>

      <div
        ref={ref}
        className="pointer-events-none fixed left-0 top-0 z-[9999] will-change-transform"
        aria-hidden
      >
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border-2 border-blue-500 mix-blend-color">
          <span className="h-2 w-2 rounded-full bg-blue-500" />
        </span>
      </div>
    </>
  );
}
