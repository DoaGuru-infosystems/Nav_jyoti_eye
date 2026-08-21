import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/shared/AboutSection';
import ServicesSection from '../components/home/ServicesSection';
import AppointmentCTASection from '../components/home/AppointmentCTASection';
import TeamSection from '../components/shared/TeamSection';
import FaqSection from '../components/shared/FaqSection';
import EyeDonationPledgeSection from '../components/home/EyeDonationPledgeSection';
import WhyChooseUsSection from '../components/shared/WhyChooseUsSection';
import TestimonialSection from '../components/shared/TestimonialSection';

export default function HomePage() {
	return (
		<>
			<div className="page-content bg-white">
				<HeroSection />
				<AboutSection />
				<ServicesSection />
				<AppointmentCTASection />

				<FaqSection />
				{/* <EyeDonationPledgeSection /> */}
				<WhyChooseUsSection />
				<TestimonialSection />
			</div>
		</>
	);
}
