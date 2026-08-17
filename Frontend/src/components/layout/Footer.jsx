/**
 * Footer.jsx
 *
 * Mirrors the original <footer> (lines 1419–1552 of index.html).
 * Changes:
 *  • href="*.html" → <Link to="/route">
 *  • class= → className=
 *  • .current-year → {new Date().getFullYear()} — no JS hook needed
 *  • background-image set via inline style (CSS url() with dynamic path)
 */

import { Link } from 'react-router-dom';
import { siteData } from '../../data/siteData';

const quickLinks = [
  { label: 'About Us', href: '/about-us' },
  { label: 'Our Services', href: '/services' },
  { label: 'Our Team', href: '/team' },
  { label: 'Appointments', href: '/appointment' },
  { label: 'Contact Us', href: '/contact-us' },
];

const contactInfo = [
  { icon: 'icon-mail', text: siteData.contact.primaryEmail, href: `mailto:${siteData.contact.primaryEmail}`, color: '#57EEE9' },
  { icon: 'icon-phone-call', text: siteData.contact.primaryPhone, href: `tel:${siteData.contact.primaryPhone.replace(/\s+/g, '')}`, color: '#57EEE9' },
  { icon: 'icon-map-pin', text: siteData.hospitals[0].address, href: '#', color: '#57EEE9' },
];

const socialLinks = [
  { icon: 'fa-brands fa-linkedin', href: 'https://www.linkedin.com/showcase/dexignzone', label: 'LinkedIn' },
  { icon: 'fa-brands fa-instagram', href: 'https://www.instagram.com/dexignzone/', label: 'Instagram' },
  { icon: 'fa-brands fa-facebook-f', href: 'https://www.facebook.com/dexignzone', label: 'Facebook' },
  { icon: 'fa-brands fa-x-twitter', href: 'https://x.com/dexignzones', label: 'X / Twitter' },
];

