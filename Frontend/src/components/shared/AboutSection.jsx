import imgAbout1 from "../../assets/images/home/about-1.png";
import imgAbout2 from "../../assets/images/home/about-2.png";

export default function AboutSection({
	archedImage = imgAbout1,
	badgeImage = imgAbout2
}) {
	return (
		<section className="2xxl:pt-25 2xxl:pb-17.5 md:pt-17.5 md:pb-10 sm:pt-12.5 pt-10 pb-5 overflow-hidden bg-light" style={ { backgroundImage: 'url(/assets/images/background/bg7.webp)' } }>
			<div className="container">
				<div className="row content-wrapper style-42 mb-7.5 justify-center">
					<div className="lg:w-1/2 w-full">
						<div className="relative z-1 xl:pe-27.5 sm:pe-12.5 mb-7.5">
							<div className="relative flex max-md:flex-col items-center">
								<img src={ archedImage || "https://images.pexels.com/photos/6749781/pexels-photo-6749781.jpeg?auto=compress&cs=tinysrgb&w=550&h=530&fit=crop" } alt="" className="size-full rounded-t-[400px] object-cover" />
								<img src={ badgeImage || "https://images.pexels.com/photos/8949024/pexels-photo-8949024.jpeg?auto=compress&cs=tinysrgb&w=170&h=170&fit=crop" } alt="" className="xl:size-42.5 w-37.5 h-45 border-[10px] border-white md:absolute md:bottom-0 ltr:md:-right-15 rtl:md:-left-15 max-md:relative max-md:-mt-10 shadow-22 rounded-3xl ltr:max-sm:left-0 rtl:max-sm:right-0 object-cover" />
							</div>
							<div className="absolute z-10 -top-10 max-sm:-top-6 ltr:sm:right-25 ltr:right-0 rtl:sm:left-25 rtl:left-0" data-bottom-top="transform: translateY(-30px)" data-top-bottom="transform: translateY(30px)">
								<a href="#" onClick={ e => e.preventDefault() }>
									<div className="flex items-center justify-center">
										<span className="word-rotate-box light flex justify-center items-center xl:size-45 lg:size-37.5 size-30 max-sm:size-24 bg-transparent rounded-full text-center p-3.75 relative after:absolute after:top-0 ltr:after:left-0 rtl:after:right-0 after:size-full after:-z-1 after:rounded-full after:border-[25px] max-sm:after:border-[15px] after:border-transparent after:backdrop-blur-[17px] after:bg-primary after:drop-shadow-[0px_0px_100px_rgba(0,0,0,0.15)]">
											<span className="relative w-full h-full block animate-[spin_12s_linear_infinite] text-white">
												{ "#1 AWARD WINNING EYE CARE CENTER   ".split("").map((char, i, arr) => (
													<span
														key={ i }
														className="absolute left-1/2 top-0 origin-bottom xl:text-[13px] lg:text-[11px] text-[10px] font-semibold uppercase"
														style={ {
															height: '50%',
															transform: `translateX(-50%) rotate(${i * (360 / arr.length)}deg)`,
														} }
													>
														{ char }
													</span>
												)) }
											</span>
										</span>
										<i className="icon feather icon-arrow-up-right block text-white xl:text-3xl lg:text-2xl text-xl absolute z-1"></i>
									</div>
								</a>
							</div>
						</div>
					</div>
					<div className="lg:w-1/2 w-full">
						<div className="sm:mb-7.5 mb-5 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
							<span className="text-primary font-medium sm:text-xl text-base leading-[1.2] font-sub-title rounded-3xl italic mb-2.5 block">About us</span>
							<h2 className="2xxl:text-5xxl lg:text-[38px] sm:text-[32px] text-2xxl font-bold capitalize leading-[1.3]">We care more than just your eyes</h2>
							<p className="text-lg font-normal text-secondary">Eye care center treatments are specialized services aimed at improving and maintaining eye health.</p>
						</div>
						<div className="row mb-2.5">
							<div className="sm:w-1/3 w-1/2 max-[375px]:w-full wow fadeInRight" data-wow-delay="0.6s" data-wow-duration="0.8s">
								<div className="mb-7.5 text-center">
									<span className="lg:text-6xl sm:text-3xxl text-3xl font-bold leading-[1.2] text-primary font-title"><span className="value" data-value="20">15</span>+</span>
									<h3 className="lg:text-base sm:text-2sm text-sm font-normal font-base mb-0">Years of service</h3>
								</div>
							</div>
							<div className="sm:w-1/3 w-1/2 max-[375px]:w-full wow fadeInRight" data-wow-delay="0.8s" data-wow-duration="0.8s">
								<div className="mb-7.5 text-center">
									<span className="lg:text-6xl sm:text-3xxl text-3xl font-bold leading-[1.2] text-primary font-title"><span className="value" data-value="14">35000</span>+</span>
									<h3 className="lg:text-base sm:text-2sm text-sm font-normal font-base mb-0 ">Surgeries </h3>
								</div>
							</div>
							<div className="sm:w-1/3 w-1/2 max-[375px]:w-full wow fadeInRight" data-wow-delay="1.0s" data-wow-duration="0.8s">
								<div className="mb-7.5 text-center">
									<span className="lg:text-6xl sm:text-3xxl text-3xl font-bold leading-[1.2] text-primary font-title"><span className="value" data-value="28">5</span>+</span>
									<h3 className="lg:text-base sm:text-2sm text-sm font-normal font-base mb-0">Services</h3>
								</div>
							</div>
						</div>
						<a href="/about-us" className="btn btn-primary me-7.5 mb-4 sm:mb-0">
							Read More
							<i className="feather icon-arrow-right"></i>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
