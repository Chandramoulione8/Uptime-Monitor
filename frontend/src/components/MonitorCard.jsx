import {
  ExternalLink,
  Hash,
  Timer,
  Clock,
  Trash2,
} from "lucide-react";

import GlassCard from "./GlassCard";
import StatusBadge from "./StatusBadge";

import {
  formatCheckedAt,
  formatResponseTime,
  getHostname,
  isOnline,
} from "../utils/formatters";

function Metric({ icon: Icon, label, value, mono = false }) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.03]">
        <Icon
          className="h-3.5 w-3.5 text-zinc-500"
          strokeWidth={1.75}
        />
      </div>

      <div className="min-w-0">
        <p className="text-[11px] font-medium uppercase tracking-wider text-zinc-500">
          {label}
        </p>

        <p
          className={[
            "mt-0.5 truncate text-sm text-zinc-200",
            mono ? "font-mono" : "",
          ].join(" ")}
        >
          {value}
        </p>
      </div>
    </div>
  );
}

export default function MonitorCard({ monitor, onDelete }) {
  const { id, url, status, response_time, checked_at } = monitor;

  const online = isOnline(status);

  return (
    <GlassCard
      hover
      className="group relative overflow-hidden p-5"
    >
      <div
        className={[
          "pointer-events-none absolute left-0 top-0 h-full w-1 rounded-l-2xl transition-colors duration-300",
          status == null
            ? "bg-zinc-600"
            : online
            ? "bg-emerald-500"
            : "bg-red-500",
        ].join(" ")}
      />

      <div className="mb-4 flex items-start justify-between gap-3 pl-2">
        <div className="min-w-0 flex-1">
          <p className="truncate font-mono text-sm font-medium text-white">
            {url}
          </p>

          <p className="mt-0.5 truncate text-xs text-zinc-500">
            {getHostname(url)}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <StatusBadge status={status} />

          <button
            onClick={() => {
              if (window.confirm("Delete this monitor?")) {
                onDelete(id);
              }
            }}
            className="rounded-lg p-2 text-zinc-500 transition hover:bg-red-500/10 hover:text-red-400"
            title="Delete Monitor"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 border-t border-white/[0.06] pt-4 pl-2 sm:grid-cols-3">
        <Metric
          icon={Hash}
          label="HTTP Status"
          value={status ?? "—"}
          mono
        />

        <Metric
          icon={Timer}
          label="Response Time"
          value={formatResponseTime(response_time)}
          mono
        />

        <Metric
          icon={Clock}
          label="Last Checked"
          value={formatCheckedAt(checked_at)}
        />
      </div>

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center gap-1.5 pl-2 text-xs font-medium text-zinc-500 opacity-0 transition-all duration-200 group-hover:opacity-100 hover:text-violet-400"
      >
        <ExternalLink
          className="h-3 w-3"
          strokeWidth={2}
        />
        Open site
      </a>
    </GlassCard>
  );
}