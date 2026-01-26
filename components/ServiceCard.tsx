import React from "react";

export type Service = {
  text: string;
  description: string;
  icon: React.ReactNode;
  gradient: string; // Tailwind gradient classes
  border: string;   // Tailwind border classes
};

type ServiceCardProps = {
  service: Service;
};

function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="group relative p-6 rounded-3xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-transparent transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl cursor-pointer overflow-hidden">

      {/* Hover background */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />

      <div className="relative flex items-center gap-6">

        {/* Icon */}
        <div
          className={`p-4 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border ${service.border} group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
        >
          <span className="text-3xl">{service.icon}</span>
        </div>

        {/* Text */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-yellow-300 transition-all duration-500">
              {service.text}
            </h3>

            <div className="opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500">
              <div className="p-2 rounded-full bg-white/10">
                <svg
                  className="w-5 h-5 text-yellow-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </div>
          </div>

          <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
            {service.description}
          </p>
        </div>

      </div>
    </div>
  );
}

export default ServiceCard;
