"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  Home,
  BookOpen,
  BarChart3,
  Settings,
} from "lucide-react";

const items = [
  {
    name: "Dashboard",
    href: "/",
    icon: Home,
  },
  {
    name: "Courses",
    href: "/courses",
    icon: BookOpen,
  },
  {
    name: "Activity",
    href: "/activity",
    icon: BarChart3,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop Sidebar */}

      <aside className="hidden md:flex flex-col w-20 lg:w-64 bg-zinc-950 border-r border-zinc-800 p-4">
        <h2 className="text-white font-bold text-xl mb-10 hidden lg:block">
          LearnX
        </h2>

        <nav className="flex flex-col gap-2">
          {items.map((item) => {
            const Icon = item.icon;
            const active =
              pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className="relative px-4 py-3 rounded-xl flex items-center gap-3 overflow-hidden"
              >
                {active && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-zinc-800 rounded-xl"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                    }}
                  />
                )}

                <Icon
                  size={20}
                  className="relative z-10 text-white"
                />

                <span className="relative z-10 hidden lg:inline text-white">
                  {item.name}
                </span>
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Mobile Bottom Nav */}

      <nav className="fixed bottom-0 left-0 right-0 md:hidden bg-zinc-950 border-t border-zinc-800 flex justify-around p-3">
        {items.map((item) => {
          const Icon = item.icon;
          const active =
            pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className="flex flex-col items-center"
            >
              <Icon
                size={20}
                className={
                  active
                    ? "text-cyan-400"
                    : "text-zinc-500"
                }
              />

              <span className="text-xs text-zinc-400 mt-1">
                {item.name}
              </span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}