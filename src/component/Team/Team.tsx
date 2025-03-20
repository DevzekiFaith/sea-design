import React from "react";
import Image from "next/image";
import Link from "next/link";

const teamMembers = [
  {
    id: 1,
    name: "Prince (Dr) Andrew Lucky Eseigbe IGBERAESE, D. Engr, M, SC, FCP, MIEEE, FIMC, CMC",
    role: "CEO",
    image: "/images/ceo3.jpg",
    content:
      "Prince (Dr) Andrew Lucky Eseigbe IGBERAESE is the CEO of Lucktang Int'l Limited. With over 20 years of experience in the marine industry, he leads the company with a vision for innovation and excellence.",
    profileLink: "/about/ceoprofile",
  },
  {
    id: 2,
    name: "Njideka Nwalor  BSC, BSN, Hon. D.N",
    role: "COO",
    image: "/images/coo1.jpg",
    content:
      "Njideka Nwalor is the COO of Lucktang Int'l Limited. She oversees the company's operations, ensuring efficiency and effectiveness in all processes.",
    profileLink: "/about/cooprofile",
  },
  {
    id: 3,
    name: "Michael Johnson",
    role: "EXECUTIVE",
    image: "/images/me7.jpg",
    content:
      "Michael Johnson is an Executive at Lucktang Int'l Limited. He is responsible for strategic planning and business development, driving the company's growth and success.",
  },
];

const Team: React.FC = () => {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold text-blue-500 text-center mb-8">
        Meet Our Team
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="bg-black shadow-md p-8 rounded-2xl transform transition-transform duration-500 hover:scale-105 hover:translate-y-6"
          >
            <div className="flex justify-center mb-6">
              <div className="w-56 h-56">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={224}
                  height={224}
                  className="rounded-full object-cover w-full h-full"
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center text-white">
              {member.name}
            </h3>
            <p className="text-center text-gray-500 mb-4">{member.role}</p>
            <p className="text-center text-gray-400 mb-4">{member.content}</p>
            {member.profileLink && (
              <div className="flex justify-center">
                <Link href={member.profileLink} legacyBehavior>
                  <button className="bg-blue-600 text-white 
                  px-6 py-2 rounded-full font-semibold 
                  hover:bg-blue-700 transition duration-300 cursor-pointer">
                    View Profile
                  </button>
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