export default function Footer() {
  const handleNewsletterSubmit = e => {
    e.preventDefault();
    // Newsletter submission handled by dz.ajax.js — wire up later.
  };

  return (
    <footer
      className="text-bodycolor bg-[#006562] bg-blend-luminosity bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: 'url(/assets/images/background/bg3.webp)' }}
    >
      {/* ── Footer Top ── */}
      <div className="md:pt-17.5 md:pb-7.5 sm:pt-12.5 sm:pb-5 pt-11.25">
        <div className="container">
          <div className="row">

            {/* Brand column */}
            <div className="xl:w-1/3 w-full wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
              <div className="mb-7.5 me-2">
                <div className="mb-6">
                  <Link to="/">
                    <img src="/assets/images/logo-white.svg" alt="ClinicMaster" className="max-w-45" />
                  </Link>
                </div>
                <p className="text-lg font-light leading-[1.2] text-white/80 mb-5">
                  {siteData.branding.slogan}
                </p>
                {/* Google rating badge */}
                <div className="inline-flex items-center gap-3.75 bg-white py-3 px-5 rounded-xxl text-secondary text-sm font-medium">
                  <img src="/assets/images/google.svg" alt="Google" />
                  <div className="clearfix">
                    <div className="flex">
                      <ul className="flex gap-1">
                        {[1, 2, 3, 4, 5].map(s => (
                          <li key={s} className="text-yellow-400 text-base leading-[1.2]">
                            <i className="fa fa-star" />
                          </li>
                        ))}
                      </ul>
                      <span className="font-bold ms-1">(4.8)</span>
                    </div>
                    <span className="text">12k+ ratings on google</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links column */}
            <div className="xl:w-1/6 lg:w-1/4 md:w-1/2 w-full wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
              <div className="mb-7.5">
                <h2 className="text-xl relative mb-5 text-white font-medium">Quick Links</h2>
                <ul className="list-hover1">
                  {quickLinks.map(link => (
                    <li key={link.href} className="relative py-2 text-2sm leading-5 font-light text-white/80">
                      <Link className="block" to={link.href}>
                        <span className="link-hover">{link.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact column */}
            <div className="xl:w-1/4 lg:w-1/4 md:w-1/2 w-full wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.8s">
              <div className="mb-7.5">
                <h2 className="text-xl relative mb-5 text-white font-medium">Contact us</h2>
                <ul>
                  {contactInfo.map((item, i) => (
                    <li
                      key={i}
                      className={`py-3.75 font-light text-white/80${i < contactInfo.length - 1 ? ' border-b border-white/20' : ''}`}
                    >
                      <a href={item.href}>
                        <i className={`feather ${item.icon} me-1.25`} style={{ color: item.color }} />
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Newsletter column */}
            <div className="xl:w-1/4 lg:w-1/2 w-full wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.8s">
              <div className="mb-7.5 me-2">
                <h2 className="text-xl relative mb-5 text-white font-medium">Newsletter</h2>
                <p className="text-sm font-light text-white/80">
                  Subscribe our newsletter to get the latest news and updates
                </p>
                <form className="dzSubscribe style-1 mb-3.75" onSubmit={handleNewsletterSubmit}>
                  <div className="dzSubscribeMsg" />
                  <div className="form-group">
                    <div className="relative flex flex-wrap items-stretch w-full">
                      <input
                        name="dzEmail"
                        required
                        type="email"
                        className="relative flex-1 w-[1%] py-3.75 ps-6.25 pe-15 text-base text-start text-bodycolor border border-white bg-white placeholder:text-bodycolor rounded-[18px]"
                        placeholder="Your Email Address"
                      />
                      <div className="absolute right-1.25 top-1/2 -translate-y-1/2 z-1">
                        <button
                          name="submit"
                          type="submit"
                          className="size-12 min-w-12 text-lg leading-12 text-center text-primary"
                        >
                          <i className="flaticon-message" />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>

                {/* Social icons */}
                <div className="dz-social-icon">
                  <ul className="flex gap-2.5">
                    {socialLinks.map(social => (
                      <li key={social.label} className="inline-block">
                        <a
                          className="size-10 leading-10 text-center rounded-2lg bg-white text-primary block"
                          href={social.href}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={social.label}
                        >
                          <i className={social.icon} />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* ── Footer Top End ── */}

      {/* ── Footer Bottom ── */}
      <div className="footer-bottom">
        <div className="container">
          <div className="py-7.5 border-t border-white/30 text-base">
            <div className="row">
              <div className="lg:w-1/2 w-full lg:text-start text-center">
                <p className="text-sm font-light text-white/80 mb-0">
                  © {new Date().getFullYear()}{' '}
                  <a
                    href="https://themeforest.net/user/dexignzone"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white"
                  >
                    DexignZone
                  </a>{' '}
                  Theme. All Rights Reserved.
                </p>
              </div>
              <div className="lg:w-1/2 w-full lg:text-end text-center max-lg:!mt-3.75">
                <ul className="footer-link style-1">
                  <li className="inline-block font-poppins relative px-1.25 text-sm font-light text-white">
                    All Rights Reserved
                  </li>
                  <li className="inline-block font-poppins relative px-1.25 text-sm font-light text-white before:h-3.25 before:w-px before:bg-white before:absolute before:top-1/2 ltr:before:-left-0.5 rtl:before:-right-0.5 before:rounded-lg before:-translate-1/2">
                    <Link to="/terms">Terms and Conditions</Link>
                  </li>
                  <li className="inline-block font-poppins relative px-1.25 text-sm font-light text-white before:h-3.25 before:w-px before:bg-white before:absolute before:top-1/2 ltr:before:-left-0.5 rtl:before:-right-0.5 before:rounded-lg before:-translate-1/2">
                    <Link to="/privacy">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ── Footer Bottom End ── */}
    </footer>
  );
}
