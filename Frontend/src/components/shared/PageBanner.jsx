import { Link } from 'react-router-dom';

export default function PageBanner({ title, breadcrumbText, bgImage = "https://images.unsplash.com/photo-1530497610245-94d7c16cda28?q=80&w=800" }) {
    return (
        <div className="2xxl:min-h-125 lg:min-h-112.5 md:min-h-full sm:min-h-87.5 min-h-75 bg-cover bg-center bg-light relative z-1 w-full overflow-hidden pb-7.5 before:absolute ltr:before:left-0 rtl:before:right-0 before:top-0 before:size-full before:bg-primary before:opacity-70" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="container relative z-1 h-full table">
                <div className="table-cell 2xxl:h-125 lg:h-112.5 md:h-95 sm:h-87.5 h-75 align-middle pt-22.5 pb-5 text-center">
                    <h1 className="2xxl:text-8xl xl:text-6xxl md:text-[48px] text-[32px] max-sm:text-[26px] font-semibold mb-3.75 break-word text-white wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">{title}</h1>
                    <nav className="wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                        <ul className="inline-block rounded-5xl lg:py-2.5 py-1.5 lg:px-7.5 px-5 bg-white shadow-breadcrumb">
                            <li className="inline-block lg:text-base text-sm font-normal capitalize text-heading"><Link to="/" className="text-primary">Home</Link></li>
                            <li className="inline-block lg:text-base text-sm font-normal capitalize text-heading ps-2 relative before:content-['\f101'] before:float-start before:text-heading before:font-bold before:font-['Font_Awesome_5_Free'] before:text-sm before:pe-3 before:top-0.5 before:relative">{breadcrumbText || title}</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}
