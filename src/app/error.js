
"use client";

export default function Error({
  error,
  reset,
}) {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center text-white">
      <h1 className="text-4xl font-bold mb-4">
        Something went wrong
      </h1>

      <p className="text-zinc-400 mb-6">
        {error.message}
      </p>

      <button
        onClick={() => reset()}
        className="px-6 py-3 rounded-xl bg-cyan-500"
      >
        Try Again
      </button>
    </main>
  );
}