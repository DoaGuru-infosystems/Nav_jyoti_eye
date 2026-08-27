import HospitalsList from '../components/shared/HospitalsList';
import PageBanner from '../components/shared/PageBanner';
import navjyotiImg from '../assets/images/Gallery-image/Navjyoti Eye Hospital image.png';

const galleryModules = import.meta.glob('../assets/images/Gallery-image/*.{webp,jpg,png,jpeg}', { eager: true, import: 'default' });
const imageList = Object.values(galleryModules);

const HospitalsPage = () => {
    return (
        <>
            <PageBanner
                title="Our Hospitals"
                breadcrumbText="Hospitals"
                bgImage={ navjyotiImg }
            />
            <section className="relative z-1 bg-white pb-15">
                <HospitalsList />
            </section>

            {/* Pinterest Style Gallery Section */}
            <section className="py-16 md:py-20 bg-[#f8f9fa] relative border-t border-gray-100">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-10 lg:mb-14 wow fadeInUp" data-wow-delay="0.1s">
                        <span className="text-primary font-medium sm:text-xl text-base leading-[1.2] font-sub-title rounded-3xl italic mb-2.5 block">
                            Our Gallery
                        </span>
                        <h2 className="2xxl:text-4xxl lg:text-[38px] sm:text-[32px] text-2xxl font-bold capitalize leading-[1.3] mb-4 text-gray-900">
                            Glimpses of Navjyoti
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
                            Explore our state-of-the-art facilities, events, and moments of care at Navjyoti Eye Hospital.
                        </p>
                    </div>
                </div>

                {/* Full-width Image Grid */}
                <div className="w-full px-2 sm:px-4 md:px-6 lg:px-8">
                    <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6 gap-3 sm:gap-4 md:gap-6 space-y-3 sm:space-y-4 md:space-y-6 w-full">
                        {imageList.map((imgUrl, index) => (
                            <div 
                                key={index} 
                                className="break-inside-avoid rounded-xl sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group relative cursor-pointer"
                            >
                                <img 
                                    src={imgUrl} 
                                    alt={`Gallery view ${index + 1}`} 
                                    className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                    <div className="p-3 sm:p-5 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center ms-auto">
                                            <i className="feather icon-maximize text-white text-sm sm:text-base"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default HospitalsPage;
