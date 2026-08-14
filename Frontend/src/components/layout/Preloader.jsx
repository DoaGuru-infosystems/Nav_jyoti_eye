/**
 * Preloader.jsx
 *
 * Matches the original #dzPreloader loading bar.
 * Removed from DOM on the `load` event (same as original custom.js).
 * In React: we hide it via state rather than .remove() to keep React
 * in control of the DOM.
 */

import { useState, useEffect } from 'react';

export default function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const hide = () => setTimeout(() => setVisible(false), 800);

    if (document.readyState === 'complete') {
      hide();
    } else {
      window.addEventListener('load', hide);
      return () => window.removeEventListener('load', hide);
    }
  }, []);

  if (!visible) return null;

  return (
    <div
      id="dzPreloader"
      className="fixed size-full left-0 top-0 z-[9999999] flex items-center justify-center bg-light"
    >
      <div className="block w-32.5 h-1 rounded-3xl bg-white relative before:absolute before:bg-primary before:top-0 before:left-0 before:w-0 before:h-full before:rounded-3xl before:animate-dzMoving" />
    </div>
  );
}
