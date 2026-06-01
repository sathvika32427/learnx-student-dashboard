"use client";

import { useState } from "react";
import Link from "next/link";
import { supabase } from "../../lib/supabase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  console.log("LOGIN DATA:", data);
  console.log("LOGIN ERROR:", error);

  if (error) {
    alert(error.message);
    return;
  }

  const {
    data: { session },
  } = await supabase.auth.getSession();

  console.log("SESSION AFTER LOGIN:", session);

  alert("Login Successful");

  window.location.href = "/";
}

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="bg-zinc-900 p-8 rounded-xl w-96">
        <h1 className="text-3xl font-bold mb-6">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 rounded bg-zinc-800"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-4 rounded bg-zinc-800"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-cyan-500 p-3 rounded hover:bg-cyan-600 transition"
        >
          Login
        </button>

        <p className="mt-4 text-center text-zinc-400">
          Don't have an account?{" "}
          <Link
            href="/signup"
            className="text-cyan-400 hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </main>
  );
}