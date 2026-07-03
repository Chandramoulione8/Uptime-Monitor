import { Plus, Link2 } from "lucide-react";
import GlassCard from "./GlassCard";

export default function AddMonitor({ url, setUrl, onAdd, isAdding }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onAdd();
  };

  return (
    <GlassCard className="mb-8 p-2">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 sm:flex-row sm:items-center"
      >
        <div className="relative flex-1">
          <Link2
            className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500"
            strokeWidth={1.75}
          />
          <input
            type="url"
            value={url}
            onChange={(event) => setUrl(event.target.value)}
            placeholder="https://example.com"
            className="w-full rounded-xl border border-white/[0.06] bg-white/[0.03] py-3.5 pl-11 pr-4 text-sm text-white placeholder:text-zinc-600 outline-none transition-all duration-200 focus:border-violet-500/40 focus:bg-white/[0.05] focus:ring-2 focus:ring-violet-500/20"
          />
        </div>
        <button
          type="submit"
          disabled={!url.trim() || isAdding}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-900/30 transition-all duration-200 hover:from-violet-500 hover:to-indigo-500 hover:shadow-violet-800/40 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none sm:min-w-[140px]"
        >
          <Plus className="h-4 w-4" strokeWidth={2.5} />
          {isAdding ? "Adding…" : "Add Monitor"}
        </button>
      </form>
    </GlassCard>
  );
}
