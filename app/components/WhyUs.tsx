'use client';

import Image from 'next/image';

const features = [
  {
    id: '01',
    title: 'Pure Organic',
    description:
      'From soothing aloe Vera to revitalizing lavender, each element is handpicked.',
  },
  {
    id: '02',
    title: 'No Chemicals',
    description:
      'Reprehenderit esse labore id veniam ut veniam non ex adipisicing amet ullamco.',
  },
  {
    id: '03',
    title: 'Transformative',
    description:
      "Experience hair that's not only clean but also deeply nourished and beautifully rejuvenated.",
  },
  {
    id: '04',
    title: 'Environmentally',
    description:
      'We are committed to reducing our carbon footprint. Our packaging is eco-friendly.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 px-4 md:px-20 bg-gradient-to-br from-[#f0faff] to-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-12 items-center">
        {/* Left side - two images */}
        <div className="md:col-span-2 flex flex-col gap-4">
          <Image
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Product 1"
            width={500}
            height={300}
            className="rounded-xl object-cover w-full h-auto"
          />
          <Image
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
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
            <p className="text-gray-600 max-w-2xl text-base md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh,
              sit amet tempor nibh. Nulla consectetur nisl nec velit pharetra, a eleifend odio
              dignissim.
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
