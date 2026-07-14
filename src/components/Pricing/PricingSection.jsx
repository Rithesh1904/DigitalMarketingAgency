import React from 'react';
import { Link } from 'react-router-dom';
import { FiCheckCircle } from 'react-icons/fi';

const pricingPlans = [
  {
    name: 'Starter',
    price: '$499',
    description: 'Perfect for small businesses to establish their digital presence.',
    features: ['Basic SEO Optimization', 'Social Media (2 platforms)', 'Monthly Report', 'Email Support', '1 Blog Post/mo'],
    highlighted: false,
  },
  {
    name: 'Professional',
    price: '$999',
    description: 'Ideal for growing businesses with aggressive marketing goals.',
    features: ['Advanced SEO & Tracking', 'Social Media (4 platforms)', 'Google Ads Management', 'Bi-weekly Reports', '4 Blog Posts/mo', 'Priority Support'],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: '$2,499',
    description: 'Full-scale digital marketing for large operations.',
    features: ['Enterprise SEO Strategy', 'Full Social Management', 'Multi-channel Ads', 'Web Dev Support', 'Daily Monitoring', 'Dedicated Manager'],
    highlighted: false,
  },
];

const PricingSection = () => (
  <section className="py-20 app-section">
    <div className="container mx-auto px-6 md:px-12">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-accent font-semibold tracking-wider uppercase text-sm">Pricing Plans</span>
        <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-6">Simple, Transparent Pricing</h2>
        <p className="text-gray-300 text-lg">Choose the plan that fits your business. No hidden fees.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
        {pricingPlans.map((plan, i) => (
          <div key={i} className={`rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 ${plan.highlighted ? 'bg-primary text-white shadow-2xl scale-105 z-10' : 'app-card text-gray-200 shadow-lg'}`}>
            {plan.highlighted && (
              <div className="text-center mb-4">
                <span className="bg-accent text-white px-3 py-1 rounded-full text-xs font-bold uppercase">Most Popular</span>
              </div>
            )}
            <h3 className={`text-2xl font-bold mb-2 text-center ${plan.highlighted ? 'text-white' : 'text-white'}`}>{plan.name}</h3>
            <div className="text-center mb-4">
              <span className="text-4xl font-bold">{plan.price}</span>
              <span className={`text-sm ${plan.highlighted ? 'text-gray-300' : 'text-gray-400'}`}>/mo</span>
            </div>
            <p className={`text-center text-sm mb-6 ${plan.highlighted ? 'text-gray-300' : 'text-gray-300'}`}>{plan.description}</p>
            <ul className="space-y-3 mb-8">
              {plan.features.map((f, fi) => (
                <li key={fi} className="flex items-center gap-3">
                  <FiCheckCircle className={`w-5 h-5 flex-shrink-0 ${plan.highlighted ? 'text-accent' : 'text-secondary'}`} />
                  <span className={`text-sm ${plan.highlighted ? 'text-gray-200' : 'text-gray-300'}`}>{f}</span>
                </li>
              ))}
            </ul>
            <Link to="/contact" className={`block text-center w-full py-3 rounded-full font-bold transition-colors ${plan.highlighted ? 'bg-accent hover:bg-orange-600 text-white' : 'bg-gray-700 hover:bg-gray-600 text-white'}`}>
              Get Started
            </Link>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <Link to="/pricing" className="text-secondary font-semibold hover:text-primary transition-colors underline">
          View Full Pricing Details →
        </Link>
      </div>
    </div>
  </section>
);

export default PricingSection;
