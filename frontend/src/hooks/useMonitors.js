import { useCallback, useEffect, useState } from "react";
import {
  addMonitor,
  fetchMonitors,
  deleteMonitor,
} from "../api/monitors";

const REFRESH_INTERVAL_MS = 5000;

export function useMonitors() {
  const [monitors, setMonitors] = useState([]);
  const [url, setUrl] = useState("");
  const [isAdding, setIsAdding] = useState(false);
  const [isLive, setIsLive] = useState(true);

  const loadMonitors = useCallback(async () => {
    try {
      const data = await fetchMonitors();
      setMonitors(data);
      setIsLive(true);
    } catch {
      setIsLive(false);
    }
  }, []);

  useEffect(() => {
    loadMonitors();
    const timer = setInterval(loadMonitors, REFRESH_INTERVAL_MS);

    return () => clearInterval(timer);
  }, [loadMonitors]);

  const handleAddMonitor = async () => {
    const trimmed = url.trim();
    if (!trimmed) return;

    setIsAdding(true);

    try {
      await addMonitor(trimmed);
      setUrl("");
      await loadMonitors();
    } finally {
      setIsAdding(false);
    }
  };

  const handleDeleteMonitor = async (id) => {
    try {
      await deleteMonitor(id);
      await loadMonitors();
    } catch (error) {
      console.error(error);
    }
  };

  return {
    monitors,
    url,
    setUrl,
    addMonitor: handleAddMonitor,
    deleteMonitor: handleDeleteMonitor,
    isAdding,
    isLive,
  };
}