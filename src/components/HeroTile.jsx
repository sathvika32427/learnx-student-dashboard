"use client";

import { motion } from "framer-motion";

export default function HeroTile() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-3xl bg-gradient-to-r from-purple-900 via-zinc-900 to-cyan-900 p-8"
    >
      <h1 className="text-4xl font-bold text-white">
        Welcome Back, Sathvika 👋
      </h1>

      <p className="mt-4 text-zinc-300">
        Learning Streak: 14 Days 🔥
      </p>
    </motion.section>
  );
}