import { siteData } from '../../data/siteData';

export default function TeamSection() {
  return (
    <section className="2xxl:pt-25 2xxl:pb-17.5 md:pt-17.5 md:pb-10 sm:pt-12.5 pt-10 pb-5 bg-light image-tooltip-section">
			<div className="container">
				<div className="sm:mb-7.5 mb-5 text-center">
					<span className="text-primary font-medium sm:text-xl text-base leading-[1.2] font-sub-title rounded-3xl italic mb-2.5 block wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.7s">Team</span>
					<h2 className="2xxl:text-5xxl lg:text-[38px] sm:text-[32px] text-2xxl font-bold capitalize leading-[1.3] mb-0 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.7s">Our Expert Doctor</h2>
				</div>
				<div className="row box-hover-wrapper justify-center">
                    {siteData.team.map((member, index) => (
					    <div key={index} className="xl:w-1/3 sm:w-1/2 w-full mb-7.5 wow fadeInUp" data-wow-delay={`${0.2 + (index * 0.1)}s`} data-wow-duration="0.8s">
                            <div className="bg-light rounded-2xl overflow-hidden box-hover active h-full flex flex-col">
                                <div className="relative overflow-hidden">
                                    <img src={member.image || "https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop"} alt={member.name} className="w-full h-80 object-cover object-top" />
                                </div>
                                <div className="bg-white py-5 px-6 rounded-b-2xl border-2 border-primary/10 border-b-0 flex-grow flex flex-col justify-center text-center">
                                    <h3 className="text-2xl mb-1 font-poppins font-bold">{member.name}</h3>
                                    <span className="text-sm text-primary font-poppins font-semibold block mb-2">{member.qualifications}</span>
                                    <span className="text-sm text-secondary font-poppins block mb-3">{member.specialization}</span>
                                    <div className="text-xs text-gray-500 border-t pt-3 border-gray-100">
                                        Reg No: {member.registrationNo}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
				</div>
			</div>
		</section>
  );
}
