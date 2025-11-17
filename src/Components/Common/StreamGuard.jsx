import React, { useEffect, useRef, useState } from "react";
import streamOpen from "../../api/streamOpen";
import streamClose from "../../api/streamClose";
import streamHeartbeat from "../../api/streamHeartbeat";
import { baseURL } from "../../helper/serverUrl";
import { getOrCreateTabId } from "../../helper/streamSession";

const StreamGuard = ({ children }) => {
  const [blocked, setBlocked] = useState(false);
  const heartbeatRef = useRef(null);
  const sessionIdRef = useRef(null);
  const closedRef = useRef(false);

  useEffect(() => {
    let alive = true;
    (async () => {
      const tabId = getOrCreateTabId();
      const path =
        typeof window !== "undefined" ? window.location.pathname : "";
      const sid = `${tabId}:${path}:${Date.now()}`;
      sessionIdRef.current = sid;
      try {
        const res = await streamOpen(sid);
        if (!alive) return;
        if (!res?.data?.allowed) {
          setBlocked(true);
          return;
        }
        heartbeatRef.current = setInterval(() => {
          streamHeartbeat(sessionIdRef.current).catch(() => {});
        }, 5000);
      } catch {
        // fail-closed to be safe
        setBlocked(true);
      }
    })();
    const doClose = () => {
      if (closedRef.current) return;
      closedRef.current = true;
      const token = localStorage.getItem("token");
      const sid = sessionIdRef.current || "";
      if (navigator.sendBeacon && token && sid) {
        const u = `${baseURL}/stream/close_beacon?token=${encodeURIComponent(
          token
        )}&sessionId=${encodeURIComponent(sid)}`;
        navigator.sendBeacon(u);
      } else {
        streamClose(sessionIdRef.current).catch(() => {});
      }
    };
    const handleBeforeUnload = () => doClose();
    const handlePageHide = () => doClose();
    const handleUnload = () => doClose();
    const handleVisibility = () => {
      if (document.visibilityState === "hidden") doClose();
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    window.addEventListener("pagehide", handlePageHide);
    window.addEventListener("unload", handleUnload);
    document.addEventListener("visibilitychange", handleVisibility);
    return () => {
      alive = false;
      if (heartbeatRef.current) {
        clearInterval(heartbeatRef.current);
        heartbeatRef.current = null;
      }
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("pagehide", handlePageHide);
      window.removeEventListener("unload", handleUnload);
      document.removeEventListener("visibilitychange", handleVisibility);
      // best-effort close on unmount too
      doClose();
    };
  }, []);

  if (blocked) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
        <div className="bg-[#1C1C1E] text-white p-6 rounded-md shadow-md">
          <h3 className="text-lg font-semibold mb-2">Stream limit reached</h3>
          <p className="text-sm mb-4">
            You already have more than 5 streams open. Please close another
            stream and try again.
          </p>
        </div>
      </div>
    );
  }
  return <>{children}</>;
};

export default StreamGuard;
