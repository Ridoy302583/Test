import React from 'react';
import { FiCheck } from 'react-icons/fi';

const PricingCard = ({ title, price, features }) => (
  <div className="bg-gray-800 p-8 rounded-lg text-center">
    <h3 className="text-2xl font-semibold mb-4">{title}</h3>
    <div className="text-4xl font-bold mb-6">${price}<span className="text-xl font-normal">/mo</span></div>
    <ul className="text-left mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center mb-2">
          <FiCheck className="text-green-400 mr-2" />
          {feature}
        </li>
      ))}
    </ul>
    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full transition-colors">
      Choose Plan
    </button>
  </div>
);

const Pricing = () => {
  return (
    <section className="light-beam py-20 px-6 md:px-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Simple, Transparent Pricing
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <PricingCard
          title="Starter"
          price={29}
          features={[
            "Up to 1,000 customers",
            "Basic analytics",
            "Email support",
            "1 team member"
          ]}
        />
        <PricingCard
          title="Growth"
          price={79}
          features={[
            "Up to 10,000 customers",
            "Advanced analytics",
            "Priority support",
            "5 team members"
          ]}
        />
        <PricingCard
          title="Enterprise"
          price={199}
          features={[
            "Unlimited customers",
            "Custom analytics",
            "24/7 dedicated support",
            "Unlimited team members"
          ]}
        />
      </div>
    </section>
  );
};

export default Pricing;
