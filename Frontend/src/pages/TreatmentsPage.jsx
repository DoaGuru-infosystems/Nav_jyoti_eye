import { Link } from 'react-router-dom';
import { siteData } from '../data/siteData';
import PageBanner from '../components/shared/PageBanner';
import TestimonialSection from '../components/shared/TestimonialSection';
import FaqSection from '../components/shared/FaqSection';
import bannerImg from '../assets/images/navjyoti/abootus-banner.png';

export default function TreatmentsPage() {
	const treatments = siteData.treatments;

	return (
		<>
			{/* Page Banner */}
			<PageBanner
				title="Our Services"
				breadcrumbText="Our Services"
				bgImage={ bannerImg }
			/>

			{/* Intro */}
			<section className="2xxl:pt-20 md:pt-15 sm:pt-10 pt-8 pb-5 bg-light overflow-hidden">
				<div className="container">
					<div className="text-center wow fadeInUp" data-wow-delay="0.1s" data-wow-duration="0.8s">
						<span className="text-primary font-medium sm:text-xl text-base leading-[1.2] font-sub-title rounded-3xl italic mb-2.5 block">
							What We Offer
						</span>
						<h2 className="2xxl:text-5xxl lg:text-[38px] sm:text-[32px] text-2xxl font-bold capitalize leading-[1.3] mb-4">
							Comprehensive Eye Care Services
						</h2>
						<p className="text-lg font-normal text-secondary max-w-2xl mx-auto">
							At Nav Jyoti Eye Hospital, we offer world-class ophthalmic treatments — from routine eye exams to complex surgeries — all under one roof with compassionate care.
						</p>
					</div>
				</div>
			</section>

			{/* Zig-Zag Services */}
			<section className="bg-light pb-10 overflow-hidden">
				<div className="container">
					{ treatments.map((treatment, index) => {
						const isEven = index % 2 === 0;
						return (
							<div
								key={ treatment.id }
								className={ `row items-center 2xxl:py-20 md:py-15 py-10 ${index !== 0 ? 'border-t border-primary/10' : ''} wow fadeInUp` }
								data-wow-delay={ `${0.1 + (index * 0.1)}s` }
								data-wow-duration="0.9s"
							>
								{/* Number + Visual Side */}
								<div className={ `lg:w-5/12 w-full mb-10 lg:mb-0 ${isEven ? 'lg:order-1' : 'lg:order-2'}` }>
									<div className={ `relative group ${isEven ? 'ltr:lg:mr-8 rtl:lg:ml-8' : 'ltr:lg:ml-8 rtl:lg:mr-8'}` }>

										{/* Main Card */}
										<div className="relative rounded-3xl overflow-hidden shadow-22 border border-primary/10 bg-white">

											{/* Top gradient header */}
											<div className="relative bg-gradient-to-br from-primary to-primary/70 px-8 pt-8 pb-16 overflow-hidden">
												{/* Decorative circles */}
												<div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-white/10 pointer-events-none"></div>
												<div className="absolute top-10 -left-8 w-20 h-20 rounded-full bg-white/8 pointer-events-none"></div>
												<div className="absolute bottom-0 right-10 w-16 h-16 rounded-full bg-white/10 pointer-events-none"></div>

												{/* Service number */}
												<div className="flex items-start justify-between relative z-1">
													<div>
														<span className="block text-white/60 text-xs font-semibold uppercase tracking-widest mb-1">Service</span>
														<span className="block text-white font-black font-title text-6xl leading-none">
															{ String(index + 1).padStart(2, '0') }
														</span>
													</div>
													{/* Icon */}
													<div className="w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/25 flex items-center justify-center shadow-lg">
														<i className="flaticon flaticon-eye text-3xl text-white"></i>
													</div>
												</div>
											</div>

											{/* Floating icon circle — overlaps header and body */}
											<div className="absolute left-8 -translate-y-1/2" style={{ top: 'calc(8rem + 64px)' }}>
												<div className="w-16 h-16 rounded-2xl bg-white shadow-10 border-2 border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary duration-500">
													<i className="feather icon-eye text-2xl text-primary group-hover:text-white duration-500"></i>
												</div>
											</div>

											{/* Card Body */}
											<div className="px-8 pt-12 pb-6">
												<h4 className="text-lg font-bold text-heading mb-4 leading-snug">{ treatment.title }</h4>

												{/* Tags row */}
												{ treatment.tags && (
													<div className="flex flex-wrap gap-2">
														{ treatment.tags.map((tag, i) => (
															<span key={ i } className={ `text-xs font-semibold rounded-full px-3 py-1 ${i === 0 ? 'bg-primary text-white' : 'bg-primary/8 text-primary border border-primary/15'}` }>
																{ tag }
															</span>
														)) }
													</div>
												) }
											</div>

											{/* Bottom stat strip */}
											<div className="grid grid-cols-2 border-t border-primary/10">
												<div className="py-4 px-6 text-center border-r border-primary/10">
													<span className="block text-2xl font-black font-title text-primary leading-none">15+</span>
													<span className="block text-xs text-secondary mt-1 font-medium">Years Exp.</span>
												</div>
												<div className="py-4 px-6 text-center">
													<span className="block text-2xl font-black font-title text-primary leading-none">3K+</span>
													<span className="block text-xs text-secondary mt-1 font-medium">Surgeries</span>
												</div>
											</div>
										</div>

										{/* Decorative dot grid behind card */}
										<div className={ `absolute -z-1 w-40 h-40 opacity-30 pointer-events-none ${isEven ? '-bottom-5 -right-5' : '-bottom-5 -left-5'}` }
											style={{ backgroundImage: 'radial-gradient(circle, #0ea5e9 1.5px, transparent 1.5px)', backgroundSize: '12px 12px' }}>
										</div>
									</div>
								</div>

								{/* Content Side */}
								<div className={ `lg:w-7/12 w-full ${isEven ? 'lg:order-2' : 'lg:order-1'}` }>
									<div className={ `${isEven ? 'ltr:lg:pl-5 rtl:lg:pr-5' : 'ltr:lg:pr-5 rtl:lg:pl-5'}` }>
										{/* Label */}
										<span className="text-primary font-medium sm:text-xl text-base leading-[1.2] font-sub-title italic mb-2.5 block">
											{ isEven ? 'Our Expertise' : 'Advanced Care' }
										</span>

										{/* Title */}
										<h2 className="lg:text-[30px] sm:text-[26px] text-2xl font-bold capitalize leading-[1.3] mb-4">
											{ treatment.title }
										</h2>

										{/* Description */}
										<p className="text-base font-normal text-secondary leading-relaxed mb-6">
											{ treatment.shortDesc }
										</p>

										{/* Highlights */}
										{ treatment.highlights && (
											<div className="mb-7">
												<h3 className="text-base font-semibold text-heading mb-3 pb-2 relative after:absolute after:bottom-0 ltr:after:left-0 rtl:after:right-0 after:w-12 after:h-0.5 after:bg-primary">
													Key Highlights
												</h3>
												<ul className="grid sm:grid-cols-2 grid-cols-1 gap-2">
													{ treatment.highlights.map((point, i) => (
														<li key={ i } className="flex items-start gap-2.5 text-sm text-secondary">
															<span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
																<i className="feather icon-check text-primary text-xs font-bold"></i>
															</span>
															{ point }
														</li>
													)) }
												</ul>
											</div>
										) }

										{/* CTA Buttons */}
										<div className="flex flex-wrap gap-3 items-center">
											<Link
												to="/appointment"
												className="btn btn-primary inline-flex items-center gap-2"
											>
												Book Appointment
												<i className="feather icon-calendar text-base"></i>
											</Link>
										</div>
									</div>
								</div>
							</div>
						);
					}) }
				</div>
			</section>

			{/* CTA Banner */}
			<section className="2xxl:pt-20 md:pt-15 sm:pt-10 pt-10 2xxl:pb-20 md:pb-15 pb-10 bg-primary relative overflow-hidden">
				<div className="absolute top-0 ltr:right-0 rtl:left-0 w-80 h-80 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
				<div className="absolute bottom-0 ltr:left-0 rtl:right-0 w-60 h-60 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
				<div className="container relative z-1">
					<div className="row items-center justify-between">
						<div className="lg:w-2/3 w-full mb-7.5 lg:mb-0 wow fadeInLeft" data-wow-delay="0.2s">
							<span className="text-white/70 font-medium sm:text-xl text-base leading-[1.2] font-sub-title italic mb-2.5 block">Consult Us Today</span>
							<h2 className="2xxl:text-5xxl lg:text-[38px] sm:text-[32px] text-2xxl font-bold capitalize leading-[1.3] text-white mb-3">
								Ready to Restore Your Vision?
							</h2>
							<p className="text-lg text-white/80 font-normal">
								Schedule a consultation with Dr. R.P.S. Warkade and take the first step towards lifelong eye health.
							</p>
						</div>
						<div className="lg:w-auto w-full wow fadeInRight" data-wow-delay="0.4s">
							<Link to="/appointment" className="btn btn-lg bg-white text-primary hover:bg-white/90 duration-200 shadow-xl font-semibold inline-flex items-center gap-2">
								Book Appointment
								<i className="feather icon-arrow-right"></i>
							</Link>
						</div>
					</div>
				</div>
			</section>

			<TestimonialSection />
			<FaqSection />
		</>
	);
}
