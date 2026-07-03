export function isOnline(status) {
  return status === 200;
}

export function computeStats(monitors) {
  const total = monitors.length;
  const online = monitors.filter((m) => isOnline(m.status)).length;
  const offline = monitors.filter(
    (m) => m.status !== null && m.status !== undefined && !isOnline(m.status),
  ).length;

  const withResponseTime = monitors.filter((m) => m.response_time != null);
  const avgResponseTime =
    withResponseTime.length > 0
      ? withResponseTime.reduce((sum, m) => sum + m.response_time, 0) /
        withResponseTime.length
      : null;

  return { total, online, offline, avgResponseTime };
}

export function formatResponseTime(seconds) {
  if (seconds == null) return "—";
  if (seconds < 1) return `${Math.round(seconds * 1000)}ms`;
  return `${seconds.toFixed(2)}s`;
}

export function formatCheckedAt(checkedAt) {
  if (!checkedAt) return "Never";

  const date = new Date(checkedAt);
  if (Number.isNaN(date.getTime())) return String(checkedAt);

  const now = Date.now();
  const diffMs = now - date.getTime();
  const diffSec = Math.floor(diffMs / 1000);

  if (diffSec < 60) return `${diffSec}s ago`;
  if (diffSec < 3600) return `${Math.floor(diffSec / 60)}m ago`;
  if (diffSec < 86400) return `${Math.floor(diffSec / 3600)}h ago`;

  return date.toLocaleString(undefined, {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function getHostname(url) {
  try {
    return new URL(url).hostname;
  } catch {
    return url;
  }
}
