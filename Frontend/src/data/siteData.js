// siteData.js - Centralized Data Source

export const siteData = {
  // Global Settings
  branding: {
    name: "Navjyoti Eye Hospital",
    logoAlt: "Navjyoti Eye Hospital logo",
    tagline: "WE CARE FOR YOU",
    slogan: "Care your Eyes - You may not get them again",
    nameHindi: "नवज्योति आई हॉस्पिटल"
  },

  // Contact Information
  contact: {
    primaryPhone: "+91 6268875304",
    secondaryPhone: "+91 6387225002",
    primaryEmail: "info@navjyotieyehospital.com", 
    supportEmail: "support@navjyotieyehospital.com",
    emergencyHelpline: "+91 6268875304",
  },

  // Working Hours
  workingHours: [
    { day: "Mon-Sat", hours: "11:00 AM - 8:30 PM" },
    { day: "Sun", hours: "Closed / रविवार अवकाश" }
  ],

  // Social Links
  socialLinks: [
    { platform: "LinkedIn", url: "https://linkedin.com", icon: "fa-brands fa-linkedin" },
    { platform: "Instagram", url: "https://instagram.com", icon: "fa-brands fa-instagram" },
    { platform: "Facebook", url: "https://facebook.com", icon: "fa-brands fa-facebook-f" },
    { platform: "Twitter", url: "https://x.com", icon: "fa-brands fa-x-twitter" }
  ],

  // Services / Treatments 
  treatments: [
    {
      id: "cataract-surgery",
      title: "Cataract Surgery (Phaco technique)",
      shortDesc: "Advanced Cataract Surgery using the latest Phacoemulsification technique for quick recovery and precise results.",
      path: "/treatments/cataract-surgery",
      // image: "/assets/images/services/img2.webp"
    },
    {
      id: "oculoplasty",
      title: "Orbit & Oculoplasty Surgery",
      shortDesc: "Specialized reconstructive and cosmetic surgeries of the eye, eyelids, and orbit by an expert Oculoplasty Surgeon.",
      path: "/treatments/oculoplasty",
      // image: "/assets/images/services/img3.webp"
    },
    {
      id: "comprehensive-exams",
      title: "Comprehensive Ocular Examinations",
      shortDesc: "Thorough checkups including Lids, Cornea, Fundus, and Retina examinations.",
      path: "/treatments/comprehensive-exams",
      // image: "/assets/images/services/img4.webp"
    },
    {
      id: "refraction-testing",
      title: "Refraction & Vision Testing",
      shortDesc: "Accurate Dry/Wet Retinoscopy and Cycloplegic acceptance testing.",
      path: "/treatments/refraction-testing",
      // image: "/assets/images/services/img5.webp"
    }
  ],

  // Doctors / Team
  team: [
    {
      id: "dr-rps-warkade",
      name: "Dr. R.P.S. Warkade",
      role: "Lead Doctor & Surgeon",
      qualifications: "MBBS, MS, FICO (Chitrakoot)",
      specialization: "Phaco, Orbit & Oculoplasty Surgeon",
      specializationHindi: "चित्रकूट के पूर्व वरिष्ठ नेत्र सर्जन",
      experience: [
        "Ex-consultant, Shankracharya Netralay, Jhoteshwar",
        "Ex-consultant, SNC Chitrakoot",
        "Ex-consultant, SKEH Basti (U.P.)"
      ],
      registrationNo: "MP10165",
      // image: "/assets/images/team/pic1.webp",
      social: { facebook: "#", twitter: "#", instagram: "#" }
    }
  ],

  // Testimonials
  testimonials: [
    {
      id: "test-1",
      name: "Happy Patient",
      title: "Patient",
      text: "Dr. Warkade provided excellent care and my vision is better than ever. Highly recommended!",
      // image: "/assets/images/testimonials/pic1.webp",
      rating: 5
    },
    {
      id: "test-2",
      name: "Satisfied Patient",
      title: "Patient",
      text: "The staff and doctors at Navjyoti Eye Hospital are very professional and caring.",
      // image: "/assets/images/testimonials/pic2.webp",
      rating: 5
    }
  ],

  // FAQs
  faqs: [
    {
      id: "faq-1",
      question: "What are your consultation timings?",
      answer: "We are open Monday to Saturday from 11:00 AM to 8:30 PM. We are closed on Sundays."
    },
    {
      id: "faq-2",
      question: "Where are you located?",
      answer: "We are located Opposite Pal Hospital, Mastana Chowk, Ranjhi, Jabalpur (M.P.)."
    }
  ],
  
  // Statistics/Milestones
  stats: [
    { value: "10", suffix: "+", label: "Years of Experience" },
    { value: "1000", suffix: "+", label: "Successful Surgeries" },
    { value: "5000", suffix: "+", label: "Happy Patients" }
  ],

  // Legal Pages
  legalPages: [
    {
      id: "terms-and-conditions",
      title: "Terms and Conditions",
      content: "Welcome to Navjyoti Eye Hospital. By using our services, you agree to our terms and conditions. The content of this website is for general information purposes only."
    },
    {
      id: "privacy-policy",
      title: "Privacy Policy",
      content: "Your privacy is critically important to us. At Navjyoti Eye Hospital, we respect your privacy regarding any information we may collect while operating our website."
    }
  ],

  // Hospitals/Locations
  hospitals: [
    {
      id: "hospital-1",
      name: "Navjyoti Eye Hospital",
      address: "Opposite Pal Hospital, Mastana Chowk, Ranjhi, Jabalpur (M.P.) — (पाल अस्पताल के सामने, मस्ताना चौक, राँझी, जबलपुर)",
      phone: "+91 6268875304",
      email: "info@navjyotieyehospital.com",
      // image: "/assets/images/map/map1.webp",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14674.340242207137!2d79.9754972!3d23.1488188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981acdfa9b34015%3A0x6b8bc009405dc4a!2sRanjhi%2C%20Jabalpur%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1719221707984!5m2!1sen!2sin"
    }
  ]
};
