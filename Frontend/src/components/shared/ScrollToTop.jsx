import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Use GSAP ScrollSmoother if available (it controls scroll on this site)
    const smoother = window.ScrollSmoother?.get?.();
    if (smoother) {
      smoother.scrollTo(0, true); // scroll to top, no smooth (instant on route change)
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [pathname]);

  return null;
}
