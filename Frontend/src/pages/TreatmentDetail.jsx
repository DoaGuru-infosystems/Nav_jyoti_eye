import { useParams, Navigate } from 'react-router-dom';
import { treatmentsData } from '../data/treatments';
import PageBanner from '../components/shared/PageBanner';
import TestimonialSection from '../components/shared/TestimonialSection';
import FaqSection from '../components/shared/FaqSection';

const TreatmentDetail = () => {
    const { slug } = useParams();
    const treatment = treatmentsData[slug];

    if (!treatment) {
        return <Navigate to="/404" replace />;
    }

    return (
        <>
            <PageBanner
                title={ treatment.title }
                breadcrumbText={ treatment.title }
                bgImage={ treatment.bannerImg }
            />

            <section className="2xxl:pt-25 md:pt-17.5 sm:pt-12.5 pt-10 relative z-1 bg-white pb-10">
                <div className="container">
                    <div className="row items-center">
                        <div className="xl:w-1/2 w-full mb-10 xl:mb-0">
                            <div className="relative rounded-2xl overflow-hidden shadow-10 group">
                                <img src={ treatment.contentImg } alt={ treatment.title } className="w-full h-auto transition-transform duration-700 group-hover:scale-105" />
                            </div>
                        </div>
                        <div className="xl:w-1/2 w-full xl:pl-10">
                            <span className="text-primary font-medium sm:text-xl text-base leading-[1.2] font-sub-title rounded-3xl italic mb-2.5 block wow fadeInUp" data-wow-delay="0.1s">Premium Care</span>
                            <h2 className="2xxl:text-4xxl lg:text-[38px] sm:text-[32px] text-2xxl font-bold capitalize leading-[1.3] mb-5 wow fadeInUp" data-wow-delay="0.2s">{ treatment.title } Overview</h2>
                            <p className="text-lg font-medium text-secondary mb-4 wow fadeInUp" data-wow-delay="0.3s">{ treatment.description }</p>
                            <p className="text-base text-body-color mb-8 wow fadeInUp" data-wow-delay="0.4s">{ treatment.longDescription }</p>

                            <h3 className="text-xl font-semibold pb-2.5 relative mb-4 !text-primary after:absolute after:bottom-0 ltr:after:left-0 rtl:after:right-0 ltr:after:right-0 rtl:after:left-0 after:h-px after:bg-size-[10px_1px] after:bg-repeat-x after:bg-linear-(--title-gradient) wow fadeInUp" data-wow-delay="0.5s">Key Features</h3>
                            <ul className="flex flex-wrap text-secondary font-medium mb-8 wow fadeInUp" data-wow-delay="0.6s">
                                { treatment.features?.map((feature, index) => (
                                    <li key={ index } className="sm:w-1/2 w-full relative lg:p-1.25 p-1 max-sm:mb-3 lg:ps-7.5 ps-6.25 xl:text-base text-2sm before:absolute ltr:before:left-0 rtl:before:right-0 before:font-black before:content-['\f109'] before:font-['flaticon'] before:text-primary before:top-2">
                                        { feature }
                                    </li>
                                )) }
                            </ul>

                            <div className="wow fadeInUp" data-wow-delay="0.7s">
                                <a href="/appointment" className="btn btn-lg btn-primary btn-icon">
                                    Book Appointment <i className="feather icon-arrow-right ms-1"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="2xxl:pt-20 md:pt-15 sm:pt-10 pt-10 2xxl:pb-20 md:pb-15 sm:pb-10 pb-10 bg-light">
                <div className="container">
                    <div className="text-center mb-10 wow fadeInUp" data-wow-delay="0.1s">
                        <span className="text-primary font-medium sm:text-xl text-base leading-[1.2] font-sub-title rounded-3xl italic mb-2.5 block">Advantages</span>
                        <h2 className="2xxl:text-4xxl lg:text-[38px] sm:text-[32px] text-2xxl font-bold capitalize leading-[1.3] mb-0">Benefits of { treatment.title }</h2>
                    </div>
                    <div className="row justify-center box-hover-wrapper">
                        { treatment.benefits?.map((benefit, index) => (
                            <div key={ index } className="lg:w-1/4 md:w-1/2 w-full mb-7.5 p-4 wow fadeInUp" data-wow-delay={ `${0.2 + (index * 0.1)}s` }>
                                <div className={ `bg-white p-8 rounded-2xl shadow-7 duration-200 box-hover [.box-hover.active]:bg-primary h-full text-center flex flex-col items-center justify-center ${index === 0 ? 'active' : ''}` }>
                                    <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-primary text-2xl mb-4 duration-200 [.box-hover.active_&]:bg-white/20 [.box-hover.active_&]:text-white">
                                        <i className="flaticon-check"></i>
                                    </div>
                                    <h4 className="text-xl font-bold duration-200 [.box-hover.active_&]:text-white">{ benefit }</h4>
                                </div>
                            </div>
                        )) }
                    </div>
                </div>
            </section>

            <TestimonialSection />

            <FaqSection />
        </>
    );
};

export default TreatmentDetail;
