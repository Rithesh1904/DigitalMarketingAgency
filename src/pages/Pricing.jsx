import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedCounter from '../components/AnimatedCounter/AnimatedCounter';

const pricingPlans = [
  {
    name: 'Starter',
    price: '$499',
    period: '/mo',
    description: 'Perfect for small businesses looking to establish a digital presence.',
    features: [
      'Basic SEO Optimization',
      'Social Media Management (2 platforms)',
      'Monthly Performance Report',
      'Email Support',
      '1 Custom Blog Post/mo'
    ],
    highlighted: false,
    buttonText: 'Get Started'
  },
  {
    name: 'Professional',
    price: '$999',
    period: '/mo',
    description: 'Ideal for growing businesses needing aggressive digital strategies.',
    features: [
      'Advanced SEO & Keyword Tracking',
      'Social Media Management (4 platforms)',
      'Google Ads Campaign Management',
      'Bi-weekly Performance Reports',
      '4 Custom Blog Posts/mo',
      'Priority Phone Support'
    ],
    highlighted: true,
    buttonText: 'Most Popular'
  },
  {
    name: 'Enterprise',
    price: '$2,499',
    period: '/mo',
    description: 'Comprehensive digital marketing for large-scale operations.',
    features: [
      'Enterprise-grade SEO Strategy',
      'Full Social Media Management',
      'Multi-channel Ad Campaigns',
      'Custom Web Development Support',
      'Daily Performance Monitoring',
      'Dedicated Account Manager',
      '24/7 Premium Support'
    ],
    highlighted: false,
    buttonText: 'Contact Sales'
  }
];

const Pricing = () => {
  return (
    <div>
      {/* Hero Header */}
      <section className="relative gradient-hero-bg overflow-hidden py-32 text-center">
        {/* Decorative blobs */}
        <div className="absolute top-[-60px] left-[-60px] w-80 h-80 bg-accent opacity-10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-60px] right-[-60px] w-96 h-96 bg-secondary opacity-20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-accent opacity-5 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 container mx-auto px-6">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm text-white text-sm font-semibold px-5 py-2 rounded-full mb-8"
          >
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            No Hidden Fees. Cancel Anytime.
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Simple,{' '}
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Transparent
            </span>
            {' '}Pricing
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-12"
          >
            Choose the perfect plan for your business. Premium marketing at affordable rates — no surprises, no lock-ins.
          </motion.p>

          {/* Plan chips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {['Starter — $499/mo', 'Professional — $999/mo ⭐', 'Enterprise — $2,499/mo'].map((tag) => (
              <span key={tag} className="bg-white/10 border border-white/20 text-gray-200 text-sm px-4 py-2 rounded-full backdrop-blur-sm">
                {tag}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="relative z-10 mt-16"
        >
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: '3', label: 'Flexible Plans' },
                { value: '0', label: 'Hidden Charges' },
                { value: '100%', label: 'Transparent Billing' },
                { value: '24/7', label: 'Dedicated Support' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <AnimatedCounter val={stat.value} className="text-4xl font-bold text-accent mb-1 block" />
                  <p className="text-gray-400 text-sm font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section className="py-20 app-section container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-primary/20 ${
                plan.highlighted 
                  ? 'bg-primary text-white shadow-2xl scale-105 md:scale-110 z-10' 
                  : 'app-card text-slate-900 shadow-lg'
              }`}
            >
              {plan.highlighted && (
                <div className="text-center mb-4">
                  <span className="bg-accent text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Recommended
                  </span>
                </div>
              )}
              <h3 className={`text-2xl font-bold mb-4 text-center ${plan.highlighted ? 'text-white' : 'text-primary'}`}>
                {plan.name}
              </h3>
              <div className="text-center mb-6">
                <span className={`text-4xl font-bold ${plan.highlighted ? 'text-white' : 'text-slate-900'}`}>{plan.price}</span>
                <span className={`text-lg font-medium ${plan.highlighted ? 'text-gray-300' : 'text-gray-500'}`}>
                  {plan.period}
                </span>
              </div>
              <p className={`text-center mb-8 h-12 ${plan.highlighted ? 'text-gray-300' : 'text-gray-600'}`}>
                {plan.description}
              </p>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start">
                    <FiCheckCircle className={`w-5 h-5 mt-1 mr-3 flex-shrink-0 ${plan.highlighted ? 'text-accent' : 'text-secondary'}`} />
                    <span className={plan.highlighted ? 'text-gray-200' : 'text-slate-700'}>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="text-center mt-auto">
                <Link 
                  to="/contact" 
                  className={`inline-block w-full py-4 rounded-full font-bold transition-colors ${
                    plan.highlighted 
                      ? 'bg-accent hover:bg-orange-600 text-white' 
                      : 'bg-gray-700 hover:bg-gray-600 text-white'
                  }`}
                >
                  {plan.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Pricing;
