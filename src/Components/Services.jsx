import React from 'react';

const services = [
  {
    title: 'Wedding Photography',
    description: 'Comprehensive coverage of your special day, from preparation to reception.',
    price: 'Starting at $2,500',
    features: [
      '8 hours of coverage',
      'Two photographers',
      'Online gallery',
      'High-resolution images',
      'Engagement session'
    ]
  },
  {
    title: 'Half-Saree Function',
    description: 'Professional coverage for your business events and conferences.',
    price: 'Starting at $1,500',
    features: [
      '6 hours of coverage',
      'Professional editing',
      'Quick turnaround',
      'Commercial usage rights',
      'Digital delivery'
    ]
  },
  {
    title: 'Birthday Celebrations',
    description: 'Capture all the joy and excitement of your celebration.',
    price: 'Starting at $800',
    features: [
      '4 hours of coverage',
      'Candid and posed shots',
      'Online gallery',
      'Print release',
      'Photo highlights reel'
    ]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" >
        <h2 className="text-yellow-400 text-center text-3xl font-bold mb-8">Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" >
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105"
            >
              <div className="p-8" >
                <h3 className="text-white font-bold text-xl mb-2">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                {/* <p className="text-2xl font-bold text-indigo-600 mb-6">{service.price}</p> */}
                
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-white flex items-center">
                      <svg
                        className="h-5 w-5 text-indigo-600 mr-2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {/* <button className="w-full mt-8 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors">
                  Book Now
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;