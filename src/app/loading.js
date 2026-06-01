export default function Loading() {
  return (
    <main className="min-h-screen bg-black p-8">
      <div className="animate-pulse space-y-4">
        <div className="h-40 rounded-3xl bg-zinc-800" />
        <div className="h-32 rounded-3xl bg-zinc-800" />
        <div className="h-32 rounded-3xl bg-zinc-800" />
      </div>
    </main>
  );
}