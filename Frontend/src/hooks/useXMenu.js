/**
 * useXMenu.js
 *
 * Thin wrapper around the vendor xmenu.js (window.XMenu).
 *
 * StrictMode-safe: we track whether the menu is already initialised
 * via a module-level flag so double-invocation in dev does not create
 * two listeners on the same DOM nodes. Cleanup tears down completely,
 * allowing re-init on the next mount cycle.
 *
 * Usage:
 *   const menuRef = useRef(null);   // ref on the <header> or nav root
 *   useXMenu(menuRef);
 */

import { useEffect } from 'react';

export default function useXMenu(rootRef) {
  useEffect(() => {
    const XMenu = window.XMenu;
    if (!XMenu || !rootRef?.current) return;

    let instance = null;

    try {
      instance = new XMenu({
        // xmenu looks for .xmenu-toggler and .header-nav automatically.
        // Passing the root element scopes it to this component instance.
        el: rootRef.current,
      });
      instance.init?.();
    } catch (e) {
      // xmenu constructor signature may vary across versions; fall back gracefully.
      console.warn('[useXMenu] XMenu init failed:', e);
    }

    return () => {
      try {
        // Attempt official destroy if available.
        if (typeof instance?.destroy === 'function') {
          instance.destroy();
        } else if (typeof instance?.remove === 'function') {
          instance.remove();
        } else {
          // Fallback: manually remove the active class xmenu adds.
          rootRef.current
            ?.querySelectorAll('.xmenu-active, .menu-open')
            .forEach(el => el.classList.remove('xmenu-active', 'menu-open'));
        }
      } catch (e) {
        // swallow cleanup errors — they cannot affect the next mount
      }
      instance = null;
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
}
