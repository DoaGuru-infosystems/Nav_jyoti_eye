import { Link } from 'react-router-dom';

export default function Error404Page() {
	return (
		<>
			<div className="2xxl:min-h-125 lg:min-h-112.5 md:min-h-full sm:min-h-87.5 min-h-75 bg-cover bg-center bg-light relative z-1 w-full overflow-hidden pb-7.5 before:absolute ltr:before:left-0 rtl:before:right-0 before:top-0 before:size-full before:bg-primary before:opacity-70" style={ { backgroundImage: 'url(/assets/images/banner/bnr1.webp)' } }>
				<div className="container relative z-1 h-full table">
					<div className="table-cell 2xxl:h-125 lg:h-112.5 md:h-95 sm:h-87.5 h-75 align-middle pt-22.5 pb-5 text-center">
						<h1 className="2xxl:text-8xl xl:text-6xxl md:text-[48px] text-[32px] font-semibold mb-3.75 break-word text-white wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">Error 404</h1>
						<nav className="wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
							<ul className="inline-block rounded-5xl lg:py-2.5 py-1.5 lg:px-7.5 px-5 bg-white shadow-breadcrumb">
								<li className="inline-block lg:text-base text-sm font-normal capitalize text-heading"><a href="/" className="text-primary">Home</a></li>
								<li className="inline-block lg:text-base text-sm font-normal capitalize text-heading ps-2 relative before:content-['\f101'] before:float-start before:text-heading before:font-bold before:font-['Font_Awesome_5_Free'] before:text-sm before:pe-3 before:top-0.5 before:relative">Error 404</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>


			<section className="error-page style-1 2xl:py-25 md:py-17.5 sm:py-12.5 py-10 bg-light overflow-hidden">
				<div className="container">
					<div className="row items-center g-5 justify-center">
						<div className="lg:w-1/2 md:w-9/12 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
							<div className="relative">
								<img src="/assets/images/error.webp" alt="" />
								<div className="absolute sm:top-0 -top-7.5 sm:right-12.5 right-7.5 animate-shake xl:w-auto sm:w-35 w-25">
									<img src="/assets/images/error2.webp" alt="" className="absolute left-1/2 top-1/2 -translate-1/2 w-[60%]" />
									<svg className="w-full" width="234" height="220" viewBox="0 0 234 220" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M16.8986 163.335C-24.2798 77.0297 10.8709 -27.2904 157.814 7.29291C157.814 7.29291 250.039 33.9858 231.155 133.954C215.053 219.194 100.586 243.163 41.6752 194.874C26.1745 205.432 -13.9549 231.297 30.6519 184.225C25.2719 178.082 20.6185 171.131 16.8986 163.335Z" fill="var(--color-primary)" />
									</svg>
								</div>
							</div>
						</div>
						<div className="lg:w-1/2 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
							<div className="inner-content text-center">
								<h2 className="2xxl:text-[290px] lg:text-[200px] sm:text-[150px] text-[100px] font-bold inline-block leading-none relative z-1 after:content-[attr(data-name)] after:absolute after:top-1.75 ltr:after:left-1.75 rtl:after:right-1.75 after:size-[calc(100%-5px)] after:[-webkit-text-stroke:1px_var(--primary)] after:text-transparent after:-z-1" data-name="404">404</h2>
								<p className="md:text-3xxl sm:text-2xxl text-lg font-semibold mx-auto max-w-162.5 text-secondary mb-7.5 leading-normal">We are sorry. But the page you are looking for cannot be found.</p>
								<a href="/" className="btn btn-lg btn-primary">Back To Home</a>
							</div>
						</div>
					</div>

				</div>
			</section>
		</>
	);
}

