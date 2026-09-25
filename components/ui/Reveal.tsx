"use client";

import { motion } from "framer-motion";

type Props = {
  as?: "div" | "li";
  delay?: number;
  y?: number;
  className?: string;
  children: React.ReactNode;
};

// Fades content up once it scrolls into view. MotionConfig handles reduced motion.
export function Reveal({ as = "div", delay = 0, y = 24, className, children }: Props) {
  const Tag = as === "li" ? motion.li : motion.div;
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  );
}
