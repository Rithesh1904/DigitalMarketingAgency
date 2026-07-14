import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiSearch, FiShare2, FiTrendingUp, FiCode, FiMail, FiAward, FiFileText, FiPenTool } from 'react-icons/fi';

const allServices = [
  { id: 1, title: 'SEO', desc: 'Boost your organic traffic and rank higher on search engines with our proven SEO strategies.', icon: <FiSearch className="w-8 h-8 text-secondary" /> },
  { id: 2, title: 'Social Media Marketing', desc: 'Engage your audience and build brand loyalty across all major social media platforms.', icon: <FiShare2 className="w-8 h-8 text-accent" /> },
  { id: 3, title: 'Google Ads', desc: 'Get immediate visibility and drive targeted traffic to your website with optimized paid campaigns.', icon: <FiTrendingUp className="w-8 h-8 text-primary" /> },
  { id: 4, title: 'Website Development', desc: 'Robust, scalable, and secure web development solutions tailored to your business needs.', icon: <FiCode className="w-8 h-8 text-secondary" /> },
  { id: 5, title: 'Email Marketing', desc: 'Nurture leads and drive conversions with highly personalized email campaigns.', icon: <FiMail className="w-8 h-8 text-accent" /> },
  { id: 6, title: 'Branding', desc: 'Create a memorable brand identity that resonates with your target audience.', icon: <FiAward className="w-8 h-8 text-primary" /> },
  { id: 7, title: 'Content Marketing', desc: 'Valuable, relevant content to attract and retain a clearly defined audience.', icon: <FiFileText className="w-8 h-8 text-secondary" /> },
  { id: 8, title: 'Graphic Design', desc: 'Visually stunning designs that communicate your message effectively and beautifully.', icon: <FiPenTool className="w-8 h-8 text-accent" /> },
];

const Services = () => {
  return (
    <div>
      {/* Hero Header */}
      <section className="relative gradient-hero-bg overflow-hidden py-32 text-center">
        {/* Decorative blobs */}
        <div className="absolute top-[-60px] right-[-60px] w-96 h-96 bg-secondary opacity-10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-60px] left-[-60px] w-80 h-80 bg-accent opacity-5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 container mx-auto px-6">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 backdrop-blur-sm text-secondary text-sm font-semibold px-5 py-2 rounded-lg mb-8"
          >
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            Full-Service Digital Marketing Agency
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Our{' '}
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Services
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-12"
          >
            Comprehensive digital marketing solutions crafted to elevate your brand, reach the right audience, and deliver measurable results.
          </motion.p>

          {/* Service chips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {['SEO', 'Social Media', 'Google Ads', 'Web Dev', 'Email Marketing', 'Branding', 'Content', 'Graphic Design'].map((tag) => (
              <span key={tag} className="bg-white/10 border border-white/20 text-gray-200 text-sm px-4 py-2 rounded-lg backdrop-blur-sm">
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
                { value: '10+', label: 'Services Offered' },
                { value: '1200+', label: 'Projects Completed' },
                { value: '500+', label: 'Satisfied Clients' },
                { value: '8+', label: 'Years Experience' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-4xl font-bold text-accent mb-1">{stat.value}</p>
                  <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section className="py-20 app-section container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {allServices.map((service) => (
            <div
              key={service.id}
              className="app-card rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-300 border-gray-200 group"
            >
              <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.desc}</p>
              <Link to="/contact" className="text-secondary font-medium hover:text-accent transition-colors flex items-center">
                Learn More
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
