import { Link } from 'react-router-dom';
import FaqSection from '../components/shared/FaqSection';
import WhyChooseUsSection from '../components/shared/WhyChooseUsSection';

import { useState } from 'react';
import { saveAppointment } from '../data/dataStore';

export default function AppointmentPage() {
  const appointImg6 = ""; // "/assets/images/about/img6.webp"
  const [formData, setFormData] = useState({
    dzName: '',
    dzEmail: '',
    dzPhoneNumber: '',
    dzDate: '',
    dzTime: '',
    department: 'General'
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
      phone: formData.dzPhoneNumber,
      appointmentDate: `${formData.dzDate} ${formData.dzTime}`,
      department: formData.department
    });
    setStatus('Appointment booked successfully!');
    setFormData({ dzName: '', dzEmail: '', dzPhoneNumber: '', dzDate: '', dzTime: '', department: 'General' });
  };

  return (
    <>
      <div className="2xxl:min-h-125 lg:min-h-112.5 md:min-h-full sm:min-h-87.5 min-h-75 bg-cover bg-center bg-light relative z-1 w-full overflow-hidden pb-7.5 before:absolute ltr:before:left-0 rtl:before:right-0 before:top-0 before:size-full before:bg-primary before:opacity-70" style={ { backgroundImage: 'url(/assets/images/banner/bnr1.webp)' } }>
        <div className="container relative z-1 h-full table">
          <div className="table-cell 2xxl:h-125 lg:h-112.5 md:h-95 sm:h-87.5 h-75 align-middle pt-22.5 pb-5 text-center">
            <h1 className="2xxl:text-8xl xl:text-6xxl md:text-[48px] text-[32px] font-semibold mb-3.75 break-word text-white wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">Appointment</h1>
            <nav className="wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
              <ul className="inline-block rounded-5xl lg:py-2.5 py-1.5 lg:px-7.5 px-5 bg-white shadow-breadcrumb">
                <li className="inline-block lg:text-base text-sm font-normal capitalize text-heading"><a href="/" className="text-primary">Home</a></li>
                <li className="inline-block lg:text-base text-sm font-normal capitalize text-heading ps-2 relative before:content-['\f101'] before:float-start before:text-heading before:font-bold before:font-['Font_Awesome_5_Free'] before:text-sm before:pe-3 before:top-0.5 before:relative">Appointment</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>


      <section className="2xxl:pt-25 md:pt-17.5 sm:pt-12.5 pt-10 relative z-1 bg-white" style={ { backgroundImage: 'url(/assets/images/background/bg7.webp)' } }>
        <div className="container">
          <div className="row items-end justify-between">
            <div className="xl:w-5/12 w-full mb-7.5">
              <div className="relative rounded-2xl 2xl:p-13.75 sm:p-10 p-6.25 bg-[#006562] before:w-36.25 before:aspect-square before:absolute ltr:before:right-5 rtl:before:left-5 before:top-5 before:z-0 before:bg-size-[100%] before:bg-no-repeat before:bg-commentsvg">
                <div>
                  <h2 className="sm:text-2xxl text-2xl text-white sm:mb-5 mb-3.75">Book Your Appointment</h2>
                </div>
                <form onSubmit={handleSubmit} className="dzForm">
                  <div className="dzFormMsg">
                    {status && <div className="text-green-300 mb-4">{status}</div>}
                  </div>
                  <div className="row">
                    <div className="w-full mb-7.5">
                      <div className="relative">
                        <span className="absolute ltr:left-0 rtl:right-0 top-4 flex items-center justify-center text-2xl text-primary"><i className="feather icon-user"></i></span>
                        <input name="dzName" value={formData.dzName} onChange={handleChange} required type="text" className="py-3.75 ps-10 text-lg text-start text-white border-b border-white/80 w-full bg-transparent focus:outline-none" placeholder="Your Name" />
                      </div>
                    </div>
                    <div className="w-full mb-7.5">
                      <div className="relative">
                        <span className="absolute ltr:left-0 rtl:right-0 top-4 flex items-center justify-center text-2xl text-primary"><i className="feather icon-mail"></i></span>
                        <input name="dzEmail" value={formData.dzEmail} onChange={handleChange} required type="email" className="py-3.75 ps-10 text-lg text-start text-white border-b border-white/80 w-full bg-transparent focus:outline-none" placeholder="Your Email" />
                      </div>
                    </div>
                    <div className="w-full mb-7.5">
                      <div className="relative">
                        <span className="absolute ltr:left-0 rtl:right-0 top-4 flex items-center justify-center text-2xl text-primary"><i className="feather icon-phone"></i></span>
                        <input name="dzPhoneNumber" value={formData.dzPhoneNumber} onChange={handleChange} required type="text" className="py-3.75 ps-10 text-lg text-start text-white border-b border-white/80 w-full bg-transparent focus:outline-none" placeholder="Phone Number" />
                      </div>
                    </div>
                    <div className="sm:w-1/2 w-full mb-7.5">
                      <div className="relative">
                        <span className="absolute ltr:left-0 rtl:right-0 top-4 flex items-center justify-center text-2xl text-primary"><i className="feather icon-calendar"></i></span>
                        <input name="dzDate" value={formData.dzDate} onChange={handleChange} required type="date" className="py-3.75 ps-10 text-lg text-start text-white border-b border-white/80 w-full bg-transparent focus:outline-none" placeholder="Date" />
                      </div>
                    </div>
                    <div className="sm:w-1/2 w-full mb-7.5">
                      <div className="relative">
                        <span className="absolute ltr:left-0 rtl:right-0 top-4 flex items-center justify-center text-2xl text-primary"><i className="feather icon-clock"></i></span>
                        <input name="dzTime" value={formData.dzTime} onChange={handleChange} required type="time" className="py-3.75 ps-10 text-lg text-start text-white border-b border-white/80 w-full bg-transparent focus:outline-none" placeholder="Time" />
                      </div>
                    </div>
                    <div className="sm:w-1/2 w-full">
                      <div className="form-check2 mb-1.25">
                        <img className="size-4.5 bg-transparent border border-white appearance-none rounded-xs me-2 my-1 align-top bg-center bg-no-repeat checked:bg-primary checked:bg-input-check" type="checkbox" value="" id="checkBox1" />
                        <label className="text-[#BED2E7] text-base inline" htmlFor="checkBox1">Skin Allergy Testing</label>
                      </div>
                      <div className="form-check2 mb-1.25">
                        <img className="size-4.5 bg-transparent border border-white appearance-none rounded-xs me-2 my-1 align-top bg-center bg-no-repeat checked:bg-primary checked:bg-input-check" type="checkbox" value="" id="checkBox2" />
                        <label className="text-[#BED2E7] text-base inline" htmlFor="checkBox2">Laser Treatments</label>
                      </div>
                      <div className="form-check2 mb-1.25">
                        <img className="size-4.5 bg-transparent border border-white appearance-none rounded-xs me-2 my-1 align-top bg-center bg-no-repeat checked:bg-primary checked:bg-input-check" type="checkbox" value="" id="checkBox3" />
                        <label className="text-[#BED2E7] text-base inline" htmlFor="checkBox3">Hair Fall Treatments</label>
                      </div>
                    </div>
                    <div className="sm:w-1/2 w-full mb-7.5">
                      <div className="form-check2 mb-1.25">
                        <img className="size-4.5 bg-transparent border border-white appearance-none rounded-xs me-2 my-1 align-top bg-center bg-no-repeat checked:bg-primary checked:bg-input-check" type="checkbox" value="" id="checkBox4" />
                        <label className="text-[#BED2E7] text-base inline" htmlFor="checkBox4">Plastic Surgery</label>
                      </div>
                      <div className="form-check2 mb-1.25">
                        <img className="size-4.5 bg-transparent border border-white appearance-none rounded-xs me-2 my-1 align-top bg-center bg-no-repeat checked:bg-primary checked:bg-input-check" type="checkbox" value="" id="checkBox5" />
                        <label className="text-[#BED2E7] text-base inline" htmlFor="checkBox5">Acne Scar Treatment</label>
                      </div>
                      <div className="form-check2 mb-1.25">
                        <img className="size-4.5 bg-transparent border border-white appearance-none rounded-xs me-2 my-1 align-top bg-center bg-no-repeat checked:bg-primary checked:bg-input-check" type="checkbox" value="" id="checkBox6" />
                        <label className="text-[#BED2E7] text-base inline" htmlFor="checkBox6">Pedicure</label>
                      </div>
                    </div>
                    <div className="w-full mt-2.5">
                      <button type="submit" name="submit" value="submit" className="btn btn-lg btn-white w-full justify-center hover:!bg-white hover:!text-black">
                        <i className="feather icon-calendar me-1.25"></i> Book An appointment
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="xl:w-1/2 lg:w-2/3 w-full">
              <div className="relative z-1 after:absolute after:top-0 ltr:after:left-0 rtl:after:right-0 after:size-full after:bg-no-repeat after:bg-bottom after:bg-content-media">
                <div className="relative z-1 md:ps-12.5 md:pe-25 px-7.5">
                  <img src={appointImg6 || "https://images.pexels.com/photos/8459972/pexels-photo-8459972.jpeg?auto=compress&cs=tinysrgb&w=430&h=600&fit=crop"} alt="" className="w-full" />
                </div>
                <div className="absolute sm:bottom-37.5 bottom-15 ltr:lg:-left-15 rtl:lg:-right-15 ltr:left-0 rtl:right-0 z-99 max-sm:hidden">
                  <div className="inline-flex items-center gap-3.75 bg-white/90 sm:rounded-xxl rounded-lg py-3 px-5 backdrop-blur-xs shadow-info-widget-10 animate-move3">
                    <span className="xl:text-5xxl text-3xxl font-bold text-primary"><span className="value counted" data-value="20">20</span>+</span>
                    <span className="sm:text-lg text-base text-justify text-secondary font-semibold block font-title">Years Experienced</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUsSection />

      <section className="2xxl:pt-25 2xxl:pb-17.5 md:pt-17.5 sm:pt-12.5 pt-10 pb-10 ">
        <div className="container">
          <div className="row content-wrapper">
            <div className="w-full">
              <div className="sm:mb-7.5 mb-5 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                <h2 className="2xxl:text-4xxl lg:text-[38px] sm:text-[32px] text-2xxl font-bold capitalize mb-2.5">All Locations</h2>
                <p className="sm:text-lg text-base font-light">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
              <div className="row">
                <div className="xl:w-1/3 md:w-1/2 w-full mb-7.5 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                  <div className="bg-white rounded-xxl shadow-1 transition-all p-2.5 h-full flex flex-col duration-500 hover:-translate-y-2">
                    <div className="min-w-75 h-75 rounded-2xl overflow-hidden">
                      <img src="/assets/images/map/map2.webp" alt="" className="size-full object-cover" />
                    </div>
                    <div className="p-6.25">
                      <h3 className="flex items-center gap-2.5 text-[20px] font-semibold font-base">
                        Canada
                      </h3>
                      <p className="mb-2.5">Address:</p>
                      <p className="mb-0">123 Health Way, Suite 456 Goodland, 78910 United States</p>
                      <p className="text-heading font-normal mb-2.5">Service</p>
                      <a href="#" onClick={ e => e.preventDefault() }>Mon -Sat: 7:00 - 17:00</a>
                    </div>
                  </div>
                </div>
                <div className="xl:w-1/3 md:w-1/2 w-full mb-7.5 wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.8s">
                  <div className="bg-white rounded-xxl shadow-1 transition-all p-2.5 h-full flex flex-col duration-500 hover:-translate-y-2">
                    <div className="min-w-75 h-75 rounded-2xl overflow-hidden">
                      <img src="/assets/images/map/map1.webp" alt="" className="size-full object-cover" />
                    </div>
                    <div className="p-6.25">
                      <h3 className="flex items-center gap-2.5 text-[20px] font-semibold font-base">
                        United State
                      </h3>
                      <p className="mb-2.5">Address:</p>
                      <p className="mb-0">123 Health Way, Suite 456 Goodland, 78910 United States</p>
                      <p className="text-heading font-normal mb-2.5">Service</p>
                      <a href="#" onClick={ e => e.preventDefault() }>Mon -Sat: 7:00 - 17:00</a>
                    </div>
                  </div>
                </div>
                <div className="xl:w-1/3 md:w-1/2 w-full mb-7.5 wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="0.8s">
                  <div className="bg-white rounded-xxl shadow-1 transition-all p-2.5 h-full flex flex-col duration-500 hover:-translate-y-2">
                    <div className="min-w-75 h-75 rounded-2xl overflow-hidden">
                      <img src="/assets/images/map/map2.webp" alt="" className="size-full object-cover" />
                    </div>
                    <div className="p-6.25">
                      <h3 className="flex items-center gap-2.5 text-[20px] font-semibold font-base">
                        Canada
                      </h3>
                      <p className="mb-2.5">Address:</p>
                      <p className="mb-0">123 Health Way, Suite 456 Goodland, 78910 United States</p>
                      <p className="text-heading font-normal mb-2.5">Service</p>
                      <a href="#" onClick={ e => e.preventDefault() }>Mon -Sat: 7:00 - 17:00</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

			<FaqSection className="bg-light" />
    </>
  );
}


