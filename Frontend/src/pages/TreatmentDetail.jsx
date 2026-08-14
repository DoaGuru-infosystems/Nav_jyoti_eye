import { useParams, Navigate } from 'react-router-dom';
import { treatmentsData } from '../data/treatments';

const TreatmentDetail = () => {
    const { slug } = useParams();
    const treatment = treatmentsData[slug];

    if (!treatment) {
        return <Navigate to="/404" replace />;
    }

    return (
        <div className="page-content bg-white">
            <section className="content-inner-1">
                <div className="container">
                    <h1 className="title mb-30">{treatment.title}</h1>
                    <p>{treatment.description}</p>
                </div>
            </section>
        </div>
    );
};

export default TreatmentDetail;
