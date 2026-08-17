import { useState } from 'react';
import { saveAppointment } from '../../data/dataStore';
import doctorImg from '../../assets/images/vaibhav-vivian-3HIroMoyre8-unsplash-removebg-preview.png';

export default function AppointmentCTASection() {
  const ctaImg = doctorImg; 
  const [formData, setFormData] = useState({
    dzName: '',
    dzEmail: '',
    dzNumber: '',
    dateTime: '',
    doctorName: 'Doctor Name'
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveAppointment({
      name: formData.dzName,
      email: formData.dzEmail,
      phone: formData.dzNumber,
      appointmentDate: formData.dateTime,
      department: formData.doctorName // Mapping doctor name to department for simplicity
    });
    setStatus('Appointment booked successfully!');
    setFormData({ dzName: '', dzEmail: '', dzNumber: '', dateTime: '', doctorName: 'Doctor Name' });
  };

  return (
    <section className="relative z-1 bg-primary">
			<div className="container">
				<div className="row justify-between">
					<div className="lg:w-7/12 w-full">
						<div className="2xl:pt-20 2xl:pb-17.5 pt-12.5 pb-10">
							<div className="md:mb-10 mb-5">
								<h2 className="2xxl:text-5xxl lg:text-[38px] sm:text-[32px] text-2xxl font-bold capitalize leading-[1.3] !text-white mb-0 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">Better Vision Begins Here Book a Consultation</h2>
							</div>
							<div className="form-wrapper">
								<div className="form-body">
									<form onSubmit={handleSubmit} className="dzForm">
										<div className="dzFormMsg">
                                            {status && <div className="text-green-300 mb-4">{status}</div>}
                                        </div>
										<div className="row items-end md:[--tw-gutter-x:3rem]! [--tw-gutter-y:3rem]!">
											<div className="xl:w-1/3 sm:w-1/2 w-full wow fadeInUp" data-wow-delay="0.3s" data-wow-duration="0.8s">
												<div className="relative">
													<input name="dzName" value={formData.dzName} onChange={handleChange} required type="text" className="py-3.75 ps-10 text-2sm text-start text-white border-b-2 border-white min-h-15 w-full bg-transparent focus:outline-none placeholder:text-white" placeholder="Your Name" />
													<span className="absolute text-2xl top-4 ltr:left-0 rtl:right-0">
														<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path fillRule="evenodd" clipRule="evenodd" d="M13.9827 17.9043C9.47052 17.9043 5.61719 18.5865 5.61719 21.3187C5.61719 24.051 9.44608 24.7576 13.9827 24.7576C18.495 24.7576 22.3472 24.0743 22.3472 21.3432C22.3472 18.6121 18.5194 17.9043 13.9827 17.9043Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
															<path fillRule="evenodd" clipRule="evenodd" d="M13.9794 14.0065C16.9406 14.0065 19.3406 11.6054 19.3406 8.64431C19.3406 5.6832 16.9406 3.2832 13.9794 3.2832C11.0183 3.2832 8.61722 5.6832 8.61722 8.64431C8.60722 11.5954 10.9917 13.9965 13.9417 14.0065H13.9794Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
														</svg>
													</span>
												</div>
											</div>
											<div className="xl:w-1/3 sm:w-1/2 w-full wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
												<div className="relative">
													<input name="dzEmail" value={formData.dzEmail} onChange={handleChange} required type="email" className="py-3.75 ps-10 text-2sm text-start text-white border-b-2 border-white min-h-15 w-full bg-transparent focus:outline-none placeholder:text-white" placeholder="Your Email" />
													<span className="absolute text-2xl top-4 ltr:left-0 rtl:right-0">
														<svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M19.8888 8.32617L14.705 12.5414C13.7256 13.3184 12.3476 13.3184 11.3682 12.5414L6.14062 8.32617" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
															<path fillRule="evenodd" clipRule="evenodd" d="M18.7296 22.5C22.2779 22.5098 24.6693 19.5945 24.6693 16.0114V7.99835C24.6693 4.4153 22.2779 1.5 18.7296 1.5H7.2756C3.72736 1.5 1.33594 4.4153 1.33594 7.99835V16.0114C1.33594 19.5945 3.72736 22.5098 7.2756 22.5H18.7296Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
														</svg>
													</span>
												</div>
											</div>
											<div className="xl:w-1/3 sm:w-1/2 w-full wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
												<div className="relative">
													<input name="dzNumber" value={formData.dzNumber} onChange={handleChange} required type="number" className="py-3.75 ps-10 text-2sm text-start text-white border-b-2 border-white min-h-15 w-full bg-transparent focus:outline-none placeholder:text-white" placeholder="Phone Number" />
													<span className="absolute text-2xl top-4 ltr:left-0 rtl:right-0">
														<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M15.7422 0.916992C20.06 1.39649 23.4714 4.80316 23.9555 9.12099" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
															<path d="M15.7422 5.0498C17.8084 5.45114 19.423 7.06697 19.8255 9.13314" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
															<path fillRule="evenodd" clipRule="evenodd" d="M11.8727 12.5514C16.5265 17.2041 17.5823 11.8215 20.5454 14.7826C23.4021 17.6385 25.0452 18.2107 21.4246 21.8292C20.9712 22.1935 18.0907 26.577 7.96781 16.4566C-2.15637 6.33499 2.22443 3.45151 2.58887 2.99827C6.217 -0.630188 6.78056 1.02127 9.63723 3.87721C12.5991 6.83957 7.21889 7.89881 11.8727 12.5514Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
														</svg>
													</span>
												</div>
											</div>

											<div className="xl:w-1/3 sm:w-1/2 w-full  wow fadeInUp" data-wow-delay="0.5s" data-wow-duration="0.8s">
												<div className="relative">
													<input name="dateTime" value={formData.dateTime} onChange={handleChange} required type="text" className="py-3.75 ps-10 text-2sm text-start text-white border-b-2 border-white min-h-15 w-full bg-transparent focus:outline-none placeholder:text-white flatpickr1" id="dateTimePickerOnly" placeholder="Date" />
													<span className="absolute text-2xl top-4 ltr:left-0 rtl:right-0">
														<svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M3.60938 11.9608H24.404" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
														<path d="M19.1834 16.5174H19.1942" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
														<path d="M14.0037 16.5174H14.0146" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
														<path d="M8.81625 16.5174H8.82705" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
														<path d="M19.1834 21.0516H19.1942" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
														<path d="M14.0037 21.0516H14.0146" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
														<path d="M8.81625 21.0516H8.82705" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
														<path d="M18.7201 3.32227V7.16151" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
														<path d="M9.2904 3.32227V7.16151" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
														<path fillRule="evenodd" clipRule="evenodd" d="M18.9446 5.16504H9.06612C5.63999 5.16504 3.5 7.07363 3.5 10.5819V21.1398C3.5 24.7033 5.63999 26.656 9.06612 26.656H18.9338C22.3708 26.656 24.5 24.7364 24.5 21.2281V10.5819C24.5108 7.07363 22.3816 5.16504 18.9446 5.16504Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
														</svg>
													</span>
												</div>
											</div>
											
											<div className="xl:w-1/3 sm:w-1/2 w-full  wow fadeInUp" data-wow-delay="0.7s" data-wow-duration="0.8s">
												<div className="relative custom-select icon-select">
													<select name="doctorName" value={formData.doctorName} onChange={handleChange} className="dynamic-select bg-transparent focus:outline-none">
														<option value="Doctor Name" disabled>Doctor Name</option>
														<option value="Nashid Martines">Nashid Martines</option>
														<option value="Kenneth Fong">Kenneth Fong</option>
													</select>
													<span className="absolute text-2xl top-4 ltr:left-0 rtl:right-0">
														<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M20.8672 12.713C22.4947 12.4843 23.7477 11.089 23.7512 9.39851C23.7512 7.73251 22.5367 6.35118 20.9442 6.08984" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
															<path d="M23.0156 16.625C24.5918 16.8607 25.692 17.4125 25.692 18.55C25.692 19.3328 25.174 19.8415 24.3363 20.1612" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
															<path fillRule="evenodd" clipRule="evenodd" d="M13.8662 17.1074C10.1166 17.1074 6.91406 17.6756 6.91406 19.9448C6.91406 22.2128 10.0967 22.7973 13.8662 22.7973C17.6159 22.7973 20.8172 22.2349 20.8172 19.9646C20.8172 17.6943 17.6357 17.1074 13.8662 17.1074Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
															<path fillRule="evenodd" clipRule="evenodd" d="M13.8696 13.869C16.3301 13.869 18.3251 11.8752 18.3251 9.41351C18.3251 6.95301 16.3301 4.95801 13.8696 4.95801C11.4091 4.95801 9.4141 6.95301 9.4141 9.41351C9.40476 11.8658 11.3846 13.8608 13.8369 13.869H13.8696Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
															<path d="M6.86838 12.713C5.23971 12.4843 3.98788 11.089 3.98438 9.39851C3.98438 7.73251 5.19887 6.35118 6.79138 6.08984" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
															<path d="M4.7154 16.625C3.13923 16.8607 2.03906 17.4125 2.03906 18.55C2.03906 19.3328 2.55706 19.8415 3.39473 20.1612" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
														</svg>

													</span>
												</div>
											</div>
											<div className="xl:w-1/3 sm:w-1/2 w-full  wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="0.8s">
												<button type="submit" name="submit" value="submit" className="btn w-full justify-center btn-white text-primary">
													Book Appointment <i className="feather icon-arrow-right ms-1"></i>
												</button>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
					<div className="lg:w-1/3 w-full self-end">
						<div className="lg:-mt-37.5 ltr:xl:-me-32.5 ltr:lg:-me-6.25 rtl:3xl:-me-32.5 rtl:lg:-me-6.25 lg:-ms-7.5 max-lg:text-center relative after:absolute after:top-2/5 ltr:after:left-0 rtl:after:right-0 after:size-full after:bg-no-repeat after:bg-pointed-arrow wow fadeInUp" data-wow-delay="1.0s" data-wow-duration="0.8s">
							<img src={ctaImg || "https://images.pexels.com/photos/33812025/pexels-photo-33812025.jpeg?auto=compress&cs=tinysrgb&w=580&h=570&fit=crop"} alt="" />	
						</div>
					</div>
				</div>
			</div>
			<img src="/assets/images/background/bg4.webp" alt="" className="absolute ltr:right-0 rtl:left-0 top-0 -z-1" />
		</section>
  );
}
