"use client";

import { motion } from "framer-motion";
import HeroTile from "./HeroTile";
import ActivityTile from "./ActivityTile";
import CourseCard from "./CourseCard";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

export default function DashboardGrid({ courses = [] }) {
  return (
    <motion.main
      variants={container}
      initial="hidden"
      animate="show"
      className="flex-1 p-6"
    >
      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <motion.div variants={item} className="md:col-span-2">
          <HeroTile />
        </motion.div>

        <motion.div variants={item}>
          <ActivityTile />
        </motion.div>

        {Array.isArray(courses)
          ? courses.map((course) => (
              <motion.div
                key={course.id}
                variants={item}
              >
                <CourseCard course={course} />
              </motion.div>
            ))
          : null}
      </section>
    </motion.main>
  );
}