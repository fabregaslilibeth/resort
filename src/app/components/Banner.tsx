import React from 'react';

interface BannerProps {
  imageUrl: string;
  className?: string;
  height?: string;
  title?: string;
  subtitle?: string;
}

const Banner: React.FC<BannerProps> = ({
  imageUrl,
  className = 'h-[30vh] lg:h-[60vh]',
  title,
  subtitle
}) => {
  return (
    <div 
      className={`relative w-full ${className}`}
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay for better text readability */}
      
      {/* Content */}
      {(title || subtitle) && (
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          {title && (
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
              {title}
            </h1>
          )}
          {subtitle && (
            <p className="text-lg md:text-xl lg:text-2xl font-medium drop-shadow-lg max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Banner;
