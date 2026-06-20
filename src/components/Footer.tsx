"use client";
import { motion } from "motion/react";

export default function Footer() {
  return (
    <motion.footer
      className="border-t-2 border-neutral-200 py-6"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}>
      <div className="mx-auto max-w-6xl px-4 text-sm text-neutral-600 md:px-6">
        <div className="text-right">
          <div>© 2018–2026 Portfolio</div>
        </div>
      </div>
    </motion.footer>
  );
}
