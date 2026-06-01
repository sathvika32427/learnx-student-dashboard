"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Layers,
  Rocket,
  Database,
} from "lucide-react";

const icons = {
  Code2,
  Layers,
  Rocket,
  Database,
};

export default function CourseCard({ course }) {
  const Icon = icons[course.icon_name] || Code2;

  return (
    <motion.article
      whileHover={{
        scale: 1.02,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 p-6"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5" />

      <div className="relative z-10">
        <div className="mb-4 flex items-center gap-3">
          <Icon
            size={28}
            className="text-cyan-400"
          />

          <h3 className="text-lg font-semibold text-white">
            {course.title}
          </h3>
        </div>

        <p className="text-sm text-zinc-400">
          Progress
        </p>

        <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-zinc-800">
          <motion.div
            initial={{ width: 0 }}
            animate={{
              width: `${course.progress}%`,
            }}
            transition={{
              duration: 1,
            }}
            className="h-full bg-gradient-to-r from-purple-500 to-cyan-500"
          />
        </div>

        <p className="mt-3 text-zinc-300">
          {course.progress}% complete
        </p>
      </div>
    </motion.article>
  );
}
