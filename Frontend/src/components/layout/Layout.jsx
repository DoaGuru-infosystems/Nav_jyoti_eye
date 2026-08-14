/**
 * Layout.jsx
 *
 * Shared shell rendered by every page route.
 * Structure mirrors the original <div class="page-wraper"> wrapper:
 *   Preloader → Header → #smooth-wrapper > #smooth-content > <Outlet> → Footer → ScrollToTop
 *
 * Notes:
 *  • CartDrawer removed — not in scope for this project.
 *  • useGsap() called here so ScrollSmoother is initialised once for the
 *    entire app, not per-page. It also wires the scroll-to-top button.
 *  • <Outlet key={location.pathname}> forces page components to fully
 *    remount on navigation — this re-triggers all useEffect hooks in page
 *    components (Swiper, LightGallery, etc.) after each route change.
 *  • A secondary useEffect calls ScrollSmoother.get()?.refresh() after
 *    the Outlet remounts so that GSAP's cached scroll height is up-to-date
 *    for pages with different content lengths.
 */

import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Preloader from './Preloader';
import ScrollToTop from './ScrollToTop';
import useGsap from '../../hooks/useGsap';

export default function Layout() {
  // useGsap handles: ScrollSmoother init, sticky header RAF, scroll-to-top,
  // and the route-change ScrollSmoother.refresh() call.
  useGsap();

  const location = useLocation();

  return (
    <div className="page-wraper">
      <Preloader />

      <Header />

      {/* GSAP ScrollSmoother requires exactly these two wrapper divs */}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="page-content">
            {/*
              key={location.pathname}: forces a full remount of the page
              component on every route change, so page-level useEffect hooks
              (Swiper, LightGallery, etc.) re-run without needing manual
              route-change subscriptions inside each page.
            */}
            <Outlet key={location.pathname} />
          </main>

          <Footer />
        </div>
      </div>

      <ScrollToTop />
    </div>
  );
}
