// siteData.js - Centralized Data Source

import hospitaImage from "../assets/images/navjyoti/hospita.png";
export const siteData = {
  // Global Settings
  branding: {
    name: "Navjyoti Eye Hospital",
    logoAlt: "Navjyoti Eye Hospital logo",
    tagline: "WE CARE FOR YOU",
    slogan: "Care your Eyes - You may not get them again",
    nameHindi: "नवज्योति आई हॉस्पिटल",
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
    { day: "Sun", hours: "Closed / रविवार अवकाश" },
  ],

  // Social Links
  socialLinks: [
    {
      platform: "LinkedIn",
      url: "https://linkedin.com",
      icon: "fa-brands fa-linkedin",
    },
    {
      platform: "Instagram",
      url: "https://instagram.com",
      icon: "fa-brands fa-instagram",
    },
    {
      platform: "Facebook",
      url: "https://facebook.com",
      icon: "fa-brands fa-facebook-f",
    },
    {
      platform: "Twitter",
      url: "https://x.com",
      icon: "fa-brands fa-x-twitter",
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
      // image: "/assets/images/services/img2.webp"
    },
    {
      id: "oculoplasty",
      title: "Orbit & Oculoplasty Surgery",
      shortDesc:
        "Our specialized Orbit & Oculoplasty services address both cosmetic and reconstructive needs of the eyes, eyelids, tear ducts, and surrounding facial structures. Whether treating droopy eyelids (ptosis), orbital tumors, or trauma reconstruction, our expert surgical interventions restore both optimal function and aesthetic appearance with utmost precision.",
      path: "/treatments/oculoplasty",
      // image: "/assets/images/services/img3.webp"
    },
    {
      id: "comprehensive-exams",
      title: "Comprehensive Ocular Examinations",
      shortDesc:
        "Prevention and early detection are key to lifelong eye health. Our comprehensive evaluations go beyond standard vision tests to thoroughly assess the anterior and posterior segments of your eye. We meticulously examine the eyelids, cornea, fundus, and retina using advanced diagnostic imaging to detect conditions like glaucoma, macular degeneration, and diabetic retinopathy early.",
      path: "/treatments/comprehensive-exams",
      // image: "/assets/images/services/img4.webp"
    },
    {
      id: "refraction-testing",
      title: "Refraction & Vision Testing",
      shortDesc:
        "Achieve your perfect visual acuity with our exhaustive refraction testing. We perform detailed Dry and Wet (Cycloplegic) Retinoscopy to accurately determine your exact prescription by relaxing the eye muscles. This ensures the most precise measurements for eyeglasses or contact lenses, specifically crucial for pediatric patients and those with complex refractive errors.",
      path: "/treatments/refraction-testing",
      // image: "/assets/images/services/img5.webp"
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
      specializationHindi: "चित्रकूट के पूर्व वरिष्ठ नेत्र सर्जन",
      experience: [
        "Ex-consultant, Shankracharya Netralay, Jhoteshwar",
        "Ex-consultant, SNC Chitrakoot",
        "Ex-consultant, SKEH Basti (U.P.)",
      ],
      registrationNo: "MP10165",
      // image: "/assets/images/team/pic1.webp",
      social: { facebook: "#", twitter: "#", instagram: "#" },
    },
  ],

  // Testimonials
  testimonials: [
    {
      id: "test-1",
      name: "Vipul Sharma",
      title: "Patient",
      text: "Nav Jyoti Eye care is going to be a big benefit for the residents of Ranjhi, Khamaria, VFJ and adjoining areas. The clinic is well equipped with latest machineries. Dr. Warkade is highly experienced doctor and his team including optometrist Mr. Ajay and others are qualified and skilled. They are also well behaved and gentle. I recommend everyone for any type eye problems.",
      rating: 5,
    },
    {
      id: "test-2",
      name: "Preeti Chaturvedi",
      title: "Patient",
      text: "Swabhavata is very polite. He patiently listens to patients' concerns and resolves them. The clinic is located on a flat surface, so elderly patients will have no trouble seeing him.",
      rating: 5,
    },
    {
      id: "test-3",
      name: "lakshman Singh dhurve",
      title: "Patient",
      text: "Excellent work nd best hospital for eye and staff behaviour was too kind and good",
      rating: 5,
    },
    {
      id: "test-4",
      name: "Sangeeta Warkade",
      title: "Patient",
      text: "The hospital is very nice and the behaviour of staff is also nice and Dr. Rukmendra sir is also very sweet and they also take care of hygiene as well 😊",
      rating: 5,
    },
    {
      id: "test-5",
      name: "Abhilasha Pardhan",
      title: "Patient",
      text: "Very good and satisfactory experience,,,,Dr and staff behaviour well and Drs treatment is very well about eye care thanku so much sir and all staff,,,,,,,,",
      rating: 5,
    },
    {
      id: "test-6",
      name: "Rajni Choudhary",
      title: "Patient",
      text: "Best Hospital & Good behaviour all staff of Navjyoti eye care",
      rating: 5,
    },
    {
      id: "test-7",
      name: "saurav banerjee",
      title: "Patient",
      text: "Experienced with more than 3000 opthalmic operations have wonderful results to make clear visions...",
      rating: 5,
    },
    {
      id: "test-8",
      name: "Pradeep Kumar Kachhi",
      title: "Patient",
      text: "Very good treatment for eye 👁️",
      rating: 5,
    },
  ],

  // FAQs
  faqs: [
    {
      id: "faq-1",
      question:
        "Where is Navjyoti Eye Care Dr Rukmendra Pratap Singh Warkade located?",
      answer:
        "Navjyoti Eye Care Dr Rukmendra Pratap Singh Warkade is located at 1637, Mastana Chowk Road, Ranjhi, Bengali Colony, Jabalpur - 482011, Madhya Pradesh, India.",
    },
    {
      id: "faq-2",
      question:
        "What are the working hours of Navjyoti Eye Care Dr Rukmendra Pratap Singh Warkade?",
      answer:
        "Navjyoti Eye Care Dr Rukmendra Pratap Singh Warkade opens at 10 AM on working days. Please confirm closing time directly.",
    },
    {
      id: "faq-3",
      question:
        "What payment methods does Navjyoti Eye Care Dr Rukmendra Pratap Singh Warkade accept?",
      answer:
        "Navjyoti Eye Care Dr Rukmendra Pratap Singh Warkade accepts cash. Please confirm other payment options directly.",
    },
    {
      id: "faq-4",
      question:
        "Is Navjyoti Eye Care Dr Rukmendra Pratap Singh Warkade open on Sunday?",
      answer:
        "Navjyoti Eye Care Dr Rukmendra Pratap Singh Warkade is listed as open on working days from 10 AM. Please call to confirm Sunday availability.",
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
        "Opposite Pal Hospital, Mastana Chowk, Ranjhi, Jabalpur (M.P.) — (पाल अस्पताल के सामने, मस्ताना चौक, राँझी, जबलपुर)",
      phone: "+91 6268875304",
      email: "info@navjyotieyehospital.com",
      image: hospitaImage,
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.0854233450386!2d80.0024431!3d23.203557300000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981afab2540339b%3A0x75ed4da6b501e685!2sNavjyoti%20eye%20care%20Dr%20Rukmendra%20Pratap%20Singh%20Warkade!5e0!3m2!1sen!2sin!4v1786968818526!5m2!1sen!2sin",
    },
  ],
};
