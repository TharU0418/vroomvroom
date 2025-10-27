'use client';

import Image from 'next/image';

const features = [
  {
    id: '01',
    title: 'Your Safty',
    description:
      'Your safety is our top priority. All our drivers are thoroughly vetted and trained to ensure a secure journey.',
  },
  {
    id: '02',
    title: 'Professional Drivers',
    description:
      'Our drivers are experienced, courteous, and knowledgeable about local routes and traffic conditions.',
  },
  {
    id: '03',
    title: 'Premium Quality Service',
    description:
      "We pride ourselves on delivering top-notch service, ensuring your ride is comfortable and enjoyable.",
  },
  {
    id: '04',
    title: '24/7 Customer Support',
    description:
      'We are here to assist you anytime, anywhere. Our customer support team is available around the clock to address your needs.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 px-4 md:px-20 bg-gradient-to-br from-[#f0faff] to-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-12 items-center">
        {/* Left side - two images */}
        <div className="md:col-span-2 flex flex-col gap-4">
          <Image
            src="/home2.webp" 
            alt="Product 1"
            width={500}
            height={300}
            className="rounded-xl object-cover w-full h-auto"
          />
          <Image
            src="/home1.webp" 
            alt="Product 2"
            width={500}
            height={300}
            className="rounded-xl object-cover w-full h-auto"
          />
        </div>

        {/* Right side - larger text area */}
        <div className="md:col-span-3 space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">Why Choose Us</h2>
            <p className="text-gray-600 text-base">
   Vroom Vroom.lk offers you the finest professional drivers in Sri Lanka, from a daily commute driver in Colombo, 
   long trips to Jaffna, or tour travelling in Ella, Kandy, and Galle. Whoever cannot afford their dream car, we are here to help. 
   Our professional crew will guide you through the entire process, from selecting the perfect vehicle to dealing with all the paperwork 
   and insurance. We make it a breeze so you can focus on having good times in your new vehicle.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((feature) => (
              <div key={feature.id} className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="text-red-500 font-bold text-xl mb-2">{feature.id}</div>
                <h4 className="text-lg font-semibold text-gray-800 mb-1">{feature.title}</h4>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
