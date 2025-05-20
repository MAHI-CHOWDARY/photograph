import React from 'react';
import { Camera } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="Photographer"
              className="rounded-lg shadow-lg"
            />
          </div>
          
          <div>
            <div className="flex items-center mb-4">
              <Camera className="h-8 w-8 text-indigo-600" />
              <h2 className="text-4xl font-bold text-yellow-400 ml-2">About Me</h2>
            </div>
            
            <p className="text-gray-600 mb-6">
            I have a strong passion for photography and a sharp eye for detail, 
            and I'm excited to capture the world through my camera. Even though
             I'm new to the field, my skills and dedication help me take meaningful
              photos that tell stories, bring out emotions, and preserve special moments.
            </p>
            
            <p className="text-gray-600 mb-6">
            I love combining creativity with a natural storytelling style, 
            making sure every picture feels real and expressive. 
            Whether it's a candid moment or a well-planned portrait, 
            I aim to create photos that people can cherish forever.
            </p>
            
            {/* <div className="grid grid-cols-2 gap-6 text-center">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="text-3xl font-bold text-indigo-600">500+</h3>
                <p className="text-gray-600">Events Captured</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="text-3xl font-bold text-indigo-600">10+</h3>
                <p className="text-gray-600">Years Experience</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;