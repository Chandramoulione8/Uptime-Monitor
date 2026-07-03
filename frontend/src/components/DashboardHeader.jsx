import { Activity } from "lucide-react";

export default function DashboardHeader({ isLive }) {
  return (
    <header className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
            <Activity className="h-5 w-5 text-violet-400" strokeWidth={2} />
          </div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
            Monitoring
          </p>
        </div>
        <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Uptime Monitor
        </h1>
        <p className="max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-base">
          Real-time health checks for your websites. Track availability,
          response times, and status codes at a glance.
        </p>
      </div>

      <div
        className="inline-flex items-center gap-2.5 self-start rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-sm sm:self-auto"
        aria-live="polite"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span
            className={[
              "absolute inline-flex h-full w-full rounded-full opacity-75",
              isLive ? "animate-ping bg-emerald-400" : "bg-red-400",
            ].join(" ")}
          />
          <span
            className={[
              "relative inline-flex h-2.5 w-2.5 rounded-full",
              isLive ? "animate-pulse-live bg-emerald-400" : "bg-red-400",
            ].join(" ")}
          />
        </span>
        <span className="text-sm font-medium text-zinc-300">
          {isLive ? "Live" : "Disconnected"}
        </span>
        <span className="hidden text-xs text-zinc-500 sm:inline">
          · refreshes every 5s
        </span>
      </div>
    </header>
  );
}
