import React, { useState } from 'react';
import { Camera, ChevronLeft, ChevronRight, X } from 'lucide-react';


const galleryImages = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200',
    title: 'Corporate Event'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&q=80&w=1200',
    title: 'Wedding Reception'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200',
    title: 'Music Festival'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1200',
    title: 'Conference'
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1200',
    title: 'Fashion Show'
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1200',
    title: 'Private Party'
  }
];

function Gallery1() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (direction: 'left' | 'right') => {
    const gallery = document.getElementById('gallery');
    if (gallery) {
      const scrollAmount = gallery.clientWidth * 0.8;
      const newPosition = direction === 'left' 
        ? scrollPosition - scrollAmount 
        : scrollPosition + scrollAmount;
      
      gallery.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
      setScrollPosition(newPosition);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-10 bg-gray-900/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Camera className="w-8 h-8" />
            <h1 className="text-2xl font-bold">EventLens Studio</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-2">Event Gallery</h2>
          <p className="text-gray-400 mb-8">Capturing moments that last forever</p>
          
          {/* Gallery Container */}
          <div className="relative">
            <button 
              onClick={() => handleScroll('left')}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button 
              onClick={() => handleScroll('right')}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div 
              id="gallery"
              className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
              style={{ scrollBehavior: 'smooth' }}
            >
              {galleryImages.map((image) => (
                <div 
                  key={image.id}
                  className="flex-none w-[300px] md:w-[400px] snap-center"
                  onClick={() => setSelectedImage(image.id)}
                >
                  <div className="relative group cursor-pointer overflow-hidden rounded-lg">
                    <img 
                      src={image.url} 
                      alt={image.title}
                      className="w-full h-[400px] object-cover transform transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <p className="text-white p-4 font-medium">{image.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-all"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6" />
          </button>
          
          <img 
            src={galleryImages.find(img => img.id === selectedImage)?.url} 
            alt={galleryImages.find(img => img.id === selectedImage)?.title}
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />
        </div>
      )}
    </div>
  );
}

export default Gallery1;