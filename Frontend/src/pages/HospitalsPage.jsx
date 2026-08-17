import HospitalsList from '../components/shared/HospitalsList';
import PageBanner from '../components/shared/PageBanner';

const HospitalsPage = () => {
    return (
        <>
            <PageBanner 
                title="Our Hospitals" 
                breadcrumbText="Hospitals" 
                bgImage="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1600&h=600"
            />
            <section className="2xxl:pt-25 md:pt-17.5 sm:pt-12.5 pt-10 pb-15 relative z-1 bg-white">
                <HospitalsList />
            </section>
        </>
    );
};

export default HospitalsPage;
