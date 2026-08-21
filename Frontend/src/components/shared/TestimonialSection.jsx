import { useEffect } from 'react';
import { siteData } from '../../data/siteData';

export default function TestimonialSection() {
	const widgetId = import.meta.env.VITE_SOCIABLEKIT_WIDGET_ID || '25707184';



	return (
		<section className="2xxl:py-20 md:py-16 sm:py-12 py-10 relative z-1 overflow-hidden">
			<div className="container">
				<div className="section-head style-14 text-center mb-7.5">
					<span className="text-primary font-medium sm:text-xl text-base leading-[1.2] font-sub-title rounded-3xl italic mb-2.5 block" data-wow-delay="0.2s" data-wow-duration="0.7s">Testimonial</span>
					<h2 className="2xxl:text-5xxl lg:text-[38px] sm:text-[32px] text-2xxl font-bold capitalize leading-[1.3] mb-0 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.7s">Patient Success Stories</h2>
				</div>
				{/* 
					NOTE: The existing manual testimonials slider has been preserved here. 
					It is currently commented out to allow the SociableKIT Google Reviews widget to render in its place.
				*/}
				{/*
				<div className="swiper testimonial-swiper3  wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
					<div className="swiper-wrapper">
                        {siteData.testimonials.map((test, index) => (
						<div key={test.id} className="swiper-slide !p-2.5">
							<div className="flex relative z-1 h-full flex-col justify-center items-center">
								<div className="min-w-20 size-20 lg:rounded-full rounded-xxl sm:rounded-ee-[100px] overflow-hidden bg-primary/10 flex items-center justify-center text-primary text-3xl font-bold uppercase shadow-sm border border-primary/20">
									{test.name ? test.name.charAt(0) : ''}
								</div>
								<div className="lg:p-7.5 lg:pt-5.5 lg:pe-12.5 md:pt-10 md:pe-7.5 md:pb-5 pb-3.75 flex flex-col items-start justify-start relative z-1 w-full rounded-xxl">
									<div className="lg:mb-8.75 mb-5">
										<div className="relative z-1">
											<p className="leading-[1.7] xl:text-[22px] lg:text-lg md:text-base text-2sm text-secondary text-center w-4/5 m-auto max-lg:mt-5 max-md:mt-2.5!">{test.text}</p>
										</div>
									</div>
									<div className="m-auto">
										<div className="flex items-center sm:gap-3 gap-1.25 justify-center mb-5">
											<h5 className="text-xl">{test.name},</h5>
											<span className="text-lg">{test.title}</span>
										</div>
									</div>
								</div>
							</div>
						</div>
                        ))}
					</div>
					<div className="testimonial-pagination-swiper3 swiper-pagination style-3"></div>
				</div>
				*/}

				{/* SociableKIT Google Reviews Widget */ }
				<div className="sociablekit-container wow fadeInUp min-h-[300px]" data-wow-delay="0.4s" data-wow-duration="0.8s">
					<iframe src={ `https://widgets.sociablekit.com/google-reviews/iframe/${widgetId}` } frameBorder="0" width="100%" height="550px"></iframe>
				</div>
			</div>
			<div className="absolute animate-move7 top-[9%] ltr:left-[26%] rtl:right-[26%] max-lg:hidden"><div className="overflow-hidden rounded-full bg-primary/20 backdrop-blur-sm border border-white/50 mix-blend-multiply shadow-[0px_10px_40px_0px_rgba(74,34,11,0.1)] size-12 animate-[pulse_3s_ease-in-out_infinite]"></div></div>
			<div className="absolute animate-move7 top-[25%] ltr:left-[15%] rtl:right-[15%] blur-xs max-lg:hidden"><div className="overflow-hidden rounded-full bg-secondary/20 backdrop-blur-sm border border-white/50 mix-blend-multiply shadow-[0px_10px_40px_0px_rgba(74,34,11,0.1)] size-16 animate-[pulse_4s_ease-in-out_infinite]"></div></div>
			<div className="absolute animate-move7 bottom-[25%] ltr:left-[6%] rtl:right-[6%] max-lg:hidden"><div className="overflow-hidden rounded-full bg-[#185A7E]/20 backdrop-blur-sm border border-white/50 mix-blend-multiply shadow-[0px_10px_40px_0px_rgba(74,34,11,0.1)] size-10 animate-[pulse_2.5s_ease-in-out_infinite]"></div></div>
			<div className="absolute animate-move7 bottom-[10%] ltr:left-[15%] rtl:right-[15%] max-lg:hidden"><div className="overflow-hidden rounded-full bg-primary/20 backdrop-blur-sm border border-white/50 mix-blend-multiply shadow-[0px_10px_40px_0px_rgba(74,34,11,0.1)] size-14 animate-[pulse_3.5s_ease-in-out_infinite]"></div></div>
			<div className="absolute animate-move7 top-[9%] ltr:right-[26%] rtl:left-[26%] max-lg:hidden"><div className="overflow-hidden rounded-full bg-[#185A7E]/20 backdrop-blur-sm border border-white/50 mix-blend-multiply shadow-[0px_10px_40px_0px_rgba(74,34,11,0.1)] size-14 animate-[pulse_3.5s_ease-in-out_infinite]"></div></div>
			<div className="absolute animate-move7 top-[25%] ltr:right-[15%] rtl:left-[15%] blur-xs max-lg:hidden"><div className="overflow-hidden rounded-full bg-primary/20 backdrop-blur-sm border border-white/50 mix-blend-multiply shadow-[0px_10px_40px_0px_rgba(74,34,11,0.1)] size-10 animate-[pulse_2s_ease-in-out_infinite]"></div></div>
			<div className="absolute animate-move7 bottom-[25%] ltr:right-[6%] rtl:left-[6%] max-lg:hidden"><div className="overflow-hidden rounded-full bg-secondary/20 backdrop-blur-sm border border-white/50 mix-blend-multiply shadow-[0px_10px_40px_0px_rgba(74,34,11,0.1)] size-16 animate-[pulse_4s_ease-in-out_infinite]"></div></div>
			<div className="absolute animate-move7 bottom-[10%] ltr:right-[15%] rtl:left-[15%] max-lg:hidden"><div className="overflow-hidden rounded-full bg-primary/20 backdrop-blur-sm border border-white/50 mix-blend-multiply shadow-[0px_10px_40px_0px_rgba(74,34,11,0.1)] size-12 animate-[pulse_3s_ease-in-out_infinite]"></div></div>

			<div className="absolute bottom-0 ltr:left-1/2 rtl:right-1/2 -translate-x-1/2 rtl:translate-x-1/2 -z-1"><img src="/assets/images/background/bg5.webp" alt="" /></div>
		</section>
	);
}
