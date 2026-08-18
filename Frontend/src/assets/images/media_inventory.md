# Nav Jyoti Eye Hospital - Website Media Inventory

This document outlines every section of the website that requires media (images or videos). It details the recommended image orientation and resolution so you can prepare your real data easily.

## 1. Global Elements
These images are used across multiple pages on the website.

| Element | Location / Component | Recommended Orientation | Suggested Resolution | Description |
|---|---|---|---|---|
| **Primary Logo** | Header | Landscape | ~250x80px | Used in the top navigation bar. Needs to be a transparent PNG or SVG. |
| **Footer Logo** | Footer | Landscape | ~250x80px | Light/White version of the logo for the dark footer. |
| **Page Banner Background** | All Internal Pages | Landscape (Ultra Wide) | 1920x400px | The background image behind page titles (About, Contact, etc.). |
| **Footer Background** | Footer | Landscape | 1920x600px | Subtle background pattern/image for the footer. |

---

## 2. Home Page (`/`)

| Element | Location / Component | Recommended Orientation | Suggested Resolution | Description |
|---|---|---|---|---|
| **Hero Image 1** | Hero Section | Landscape | 335x275px | First image in the hero collage. |
| **Hero Image 2** | Hero Section | Portrait | 430x470px | Second image in the hero collage. |
| **Hero Image 3** | Hero Section | Portrait | 430x470px | Third (tallest) image in the hero collage. |
| **Hero Floating Icons** | Hero Section | Square | 150x150px | Small decorative circular icons floating around the hero text. |
| **Services Section Image** | Services Section | Portrait / Cutout | 600x800px | Image of a doctor/machine used alongside services. Transparent background recommended. |
| **Appointment CTA Image** | Appointment CTA | Square | 600x600px | Main promotional image on the left of the home appointment banner. |
| **Donation Pledge Image** | Eye Donation Section | Landscape | 700x500px | Image representing eye donation (e.g., patient with doctor or caring hands). |

---

## 3. Shared/Reusable Sections
These sections appear on the homepage and sometimes on internal pages.

| Element | Location / Component | Recommended Orientation | Suggested Resolution | Description |
|---|---|---|---|---|
| **About Arched Image** | About Section | Square | 600x600px | Main image in the About section. It gets rendered with an arched top via CSS. |
| **About Badge Image** | About Section | Square | 170x170px | Small floating badge/image on the bottom corner of the main About image. |
| **Before Image** | Why Choose Us | Landscape | 800x600px | The "Before" view for the image comparison slider (e.g., blurry vision). |
| **After Image** | Why Choose Us | Landscape | 800x600px | The "After" view for the image comparison slider (e.g., clear vision). |
| **Testimonial Avatars** | Testimonial Section | Square (1:1) | 150x150px | Small profile pictures of patients giving reviews. Rendered as circles. |
| **Testimonial Grid** | Testimonial Section | Portrait | 400x500px | Images of clinic/patients shown in the background of testimonials. |
| **Team Member** | Team Section | Square/Portrait | 600x600px | Photos of doctors. Keep faces centered. |
| **FAQ Image** | FAQ Section | Square | 750x750px | Image displayed next to the accordion questions. |

---

## 4. Internal Pages

### About Page (`/about-us`)
| Element | Recommended Orientation | Suggested Resolution | Description |
|---|---|---|---|
| **Doctor Highlight** | Portrait | 500x750px | Main photo of the lead doctor or director. |
| **Clinic Overview** | Square | 550x550px | General photo of the clinic's interior or machinery. |

### Contact Page (`/contact-us`)
| Element | Recommended Orientation | Suggested Resolution | Description |
|---|---|---|---|
| **Contact Side Image** | Square / Portrait | 600x600px | Image placed next to the contact form. |

### Appointments Page (`/appointment`)
| Element | Recommended Orientation | Suggested Resolution | Description |
|---|---|---|---|
| **Form Side Image** | Portrait | 450x600px | Image placed next to the detailed appointment booking form. |

### Treatment Details Page (`/treatments/:id`)
| Element | Recommended Orientation | Suggested Resolution | Description |
|---|---|---|---|
| **Treatment Banner** | Landscape (Wide) | 1600x600px | The top hero image specifically for the treatment (e.g., Cataract, LASIK). |
| **Treatment Content** | Portrait | 600x800px | Image embedded within the treatment description text. |

### Videos Page (`/eye-care-videos`)
| Element | Recommended Orientation | Suggested Resolution | Description |
|---|---|---|---|
| **Video Thumbnails** | Landscape (16:9) | 1280x720px | Cover image for the video cards. |
| **Video Links** | N/A | N/A | YouTube or Vimeo URL links embedded in the `videos.js` data file. |

---

## Backgrounds (Optional)
There are several background textures (`bg3.webp`, `bg4.webp`, `bg5.webp`, `bg6.webp`, `bg7.webp`, `bg8.webp`) used across the site. You do not necessarily need to change these unless you want to alter the fundamental theme textures of the website. If you do, use subtle, low-opacity wide images.
