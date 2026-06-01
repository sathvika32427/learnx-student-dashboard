"use client";

import { motion } from "framer-motion";

export default function ActivityTile() {
  const bars = [40, 70, 55, 90, 65, 80, 45];

  return (
    <motion.section
      whileHover={{
        scale: 1.02,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6"
    >
      <h2 className="text-xl font-semibold text-white mb-6">
        Weekly Activity
      </h2>

      <div className="flex items-end gap-3 h-32">
        {bars.map((height, index) => (
          <motion.div
            key={index}
            initial={{ height: 0 }}
            animate={{
              height: `${height}%`,
            }}
            transition={{
              delay: index * 0.1,
            }}
            className="flex-1 rounded-t-xl bg-gradient-to-t from-cyan-500 to-purple-500"
          />
        ))}
      </div>
    </motion.section>
  );
}