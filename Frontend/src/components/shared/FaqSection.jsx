import { useState } from 'react';
import { siteData } from '../../data/siteData';
import faqImg from "../../assets/images/home/faqImg.png";

export default function FaqSection({ className = '' }) {

	const [openId, setOpenId] = useState(siteData.faqs[0]?.id);

	const toggleAccordion = (id) => {
		setOpenId(openId === id ? null : id);
	};

	return (
		<section className={ `lg:pt-17.5 pt-12.5 overflow-hidden ${className}` }>
			<div className="container">
				<div className="row items-end">
					<div className="xl:w-1/2 w-full xl:order-1 order-2">
						<div className="relative">
							<div className="relative z-1 2xl:-ms-25 max-md:px-7.5">
								<img src={ faqImg || "https://images.pexels.com/photos/8459996/pexels-photo-8459996.jpeg?auto=compress&cs=tinysrgb&w=740&h=705&fit=crop" } alt="" className="rtl:rotate-y-180 max-w-full" />
							</div>
						</div>
					</div>
					<div className="xl:w-1/2 w-full mb-7.5 self-center xl:order-2 order-1">
						<div className="content-info right">
							<div className="wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
								<h2 className="2xxl:text-5xxl lg:text-[38px] sm:text-[32px] text-2xxl font-bold capitalize leading-[1.3]">Frequently Asked Questions</h2>
							</div>
							<div className="myAccordion style-3 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s" id="accordionExample">
								{ siteData.faqs.map((faq) => (
									<div key={ faq.id } className="accordion-item">
										<h2 className={ `accordion-header font-base md:!text-[22px] ${openId === faq.id ? 'open' : ''} cursor-pointer` } onClick={ () => toggleAccordion(faq.id) }>
											<button className="accordion-button pointer-events-none" type="button">
												{ faq.question }
											</button>
											<span className={ `arrow ${openId === faq.id ? 'active' : ''}` }>
												<i className="icon feather icon-chevron-right size-7.5 leading-7.5! text-center rounded-lg bg-primary/10 text-primary [.arrow.active_&]:bg-primary [.arrow.active_&]:text-white [.arrow.active_&]:hidden block"></i>
												<i className="icon feather icon-chevron-down size-7.5 leading-7.5! text-center rounded-lg bg-primary/10 text-primary [.arrow.active_&]:bg-primary [.arrow.active_&]:text-white [.arrow.active_&]:block hidden"></i>
											</span>
										</h2>
										<div className={`grid transition-all duration-300 ease-in-out ${openId === faq.id ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
											<div className="overflow-hidden">
												<div className="content-inner">
													<p className="md:text-lg mb-0">{ faq.answer }</p>
												</div>
											</div>
										</div>
									</div>
								)) }
							</div>
						</div>
					</div>

				</div>
			</div>
		</section>
	);
}
