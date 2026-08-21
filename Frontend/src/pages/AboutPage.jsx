import { Link } from 'react-router-dom';
import AboutSection from '../components/shared/AboutSection';
import TeamSection from '../components/shared/TeamSection';
import TestimonialSection from '../components/shared/TestimonialSection';
import { siteData } from '../data/siteData';
import bannerImg from '../assets/images/navjyoti/abootus-banner.png';
import imgDoctor from '../assets/images/home/doctor.png';
import weCareImg from '../assets/images/navjyoti/We-Care.png';

export default function AboutPage() {
	const aboutImg6 = ""; 
	const aboutImg10 = ""; 
	const aboutImg11 = ""; 
	const aboutArchedImage = ""; 
	const aboutBadgeImage = ""; 

	const doctor = siteData.team[0];

	return (
		<>
			<div className="2xxl:min-h-125 lg:min-h-112.5 md:min-h-full sm:min-h-87.5 min-h-75 bg-cover bg-center bg-light relative z-1 w-full overflow-hidden pb-7.5 before:absolute ltr:before:left-0 rtl:before:right-0 before:top-0 before:size-full before:bg-primary before:opacity-70" style={ { backgroundImage: `url(${bannerImg})` } }>
				<div className="container relative z-1 h-full table">
					<div className="table-cell 2xxl:h-125 lg:h-112.5 md:h-95 sm:h-87.5 h-75 align-middle pt-22.5 pb-5 text-center">
						<h1 className="2xxl:text-8xl xl:text-6xxl md:text-[48px] text-[32px] font-semibold mb-3.75 break-word text-white wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">About Us</h1>
						<nav className="wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
							<ul className="inline-block rounded-5xl lg:py-2.5 py-1.5 lg:px-7.5 px-5 bg-white shadow-breadcrumb">
								<li className="inline-block lg:text-base text-sm font-normal capitalize text-heading"><a href="/" className="text-primary">Home</a></li>
								<li className="inline-block lg:text-base text-sm font-normal capitalize text-heading ps-2 relative before:content-['\f101'] before:float-start before:text-heading before:font-bold before:font-['Font_Awesome_5_Free'] before:text-sm before:pe-3 before:top-0.5 before:relative">About Us</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>

			<AboutSection />

			<section className="2xxl:pt-25 md:pt-17.5 sm:pt-12.5 pt-10 relative z-1 bg-white" style={ { backgroundImage: 'url(/assets/images/background/bg7.webp)' } }>
				<div className="container">
					<div className="row content-wrapper style-43 items-center justify-center">
						<div className="xl:w-1/2 w-full mb-7.5">
							<div className="2xxl:mb-17.5 sm:mb-10">
								<div className="sm:mb-7.5 mb-5">
									<span className="text-primary font-medium sm:text-xl text-base leading-[1.2] font-sub-title rounded-3xl italic mb-2.5 block wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">Lead Surgeon</span>
									<h2 className="2xxl:text-5xxl lg:text-[38px] sm:text-[32px] text-2xxl font-bold capitalize leading-[1.3] wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">{doctor.name}</h2>
									<p className="text-lg font-normal text-secondary wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.8s"><strong className="text-secondary fw-semibold">{doctor.name}</strong> is a highly experienced {doctor.specialization}. He is dedicated to providing advanced eye care services and holds prestigious qualifications including {doctor.qualifications}.</p>
								</div>
								<h3 className="text-xl font-semibold pb-2.5 relative mb-3 !text-primary after:absolute after:bottom-0 ltr:after:left-0 rtl:after:right-0 ltr:after:right-0 rtl:after:left-0 after:h-px after:bg-size-[10px_1px] after:bg-repeat-x after:bg-linear-(--title-gradient) wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="0.8s">Past Experience & Credentials</h3>
								<ul className="flex flex-col gap-2 text-secondary font-medium mb-8.75 wow fadeInUp" data-wow-delay="1.0s" data-wow-duration="0.8s">
                                    {doctor.experience.map((exp, idx) => (
									    <li key={idx} className="w-full relative lg:p-1.25 p-1 lg:ps-7.5 ps-6.25 xl:text-base text-2sm before:absolute ltr:before:left-0 rtl:before:right-0 before:font-black before:content-['\f109'] before:font-['flaticon'] before:text-primary before:top-2">{exp}</li>
                                    ))}
                                    <li className="w-full relative lg:p-1.25 p-1 lg:ps-7.5 ps-6.25 xl:text-base text-2sm before:absolute ltr:before:left-0 rtl:before:right-0 before:font-black before:content-['\f109'] before:font-['flaticon'] before:text-primary before:top-2">Medical Council Registration No: {doctor.registrationNo}</li>
								</ul>
								<div className="row items-center wow fadeInUp [--tw-gutter-y:1.5rem]!" data-wow-delay="1.2s" data-wow-duration="0.8s">
									<div className="sm:w-1/2 w-full flex">
										<div className="text-center">
											<span className="text-lg font-bold block text-primary">{doctor.name}</span>
											<span className="text-sm block text-secondary">{doctor.qualifications}</span>
										</div>
									</div>
									<div className="sm:w-1/2 w-full">
										<a href="/appointment" className="btn btn-lg btn-icon btn-primary">
											Book Appointment
											<i className="feather icon-arrow-right ms-1"></i>
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="xl:w-1/2 lg:w-2/3 w-full">
							<div className="relative z-1 after:absolute after:top-0 ltr:after:left-0 rtl:after:right-0 after:size-full after:bg-no-repeat after:bg-bottom after:bg-content-media">
								<div className="relative z-1 md:px-16 px-7.5">
									<img src={imgDoctor || "https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=475&h=745&fit=crop"} alt={doctor.name} className="w-full rounded-3xl" />
								</div>
								<div className="absolute sm:bottom-37.5 bottom-15 ltr:lg:-left-15 rtl:lg:-right-15 ltr:left-0 rtl:right-0 z-99 max-sm:hidden">
									<div className="inline-flex items-center gap-3.75 bg-white/90 sm:rounded-xxl rounded-lg py-3 px-5 backdrop-blur-xs shadow-info-widget-10 animate-move3">
										<span className="xl:text-5xxl text-3xxl font-bold text-primary"><span className="value counted" data-value="10">10</span>+</span>
										<span className="sm:text-lg text-base text-justify text-secondary font-semibold block font-title">Years of<br/>Experience</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="2xxl:pt-25 md:pt-17.5 sm:pt-12.5 pt-10 bg-primary bg-blend-luminosity bg-fixed bg-no-repeat bg-position-[right_center] bg-cover relative z-1 after:absolute after:bg-white after:w-full after:-z-1 after:bottom-0 after:h-50" style={ { backgroundImage: 'url(/assets/images/background/bg8.webp)' } }>
				<div className="container">
					<div className="row items-center">
						<div className="lg:w-7/12 w-full">
							<div className="sm:mb-7.5 mb-5 text-white xl:me-6 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
								<h2 className="2xxl:text-5xxl lg:text-[38px] sm:text-[32px] text-2xxl font-bold capitalize leading-[1.3] text-white">We Care About Your Eye Health</h2>
								<div className="flex gap-1.5 items-center text-secondary text-sm font-medium mb-7.5">
									<ul className="flex gap-0.75">
										<li className="text-yellow-400 text-2sm leading-[1.2]"><i className="fa fa-star"></i></li>
										<li className="text-yellow-400 text-2sm leading-[1.2]"><i className="fa fa-star"></i></li>
										<li className="text-yellow-400 text-2sm leading-[1.2]"><i className="fa fa-star"></i></li>
										<li className="text-yellow-400 text-2sm leading-[1.2]"><i className="fa fa-star"></i></li>
										<li className="text-yellow-400 text-2sm leading-[1.2]"><i className="fa fa-star"></i></li>
									</ul>
									<span className="font-bold text-white me-2">(4.9)</span>
									<span className="text-sm font-medium text-white">500+ happy patients</span>
								</div>
								<p className="text-lg font-medium leading-[1.6] text-white">At Navjyoti Eye Hospital, we specialize in providing state-of-the-art ophthalmic care including advanced Cataract surgeries and Orbit & Oculoplasty treatments.</p>
								<p className="text-lg font-light leading-[1.6] text-white">Our mission is to bring back the light into our patients' lives through meticulous care and precise surgical interventions. Because we believe, "Care your Eyes - You may not get them again".</p>
							
							</div>
						</div>
						<div className="lg:w-5/12 w-full mb-7.5 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
							<div className="relative overflow-hidden xl:h-125 sm:h-50 h-62.5 sm:rounded-3xl rounded-xxl">
								<img src={weCareImg || "https://images.pexels.com/photos/6749698/pexels-photo-6749698.jpeg?auto=compress&cs=tinysrgb&w=530&h=520&fit=crop"} alt="" className="size-full object-cover" />
							</div>
						</div>
					</div>
					<div className="row box-hover-wrapper pt-15">
						<div className="lg:w-1/2 w-full mb-7.5 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
							<div className="2xxl:p-15 md:p-10 sm:p-7.5 p-6.25 rounded-2xl bg-white duration-200 shadow-7 box-hover [.box-hover.active]:bg-primary">
								<h3 className="2xxl:text-4xxl md:text-3xxl sm:text-3xl text-2xl font-bold duration-200 [.box-hover.active_&]:text-white">Our Mission</h3>
								<p className="mb-0 duration-200 [.box-hover.active_&]:text-white">To deliver the highest standard of eye care using modern technology, expert surgical skills, and compassionate patient care, ensuring a better quality of life for all our patients.</p>
							</div>
						</div>
						<div className="lg:w-1/2 w-full mb-7.5 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
							<div className="2xxl:p-15 md:p-10 sm:p-7.5 p-6.25 rounded-2xl bg-white duration-200 shadow-7 box-hover [.box-hover.active]:bg-primary active">
								<h3 className="2xxl:text-4xxl md:text-3xxl sm:text-3xl text-2xl font-bold duration-200 [.box-hover.active_&]:text-white">Our Vision</h3>
								<p className="mb-0 duration-200 [.box-hover.active_&]:text-white">To be recognized as a premier center of excellence in ophthalmology, continually advancing our medical practices and providing affordable, world-class eye treatments.</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* <TeamSection /> */}

			<TestimonialSection />

		</>
	);
}


