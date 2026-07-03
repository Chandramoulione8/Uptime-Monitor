import { Radar } from "lucide-react";
import MonitorCard from "./MonitorCard";
import GlassCard from "./GlassCard";

export default function MonitorGrid({
  monitors,
  onDelete,
}) {
  if (monitors.length === 0) {
    return (
      <GlassCard className="flex flex-col items-center justify-center px-6 py-16 text-center">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
          <Radar
            className="h-7 w-7 text-zinc-600"
            strokeWidth={1.5}
          />
        </div>

        <h2 className="text-lg font-medium text-zinc-300">
          No monitors yet
        </h2>

        <p className="mt-2 max-w-sm text-sm leading-relaxed text-zinc-500">
          Add your first website above to start tracking uptime,
          response times and HTTP status codes.
        </p>
      </GlassCard>
    );
  }

  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-sm font-medium text-zinc-400">
          Active Monitors

          <span className="ml-2 rounded-md bg-white/5 px-2 py-0.5 font-mono text-xs text-zinc-500">
            {monitors.length}
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {monitors.map((monitor) => (
          <MonitorCard
            key={monitor.id}
            monitor={monitor}
            onDelete={onDelete}
          />
        ))}
      </div>
    </section>
  );
}