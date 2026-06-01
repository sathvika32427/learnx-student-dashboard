"use client";

import { supabase } from "../../lib/supabase";

export default function SettingsPage() {
  async function handleLogout() {
    await supabase.auth.signOut();

    alert("Logged Out");

    window.location.href = "/login";
  }

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-8">
        Settings
      </h1>

      <div className="space-y-4">
        <div className="bg-zinc-900 p-6 rounded-xl">
          <h2 className="text-xl font-semibold">
            Dark Mode
          </h2>

          <p className="text-zinc-400">
            Disabled
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          <h2 className="text-xl font-semibold">
            Notifications
          </h2>

          <p className="text-zinc-400">
            Disabled
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-xl"
        >
          Logout
        </button>
      </div>
    </main>
  );
}