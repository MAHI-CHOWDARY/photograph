import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Loader2 } from 'lucide-react';
// import img1 from '../Images/1.jpg';
// import img2 from '../Images/2.jpg';
// import img3 from '../Images/3.jpg';
// import img4 from '../Images/4.jpg';
// import img5 from '../Images/5.jpg';
// import img6 from '../Images/6.jpg';
// import img7 from '../Images/7.jpg';
// import img8 from '../Images/8.jpg';
// import img9 from '../Images/9.jpg';
// import img10 from '../Images/10.jpg';
// import img11 from '../Images/11.jpg';
// import img12 from '../Images/12.jpg';
// import img13 from '../Images/13.jpg';

// const images = [
// img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13
// ];

const images = [
  "/images/1.webp",
  "/images/2.webp",
  "/images/3.webp",
  "/images/4.webp",
  "/images/5.webp",
  "/images/6.webp",
  "/images/7.webp",
  "/images/8.webp",
  "/images/9.webp",
  "/images/10.webp",
  "/images/11.webp",
  "/images/12.webp",
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  let [fullyLoaded,setFullyLoaded]=useState(false)


  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
  let loaded = 0;
  images.forEach((src) => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      loaded += 1;
      if (loaded === images.length) {
        setFullyLoaded(true);
      }
    };
    img.onerror = () => {
      // still count error as "loaded" to prevent spinner freeze
      loaded += 1;
      if (loaded === images.length) {
        setFullyLoaded(true);
      }
    };
  });
}, []);


  const getVisibleImages = () => {
    if (isMobile) {
      return [{ src: images[currentIndex], index: currentIndex }];
    }

    const result = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % images.length;
      result.push({ src: images[index], index });
    }
    return result;
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    let interval;
    if (!isMouseOver && fullyLoaded) {
      interval = setInterval(() => {
        nextImage();
      }, 5000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isMouseOver,fullyLoaded]);

   
  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-2">Portfolio</h2>
        <div className="relative w-full max-w-7xl mx-auto px-4 py-8">
          <div
            className="relative overflow-hidden rounded-xl shadow-lg bg-gray-900"
            onMouseEnter={() => setIsMouseOver(true)}
            onMouseLeave={() => setIsMouseOver(false)}
          >
          {!fullyLoaded ? ( <div className="flex justify-center items-center h-96">
            <Loader2 className="animate-spin w-10 h-10 text-blue-600" />
          </div>):(
            <>
            <div className={`flex justify-center ${isMobile ? 'p-0' : 'gap-4 p-4'}`}>
              {getVisibleImages().map(({ src, index }, arrayIndex) => (
                <div
                  key={`${src}-${index}`}
                  className={`relative transition-all duration-500 ease-in-out ${isMobile
                      ? 'w-full h-[50vh] min-h-[300px] max-h-[600px]'
                      : arrayIndex === 1
                        ? 'w-[500px] h-[400px] z-10'
                        : 'w-[400px] h-[300px] opacity-70 self-center'
                    }`}
                >
                  <img
                    src={src}
                    alt={`Gallery ${index + 1}`}
                    className={`w-full h-full object-cover  ${isMobile
                        ? 'rounded-none'
                        : `rounded-lg shadow-lg transition-all duration-300 ${arrayIndex === 1 ? 'scale-100 shadow-xl' : 'scale-95'
                        }`
                      }`}
                    draggable="false"
                  />
                  <div
                    className={`absolute inset-0 transition-opacity duration-300 ${isMobile
                        ? 'bg-gradient-to-b from-black/10 to-black/40'
                        : `bg-black rounded-lg ${arrayIndex === 1 ? 'opacity-0 hover:opacity-10' : 'opacity-40'
                        }`
                      }`}
                  />
                </div>
              ))}
            </div>

            <button
              onClick={previousImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 z-20"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 z-20"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${currentIndex === index
                      ? 'bg-white w-4'
                      : 'bg-white/50 hover:bg-white/80'
                    }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
            </>
          ) }
          </div> 
        </div>
        </div>
    </section>
  );
};

export default Gallery;
