import { CheckCircle2, AlertCircle, Clock } from "lucide-react";
import { isOnline } from "../utils/formatters";

export default function StatusBadge({ status }) {
  if (status == null) {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-500/30 bg-zinc-500/10 px-2.5 py-1 text-xs font-medium text-zinc-400">
        <Clock className="h-3 w-3" strokeWidth={2} />
        Pending
      </span>
    );
  }

  const online = isOnline(status);

  return (
    <span
      className={[
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold",
        online
          ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
          : "border-red-500/30 bg-red-500/10 text-red-400",
      ].join(" ")}
    >
      {online ? (
        <CheckCircle2 className="h-3 w-3" strokeWidth={2.5} />
      ) : (
        <AlertCircle className="h-3 w-3" strokeWidth={2.5} />
      )}
      {online ? "Online" : "Offline"}
    </span>
  );
}
