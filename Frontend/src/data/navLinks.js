/**
 * navLinks.js
 *
 * Navigation data for the site header.
 * Each entry: { label, href, children?: [{ label, href, children? }] }
 * "href" values map to react-router-dom <Link to=""> paths.
 */

const navLinks = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About Us',
    href: '/about-us',
  },
  {
    label: 'Treatments',
    href: '#',
    children: [
      { label: 'Cataract Surgery', href: '/treatments/cataract-surgery' },
      { label: 'Oculoplasty', href: '/treatments/oculoplasty' },
    ],
  },
  {
    label: 'Videos',
    href: '/eye-care-videos',
  },
  {
    label: 'Hospitals',
    href: '/hospitals',
  },
  {
    label: 'Appointment',
    href: '/appointment',
  },
  {
    label: 'Contact Us',
    href: '/contact-us',
  },
];

export default navLinks;
