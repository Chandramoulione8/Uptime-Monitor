const API_BASE = "http://127.0.0.1:8000";

export async function fetchMonitors() {
  const response = await fetch(`${API_BASE}/urls`);

  if (!response.ok) {
    throw new Error("Failed to fetch monitors");
  }

  return response.json();
}

export async function addMonitor(url) {
  const response = await fetch(`${API_BASE}/urls`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url }),
  });

  if (!response.ok) {
    throw new Error("Failed to add monitor");
  }

  return response.json();
}

export async function deleteMonitor(id) {
  const response = await fetch(`${API_BASE}/urls/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete monitor");
  }

  return response.json();
}