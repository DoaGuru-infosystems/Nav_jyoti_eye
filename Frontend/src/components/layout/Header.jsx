/**
 * Header.jsx
 *
 * Faithfully mirrors the original <header> (lines 163-523 of index.html).
 * Changes from the static version:
 *  • href="*.html" → <Link to="/route"> for SPA navigation
 *  • class= → className=, for= → htmlFor=, self-closing tags fixed
 *  • Mobile menu open/close managed via useState (no jQuery)
 *  • Search overlay shown/hidden via useState
 *  • xmenu.js wired via useXMenu hook (for desktop mega-menu behaviour)
 *  • CartDrawer removed per project scope decision
 */

import { useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import useXMenu from '../../hooks/useXMenu';
import navLinks from '../../data/navLinks';
import { siteData } from '../../data/siteData';

/* ── Recursive nav item renderer ────────────────────────────────────────── */
function NavItem({ item, depth = 0 }) {
  const hasChildren = item.children?.length > 0;

  if (depth === 0) {
    // Top-level item
    return (
      <li className="lg:inline-block block max-lg:border-b max-lg:border-gray-200 relative group">
        { hasChildren ? (
          <>
            <a
              className="lg:py-7 py-2 xl:px-4 lg:px-2 relative lg:inline-block block xl:text-lg text-2sm font-medium hover:text-primary after:ms-1 after:-mt-1 after:inline-block after:size-3 after:bg-starsvg max-lg:after:hidden cursor-pointer"
              href="#"
              onClick={ e => e.preventDefault() }
            >
              <span className="inline-block leading-7.5">{ item.label }</span>
              <i className="fas fa-chevron-right lg:!hidden !block size-7 !leading-7 text-center text-xs bg-secondary rounded text-white float-end" />
            </a>
            <ul className="lg:absolute bg-white block ltr:lg:left-0 rtl:lg:right-0 lg:py-5 max-lg:py-2.5 max-lg:border-t max-lg:border-gray-200 w-full lg:w-55 lg:opacity-0 lg:invisible lg:translate-y-10 z-10 mt-0 text-start duration-500 lg:group-hover:opacity-100 lg:group-hover:visible lg:group-hover:translate-y-0 max-lg:hidden sub-menu">
              { item.children.map(child => (
                <NavItem key={ child.href + child.label } item={ child } depth={ 1 } />
              )) }
            </ul>
          </>
        ) : (
          <NavLink
            to={ item.href }
            className={ ({ isActive }) =>
              `lg:py-7 py-2 xl:px-4 lg:px-2 relative lg:inline-block block xl:text-lg text-2sm font-medium hover:text-primary${isActive ? ' text-primary' : ''}`
            }
          >
            <span className="inline-block leading-7.5">{ item.label }</span>
          </NavLink>
        ) }
      </li>
    );
  }

  if (depth === 1) {
    // Dropdown item
    const hasGrandChildren = item.children?.length > 0;
    return (
      <li className={ `relative${hasGrandChildren ? ' group/second sub-menu-down' : ''}` }>
        { hasGrandChildren ? (
          <>
            <a
              className="block relative text-sm text-gray-600 font-normal py-1.25 lg:px-7.5 duration-500 hover:text-primary after:content-['\f054'] after:inline-block after:font-black after:font-['Font_Awesome_5_Free'] after:text-tiny after:float-end after:duration-500 max-lg:after:size-7 max-lg:after:leading-7 max-lg:after:text-center max-lg:after:text-xs max-lg:after:rounded max-lg:after:bg-secondary max-lg:after:text-white cursor-pointer"
              href="#"
              onClick={ e => e.preventDefault() }
            >
              <span>{ item.label }</span>
            </a>
            <ul className="bg-white lg:py-5 lg:w-55 ltr:2xl:left-55 rtl:2xl:right-55 ltr:lg:-left-55 rtl:lg:-right-55 lg:top-0 lg:absolute lg:opacity-0 lg:invisible lg:translate-y-10 z-10 mt-0 text-start duration-500 lg:group-hover/second:opacity-100 lg:group-hover/second:visible lg:group-hover/second:translate-y-0 max-lg:hidden max-lg:ps-5 sub-menu">
              { item.children.map(child => (
                <NavItem key={ child.href + child.label } item={ child } depth={ 2 } />
              )) }
            </ul>
          </>
        ) : (
          <Link
            to={ item.href }
            className="block relative text-sm text-gray-600 font-normal py-1.25 lg:px-7.5 duration-500 hover:text-primary"
          >
            <span>{ item.label }</span>
          </Link>
        ) }
      </li>
    );
  }

  // depth === 2 — grand-child leaf
  return (
    <li className="relative">
      <Link
        to={ item.href }
        className="block relative text-sm text-gray-600 font-normal py-1.25 lg:px-7.5 duration-500 hover:text-primary"
      >
        <span>{ item.label }</span>
      </Link>
    </li>
  );
}

/* ── Header ─────────────────────────────────────────────────────────────── */
export default function Header() {
  const headerRef = useRef(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Wire xmenu for mobile hamburger + desktop mega-menu.
  useXMenu(headerRef);

  return (
    <header
      ref={ headerRef }
      className="site-header sticky-header-wrapper relative w-full z-999 border-b border-black/10"
    >
      <div className="main-bar relative lg:text-heading text-secondary bg-white w-full">
        <div className="container-fluid flex 3xl:px-20! xl:px-12.5! md:px-7.5! px-3.75!">

          {/* ── Logo ── */ }
          <div className="flex items-center align-middle xl:w-60 w-54 sm:h-34 h-20 xl:me-7.5 me-2 logo-dark">
            <Link to="/" className="table-cell align-middle">
              <img src="/assets/images/navjyoti-logo.png" alt="ClinicMaster logo" className="object-contain h-full w-full max-sm:max-h-26" />
            </Link>
          </div>

          {/* ── Mobile hamburger toggler ── */ }
          <button
            className={ `xmenu-toggler lg:hidden float-end sm:mt-4.5 sm:mb-4 sm:ms-7 my-2.5 ms-3 sm:ms-5 size-11 bg-secondary rounded-md relative cursor-pointer max-lg:order-1 max-md:ms-auto ${isMobileMenuOpen ? 'open' : ''}` }
            type="button"
            aria-label="Open menu"
            onClick={ () => setIsMobileMenuOpen(!isMobileMenuOpen) }
          >
            <span className={ `block absolute left-2.5 h-0.5 rounded-px bg-white duration-300 w-5.5 ${isMobileMenuOpen ? 'top-5.5 rotate-45 w-6.25' : 'top-3.25'}` } />
            <span className={ `block absolute left-2.5 h-0.5 rounded-px bg-white duration-0 w-6.25 ${isMobileMenuOpen ? 'top-5.5 opacity-0' : 'top-5.5'}` } />
            <span className={ `block absolute left-2.5 h-0.5 rounded-px bg-white duration-300 w-4 ${isMobileMenuOpen ? 'top-5.5 -rotate-45 w-6.25' : 'top-8'}` } />
          </button>

          {/* ── Mobile menu overlay ── */ }
          <div className={ `lg:hidden fixed top-0 left-0 bg-black size-full duration-300 z-999 menu-close ${isMobileMenuOpen ? 'opacity-50 pointer-events-auto' : 'opacity-0 visible pointer-events-none fade-overlay'}` } onClick={ () => setIsMobileMenuOpen(false) } />

          {/* ── Nav ── */ }
          <div className={ `flex lg:basis-auto lg:grow max-lg:flex-col justify-start max-lg:fixed max-lg:h-screen max-lg:px-5 max-lg:top-0 max-lg:z-9999 max-lg:bg-white max-sm:w-64 max-lg:w-72 max-lg:overflow-auto max-lg:duration-700 header-nav custom-scroll ${isMobileMenuOpen ? 'ltr:max-lg:left-0 rtl:max-lg:right-0' : 'ltr:max-lg:-left-75 rtl:max-lg:-right-75'}` }>
            {/* Mobile logo inside nav drawer */ }
            <div className="flex items-center relative z-9 py-6.25 lg:hidden w-48 h-20">
              <Link to="/" className="table-cell align-middle">
                <img src="/assets/images/navjyoti-logo.png" alt="ClinicMaster" className="object-contain duration-500 h-full w-full" />
              </Link>
            </div>

            <ul className="lg:flex flex-wrap navbar-nav">
              { navLinks.map(item => (
                <NavItem key={ item.href + item.label } item={ item } depth={ 0 } />
              )) }
              <li className="lg:hidden block max-lg:border-b max-lg:border-gray-200 relative group">
                <NavLink to="/appointment" className="lg:py-7 py-2 xl:px-4 lg:px-2 relative lg:inline-block block xl:text-lg text-2sm font-medium hover:text-primary text-primary">
                  <span className="inline-block leading-7.5">Book Appointment</span>
                </NavLink>
              </li>
            </ul>

            {/* Mobile social links */ }
            <div className="lg:hidden block max-lg:p-5 text-center mt-auto">
              <ul>
                <li className="inline-block mx-0.5">
                  <a className="size-10 !leading-10 border border-black/10 text-center text-primary fab fa-facebook-f" target="_blank" rel="noreferrer" href="https://www.facebook.com/profile.php?id=61592724337805" aria-label="Facebook" />
                </li>
                <li className="inline-block mx-0.5">
                  <a className="size-10 !leading-10 border border-black/10 text-center text-primary fab fa-instagram" target="_blank" rel="noreferrer" href="https://www.instagram.com/navjyoti.hospital/" aria-label="Instagram" />
                </li>
              </ul>
            </div>
          </div>

          {/* ── Extra nav (phone + appointment CTA) ── */ }
          <div className="extra-nav flex items-center h-20 3xl:ps-7.5 ms-auto max-sm:w-full max-sm:bg-white max-sm:fixed max-sm:-bottom-16 ltr:max-sm:left-0 rtl:max-sm:right-0 max-sm:px-3 sm:max-sm:px-5 max-sm:shadow-3 max-sm:h-14 sm:max-sm:h-15 max-sm:duration-500">
            <div className="flex items-center w-full">
              <ul className="lg:ms-5 sm:ms-3.75 flex items-center gap-11.25 w-full justify-between">
                {/* Phone number — hidden below 2xxl */ }
                <li className="2xxl:inline-flex items-center gap-3.75 hidden">
                  <div className="widget-media">
                    <i className="feather icon-phone-call dz-ring-effect text-3xxl inline-flex animate-dzRing text-primary" />
                  </div>
                  <div className="widget-content">
                    <h6 className="text-primary text-sm font-normal mb-0 font-base!">Contact us</h6>
                    <a href={ `tel:${siteData.contact.primaryPhone.replace(/\s+/g, '')}` } className="sm:text-lg text-base font-semibold text-secondary font-title!">{ siteData.contact.primaryPhone }</a>
                  </div>
                </li>



                {/* Appointment CTA */ }
                <li className="inline-block max-xl:hidden">
                  <Link to="/appointment" className="btn btn-primary">
                    Appointment
                    <i className="feather icon-arrow-right ms-1.25 text-xl text-white" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>



        </div>
      </div>
    </header>
  );
}
