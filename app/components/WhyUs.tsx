import React from 'react';

const WhyUs = () => {
  return (
    <div className="p-2 bg-red-950 min-h-screen flex items-center justify-center mt-10">
      <section className="relative h-[86vh] w-[98%] overflow-hidden">
        <div className="relative w-full h-full bg-red-900 p-2">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover absolute top-0 left-0 z-0"
          >
            <source src="/0305.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Content Box Aligned to the Left */}
          {/* <div className="absolute top-1/2 left-6 transform -translate-y-1/2 bg-white bg-opacity-90 p-8 rounded-md shadow-lg max-w-md z-10"> */}
          <div className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-90 p-4 rounded-md shadow-lg w-[90%] 
                md:left-6 md:p-8 md:max-w-md z-10">

            <h1 className="text-3xl font-bold mb-4">Why Us?</h1>
            <p className="text-sm md:text-base text-gray-700">
              We provide unmatched quality and value, driven by innovation and a customer-first approach.
              Our team is dedicated to delivering solutions that exceed expectations every time.
               We provide unmatched quality and value, driven by innovation and a customer-first approach.
              Our team is dedicated to delivering solutions that exceed expectations every time.
               We provide unmatched quality and value, driven by innovation and a customer-first approach.
              Our team is dedicated to delivering solutions that exceed expectations every time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;