"use client";

const STORAGE_KEY = "tr_session_id";

/** Stable per-tab session id for click funnels (no auth). */
export function getSessionId(): string {
  if (typeof window === "undefined") return "";
  try {
    let id = sessionStorage.getItem(STORAGE_KEY);
    if (!id) {
      id = crypto.randomUUID();
      sessionStorage.setItem(STORAGE_KEY, id);
    }
    return id;
  } catch {
    return "";
  }
}
