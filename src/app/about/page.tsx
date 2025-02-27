import React from "react";

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-8">About Lucktang</h1>
      <div className="bg-blue-800 p-8 rounded-2xl shadow-lg">
        <p className="text-lg mb-6">
          Welcome to Lucktang! We are a leading company in the design and
          technology industry, dedicated to providing innovative solutions and
          exceptional services to our clients. Our team of experts is passionate
          about creating unique and effective designs that meet the needs of our
          diverse clientele.
        </p>
        <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg mb-6">
          At Lucktang, our mission is to deliver high-quality design and
          technology solutions that empower businesses to achieve their goals. We
          strive to exceed our clients' expectations through creativity,
          innovation, and a commitment to excellence.
        </p>
        <h2 className="text-3xl font-semibold mb-4">Our Values</h2>
        <ul className="list-disc list-inside text-lg mb-6">
          <li className="mb-2">
            <strong>Innovation:</strong> We embrace new ideas and technologies to
            stay ahead in the industry.
          </li>
          <li className="mb-2">
            <strong>Quality:</strong> We are committed to delivering top-notch
            products and services.
          </li>
          <li className="mb-2">
            <strong>Integrity:</strong> We conduct our business with honesty and
            transparency.
          </li>
          <li className="mb-2">
            <strong>Customer Focus:</strong> We prioritize our clients' needs and
            work closely with them to achieve their vision.
          </li>
        </ul>
        <h2 className="text-3xl font-semibold mb-4">Our Team</h2>
        <p className="text-lg mb-6">
          Our team is composed of talented professionals with diverse backgrounds
          in design, technology, and business. We work collaboratively to bring
          our clients' ideas to life and ensure their success.
        </p>
        <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
        <p className="text-lg">
          If you have any questions or would like to learn more about our
          services, please feel free to <a href="/contact" className="text-blue-500 hover:underline">contact us</a>. We look
          forward to working with you!
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
