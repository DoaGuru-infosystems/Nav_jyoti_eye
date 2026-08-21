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
            <section className="content-inner-1 pt-32 pb-20 md:pt-40 md:pb-32">
                <div className="container">
                    <h1 className="text-3xl md:text-5xl font-bold mb-10 text-secondary">{pageData.title}</h1>
                    <div className="prose max-w-none text-lg">
                        {pageData.content}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LegalPage;
