import { siteData } from '../../data/siteData';

const HospitalsList = () => {
    return (
        <div className="container">
            <div className="text-center mb-10 wow fadeInUp" data-wow-delay="0.1s">
                <span className="text-primary font-medium sm:text-xl text-base leading-[1.2] font-sub-title rounded-3xl italic mb-2.5 block">Our Network</span>
                <h2 className="2xxl:text-4xxl lg:text-[38px] sm:text-[32px] text-2xxl font-bold capitalize leading-[1.3] mb-0">Our Hospital Branches</h2>
            </div>
            
            <div className="row box-hover-wrapper justify-center">
                {siteData.hospitals.map((hospital, index) => (
                    <div key={index} className="lg:w-1/3 md:w-1/2 w-full mb-7.5 wow fadeInUp" data-wow-delay={`${0.2 + (index * 0.1)}s`}>
                        <div className="bg-white rounded-2xl shadow-7 overflow-hidden duration-200 box-hover [.box-hover.active]:shadow-lg h-full flex flex-col group">
                            <div className="relative overflow-hidden h-60">
                                <img src={hospital.image || "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800&h=500"} alt={hospital.name} className="w-full h-full object-cover duration-500 group-hover:scale-110" />
                            </div>
                            <div className="p-7.5 flex-grow flex flex-col">
                                <h3 className="text-2xl font-bold mb-4">{hospital.name}</h3>
                                <ul className="mb-6 space-y-3 flex-grow">
                                    <li className="flex gap-3 text-secondary">
                                        <i className="feather icon-map-pin text-primary mt-1"></i>
                                        <span>{hospital.address}</span>
                                    </li>
                                    <li className="flex gap-3 text-secondary">
                                        <i className="feather icon-phone text-primary mt-1"></i>
                                        <span>{hospital.phone}</span>
                                    </li>
                                    <li className="flex gap-3 text-secondary">
                                        <i className="feather icon-clock text-primary mt-1"></i>
                                        <span>{siteData.workingHours[0].day}: {siteData.workingHours[0].hours}</span>
                                    </li>
                                </ul>
                                
                                <div className="border-t border-gray-100 pt-5 mt-auto">
                                    <h4 className="text-base font-semibold mb-3">Contact:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        <a href={`tel:${hospital.phone.split(',')[0]}`} className="bg-light text-primary text-sm px-4 py-2 rounded-full hover:bg-primary hover:text-white transition-colors">Call Now</a>
                                        <a href={hospital.mapUrl} target="_blank" rel="noreferrer" className="bg-light text-primary text-sm px-4 py-2 rounded-full hover:bg-primary hover:text-white transition-colors">View on Map</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HospitalsList;
