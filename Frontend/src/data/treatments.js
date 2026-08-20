import cataractBannerImg from "../assets/images/navjyoti/CataractSurgeryBanner.png";
import OculoplastyBanner from "../assets/images/navjyoti/OculoplastyBanner.png";
import premiumCareImg from "../assets/images/navjyoti/PremiumCare.png";
import OculoplastycooontentImage from "../assets/images/navjyoti/OculoplastycooontentImage.png";

export const treatmentsData = {
  "cataract-surgery": {
    title: "Cataract Surgery",
    description:
      "Advanced cataract surgery procedures to restore your vision with precision and care. Our state-of-the-art facilities ensure the best outcomes for our patients.",
    longDescription:
      "Cataract surgery is a safe and effective procedure to remove the clouded lens of your eye and replace it with a clear artificial lens. We use the latest phacoemulsification technology and premium intraocular lenses (IOLs) to give you the best possible vision post-surgery. Our team of experienced surgeons has performed thousands of successful surgeries.",
    bannerImg: cataractBannerImg,
    contentImg: premiumCareImg,
    features: [
      "Painless Procedure",
      "Quick Recovery Time",
      "Premium IOL Options",
      "State-of-the-art Technology",
      "Experienced Surgeons",
      "Comprehensive Post-op Care",
    ],
    benefits: [
      "Improved Visual Acuity",
      "Reduced Dependence on Glasses",
      "Enhanced Color Perception",
      "Better Night Vision",
    ],
  },
  oculoplasty: {
    title: "Oculoplasty",
    description:
      "Specialized oculoplastic surgery to improve the function and appearance of your eyes and surrounding facial structures.",
    longDescription:
      "Oculoplasty encompasses a variety of procedures that deal with the orbit (eye socket), eyelids, tear ducts, and the face. It includes reconstructive and cosmetic surgeries to correct drooping eyelids (ptosis), eyelid malpositions, and tearing problems, as well as aesthetic enhancements. Our specialists are dedicated to providing both functional improvement and aesthetic harmony.",
    bannerImg: OculoplastyBanner,
    contentImg: OculoplastycooontentImage,
    features: [
      "Ptosis Correction",
      "Eyelid Reconstruction",
      "Tear Duct Surgery",
      "Cosmetic Eyelid Surgery (Blepharoplasty)",
      "Orbital Tumor Management",
      "Botox and Fillers",
    ],
    benefits: [
      "Improved Eyelid Function",
      "Restored Facial Symmetry",
      "Enhanced Appearance",
      "Relief from Tearing",
    ],
  },
};
