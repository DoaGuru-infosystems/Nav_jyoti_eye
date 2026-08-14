import { useParams, Navigate } from 'react-router-dom';
import { legalPagesData } from '../data/legalPages';

const LegalPage = () => {
    const { slug } = useParams();
    const pageData = legalPagesData[slug];

    if (!pageData) {
        return <Navigate to="/404" replace />;
    }

    return (
        <div className="page-content bg-white">
            <section className="content-inner-1">
                <div className="container">
                    <h1 className="title mb-30">{pageData.title}</h1>
                    <div className="prose max-w-none">
                        <p>{pageData.content}</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LegalPage;
