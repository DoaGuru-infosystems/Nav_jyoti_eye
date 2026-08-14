export default function ServicesSection() {
  return (
    <section className="2xxl:pt-25 2xxl:pb-17.5 md:pt-17.5 md:pb-10 sm:pt-12.5 pt-10 pb-5 overflow-hidden">
				<div className="container">
					<div className="sm:mb-7.5 mb-5 text-center">
						<span className="text-primary font-medium text-xl leading-[1.2] font-sub-title rounded-3xl italic block wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.7s">Services</span>
						<h2 className="2xxl:text-5xxl lg:text-[38px] sm:text-[32px] text-2xxl font-bold capitalize leading-[1.3] wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.7s">Services We Provide</h2>
					</div>
					<div className="row justify-end">
						<div className="xl:w-2/3 w-full">
							<div className="row relative z-1 wow fadeInUp " data-wow-delay="0.8s">
								<div className="w-full">
									<div className="relative z-1 pb-2.5 border-b border-primary/10 border-t group image-tooltip-effect active" data-url="images/services/img2.webp">
										<div className="flex items-start md:items-center gap-2.5 relative z-1 md:py-10 md:px-5 p-3.75 h-full bg-white duration-200 rounded-2xl mt-2.5 group-hover:bg-light max-md:flex-col">
											<span className="text-2xl me-1.25 font-bold font-title leading-none text-primarylight duration-200 group-hover:text-primary">01</span>
											<h5 className="text-2xl me-12.5 font-bold leading-none md:w-[45%] w-full"><a href="/service-detail">Low Vision Services</a></h5>
											<p className="text-2sm m-auto md:w-[30%] w-full text-secondary">Affordable Glasses and Lenses Deals We understand.</p>
											<a href="/service-detail" className="text-2xl font-medium capitalize size-12.5 block text-primary bg-light text-center leading-13 rounded-2lg group-hover:bg-primary group-hover:text-white"><i className="feather icon-arrow-right"></i></a>
										</div>
									</div>
									<div className="relative z-1 pb-2.5 border-b border-primary/10 group image-tooltip-effect" data-url="images/services/img3.webp">
										<div className="flex items-start md:items-center gap-2.5 relative z-1 md:py-10 md:px-5 p-3.75 h-full bg-white duration-200 rounded-2xl mt-2.5 group-hover:bg-light max-md:flex-col">
											<span className="text-2xl me-1.25 font-bold font-title leading-none text-primarylight duration-200 group-hover:text-primary">02</span>
											<h5 className="text-2xl me-12.5 font-bold leading-none md:w-[45%] w-full"><a href="/service-detail">Pediatric Eye Care</a></h5>
											<p className="text-2sm m-auto md:w-[30%] w-full text-secondary">Affordable Glasses and Lenses Deals We understand.</p>
											<a href="/service-detail" className="text-2xl font-medium capitalize size-12.5 block text-primary bg-light text-center leading-13 rounded-2lg group-hover:bg-primary group-hover:text-white"><i className="feather icon-arrow-right"></i></a>
										</div>
									</div>
									<div className="relative z-1 pb-2.5 border-b border-primary/10 group image-tooltip-effect" data-url="images/services/img4.webp">
										<div className="flex items-start md:items-center gap-2.5 relative z-1 md:py-10 md:px-5 p-3.75 h-full bg-white duration-200 rounded-2xl mt-2.5 group-hover:bg-light max-md:flex-col">
											<span className="text-2xl me-1.25 font-bold font-title leading-none text-primarylight duration-200 group-hover:text-primary">03</span>
											<h5 className="text-2xl me-12.5 font-bold leading-none md:w-[45%] w-full"><a href="/service-detail">Eye Evaluation</a></h5>
											<p className="text-2sm m-auto md:w-[30%] w-full text-secondary">Affordable Glasses and Lenses Deals We understand.</p>
											<a href="/service-detail" className="text-2xl font-medium capitalize size-12.5 block text-primary bg-light text-center leading-13 rounded-2lg group-hover:bg-primary group-hover:text-white"><i className="feather icon-arrow-right"></i></a>
										</div>
									</div>
									<div className="relative z-1 pb-2.5 border-b border-primary/10 group image-tooltip-effect" data-url="images/services/img5.webp">
										<div className="flex items-start md:items-center gap-2.5 relative z-1 md:py-10 md:px-5 p-3.75 h-full bg-white duration-200 rounded-2xl mt-2.5 group-hover:bg-light max-md:flex-col">
											<span className="text-2xl me-1.25 font-bold font-title leading-none text-primarylight duration-200 group-hover:text-primary">04</span>
											<h5 className="text-2xl me-12.5 font-bold leading-none md:w-[45%] w-full"><a href="/service-detail">Long-Term Eye Health</a></h5>
											<p className="text-2sm m-auto md:w-[30%] w-full text-secondary">Affordable Glasses and Lenses Deals We understand.</p>
											<a href="/service-detail" className="text-2xl font-medium capitalize size-12.5 block text-primary bg-light text-center leading-13 rounded-2lg group-hover:bg-primary group-hover:text-white"><i className="feather icon-arrow-right"></i></a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
  );
}
