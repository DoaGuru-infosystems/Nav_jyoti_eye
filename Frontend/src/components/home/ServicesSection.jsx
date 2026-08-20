import { siteData } from '../../data/siteData';
import serviceImg from '../../assets/images/home/ServicesSection-1.png';

export default function ServicesSection() {
	return (
		<section className="2xxl:pt-25 2xxl:pb-17.5 md:pt-17.5 md:pb-10 sm:pt-12.5 pt-10 pb-5 overflow-hidden">
			<div className="container">
				<div className="sm:mb-7.5 mb-5 text-center">
					<span className="text-primary font-medium text-xl leading-[1.2] font-sub-title rounded-3xl italic block wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.7s">Services</span>
					<h2 className="2xxl:text-5xxl lg:text-[38px] sm:text-[32px] text-2xxl font-bold capitalize leading-[1.3] wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.7s">Services We Provide</h2>
				</div>
				<div className="row items-center justify-between">
					<div className="xl:w-1/3 lg:w-2/5 w-full max-xl:mb-10 text-center wow fadeInLeft" data-wow-delay="0.4s">
						<img src={serviceImg} alt="Doctor" className="max-w-full h-auto drop-shadow-2xl mx-auto object-contain mix-blend-multiply scale-110" />
					</div>
					<div className="xl:w-2/3 lg:w-3/5 w-full xl:pl-10">
						<div className="row relative z-1 wow fadeInUp " data-wow-delay="0.8s">
							<div className="w-full">
								{ siteData.treatments.map((treatment, index) => (
									<div key={ treatment.id } className={ `relative z-1 pb-2.5 border-b border-primary/10 ${index === 0 ? 'border-t' : ''} group image-tooltip-effect` } data-url={ `images/services/img${index + 2}.webp` }>
										<div className="flex items-start md:items-center gap-5 relative z-1 md:py-10 md:px-7.5 p-5 h-full bg-white duration-200 rounded-2xl mt-2.5 group-hover:bg-light max-md:flex-col cursor-default">
											<span className="text-2xl min-w-10 font-bold font-title leading-none text-primarylight duration-200 group-hover:text-primary">
												{ String(index + 1).padStart(2, '0') }
											</span>
											<h5 className="text-xl lg:text-2xl font-bold leading-[1.3] md:w-[35%] w-full">
												{ treatment.title }
											</h5>
											<p className="text-sm md:text-base m-auto md:w-[65%] w-full text-secondary text-justify">
												{ treatment.shortDesc }
											</p>
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
