import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiCheckCircle, FiArrowRight } from 'react-icons/fi';

const services = [
  { 
    id: 1, 
    title: 'Search Engine Optimization', 
    desc: 'Boost your organic traffic and rank higher on search engines with our proven SEO strategies.',
    features: ['Keyword Research & Strategy', 'On-Page SEO Optimization', 'Technical SEO Audits', 'Quality Link Building'],
    bgColor: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', // Deep Slate
    img: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  },
  { 
    id: 2, 
    title: 'Social Media Marketing', 
    desc: 'Engage your audience and build brand loyalty across all major social media platforms.', 
    features: ['Content Creation & Strategy', 'Community Management', 'Paid Social Campaigns', 'Analytics & Reporting'],
    bgColor: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', // Blue Gradient
    img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  },
  { 
    id: 3, 
    title: 'Google Ads / PPC', 
    desc: 'Get immediate visibility and drive targeted traffic to your website with optimized paid campaigns.', 
    features: ['Search & Display Ads', 'Retargeting Campaigns', 'A/B Testing & Optimization', 'High-Converting Landing Pages'],
    bgColor: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)', // Muted Slate
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  },
  { 
    id: 4, 
    title: 'Website Design', 
    desc: 'Beautiful, user-centric website designs that perfectly represent your brand identity.', 
    features: ['UI/UX Design', 'Responsive Web Development', 'E-commerce Solutions', 'Website Maintenance'],
    bgColor: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)', // Ocean Blue
    img: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  },
  { 
    id: 5, 
    title: 'Influencer Marketing', 
    desc: 'Leverage creators and influencers to amplify your brand reach, build trust, and drive conversions through authentic partnerships.', 
    features: ['Influencer Identification', 'Campaign Management', 'Contract Negotiation', 'Performance Tracking'],
    bgColor: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)', // Deep Indigo
    img: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  },
  { 
    id: 6, 
    title: 'Branding', 
    desc: 'Create a memorable brand identity that resonates with your target audience.', 
    features: ['Logo & Identity Design', 'Brand Guidelines', 'Visual Identity Creation', 'Brand Strategy'],
    bgColor: 'linear-gradient(135deg, #020617 0%, #0f172a 100%)', // Midnight Slate
    img: 'https://images.unsplash.com/photo-1523726491640-f14d339acdce?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  },
];

const Services = () => {
  return (
    <section className="py-24 app-section relative">
      <div className="container mx-auto px-6 md:px-12 mb-16 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-accent font-semibold tracking-wider uppercase text-sm">What We Do</span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mt-4 mb-6">Our Digital Marketing Services</h2>
          <p className="text-gray-600 text-lg md:text-xl">
            We offer a comprehensive suite of digital marketing services designed to elevate your brand and drive measurable results.
          </p>
        </div>
      </div>
      
      {/* The Stacked Cards Container */}
      <div className="relative pb-32">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0.95, scale: 0.98, y: 150 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="sticky top-24 w-[92%] max-w-7xl mx-auto h-[85vh] min-h-[600px] max-h-[850px] rounded-[24px] overflow-hidden flex flex-col md:flex-row shadow-2xl mb-12 border border-white/10"
            style={{ 
              background: service.bgColor,
              zIndex: index + 10 // Ensure subsequent cards stack over previous ones properly
            }}
          >
            {/* Left Content */}
            <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center h-full z-10 relative">
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">{service.title}</h3>
              <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
                {service.desc}
              </p>
              
              <ul className="space-y-4 mb-10">
                {service.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center text-white/90 text-lg">
                    <FiCheckCircle className="w-6 h-6 mr-4 text-accent" />
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto md:mt-0">
                <Link to="/services" className="inline-flex items-center bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300">
                  Learn More
                  <FiArrowRight className="ml-3 w-5 h-5" />
                </Link>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 md:from-black/20 to-transparent z-10 hidden md:block"></div>
              <img 
                src={service.img} 
                alt={service.title} 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000"
              />
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Footer CTA */}
      <div className="mt-8 flex justify-center relative z-10">
        <Link to="/services" className="inline-block bg-primary hover:bg-secondary text-white px-10 py-4 rounded-full font-bold transition-colors shadow-xl hover:shadow-2xl hover:-translate-y-1 transform duration-300 text-lg">
          Explore All Features
        </Link>
      </div>
    </section>
  );
};

export default Services;
