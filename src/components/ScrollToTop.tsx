
"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";

export default function ScrollToTop() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const resetScroll = () => {
      const root = document.documentElement;
      const previousScrollBehavior = root.style.scrollBehavior;

      root.style.scrollBehavior = "auto";

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      });

      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;

      root.style.scrollBehavior = previousScrollBehavior;
    };

    resetScroll();

    const firstFrame = window.requestAnimationFrame(() => {
      resetScroll();
    });

    const secondFrame = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        resetScroll();
      });
    });

    const firstTimeout = window.setTimeout(() => {
      resetScroll();
    }, 100);

    const secondTimeout = window.setTimeout(() => {
      resetScroll();
    }, 300);

    return () => {
      window.cancelAnimationFrame(firstFrame);
      window.cancelAnimationFrame(secondFrame);
      window.clearTimeout(firstTimeout);
      window.clearTimeout(secondTimeout);
    };
  }, [pathname]);

  return null;
}