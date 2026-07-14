import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

const steps = [
  { number: '01', title: 'Research', desc: 'We deeply analyze your business, audience, competitors, and market landscape to form a solid foundation.' },
  { number: '02', title: 'Strategy', desc: 'We craft a tailored, data-driven marketing strategy aligned with your specific goals and KPIs.' },
  { number: '03', title: 'Implementation', desc: 'Our expert team executes every element of the strategy with precision and creative excellence.' },
  { number: '04', title: 'Optimization', desc: 'We continuously monitor performance and fine-tune campaigns for maximum efficiency and ROI.' },
  { number: '05', title: 'Growth', desc: 'We scale what works and deliver consistent, sustainable growth for your business long-term.' },
];

const Process = () => (
  <section className="py-20 app-section">
    <div className="container mx-auto px-6 md:px-12">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-accent font-semibold tracking-wider uppercase text-sm">How We Work</span>
        <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-6">Our Proven Process</h2>
        <p className="text-gray-600 text-lg">A systematic, transparent approach that delivers consistent results every time.</p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center text-center max-w-xs group">
              <div className="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mb-5 group-hover:bg-secondary transition-colors shadow-lg">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
            </div>
            {index < steps.length - 1 && (
              <FiArrowRight className="hidden md:block text-gray-300 w-8 h-8 flex-shrink-0 mt-[-60px]" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  </section>
);

export default Process;
