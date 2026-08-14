export default function FaqSection({ className = '' }) {
  return (
    <section className={`lg:pt-17.5 pt-12.5 overflow-hidden ${className}`}>
			<div className="container">
				<div className="row items-end">
					<div className="xl:w-1/2 w-full xl:order-1 order-2">
						<div className="relative">
							<div className="relative z-1 2xl:-ms-25 max-md:px-7.5">
								<img src="/assets/images/about/img2.webp" alt="" className="rtl:rotate-y-180" />
							</div>
						</div>
					</div>
					<div className="xl:w-1/2 w-full mb-7.5 self-center xl:order-2 order-1">
						<div className="content-info right">
							<div className="wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
								<h2 className="2xxl:text-5xxl lg:text-[38px] sm:text-[32px] text-2xxl font-bold capitalize leading-[1.3]">Frequently Asked Questions</h2>
							</div>
							<div className="myAccordion style-3 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s" id="accordionExample">
								<div className="accordion-item">
									<h2 className="accordion-header font-base md:!text-[22px] open">
										<button className="accordion-button" type="button">
											How much do you charge for pedicure ?
										</button>
										<span className="arrow active">
											<i className="icon feather icon-chevron-right size-7.5 leading-7.5! text-center rounded-lg bg-primary/10 text-primary [.arrow.active_&]:bg-primary [.arrow.active_&]:text-white [.arrow.active_&]:hidden block"></i>
                                            <i className="icon feather icon-chevron-down size-7.5 leading-7.5! text-center rounded-lg bg-primary/10 text-primary [.arrow.active_&]:bg-primary [.arrow.active_&]:text-white [.arrow.active_&]:block hidden"></i>
										</span>
									</h2>
									<div className="accordion-content show">
										<div className="content-inner">
											<p className="md:text-lg mb-0">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its. The point of using Lorem Ipsum is that it has a more-or-less normal distribution</p>
										</div>
									</div>
								</div>
								<div className="accordion-item">
									<h2 className="accordion-header font-base md:!text-[22px]">
										<button className="accordion-button" type="button">
											What types of treatments do you offer?
										</button>
										<span className="arrow">
											<i className="icon feather icon-chevron-right size-7.5 leading-7.5! text-center rounded-lg bg-primary/10 text-primary [.arrow.active_&]:bg-primary [.arrow.active_&]:text-white [.arrow.active_&]:hidden block"></i>
                                            <i className="icon feather icon-chevron-down size-7.5 leading-7.5! text-center rounded-lg bg-primary/10 text-primary [.arrow.active_&]:bg-primary [.arrow.active_&]:text-white [.arrow.active_&]:block hidden"></i>
										</span>
									</h2>
									<div className="accordion-content">
										<div className="content-inner">
											<p className="md:text-lg mb-0">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its. The point of using Lorem Ipsum is that it has a more-or-less normal distribution</p>
										</div>
									</div>
								</div>
								<div className="accordion-item">
									<h2 className="accordion-header font-base md:!text-[22px]">
										<button className="accordion-button" type="button">
											How do i book my appointment ?
										</button>
										<span className="arrow">
											<i className="icon feather icon-chevron-right size-7.5 leading-7.5! text-center rounded-lg bg-primary/10 text-primary [.arrow.active_&]:bg-primary [.arrow.active_&]:text-white [.arrow.active_&]:hidden block"></i>
                                            <i className="icon feather icon-chevron-down size-7.5 leading-7.5! text-center rounded-lg bg-primary/10 text-primary [.arrow.active_&]:bg-primary [.arrow.active_&]:text-white [.arrow.active_&]:block hidden"></i>
										</span>
									</h2>
									<div className="accordion-content">
										<div className="content-inner">
											<p className="md:text-lg mb-0">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its. The point of using Lorem Ipsum is that it has a more-or-less normal distribution</p>
										</div>
									</div>
								</div>
								<div className="accordion-item">
									<h2 className="accordion-header font-base md:!text-[22px]">
										<button className="accordion-button" type="button">
											Can i cancel my appointment
										</button>
										<span className="arrow">
											<i className="icon feather icon-chevron-right size-7.5 leading-7.5! text-center rounded-lg bg-primary/10 text-primary [.arrow.active_&]:bg-primary [.arrow.active_&]:text-white [.arrow.active_&]:hidden block"></i>
                                            <i className="icon feather icon-chevron-down size-7.5 leading-7.5! text-center rounded-lg bg-primary/10 text-primary [.arrow.active_&]:bg-primary [.arrow.active_&]:text-white [.arrow.active_&]:block hidden"></i>
										</span>
									</h2>
									<div className="accordion-content">
										<div className="content-inner">
											<p className="md:text-lg mb-0">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its. The point of using Lorem Ipsum is that it has a more-or-less normal distribution</p>
										</div>
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
