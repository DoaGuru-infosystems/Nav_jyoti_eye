import heroImg1 from "../../assets/images/home/hero-1.png";
import heroImg2 from "../../assets/images/home/hero-2.png";
import heroImg3 from "../../assets/images/home/hero-3.png";

export default function HeroSection() {

	return (
		<div className="relative z-1 overflow-hidden 3xl:h-250 2xl:h-200 lg:h-162.5 md:h-full h-auto pb-20 3xl:pt-0 pt-30 after:absolute after:top-0 ltr:after:right-0 rtl:after:left-0 after:w-[49%] after:h-full after:bg-light after:-z-1">
			<div className="container-fluid h-full">
				<div className="h-full">
					<div className="row items-center h-full">
						<div className="lg:w-5/12 w-full mb-7.5">
							<div className="2xxl:ps-25 2xxl:ms-0 xxl:ms-10 xl:ms-7.5">
								<h1 className="2xxl:text-8xl xl:text-6xl lg:text-[48px] sm:text-[38px] text-[32px] mb-1.25 relative z-1 after:absolute md:after:-top-5 md:after:-left-10.75 md:after:size-12.5 after:-top-6.5 ltr:after:-left-6.25 rtl:after:-right-6.25 after:size-7.5 max-md:after:bg-contain after:bg-no-repeat after:-z-1 after:bg-heading-after after:rotate-y-180 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">Your vision is our mission</h1>
								<p className="text-lg sm:mb-12.5 mb-5">Dedicated to providing world-class eye care with advanced technology and compassionate specialists, ensuring your vision is protected.</p>
								<div className="sm:flex items-center gap-7.5 wow fadeInUp" data-wow-delay="0.8s">
									<a href="/appointment" className="btn btn-primary mb-4">
										Appointment
										<i className="feather icon-arrow-right ltr:ml-1.25 rtl:mr-1.25"></i>
									</a>
									<a href="/eye-care-videos" className="flex relative z-1 items-center text-lg font-medium leading-[1.3] before:top-0 ltr:before:left-0 rtl:before:right-0 before:absolute before:size-12.5 before:rounded-2lg before:bg-transparent before:-z-1 before:duration-200 hover:before:bg-primary hover:before:w-full group mb-4">
										<i className="icon feather icon-play inline-block w-10 h-12.5 min-w-10 rounded-6xl !leading-12.5 align-center text-primary text-xl me-2.5 px-5 duration-200 group-hover:text-white"></i>
										<span className="text-lg font-medium pe-7.5 text-secondary duration-200 group-hover:text-white">Watch Highlight</span>
									</a>
								</div>
							</div>
						</div>
						<div className="lg:w-7/12 w-full self-end wow fadeInRight" data-wow-delay="0.8s" data-wow-duration="0.8s">
							<div className="relative w-[53vw] 3xl:ms-25 max-3xl:float-end max-xxl:w-full max-md:mx-auto" data-bottom-top="transform: translateY(-50px)" data-top-bottom="transform: translateY(50px)">
								<div className="row g-4">
									<div className="w-5/12">
										<div className="row justify-end">
											<div className="w-5/6 mb-7.5">
												<div className="relative overflow-hidden h-auto">
													<span><img src={ heroImg1 || "https://images.pexels.com/photos/6749738/pexels-photo-6749738.jpeg?auto=compress&cs=tinysrgb&w=335&h=275&fit=crop" } alt="" className="size-full object-cover sm:rounded-4xl rounded-xxl" /></span>
													<div>
														<button data-type="youtube" data-src="https://www.youtube.com/embed/o8OgzQdA70c" className="bg-white md:size-14.5 sm:size-12.5 size-8.75 rounded-full flex items-center justify-center text-primary sm:text-xl text-sm absolute top-1/2 left-1/2 -translate-1/2"><i className="fa fa-play"></i></button>
													</div>
												</div>
											</div>
											<div className="w-full mb-7.5">
												<img src={ heroImg2 || "https://images.pexels.com/photos/6749715/pexels-photo-6749715.jpeg?auto=compress&cs=tinysrgb&w=430&h=470&fit=crop" } alt="" className="size-full object-cover sm:rounded-4xl rounded-xxl" />
											</div>
										</div>
									</div>
									<div className="w-7/12 mb-7.5">
										<img src={ heroImg3 || "https://images.pexels.com/photos/5996604/pexels-photo-5996604.jpeg?auto=compress&cs=tinysrgb&w=430&h=470&fit=crop" } alt="" className="2xxl:h-188.75 h-full w-136.25 object-cover sm:rounded-4xl rounded-xxl" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="w-62.5 aspect-square rounded-full h-auto absolute bg-primary blur-[100px] -z-1 opacity-20 top-[10%] ltr:-left-25 rtl:-right-25"></div>
			<div className="w-62.5 aspect-square rounded-full h-auto absolute bg-primary blur-[100px] -z-1 opacity-30 -bottom-25 ltr:-right-25 rtl:-left-25"></div>
			<div className="w-62.5 aspect-square rounded-full h-auto absolute bg-primary blur-[100px] -z-1 opacity-20 -bottom-37.5"></div>
			<div className="absolute 3xl:top-[8%] top-[12%] ltr:left-[9%] rtl:right-[9%] animate-move3 max-xl:hidden" data-bottom-top="transform: translateY(-50px)" data-top-bottom="transform: translateY(50px)">
				<div className="relative before:absolute before:top-0 ltr:before:left-0 rtl:before:right-0 before:w-full before:h-full before:border before:border-white before:rounded-full before:scale-125 before:opacity-60 after:absolute after:top-0 ltr:after:left-0 rtl:after:right-0 after:w-full after:h-full after:border after:border-white after:rounded-full after:scale-150 after:opacity-40">
					<img src="/assets/images/hero-banner/img3.png" alt="" className="object-cover rounded-full size-33.75" />
				</div>
			</div>
			<div className="absolute top-[11%] ltr:left-[30%] rtl:right-[30%] max-xl:hidden" data-bottom-top="transform: translateY(-50px)" data-top-bottom="transform: translateY(50px)">
				<img src="/assets/images/hero-banner/img4.png" alt="" />
			</div>
			<div className="absolute top-[25%] ltr:sm:left-[37%] ltr:left-7/12 rtl:sm:right-[37%] rtl:right-7/12 ltr:3xl:right-auto ltr:sm:-right-10 ltr:-right-7.5 rtl:3xl:left-auto rtl:sm:-left-10 rtl:-left-7.5 lg:bottom-auto sm:bottom-8.75 bottom-5" data-bottom-top="transform: translateY(-50px)" data-top-bottom="transform: translateY(50px)">
				<img src="/assets/images/hero-banner/img5.png" alt="" />
			</div>
			<div className="absolute bottom-1/6 ltr:left-[27%] rtl:right-[27%] max-xl:hidden" data-bottom-top="transform: translateY(-50px)" data-top-bottom="transform: translateY(50px)">
				<img src="/assets/images/hero-banner/img6.png" alt="" />
			</div>
		</div>
	);
}
