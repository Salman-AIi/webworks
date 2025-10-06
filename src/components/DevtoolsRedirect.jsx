"use client";

import { useEffect } from "react";

export default function DevtoolsRedirect() {
  useEffect(() => {
    try {
      if (typeof window === "undefined") return;

      const threshold = 160; // heuristic; bypassable
      let hasRedirected = false;

      const addOverlay = () => {
        const id = "__devtools_block__";
        if (document.getElementById(id)) return;
        const overlay = document.createElement("div");
        overlay.id = id;
        overlay.style.position = "fixed";
        overlay.style.inset = "0";
        overlay.style.background = "#111";
        overlay.style.zIndex = "2147483647";
        overlay.style.pointerEvents = "none";
        document.body.appendChild(overlay);
      };

      const redirect = () => {
        if (hasRedirected) return;
        hasRedirected = true;
        sessionStorage.setItem("__dt_redirected__", "1");
        addOverlay();
        try {
          window.location.replace("/_not-found");
        } catch {
          window.location.href = "/_not-found";
        }
      };

      const checkDevtools = () => {
        const widthDiff = Math.abs(window.outerWidth - window.innerWidth);
        const heightDiff = Math.abs(window.outerHeight - window.innerHeight);
        const open = widthDiff > threshold || heightDiff > threshold;
        if (open) redirect();
      };

      // Run quickly at start to reduce flash
      const start = Date.now();
      // timing trick (bypassable)
      // eslint-disable-next-line no-debugger
      debugger;
      if (Date.now() - start > 100) {
        redirect();
      }

      const interval = window.setInterval(checkDevtools, 800);
      return () => window.clearInterval(interval);
    } catch {}
  }, []);

  return null;
}



