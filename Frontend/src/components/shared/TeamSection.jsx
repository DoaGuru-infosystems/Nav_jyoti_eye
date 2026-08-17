export default function TeamSection() {
  // To use the original images, uncomment the paths. To use the Pexels fallback, leave them as empty strings.
  const teamImg1 = ""; // "/assets/images/team/img1.webp"
  const teamImg2 = ""; // "/assets/images/team/img2.webp"
  const teamImg3 = ""; // "/assets/images/team/img3.webp"
  const teamImg4 = ""; // "/assets/images/team/img4.webp"

  return (
    <section className="2xxl:pt-25 2xxl:pb-17.5 md:pt-17.5 md:pb-10 sm:pt-12.5 pt-10 pb-5 bg-light image-tooltip-section">
			<div className="container">
				<div className="sm:mb-7.5 mb-5 text-center">
					<span className="text-primary font-medium sm:text-xl text-base leading-[1.2] font-sub-title rounded-3xl italic mb-2.5 block" data-wow-delay="0.2s" data-wow-duration="0.7s">Team</span>
					<h2 className="2xxl:text-5xxl lg:text-[38px] sm:text-[32px] text-2xxl font-bold capitalize leading-[1.3] mb-0 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.7s">Our Expert Team</h2>
				</div>
				<div className="row box-hover-wrapper">
					<div className="xl:w-1/4 sm:w-1/2 w-full mb-7.5 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
						<div className="bg-light rounded-2xl overflow-hidden box-hover active">
							<div className="relative overflow-hidden">
								<img src={teamImg1 || "https://images.pexels.com/photos/6749711/pexels-photo-6749711.jpeg?auto=compress&cs=tinysrgb&w=315&h=345&fit=crop"} alt="" className="w-full" />
							</div>
							<div className="bg-white py-3.75 px-5 rounded-b-2xl border-2 border-primary/10 border-b-0">
								<div className="relative group">
									<a className="inline-block size-11.5 leading-11.5 text-center rounded-lg text-[22px] bg-primary text-white float-end -mt-10" href="#" onClick={e => e.preventDefault()}><i className="icon feather icon-plus"></i></a>									
									<ul className="absolute bottom-0 ltr:right-0 rtl:left-0 auto z-1 w-12.5 opacity-0 duration-500 group-hover:opacity-100 group-hover:bottom-12.5">
										<li className="mb-2"><a className="text-white bg-primary inline-block text-center -mb-5 h-12.5 w-12.5 text-lg leading-12 rounded-t-2lg" href="https://www.facebook.com/dexignzone" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
										<li className="mb-2"><a className="text-white bg-primary inline-block text-center -mb-5 h-12.5 w-12.5 text-lg leading-12" href="https://x.com/dexignzones" target="_blank"><i className="fa-brands fa-x-twitter"></i></a></li>
										<li className="mb-2"><a className="text-white bg-primary inline-block text-center -mb-5 h-12.5 w-12.5 text-lg leading-12" href="https://www.instagram.com/dexignzone/" target="_blank"><i className="fab fa-instagram"></i></a></li>
										<li className="mb-2"><a className="text-white bg-primary inline-block text-center -mb-5 h-12.5 w-12.5 text-lg leading-12 rounded-b-2lg" href="https://www.linkedin.com/showcase/dexignzone" target="_blank"><i className="fa-brands fa-linkedin-in"></i></a></li>
									</ul>
								</div>
								<h3 className="text-2xl mb-0 font-poppins">Dr. Raiyan Kovin</h3>
								<span className="text-sm text-primary font-poppins block">Ophthalmologist</span>
							</div>
						</div>
					</div>
					<div className="xl:w-1/4 sm:w-1/2 w-full mb-7.5 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
						<div className="bg-light rounded-2xl overflow-hidden box-hover">
							<div className="relative overflow-hidden">
								<img src={teamImg2 || "https://images.pexels.com/photos/5996595/pexels-photo-5996595.jpeg?auto=compress&cs=tinysrgb&w=315&h=345&fit=crop"} alt="" className="w-full" />
							</div>
							<div className="bg-white py-3.75 px-5 rounded-b-2xl border-2 border-primary/10 border-b-0">
								<div className="relative group">
									<a className="inline-block size-11.5 leading-11.5 text-center rounded-lg text-[22px] bg-primary text-white float-end -mt-10" href="#" onClick={e => e.preventDefault()}><i className="icon feather icon-plus"></i></a>									
									<ul className="absolute bottom-0 ltr:right-0 rtl:left-0 auto z-1 w-12.5 opacity-0 duration-500 group-hover:opacity-100 group-hover:bottom-12.5">
										<li className="mb-2"><a className="text-white bg-primary inline-block text-center -mb-5 h-12.5 w-12.5 text-lg leading-12 rounded-t-2lg" href="https://www.facebook.com/dexignzone" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
										<li className="mb-2"><a className="text-white bg-primary inline-block text-center -mb-5 h-12.5 w-12.5 text-lg leading-12" href="https://x.com/dexignzones" target="_blank"><i className="fa-brands fa-x-twitter"></i></a></li>
										<li className="mb-2"><a className="text-white bg-primary inline-block text-center -mb-5 h-12.5 w-12.5 text-lg leading-12" href="https://www.instagram.com/dexignzone/" target="_blank"><i className="fab fa-instagram"></i></a></li>
										<li className="mb-2"><a className="text-white bg-primary inline-block text-center -mb-5 h-12.5 w-12.5 text-lg leading-12 rounded-b-2lg" href="https://www.linkedin.com/showcase/dexignzone" target="_blank"><i className="fa-brands fa-linkedin-in"></i></a></li>
									</ul>
								</div>
								<h3 className="text-2xl mb-0 font-poppins">Dr. Jon doe</h3>
								<span className="text-sm text-primary font-poppins block">Ophthalmologist</span>
							</div>
						</div>
					</div>
					<div className="xl:w-1/4 sm:w-1/2 w-full mb-7.5 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
						<div className="bg-light rounded-2xl overflow-hidden box-hover">
							<div className="relative overflow-hidden">
								<img src={teamImg3 || "https://images.pexels.com/photos/6749767/pexels-photo-6749767.jpeg?auto=compress&cs=tinysrgb&w=315&h=345&fit=crop"} alt="" className="w-full" />
							</div>
							<div className="bg-white py-3.75 px-5 rounded-b-2xl border-2 border-primary/10 border-b-0">
								<div className="relative group">
									<a className="inline-block size-11.5 leading-11.5 text-center rounded-lg text-[22px] bg-primary text-white float-end -mt-10" href="#" onClick={e => e.preventDefault()}><i className="icon feather icon-plus"></i></a>									
									<ul className="absolute bottom-0 ltr:right-0 rtl:left-0 auto z-1 w-12.5 opacity-0 duration-500 group-hover:opacity-100 group-hover:bottom-12.5">
										<li className="mb-2"><a className="text-white bg-primary inline-block text-center -mb-5 h-12.5 w-12.5 text-lg leading-12 rounded-t-2lg" href="https://www.facebook.com/dexignzone" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
										<li className="mb-2"><a className="text-white bg-primary inline-block text-center -mb-5 h-12.5 w-12.5 text-lg leading-12" href="https://x.com/dexignzones" target="_blank"><i className="fa-brands fa-x-twitter"></i></a></li>
										<li className="mb-2"><a className="text-white bg-primary inline-block text-center -mb-5 h-12.5 w-12.5 text-lg leading-12" href="https://www.instagram.com/dexignzone/" target="_blank"><i className="fab fa-instagram"></i></a></li>
										<li className="mb-2"><a className="text-white bg-primary inline-block text-center -mb-5 h-12.5 w-12.5 text-lg leading-12 rounded-b-2lg" href="https://www.linkedin.com/showcase/dexignzone" target="_blank"><i className="fa-brands fa-linkedin-in"></i></a></li>
									</ul>
								</div>
								<h3 className="text-2xl mb-0 font-poppins">Dr. Damion Kovin</h3>
								<span className="text-sm text-primary font-poppins block">Ophthalmologist</span>
							</div>
						</div>
					</div>
					<div className="xl:w-1/4 sm:w-1/2 w-full mb-7.5 wow fadeInUp" data-wow-delay="0.2s"  data-wow-duration="0.8s">
						<div className="bg-light rounded-2xl overflow-hidden box-hover">
							<div className="relative overflow-hidden">
								<img src={teamImg4 || "https://images.pexels.com/photos/5996604/pexels-photo-5996604.jpeg?auto=compress&cs=tinysrgb&w=315&h=345&fit=crop"} alt="" className="w-full" />
							</div>
							<div className="bg-white py-3.75 px-5 rounded-b-2xl border-2 border-primary/10 border-b-0">
								<div className="relative group">
									<a className="inline-block size-11.5 leading-11.5 text-center rounded-lg text-[22px] bg-primary text-white float-end -mt-10" href="#" onClick={e => e.preventDefault()}><i className="icon feather icon-plus"></i></a>									
									<ul className="absolute bottom-0 ltr:right-0 rtl:left-0 auto z-1 w-12.5 opacity-0 duration-500 group-hover:opacity-100 group-hover:bottom-12.5">
										<li className="mb-2"><a className="text-white bg-primary inline-block text-center -mb-5 h-12.5 w-12.5 text-lg leading-12 rounded-t-2lg" href="https://www.facebook.com/dexignzone" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
										<li className="mb-2"><a className="text-white bg-primary inline-block text-center -mb-5 h-12.5 w-12.5 text-lg leading-12" href="https://x.com/dexignzones" target="_blank"><i className="fa-brands fa-x-twitter"></i></a></li>
										<li className="mb-2"><a className="text-white bg-primary inline-block text-center -mb-5 h-12.5 w-12.5 text-lg leading-12" href="https://www.instagram.com/dexignzone/" target="_blank"><i className="fab fa-instagram"></i></a></li>
										<li className="mb-2"><a className="text-white bg-primary inline-block text-center -mb-5 h-12.5 w-12.5 text-lg leading-12 rounded-b-2lg" href="https://www.linkedin.com/showcase/dexignzone" target="_blank"><i className="fa-brands fa-linkedin-in"></i></a></li>
									</ul>
								</div>
								<h3 className="text-2xl mb-0 font-poppins">Dr. Jolian Acenj</h3>
								<span className="text-sm text-primary font-poppins block">Ophthalmologist</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
  );
}
