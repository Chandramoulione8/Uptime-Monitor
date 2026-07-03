import { Globe, Wifi, WifiOff, Timer } from "lucide-react";
import GlassCard from "./GlassCard";
import { formatResponseTime } from "../utils/formatters";

const statConfig = [
  {
    key: "total",
    label: "Total Websites",
    icon: Globe,
    accent: "text-violet-400",
    glow: "from-violet-500/20 to-transparent",
  },
  {
    key: "online",
    label: "Online",
    icon: Wifi,
    accent: "text-emerald-400",
    glow: "from-emerald-500/20 to-transparent",
  },
  {
    key: "offline",
    label: "Offline",
    icon: WifiOff,
    accent: "text-red-400",
    glow: "from-red-500/20 to-transparent",
  },
  {
    key: "avgResponseTime",
    label: "Avg Response Time",
    icon: Timer,
    accent: "text-sky-400",
    glow: "from-sky-500/20 to-transparent",
    format: (value) => formatResponseTime(value),
  },
];

export default function StatsCards({ stats }) {
  return (
    <section className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {statConfig.map(({ key, label, icon: Icon, accent, glow, format }) => {
        const raw = stats[key];
        const value = format ? format(raw) : raw;

        return (
          <GlassCard key={key} hover className="group relative overflow-hidden p-5">
            <div
              className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${glow} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
            />
            <div className="relative flex items-start justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                  {label}
                </p>
                <p className="mt-2 text-3xl font-semibold tracking-tight text-white">
                  {value ?? "—"}
                </p>
              </div>
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 ${accent}`}
              >
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
            </div>
          </GlassCard>
        );
      })}
    </section>
  );
}
