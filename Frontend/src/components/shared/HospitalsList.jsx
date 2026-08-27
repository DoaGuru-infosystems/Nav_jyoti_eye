import { siteData } from '../../data/siteData';

const HospitalsList = () => {
    // Since there's only one hospital, we can just use the first item directly
    const hospital = siteData.hospitals[0];

    return (
        <div className="w-full">
            {/* Split Screen Introduction Section */}
            <div className="container pt-12 md:pt-16 mb-16 lg:mb-20">
                <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
                    
                    {/* Left Side: Details */}
                    <div className="w-full lg:w-1/2 wow fadeInLeft" data-wow-delay="0.1s">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-[2px] bg-primary"></div>
                            <span className="text-primary font-medium sm:text-xl text-lg tracking-wider uppercase font-sub-title">Our Network</span>
                        </div>
                        <h2 className="text-gray-900 text-4xl sm:text-5xl font-bold leading-tight mb-8">
                            {hospital.name}
                        </h2>
                        
                        {/* Details List */}
                        <ul className="mb-8 space-y-6">
                            <li className="flex gap-4 items-start">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-1">
                                    <i className="feather icon-map-pin text-lg"></i>
                                </div>
                                <span className="text-gray-700 text-lg leading-relaxed">{ hospital.address }</span>
                            </li>
                            <li className="flex gap-4 items-center">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <i className="feather icon-phone text-lg"></i>
                                </div>
                                <span className="text-gray-700 text-lg font-medium">{ hospital.phone }</span>
                            </li>
                            <li className="flex gap-4 items-center">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <i className="feather icon-clock text-lg"></i>
                                </div>
                                <span className="text-gray-700 text-lg">{ siteData.workingHours[0].day }: { siteData.workingHours[0].hours }</span>
                            </li>
                        </ul>

                        {/* Call Now Button */}
                        <div className="mb-4">
                            <a href={ `tel:${hospital.phone.split(',')[0]}` } className="inline-block bg-primary/10 text-primary text-lg px-8 py-3.5 rounded-full hover:bg-primary hover:text-white transition-colors font-semibold shadow-sm">
                                Call Now
                            </a>
                        </div>
                    </div>

                    {/* Right Side: Image */}
                    <div className="w-full lg:w-1/2 wow fadeInRight" data-wow-delay="0.2s">
                        <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] group lg:sticky lg:top-24">
                            <img 
                                src={hospital.image} 
                                alt={hospital.name} 
                                className="w-full h-auto min-h-[450px] lg:min-h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Full Width Map Section */}
            <div className="w-full h-[350px] sm:h-[450px] md:h-[500px] overflow-hidden shadow-inner wow fadeInUp" data-wow-delay="0.3s">
                <iframe src={hospital.mapUrl} width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Google Map"></iframe>
            </div>
        </div>
    );
};

export default HospitalsList;
