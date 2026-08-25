// siteData.js - Centralized Data Source

import hospitaImage from "../assets/images/navjyoti/hospita.png";
export const siteData = {
  // Global Settings
  branding: {
    name: "Navjyoti Eye Hospital",
    logoAlt: "Navjyoti Eye Hospital logo",
    tagline: "WE CARE FOR YOU",
    slogan: "Care your Eyes - You may not get them again",
    // nameHindi: "à¤¨à¤µà¤œà¥à¤¯à¥‹à¤¤à¤¿ à¤†à¤ˆ à¤¹à¥‰à¤¸à¥à¤ªà¤¿à¤Ÿà¤²",
  },

  // Contact Information
  contact: {
    primaryPhone: "+91 6268875304",
    secondaryPhone: "+91 6387225002",
    primaryEmail: "navjyotihospital00@gmail.com",
    supportEmail: "navjyotihospital00@gmail.com",
    emergencyHelpline: "+91 6268875304",
  },

  // Working Hours
  workingHours: [
    { day: "Mon-Sat", hours: "11:00 AM - 8:30 PM" },
    { day: "Sun", hours: "Closed / à¤°à¤µà¤¿à¤µà¤¾à¤° à¤…à¤µà¤•à¤¾à¤¶" },
  ],

  // Social Links
  socialLinks: [
    {
      platform: "Instagram",
      url: "https://www.instagram.com/navjyoti.hospital/",
      icon: "fa-brands fa-instagram",
    },
    {
      platform: "Facebook",
      url: "https://www.facebook.com/profile.php?id=61592724337805",
      icon: "fa-brands fa-facebook-f",
    },
  ],

  // Services / Treatments
  treatments: [
    {
      id: "cataract-surgery",
      title: "Cataract Surgery (Phaco technique)",
      shortDesc:
        "Restore crystal-clear vision with our advanced Phacoemulsification (Phaco) technique. This state-of-the-art, minimally invasive cataract surgery ensures a rapid recovery, minimal discomfort, and highly precise results. We utilize premium intraocular lenses (IOLs) tailored to your visual needs, allowing you to return to your daily activities with enhanced clarity.",
      path: "/treatments/cataract-surgery",
      tags: ["Phacoemulsification", "Premium IOL", "Painless", "Fast Recovery"],
      highlights: [
        "Minimally Invasive Phaco Surgery",
        "Premium Monofocal & Multifocal IOL Options",
        "No Stitch, No Injection Technique",
        "Same-Day Discharge in Most Cases",
        "High-Definition Post-Op Vision",
        "Comprehensive Pre & Post-Op Care",
      ],
    },
    {
      id: "oculoplasty",
      title: "Orbit & Oculoplasty Surgery",
      shortDesc:
        "Our specialized Orbit & Oculoplasty services address both cosmetic and reconstructive needs of the eyes, eyelids, tear ducts, and surrounding facial structures. Whether treating droopy eyelids (ptosis), orbital tumors, or trauma reconstruction, our expert surgical interventions restore both optimal function and aesthetic appearance with utmost precision.",
      path: "/treatments/oculoplasty",
      tags: ["Ptosis Repair", "Eyelid Surgery", "Tear Ducts", "Orbital Tumors"],
      highlights: [
        "Droopy Eyelid (Ptosis) Correction",
        "Cosmetic Blepharoplasty",
        "Orbital Tumor Removal",
        "Tear Duct (DCR) Surgery",
        "Eyelid Reconstruction After Trauma",
        "Botox & Filler Treatments",
      ],
    },
    {
      id: "comprehensive-exams",
      title: "Comprehensive Ocular Examinations",
      shortDesc:
        "Prevention and early detection are key to lifelong eye health. Our comprehensive evaluations go beyond standard vision tests to thoroughly assess the anterior and posterior segments of your eye. We meticulously examine the eyelids, cornea, fundus, and retina using advanced diagnostic imaging to detect conditions like glaucoma, macular degeneration, and diabetic retinopathy early.",
      path: "/treatments/comprehensive-exams",
      tags: ["Slit Lamp", "Fundus Exam", "OCT Scan", "Tonometry"],
      highlights: [
        "Anterior & Posterior Segment Evaluation",
        "Digital Fundus Photography",
        "OCT (Optical Coherence Tomography) Scan",
        "Intraocular Pressure (IOP) Check",
        "Corneal Topography Mapping",
        "Early Detection of Retinal Diseases",
      ],
    },
    {
      id: "refraction-testing",
      title: "Refraction & Vision Testing",
      shortDesc:
        "Achieve your perfect visual acuity with our exhaustive refraction testing. We perform detailed Dry and Wet (Cycloplegic) Retinoscopy to accurately determine your exact prescription by relaxing the eye muscles. This ensures the most precise measurements for eyeglasses or contact lenses, specifically crucial for pediatric patients and those with complex refractive errors.",
      path: "/treatments/refraction-testing",
      icon: "flaticon-glasses",
      tags: [
        "Dry Retinoscopy",
        "Wet Retinoscopy",
        "Cycloplegic",
        "Prescription",
      ],
      highlights: [
        "Dry & Wet Retinoscopy",
        "Cycloplegic Refraction for Children",
        "Complex Refractive Error Management",
        "Precise Spectacle & Contact Lens Prescription",
      ],
      // image: "/assets/images/services/img5.webp"
    },
    {
      id: "glaucoma-treatment",
      title: "Glaucoma Treatment & Management",
      shortDesc:
        "Glaucoma is a silent thief of sight often causing irreversible damage before symptoms appear. At Nav Jyoti Eye Hospital, we offer early detection and comprehensive management of all types of glaucoma using advanced tonometry, OCT imaging, and visual field analysis. Our personalised treatment plans — including medicated eye drops, laser therapy (SLT/LTP), and surgical interventions — aim to halt disease progression and preserve your precious vision for life.",
      path: "/treatments/glaucoma-treatment",
      icon: "flaticon-eye-1",
      tags: ["IOP Control", "Laser SLT", "OCT Imaging", "Visual Field"],
      highlights: [
        "Advanced Intraocular Pressure (IOP) Monitoring",
        "Selective Laser Trabeculoplasty (SLT)",
        "Surgical Trabeculectomy",
        "OCT-based Optic Nerve Analysis",
        "Customised Medication Plans",
        "Regular Progression Monitoring",
      ],
    },
    {
      id: "retina-surgery",
      title: "Medical retina services & Vitreoretinal Care",
      shortDesc:
        "The retina is the light-sensitive layer at the back of your eye  your window to the world. Our specialised vitreoretinal services cover the complete spectrum of retinal conditions including Retinal Detachment Repair, Macular Hole Surgery, Diabetic Retinopathy management, and Anti-VEGF injections for wet AMD. Using cutting-edge vitrectomy technology and laser photocoagulation, our surgeons work with exceptional precision to restore and protect your central vision.",
      path: "/treatments/retina-surgery",
      icon: "flaticon-eye",
      tags: [
        "Vitrectomy",
        "Laser Photocoagulation",
        "Anti-VEGF",
        "Diabetic Retina",
      ],
      highlights: [
        "Retinal Detachment Repair",
        "Diabetic Retinopathy Laser Treatment",
        "Anti-VEGF Injections (Lucentis / Avastin)",
        "Macular Hole & Membrane Surgery",
        "Vitreous Haemorrhage Management",
        "Fundus Fluorescein Angiography (FFA)",
      ],
    },
    {
      id: "ocular-oncology",
      title: "Ocular Oncology (Eye Cancer Surgery)",
      shortDesc:
        "We provide advanced surgical care for eye cancers, including tumors of the eyelid, conjunctiva, intraocular structures, and orbit. Our specialized ocular oncology treatments aim to completely remove cancerous tissue while preserving as much vision and eye function as possible, ensuring the best outcomes for our patients.",
      path: "/treatments/ocular-oncology",
      icon: "flaticon-medical",
      tags: [
        "Eye Cancer",
        "Tumor Removal",
        "Oncology",
        "Biopsy",
      ],
      highlights: [
        "Eyelid and Conjunctival Tumor Excision",
        "Intraocular Tumor Management",
        "Orbital Tumor Surgery",
        "Advanced Reconstruction Techniques",
        "Collaborative Care with Oncologists",
        "Preservation of Vision and Aesthetics",
      ],
    },
    {
      id: "eyelid-surgery",
      title: "Eyelid Surgery (Blepharoplasty & Repair)",
      shortDesc:
        "Our specialized eyelid surgery services address both functional and cosmetic concerns. Whether it is removing excess skin that impairs vision (blepharoplasty), correcting drooping eyelids (ptosis), or repairing damage from trauma, our expert surgeons ensure optimal results that enhance both your sight and appearance.",
      path: "/treatments/eyelid-surgery",
      icon: "flaticon-eye-2",
      tags: [
        "Blepharoplasty",
        "Ptosis Repair",
        "Eyelid Repair",
        "Cosmetic",
      ],
      highlights: [
        "Cosmetic & Functional Blepharoplasty",
        "Ptosis (Drooping Eyelid) Correction",
        "Ectropion & Entropion Repair",
        "Eyelid Reconstruction after Trauma",
        "Minimally Invasive Techniques",
        "Natural-looking Results",
      ],
    },
  ],

  // Doctors / Team
  team: [
    {
      id: "dr-rps-warkade",
      name: "Dr. R.P.S. Warkade",
      role: "Lead Doctor & Surgeon",
      qualifications: "MBBS, MS, FICO (Chitrakoot)",
      specialization: "Phaco, Orbit & Oculoplasty Surgeon",
      specializationHindi:
        "चित्रकूट के पूर्व वरिष्ठ नेत्र सर्जन",
      experience: [
        "Visiting consultant , Shankracharya Netralay, Jhoteshwar",
        "Visiting consultant Anushri Nitrala, Jabalpur ",
        "Ex-consultant, SNC Chitrakoot",
        "Ex-consultant, SKEH Basti (U.P.)",
      ],
      registrationNo: "MP10165",
      // image: "/assets/images/team/pic1.webp",
      social: { facebook: "#", twitter: "#", instagram: "#" },
    },
  ],

  // Testimonials

  // FAQs
  faqs: [
    {
      id: "faq-1",
      question: "Where is Nav Jyoti Eye Hospital ",
      answer:
        "Nav Jyoti Eye Hospital  is located at 1637, Mastana Chowk Road, Ranjhi, Bengali Colony, Jabalpur - 482011, Madhya Pradesh, India.",
    },
    {
      id: "faq-2",
      question: "What are the working hours of Nav Jyoti Eye Hospital",
      answer:
        "Nav Jyoti Eye Hospital Dr Rukmendra Pratap Singh Warkade opens at 10 AM on working days. Please confirm closing time directly.",
    },
    {
      id: "faq-3",
      question: "What payment methods does Nav Jyoti Eye Hospital accept?",
      answer:
        "Nav Jyoti Eye Hospital accepts cash as well as CGHS (Central Government Health Scheme) card and Ayushman Bharat card for eligible treatments. Please contact us to confirm your eligibility and coverage details.",
    },
    {
      id: "faq-4",
      question: "Is Nav Jyoti Eye Hospital open on Sunday?",
      answer:
        "Nav Jyoti Eye Hospital is open on working days from 10 AM to 8:30 PM. Sunday is generally a holiday. Please call us to confirm Sunday availability.",
    },
    {
      id: "faq-5",
      question: "Do you perform Ocular Oncology or Eye Cancer Surgeries?",
      answer:
        "Yes, we provide specialized Ocular Oncology services. Our experienced surgeons perform comprehensive surgeries for various eye cancers, including tumors of the eyelid, conjunctiva, orbit, and intraocular structures. We focus on completely removing the tumor while maximizing the preservation of vision and the eye's natural appearance.",
    },
  ],

  // Statistics/Milestones
  stats: [
    { value: "10", suffix: "+", label: "Years of Experience" },
    { value: "1000", suffix: "+", label: "Successful Surgeries" },
    { value: "5000", suffix: "+", label: "Happy Patients" },
  ],

  // Legal Pages
  legalPages: [
    {
      id: "terms-and-conditions",
      title: "Terms and Conditions",
      content:
        "Welcome to Navjyoti Eye Hospital. By using our services, you agree to our terms and conditions. The content of this website is for general information purposes only.",
    },
    {
      id: "privacy-policy",
      title: "Privacy Policy",
      content:
        "Your privacy is critically important to us. At Navjyoti Eye Hospital, we respect your privacy regarding any information we may collect while operating our website.",
    },
  ],

  // Hospitals/Locations
  hospitals: [
    {
      id: "hospital-1",
      name: "Navjyoti Eye Hospital",
      address:
        "Opposite Pal Hospital, Mastana Chowk, Ranjhi, Jabalpur (M.P.) — (पाल अस्पताल के सामने, मस्ताना चौक, रांझी, जबलपुर)",
      phone: "+91 6268875304",
      email: "info@navjyotieyehospital.com",
      image: hospitaImage,
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.0854233450386!2d80.0024431!3d23.203557300000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981afab2540339b%3A0x75ed4da6b501e685!2sNavjyoti%20eye%20care%20Dr%20Rukmendra%20Pratap%20Singh%20Warkade!5e0!3m2!1sen!2sin!4v1786968818526!5m2!1sen!2sin",
    },
  ],
};
