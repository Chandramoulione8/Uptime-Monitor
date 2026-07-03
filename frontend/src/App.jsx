import DashboardHeader from "./components/DashboardHeader";
import StatsCards from "./components/StatsCards";
import AddMonitor from "./components/AddMonitor";
import MonitorGrid from "./components/MonitorGrid";
import { useMonitors } from "./hooks/useMonitors";
import { computeStats } from "./utils/formatters";

function GradientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#07070d]">
      <div className="absolute -left-32 -top-32 h-[520px] w-[520px] rounded-full bg-violet-600/20 blur-[120px]" />
      <div className="absolute -right-24 top-1/4 h-[480px] w-[480px] rounded-full bg-indigo-600/15 blur-[110px]" />
      <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[100px]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.03)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxub2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBudW1PY3RhdmVzPSI0Ii8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDMiLz48L3N2Zz4=')] opacity-40" />
    </div>
  );
}

export default function App() {
  const {
    monitors,
    url,
    setUrl,
    addMonitor,
    deleteMonitor,
    isAdding,
    isLive,
  } = useMonitors();

  const stats = computeStats(monitors);

  return (
    <div className="min-h-screen text-zinc-100">
      <GradientBackground />

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <DashboardHeader isLive={isLive} />

        <StatsCards stats={stats} />

        <AddMonitor
          url={url}
          setUrl={setUrl}
          onAdd={addMonitor}
          isAdding={isAdding}
        />

        <MonitorGrid
          monitors={monitors}
          onDelete={deleteMonitor}
        />
      </main>
    </div>
  );
}