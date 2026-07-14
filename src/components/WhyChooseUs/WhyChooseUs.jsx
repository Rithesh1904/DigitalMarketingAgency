import React from 'react';
import { FiUsers, FiTrendingUp, FiDollarSign, FiMessageSquare, FiHeadphones, FiTool } from 'react-icons/fi';

const features = [
  { icon: <FiUsers className="w-8 h-8 text-secondary" />, title: 'Experienced Team', desc: 'Our specialists have 8+ years of hands-on digital marketing experience across diverse industries.' },
  { icon: <FiTrendingUp className="w-8 h-8 text-accent" />, title: 'Result-Oriented Strategy', desc: 'Every campaign we run is backed by data, analytics, and a clear roadmap to measurable results.' },
  { icon: <FiDollarSign className="w-8 h-8 text-primary" />, title: 'Affordable Pricing', desc: 'Premium marketing services at competitive rates. We offer flexible plans for every budget.' },
  { icon: <FiMessageSquare className="w-8 h-8 text-secondary" />, title: 'Transparent Communication', desc: 'You\'ll always know what we\'re doing and why. Regular reports and open channels, always.' },
  { icon: <FiHeadphones className="w-8 h-8 text-accent" />, title: 'Dedicated Support', desc: 'A dedicated account manager is assigned to every client for responsive, personalized support.' },
  { icon: <FiTool className="w-8 h-8 text-primary" />, title: 'Latest Marketing Tools', desc: 'We leverage cutting-edge tools like Semrush, Ahrefs, HubSpot, and more for maximum impact.' },
];

const WhyChooseUs = () => (
  <section className="py-20 gradient-hero-bg">
    <div className="container mx-auto px-6 md:px-12">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-accent font-semibold tracking-wider uppercase text-sm">Why Us</span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-6">Why Choose Agency?</h2>
        <p className="text-gray-400 text-lg">We don't just run campaigns — we build long-term partnerships focused on your growth.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 shadow-xl">
            <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mb-6">{f.icon}</div>
            <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
            <p className="text-gray-400 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
