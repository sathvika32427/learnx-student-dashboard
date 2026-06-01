"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "../../lib/supabase";

export default function ActivityPage() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    async function fetchActivity() {
      const { data, error } = await supabase
        .from("activity")
        .select("*")
        .order("created_at", { ascending: false });

      if (!error) {
        setActivities(data || []);
      }
    }

    fetchActivity();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-8">
        Activity
      </h1>

      <div className="space-y-4">
        {activities.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-zinc-900 border border-zinc-800 rounded-xl p-4"
          >
            <p>{item.action}</p>

            <p className="text-zinc-500 text-sm mt-2">
              {new Date(item.created_at).toLocaleString()}
            </p>
          </motion.div>
        ))}
      </div>
    </main>
  );
}