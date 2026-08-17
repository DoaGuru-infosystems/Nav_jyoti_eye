const HospitalsList = () => {
    const hospitals = [
        {
            name: "ClinicMaster Eye Hospital - Main Branch",
            address: "123 Vision Avenue, City Center, New Delhi",
            phone: "+91 98765 43210",
            email: "main@navjyoti.com",
            image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800&h=500",
            timing: "Mon - Sat: 9:00 AM - 8:00 PM",
            features: ["Emergency 24/7", "Advanced LASIK", "Cataract Center"]
        },
        {
            name: "ClinicMaster Eye Care - South Branch",
            address: "45 Retina Road, South Extension, New Delhi",
            phone: "+91 98765 43211",
            email: "south@navjyoti.com",
            image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&q=80&w=800&h=500",
            timing: "Mon - Sat: 10:00 AM - 7:00 PM",
            features: ["Pediatric Eye Care", "Glaucoma Clinic", "Pharmacy"]
        },
        {
            name: "ClinicMaster Vision Center - West Branch",
            address: "88 Cornea Complex, West District, New Delhi",
            phone: "+91 98765 43212",
            email: "west@navjyoti.com",
            image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=800&h=500",
            timing: "Mon - Sun: 9:00 AM - 6:00 PM",
            features: ["Optical Shop", "Contact Lenses", "Retina Services"]
        }
    ];

    return (
        <div className="container">
            <div className="text-center mb-10 wow fadeInUp" data-wow-delay="0.1s">
                <span className="text-primary font-medium sm:text-xl text-base leading-[1.2] font-sub-title rounded-3xl italic mb-2.5 block">Our Network</span>
                <h2 className="2xxl:text-4xxl lg:text-[38px] sm:text-[32px] text-2xxl font-bold capitalize leading-[1.3] mb-0">Our Hospital Branches</h2>
            </div>
            
            <div className="row box-hover-wrapper justify-center">
                {hospitals.map((hospital, index) => (
                    <div key={index} className="lg:w-1/3 md:w-1/2 w-full mb-7.5 wow fadeInUp" data-wow-delay={`${0.2 + (index * 0.1)}s`}>
                        <div className="bg-white rounded-2xl shadow-7 overflow-hidden duration-200 box-hover [.box-hover.active]:shadow-lg h-full flex flex-col group">
                            <div className="relative overflow-hidden h-60">
                                <img src={hospital.image} alt={hospital.name} className="w-full h-full object-cover duration-500 group-hover:scale-110" />
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
                                        <span>{hospital.timing}</span>
                                    </li>
                                </ul>
                                
                                <div className="border-t border-gray-100 pt-5 mt-auto">
                                    <h4 className="text-base font-semibold mb-3">Available Facilities:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {hospital.features.map((feature, fIndex) => (
                                            <span key={fIndex} className="bg-light text-primary text-sm px-3 py-1 rounded-full">
                                                {feature}
                                            </span>
                                        ))}
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
