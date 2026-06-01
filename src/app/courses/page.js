"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "../../lib/supabase";

export default function CoursesPage() {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCourses() {
      const { data, error } = await supabase
        .from("courses")
        .select("*");

      if (error) {
        setError(error.message);
      } else {
        setCourses(data || []);
      }

      setLoading(false);
    }

    fetchCourses();
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen bg-black text-white p-8">
        <h1 className="text-4xl font-bold">Loading Courses...</h1>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen bg-black text-red-500 p-8">
        <h1>Error</h1>
        <p>{error}</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-8"
      >
        Courses
      </motion.h1>

      <div className="grid gap-6 md:grid-cols-2">
        {courses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.1,
              duration: 0.4,
            }}
            whileHover={{
              scale: 1.1,
            }}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-lg"
          >
            <h2 className="text-xl font-semibold mb-4">
              {course.title}
            </h2>

            <div className="w-full bg-zinc-800 rounded-full h-3 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{
                  width: `${course.progress}%`,
                }}
                transition={{
                  duration: 1,
                }}
                className="bg-cyan-500 h-3 rounded-full"
              />
            </div>

            <p className="mt-3 text-zinc-400">
              {course.progress}% Complete
            </p>
          </motion.div>
        ))}
      </div>
    </main>
  );
}