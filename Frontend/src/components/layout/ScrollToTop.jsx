/**
 * ScrollToTop.jsx
 *
 * Scroll-progress button — circular SVG stroke fills as user scrolls down.
 * Logic lives in useGsap.js (initScrollTop). This component only renders
 * the markup; the hook wires the event listeners after mount.
 */

export default function ScrollToTop() {
  return (
    <button
      id="scrollProgress"
      title="Scroll to top"
      className="scroll-top fixed z-[9999] right-5 bottom-5 size-12.5 rounded-full bg-secondary text-white cursor-pointer opacity-0 pointer-events-none duration-500 flex items-center justify-center [.scroll-top.active]:opacity-100 [.scroll-top.active]:pointer-events-auto max-sm:hidden"
    >
      <span className="icon text-xs relative z-1">
        <i className="fas fa-arrow-up" />
      </span>
      <svg className="absolute top-0 left-0 -rotate-90" width="50" height="50">
        <circle
          className="stroke-white"
          cx="25"
          cy="25"
          r="20"
          stroke="#000"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="100.53"
          strokeDashoffset="100.53"
        />
      </svg>
    </button>
  );
}
