import { useEffect, useRef } from 'react';

export function useLightGallery(options = {}) {
  const galleryRef = useRef(null);
  const lgInstance = useRef(null);

  useEffect(() => {
    if (galleryRef.current && window.lightGallery) {
      lgInstance.current = window.lightGallery(galleryRef.current, {
        plugins: [window.lgZoom, window.lgThumbnail, window.lgVideo],
        speed: 500,
        licenseKey: '0000-0000-000-0000', // required to suppress console warning in v2
        ...options
      });
    }

    return () => {
      if (lgInstance.current) {
        lgInstance.current.destroy(true);
        lgInstance.current = null;
      }
    };
  }, [options]);

  return galleryRef;
}
