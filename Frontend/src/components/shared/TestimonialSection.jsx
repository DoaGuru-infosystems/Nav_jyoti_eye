import { siteData } from '../../data/siteData';

export default function TestimonialSection() {
  return (
				<section className="2xxl:pt-25 2xxl:pb-17.5 md:pt-17.5 md:pb-10 sm:pt-12.5 pt-10 pb-5 relative z-1 overflow-hidden">
			<div className="container">
				<div className="section-head style-14 text-center mb-7.5">
					<span className="text-primary font-medium sm:text-xl text-base leading-[1.2] font-sub-title rounded-3xl italic mb-2.5 block" data-wow-delay="0.2s" data-wow-duration="0.7s">Testimonial</span>
					<h2 className="2xxl:text-5xxl lg:text-[38px] sm:text-[32px] text-2xxl font-bold capitalize leading-[1.3] mb-0 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.7s">Patient Success Stories</h2>
				</div>
				<div className="swiper testimonial-swiper3  wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
					<div className="swiper-wrapper">
                        {siteData.testimonials.map((test, index) => (
						<div key={test.id} className="swiper-slide !p-2.5">
							<div className="flex relative z-1 h-full flex-col justify-center items-center">
								<div className="min-w-20 size-20 lg:rounded-full rounded-xxl sm:rounded-ee-[100px] overflow-hidden">
									<img src={`/assets/images/testimonial/large/img${(index % 3) + 1}.webp`} alt="" className="size-full object-cover" />
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
			</div>
			<div className="absolute animate-move7 top-[9%] ltr:left-[26%] rtl:right-[26%] max-lg:hidden"><img src="/assets/images/avatar/small/avatar1.webp" alt="" className="overflow-hidden rounded-full border-4 border-white shadow-[0px_10px_40px_0px_rgba(74,34,11,0.1)] size-13.75" /></div>
			<div className="absolute animate-move7 top-[25%] ltr:left-[15%] rtl:right-[15%] blur-xs max-lg:hidden"><img src="/assets/images/avatar/small/avatar2.webp" alt="" className="overflow-hidden rounded-full border-4 border-white shadow-[0px_10px_40px_0px_rgba(74,34,11,0.1)] size-13.75" /></div>
			<div className="absolute animate-move7 bottom-[25%] ltr:left-[6%] rtl:right-[6%] max-lg:hidden"><img src="/assets/images/avatar/small/avatar3.webp" alt="" className="overflow-hidden rounded-full border-4 border-white shadow-[0px_10px_40px_0px_rgba(74,34,11,0.1)] size-13.75" /></div>
			<div className="absolute animate-move7 bottom-[10%] ltr:left-[15%] rtl:right-[15%] max-lg:hidden"><img src="/assets/images/avatar/small/avatar4.webp" alt="" className="overflow-hidden rounded-full border-4 border-white shadow-[0px_10px_40px_0px_rgba(74,34,11,0.1)] size-13.75" /></div>
			<div className="absolute animate-move7 top-[9%] ltr:right-[26%] rtl:left-[26%] max-lg:hidden"><img src="/assets/images/avatar/small/avatar1.webp" alt="" className="overflow-hidden rounded-full border-4 border-white shadow-[0px_10px_40px_0px_rgba(74,34,11,0.1)] size-13.75" /></div>
			<div className="absolute animate-move7 top-[25%] ltr:right-[15%] rtl:left-[15%] blur-xs max-lg:hidden"><img src="/assets/images/avatar/small/avatar2.webp" alt="" className="overflow-hidden rounded-full border-4 border-white shadow-[0px_10px_40px_0px_rgba(74,34,11,0.1)] size-13.75" /></div>
			<div className="absolute animate-move7 bottom-[25%] ltr:right-[6%] rtl:left-[6%] max-lg:hidden"><img src="/assets/images/avatar/small/avatar3.webp" alt="" className="overflow-hidden rounded-full border-4 border-white shadow-[0px_10px_40px_0px_rgba(74,34,11,0.1)] size-13.75" /></div>
			<div className="absolute animate-move7 bottom-[10%] ltr:right-[15%] rtl:left-[15%] max-lg:hidden"><img src="/assets/images/avatar/small/avatar4.webp" alt="" className="overflow-hidden rounded-full border-4 border-white shadow-[0px_10px_40px_0px_rgba(74,34,11,0.1)] size-13.75" /></div>
			
			<div className="absolute bottom-0 ltr:left-1/2 rtl:right-1/2 -translate-x-1/2 rtl:translate-x-1/2 -z-1"><img src="/assets/images/background/bg5.webp" alt="" /></div>		
		</section>
  );
}
