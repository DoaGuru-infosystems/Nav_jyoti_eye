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
  { label: 'Terms and Conditions', href: '/terms' },
  { label: 'Privacy Policy', href: '/privacy' },
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
            <div className="lg:w-1/3 w-full wow fadeInUp mb-7.5" data-wow-delay="0.2s" data-wow-duration="0.8s">
              <div className="me-2">
                <div className="mb-6">
                  <Link to="/">
                    <h2 className="text-white text-3xl font-bold tracking-wide">{siteData.branding.name}</h2>
                  </Link>
                </div>
                <p className="text-lg font-light leading-[1.2] text-white/80 mb-5">
                  {siteData.branding.slogan}
                </p>


                {/* Social icons */}
                <div className="dz-social-icon">
                  <ul className="flex gap-2.5">
                    {socialLinks.map(social => (
                      <li key={social.label} className="inline-block">
                        <a
                          className="size-10 leading-10 text-center rounded-2lg bg-white text-primary block hover:bg-primary hover:text-white transition-all"
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

            {/* Quick Links column */}
            <div className="lg:w-1/3 md:w-1/2 w-full wow fadeInUp mb-7.5" data-wow-delay="0.4s" data-wow-duration="0.8s">
              <div>
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
            <div className="lg:w-1/3 md:w-1/2 w-full wow fadeInUp mb-7.5" data-wow-delay="0.6s" data-wow-duration="0.8s">
              <div>
                <h2 className="text-xl relative mb-5 text-white font-medium">Contact Us</h2>
                <ul>
                  {contactInfo.map((item, i) => (
                    <li
                      key={i}
                      className={`py-3.75 font-light text-white/80${i < contactInfo.length - 1 ? ' border-b border-white/20' : ''}`}
                    >
                      <a href={item.href} className="flex">
                        <i className={`feather ${item.icon} me-2 mt-1 min-w-4`} style={{ color: item.color }} />
                        <span>{item.text}</span>
                      </a>
                    </li>
                  ))}
                </ul>
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
              <div className="lg:w-1/3 w-full lg:text-start text-center">
                <p className="text-sm font-light text-white/80 mb-0">
                  © {new Date().getFullYear()} Nav Jyoti Eye Hospital. All Rights Reserved.
                </p>
              </div>
              <div className="lg:w-1/3 w-full text-center">
                <Link to="/admin/login" className="w-10 h-10 inline-block opacity-0" aria-hidden="true" aria-label="Admin Login"></Link>
              </div>
              <div className="lg:w-1/3 w-full lg:text-end text-center max-lg:!mt-3.75">
                <p className="text-sm font-light text-white/80 mb-0">
                  Designed and developed by <a href="https://doaguru.com/" target="_blank" rel="noreferrer" className="text-white hover:text-primary">DOAGuru InfoSystems</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ── Footer Bottom End ── */}
    </footer>
  );
}
