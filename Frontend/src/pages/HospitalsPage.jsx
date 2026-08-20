import HospitalsList from '../components/shared/HospitalsList';
import PageBanner from '../components/shared/PageBanner';
import hospitalbanner from '../assets/images/navjyoti/hospital-banner.png';


const HospitalsPage = () => {
    return (
        <>
            <PageBanner
                title="Our Hospitals"
                breadcrumbText="Hospitals"
                bgImage={ hospitalbanner }
            />
            <section className="2xxl:pt-25 md:pt-17.5 sm:pt-12.5 pt-10 pb-15 relative z-1 bg-white">
                <HospitalsList />
            </section>
        </>
    );
};

export default HospitalsPage;
