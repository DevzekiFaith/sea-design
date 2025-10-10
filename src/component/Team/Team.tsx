import React from "react";
import Image from "next/image";

const teamMembers = [
  {
    id: 1,
    name: "Chief Executive Officer",
    role: "Managing Director/CEO",
    image: "/images/ceo3.jpg",
    content:
      "Our CEO brings over 15 years of experience in the energy sector, leading strategic initiatives and driving innovation across our global operations. With a vision for sustainable energy solutions, they guide our company towards excellence in service delivery and technological advancement.",
  },
  {
    id: 2,
    name: "Chief Operating Officer",
    role: "COO",
    image: "/images/coo1.jpg",
    content:
      "Our COO oversees daily operations and ensures seamless execution of our energy projects. With expertise in operational excellence and process optimization, they maintain the highest standards of quality and efficiency across all our service offerings.",
  },
  {
    id: 3,
    name: "Assets and Facilities Manager",
    role: "General Manager Assets and Facilities",
    image: "/images/md1.jpg",
    content:
      "Our General Manager Assets and Facilities leads business development and strategic partnerships, driving growth in the energy sector. With extensive experience in international markets, they ensure our company remains at the forefront of industry innovation and client satisfaction.",
  },
];

const Team: React.FC = () => {
  return (
    <div className="py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-3 sm:mb-4">
            Our Leadership Team
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            Meet the visionaries leading our company forward
          </p>
        </div>
        
        <div className="relative">
          {/* Scroll Indicator - Hidden on mobile */}
          <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 -mr-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 bg-opacity-20 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-opacity-30 transition-all duration-300">
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="neumorphic p-4 sm:p-6 md:p-8 rounded-xl overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="flex justify-center mb-4 sm:mb-6">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 relative">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      style={{ objectFit: "cover" }}
                      className="rounded-full border-4 border-gray-100 shadow-lg"
                      sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, 128px"
                    />
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-black text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-bold mb-3 sm:mb-4 text-sm sm:text-base uppercase tracking-wide">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-medium">
                    {member.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
