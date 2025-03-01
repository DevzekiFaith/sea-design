import React from "react";
import Image from "next/image";

const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO",
    image: "/images/p3.jpg",
    content:
      "John Doe is the CEO of Lucktang Int'l Limited. With over 20 years of experience in the marine industry, he leads the company with a vision for innovation and excellence.",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "COO",
    image: "/images/p5.jpg",
    content:
      "Jane Smith is the COO of Lucktang Int'l Limited. She oversees the company's operations, ensuring efficiency and effectiveness in all processes.",
  },
  {
    id: 3,
    name: "Michael Johnson",
    role: "Executive",
    image: "/images/p1.jpg",
    content:
      "Michael Johnson is an Executive at Lucktang Int'l Limited. He is responsible for strategic planning and business development, driving the company's growth and success.",
  },
];

const Team: React.FC = () => {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold text-blue-500 text-center mb-8">Meet Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <div key={member.id} className="bg-black shadow-md p-6 rounded-2xl">
            <div className="flex justify-center mb-4">
              <Image
                src={member.image}
                alt={member.name}
                width={150}
                height={150}
                className="rounded-full"
              />
            </div>
            <h3 className="text-xl font-semibold text-center">{member.name}</h3>
            <p className="text-center text-gray-500 mb-4">{member.role}</p>
            <p className="text-center text-gray-700">{member.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
