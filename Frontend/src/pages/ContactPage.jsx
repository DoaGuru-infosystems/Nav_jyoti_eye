import { Link } from 'react-router-dom';
import { useState } from 'react';
import { saveLead } from '../data/dataStore';
import { siteData } from '../data/siteData';

export default function ContactPage() {
	const contactImg7 = ""; // "/assets/images/about/img7.webp"
	const [formData, setFormData] = useState({
		dzName: '',
		dzEmail: '',
		dzPhoneNumber: '',
		dzMessage: ''
	});
	const [status, setStatus] = useState('');

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		saveLead({
			name: formData.dzName,
			email: formData.dzEmail,
			phone: formData.dzPhoneNumber,
			message: formData.dzMessage
		});
		setStatus('Message sent successfully!');
		setFormData({ dzName: '', dzEmail: '', dzPhoneNumber: '', dzMessage: '' });
	};
	
	return (
	<>
		<div className="2xxl:min-h-125 lg:min-h-112.5 md:min-h-full sm:min-h-87.5 min-h-75 bg-cover bg-center bg-light relative z-1 w-full overflow-hidden pb-7.5 before:absolute ltr:before:left-0 rtl:before:right-0 before:top-0 before:size-full before:bg-primary before:opacity-70" style={ { backgroundImage: 'url(/assets/images/banner/bnr1.webp)' } }>
			<div className="container relative z-1 h-full table">
				<div className="table-cell 2xxl:h-125 lg:h-112.5 md:h-95 sm:h-87.5 h-75 align-middle pt-22.5 pb-5 text-center">
					<h1 className="2xxl:text-8xl xl:text-6xxl md:text-[48px] text-[32px] font-semibold mb-3.75 break-word text-white wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">Contact Us</h1>
					<nav className="wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
						<ul className="inline-block rounded-5xl lg:py-2.5 py-1.5 lg:px-7.5 px-5 bg-white shadow-breadcrumb">
							<li className="inline-block lg:text-base text-sm font-normal capitalize text-heading"><a href="/" className="text-primary">Home</a></li>
							<li className="inline-block lg:text-base text-sm font-normal capitalize text-heading ps-2 relative before:content-['\f101'] before:float-start before:text-heading before:font-bold before:font-['Font_Awesome_5_Free'] before:text-sm before:pe-3 before:top-0.5 before:relative">Contact Us</li>
						</ul>
					</nav>
				</div>
			</div>
		</div>

		<section className="2xl:py-25 md:py-17.5 sm:py-12.5 py-10 bg-light">
			<div className="container">
				<div className="row box-hover-wrapper">
					<div className="lg:w-1/4 sm:w-1/2 w-full mb-7.5 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
						<div className="rounded-xxl p-6.25 pt-0 relative mt-10 h-[calc(100%-40px)] duration-200 bg-white after:w-1.25 after:h-[calc(100%-50px)] after:absolute after:bg-primary ltr:after:right-0 rtl:after:left-0 after:top-1/2 after:-translate-y-1/2 after:rounded-2lg after:opacity-30 after:duration-200 [.box-hover.active]:after:opacity-100 box-hover active">
							<div className="size-20 rounded-full flex items-center justify-center text-[32px] text-white -translate-y-10 -mb-5 duration-200 bg-secondary [.box-hover.active_&amp;]:bg-primary">
								<span className="text-white">
									<i className="feather icon-map-pin"></i>
								</span>
							</div>
							<div className="overflow-hidden">
								<h5 className="text-lg font-semibold">Address</h5>
								<p className="mb-0">{siteData.hospitals[0].address}</p>
							</div>
						</div>
					</div>
					<div className="lg:w-1/4 sm:w-1/2 w-full mb-7.5 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
						<div className="rounded-xxl p-6.25 pt-0 relative mt-10 h-[calc(100%-40px)] duration-200 bg-white after:w-1.25 after:h-[calc(100%-50px)] after:absolute after:bg-primary ltr:after:right-0 rtl:after:left-0 after:top-1/2 after:-translate-y-1/2 after:rounded-2lg after:opacity-30 after:duration-200 [.box-hover.active]:after:opacity-100 box-hover">
							<div className="size-20 rounded-full flex items-center justify-center text-[32px] text-white -translate-y-10 -mb-5 duration-200 bg-secondary [.box-hover.active_&amp;]:bg-primary">
								<span className="text-white">
									<i className="feather icon-phone"></i>
								</span>
							</div>
							<div className="overflow-hidden">
								<h5 className="text-lg font-semibold">Call Us</h5>
								<p className="mb-0 flex flex-col">
									<a href={`tel:${siteData.contact.primaryPhone.replace(/\s+/g, '')}`} className="text-body">{siteData.contact.primaryPhone}</a>
									<a href={`tel:${siteData.contact.secondaryPhone.replace(/\s+/g, '')}`} className="text-body">{siteData.contact.secondaryPhone}</a>
								</p>
							</div>
						</div>
					</div>
					<div className="lg:w-1/4 sm:w-1/2 w-full mb-7.5 wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.8s">
						<div className="rounded-xxl p-6.25 pt-0 relative mt-10 h-[calc(100%-40px)] duration-200 bg-white after:w-1.25 after:h-[calc(100%-50px)] after:absolute after:bg-primary ltr:after:right-0 rtl:after:left-0 after:top-1/2 after:-translate-y-1/2 after:rounded-2lg after:opacity-30 after:duration-200 [.box-hover.active]:after:opacity-100 box-hover">
							<div className="size-20 rounded-full flex items-center justify-center text-[32px] text-white -translate-y-10 -mb-5 duration-200 bg-secondary [.box-hover.active_&amp;]:bg-primary">
								<span className="text-white">
									<i className="feather icon-mail"></i>
								</span>
							</div>
							<div className="overflow-hidden">
								<h5 className="text-lg font-semibold">Send us a Mail</h5>
								<p className="mb-0 flex flex-col">
									<a href={`mailto:${siteData.contact.primaryEmail}`} className="text-body">{siteData.contact.primaryEmail}</a>
								</p>
							</div>
						</div>
					</div>
					<div className="lg:w-1/4 sm:w-1/2 w-full mb-7.5 wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="0.8s">
						<div className="rounded-xxl p-6.25 pt-0 relative mt-10 h-[calc(100%-40px)] duration-200 bg-white after:w-1.25 after:h-[calc(100%-50px)] after:absolute after:bg-primary ltr:after:right-0 rtl:after:left-0 after:top-1/2 after:-translate-y-1/2 after:rounded-2lg after:opacity-30 after:duration-200 [.box-hover.active]:after:opacity-100 box-hover">
							<div className="size-20 rounded-full flex items-center justify-center text-[32px] text-white -translate-y-10 -mb-5 duration-200 bg-secondary [.box-hover.active_&amp;]:bg-primary">
								<span className="text-white">
									<i className="feather icon-clock"></i>
								</span>
							</div>
							<div className="overflow-hidden">
								<h5 className="text-lg font-semibold">Opening Time</h5>
								<p className="mb-0">{siteData.hospitals[0].timings || "Mon-Sat: 11:00 AM – 8:30 PM"}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section className="2xxl:pt-25 md:pt-17.5 sm:pt-12.5 pt-10 relative z-1 bg-white" style={ { backgroundImage: 'url(/assets/images/background/bg7.webp)' } }>
			<div className="container">
				<div className="row content-wrapper style-43 items-end justify-between">
					<div className="lg:w-1/2 w-full lg:order-1 order-2">
						<div className="relative z-1 after:absolute after:top-0 ltr:after:left-0 rtl:after:right-0 after:size-full after:bg-no-repeat after:bg-bottom after:bg-content-media">
							<div className="relative z-1 md:ps-12.5 md:pe-25 px-7.5">
								<img src={contactImg7 || "https://images.pexels.com/photos/5996604/pexels-photo-5996604.jpeg?auto=compress&cs=tinysrgb&w=600&h=630&fit=crop"} alt="" className="w-full" />
							</div>
							<div className="absolute sm:bottom-37.5 bottom-15 ltr:lg:-right-15 ltr:right-0 rtl:lg:-left-15 rtl:left-0 z-99 max-sm:hidden">
								<div className="inline-flex items-center gap-3.75 bg-white/90 sm:rounded-xxl rounded-lg py-3 px-5 backdrop-blur-xs shadow-info-widget-10 animate-move3">
									<span className="xl:text-5xxl text-3xxl font-bold text-primary"><span className="value counted" data-value="20">20</span>+</span>
									<span className="sm:text-lg text-base text-justify text-secondary font-semibold block font-title">Years Experienced</span>
								</div>
							</div>
						</div>
					</div>
					<div className="xl:w-5/12 lg:w-1/2 w-full mb-7.5 lg:order-2 order-1">
						<div className="relative rounded-2xl 2xxl:p-13.75 sm:p-10 p-6.25 bg-light">
							<div className="form-body">
								<div className="mb-4">
									<h2 className="2xxl:text-4xxl lg:text-[38px] sm:text-[32px] text-2xxl font-bold capitalize mb-0">Get in Touch</h2>
									<p className="xl:text-lg text-base font-normal mb-0">You Can React Us Anytime</p>
								</div>
								<form onSubmit={ handleSubmit } className="dzForm">
									<div className="dzFormMsg">
										{ status && <div className="text-green-600 mb-4">{ status }</div> }
									</div>
									<div className="row">
										<div className="w-full mb-5">
											<div className="relative">
												<span className="absolute ltr:left-0 rtl:right-0 top-4 flex items-center justify-center text-2xl text-primary"><i className="feather icon-user"></i></span>
												<input name="dzName" value={ formData.dzName } onChange={ handleChange } required type="text" className="py-3.75 ps-10 text-lg text-start text-bodycolor border-b border-secondary/60 w-full placeholder:text-bodycolor" placeholder="Your Name" />
											</div>
										</div>
										<div className="w-full mb-5">
											<div className="relative">
												<span className="absolute ltr:left-0 rtl:right-0 top-4 flex items-center justify-center text-2xl text-primary"><i className="feather icon-mail"></i></span>
												<input name="dzEmail" value={ formData.dzEmail } onChange={ handleChange } required type="email" className="py-3.75 ps-10 text-lg text-start text-bodycolor border-b border-secondary/60 w-full placeholder:text-bodycolor" placeholder="Your Email Address" />
											</div>
										</div>
										<div className="w-full mb-5">
											<div className="relative">
												<span className="absolute ltr:left-0 rtl:right-0 top-4 flex items-center justify-center text-2xl text-primary"><i className="feather icon-phone"></i></span>
												<input name="dzPhoneNumber" value={ formData.dzPhoneNumber } onChange={ handleChange } required type="text" className="py-3.75 ps-10 text-lg text-start text-bodycolor border-b border-secondary/60 w-full placeholder:text-bodycolor" placeholder="Phone Number" />
											</div>
										</div>
										<div className="w-full mb-5">
											<div className="floating-underline underline-1">
												<textarea name="dzMessage" value={ formData.dzMessage } onChange={ handleChange } required className="py-3.75 text-lg text-start text-bodycolor border-b border-secondary/60 w-full placeholder:text-bodycolor" rows="5" placeholder="Write Message"></textarea>
											</div>
										</div>
										<div className="w-full mt-2.5">
											<button type="submit" className="btn btn-lg btn-primary w-full justify-center">
												Send Message
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<div className="map-wrapper xl:h-125 sm:h-100 h-62.5 wow fadeIn">
			<iframe className="size-full" src={siteData.hospitals[0].mapUrl} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
		</div>
	</>
	);
}



