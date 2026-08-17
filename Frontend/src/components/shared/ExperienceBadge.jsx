import { siteData } from '../../data/siteData';

export default function ExperienceBadge({ className = '' }) {
    // Determine the years of service from stats
    const yearsStat = siteData.stats.find(s => s.label.includes('Years'));
    const value = yearsStat ? yearsStat.value : '20';
    const suffix = yearsStat ? yearsStat.suffix : '+';

    return (
        <div className={`absolute z-99 max-sm:hidden ${className}`}>
            <div className="inline-flex items-center gap-3.75 bg-white/90 sm:rounded-xxl rounded-lg py-3 px-5 backdrop-blur-xs shadow-info-widget-10 animate-move3">
                <span className="xl:text-5xxl text-3xxl font-bold text-primary"><span className="value counted" data-value={value}>{value}</span>{suffix}</span>
                <span className="sm:text-lg text-base text-justify text-secondary font-semibold block font-title">Years Experienced</span>
            </div>
        </div>
    );
}
