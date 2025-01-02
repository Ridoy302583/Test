import React from 'react';
import { FiTarget, FiTrendingUp, FiUsers } from 'react-icons/fi';

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-gray-800 p-6 rounded-lg">
    <div className="text-4xl mb-4 text-blue-400">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const Features = () => {
  return (
    <section className="light-beam py-20 px-6 md:px-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Why Choose StartMotion?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard
          icon={<FiTarget />}
          title="Precision Targeting"
          description="Reach your ideal customers with our advanced targeting tools and analytics."
        />
        <FeatureCard
          icon={<FiTrendingUp />}
          title="Rapid Growth"
          description="Scale your startup faster with our proven growth strategies and automation."
        />
        <FeatureCard
          icon={<FiUsers />}
          title="Customer-Centric"
          description="Build lasting relationships with your customers using our CRM and support tools."
        />
      </div>
    </section>
  );
};

export default Features;
