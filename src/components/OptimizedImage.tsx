import React, { useState, useRef, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  onLoad?: () => void;
  onError?: () => void;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  priority = false,
  onLoad,
  onError
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Convert Cloudinary URL to WebP with optimizations
  const getOptimizedSrc = (originalSrc: string) => {
    if (originalSrc.includes('cloudinary.com')) {
      const parts = originalSrc.split('/upload/');
      if (parts.length === 2) {
        return `${parts[0]}/upload/f_webp,q_auto,w_auto,dpr_auto,c_scale/${parts[1]}`;
      }
    }
    return originalSrc;
  };

  // Generate responsive srcSet for Cloudinary images
  const getSrcSet = (originalSrc: string) => {
    if (originalSrc.includes('cloudinary.com')) {
      const parts = originalSrc.split('/upload/');
      if (parts.length === 2) {
        const baseUrl = parts[0];
        const imagePath = parts[1];
        return [
          `${baseUrl}/upload/f_webp,q_auto,w_400,dpr_auto,c_scale/${imagePath} 400w`,
          `${baseUrl}/upload/f_webp,q_auto,w_800,dpr_auto,c_scale/${imagePath} 800w`,
          `${baseUrl}/upload/f_webp,q_auto,w_1200,dpr_auto,c_scale/${imagePath} 1200w`,
          `${baseUrl}/upload/f_webp,q_auto,w_1600,dpr_auto,c_scale/${imagePath} 1600w`
        ].join(', ');
      }
    }
    return undefined;
  };

  useEffect(() => {
    if (priority) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observerRef.current?.disconnect();
        }
      },
      {
        rootMargin: '200px'
      }
    );

    if (containerRef.current) {
      observerRef.current.observe(containerRef.current);
    }

    return () => {
      observerRef.current?.disconnect();
    };
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    // Try fallback: encode the URL segments and retry (handles &, spaces, etc.)
    const encodedSrc = src.split('/').map(segment =>
      segment === '' ? segment : encodeURIComponent(segment)
    ).join('/');

    if (e.currentTarget.src !== window.location.origin + encodedSrc &&
        !e.currentTarget.src.includes(encodeURIComponent(encodedSrc))) {
      e.currentTarget.src = encodedSrc;
      return;
    }

    setHasError(true);
    onError?.();
  };

  const optimizedSrc = getOptimizedSrc(src);
  const srcSet = getSrcSet(src);

  return (
    <div className={`relative overflow-hidden ${className}`} ref={containerRef}>
      {/* Skeleton shimmer placeholder */}
      {!isLoaded && !hasError && (
        <div
          className="absolute inset-0 skeleton-loader"
          aria-hidden="true"
        >
          {/* Diamond icon as branded placeholder */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            <svg
              className="w-10 h-10 text-dark-500/60"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 3h12l4 6-10 13L2 9z" />
              <path d="M11 3l1 6h8" />
              <path d="M13 3l-1 6H4" />
              <path d="M2 9l10 4 10-4" />
            </svg>
            <div className="h-1.5 w-16 rounded-full bg-dark-600/40" />
          </div>
        </div>
      )}

      {/* Main Image */}
      {isInView && (
        <img
          src={optimizedSrc}
          srcSet={srcSet}
          sizes={sizes}
          alt={alt}
          className={`w-full h-full ${className.includes('object-contain') ? 'object-contain' : 'object-cover'} transition-opacity duration-500 ease-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={handleLoad}
          onError={handleError}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
        />
      )}

      {/* Error fallback */}
      {hasError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-dark-800 gap-2">
          <svg
            className="w-8 h-8 text-dark-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
          <span className="text-xs text-dark-300">Image unavailable</span>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;
