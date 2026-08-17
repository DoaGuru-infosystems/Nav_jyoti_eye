import { useLightGallery } from '../hooks/useLightGallery';
import { videos } from '../data/videos';

export default function VideosPage() {
    const galleryRef = useLightGallery({
        selector: '.lightgallery-item'
    });

    const fallbackThumbnails = [
        "https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?auto=compress&cs=tinysrgb&w=384&h=256&fit=crop",
        "https://images.pexels.com/photos/6749718/pexels-photo-6749718.jpeg?auto=compress&cs=tinysrgb&w=384&h=256&fit=crop",
        "https://images.pexels.com/photos/9929033/pexels-photo-9929033.jpeg?auto=compress&cs=tinysrgb&w=384&h=256&fit=crop"
    ];

    return (
        <div className="page-content bg-white">
            <section className="content-inner bg-light">
                <div className="container">
                    <div className="text-center mb-10">
                        <h2 className="title mb-3">Eye Care Videos</h2>
                        <p className="text-lg">Explore our educational video library to learn more about our treatments and patient care.</p>
                    </div>

                    <div ref={galleryRef} className="row">
                        {videos.map((video, index) => (
                            <div key={video.id} className="lg:w-1/3 md:w-1/2 w-full px-3.5 mb-7.5">
                                <a 
                                    href={video.videoUrl} 
                                    className="lightgallery-item group block relative overflow-hidden rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
                                    data-src={video.videoUrl}
                                >
                                    <div className="relative">
                                        <img src={video.thumbnail || fallbackThumbnails[index % fallbackThumbnails.length]} alt={video.title} className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500" />
                                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                                            <div className="size-16 rounded-full bg-white/90 flex items-center justify-center text-primary group-hover:scale-110 transition-transform shadow-lg">
                                                <i className="fas fa-play text-xl ms-1"></i>
                                            </div>
                                        </div>
                                        <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-sm font-medium">
                                            {video.duration}
                                        </div>
                                    </div>
                                    <div className="p-5 bg-white border border-t-0 border-gray-100 rounded-b-2xl">
                                        <h4 className="text-xl mb-0 font-semibold group-hover:text-primary transition-colors">{video.title}</h4>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
