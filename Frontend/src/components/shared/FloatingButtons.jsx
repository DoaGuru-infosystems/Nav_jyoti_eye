import { siteData } from '../../data/siteData';

export default function FloatingButtons() {
    // Basic phone number cleaning for URLs
    const phone = siteData.contact.primaryPhone.replace(/\D/g, '');
    // Ensure country code for WhatsApp (assuming India +91 if length is 10)
    const whatsapp = "917024076325";

    return (
        <div className="fixed bottom-24 sm:bottom-10 right-5 z-[9999] flex flex-col gap-4 animate-fadeIn">
            <a 
                href={`https://wa.me/${whatsapp}?text=Hi%20Nav%20Jyoti%20Eye%20Hospital,%20I%20would%20like%20to%20book%20an%20appointment.`} 
                target="_blank" 
                rel="noreferrer" 
                className="size-12 sm:size-14 rounded-full bg-[#25D366] text-white flex items-center justify-center text-3xl shadow-lg shadow-black/20 hover:scale-110 hover:-translate-y-1 transition-all duration-300"
                aria-label="WhatsApp"
            >
                <i className="fa-brands fa-whatsapp"></i>
            </a>
            <a 
                href={`tel:${phone}`} 
                className="size-12 sm:size-14 rounded-full bg-primary text-white flex items-center justify-center text-2xl shadow-lg shadow-black/20 hover:scale-110 hover:-translate-y-1 transition-all duration-300"
                aria-label="Call Us"
            >
                <i className="feather icon-phone-call"></i>
            </a>
        </div>
    );
}
