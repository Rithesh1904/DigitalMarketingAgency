import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import MarketingCube from './MarketingCube';

const Hero = () => {

  return (
    <section className="relative gradient-hero-bg min-h-screen pt-20 pb-12 md:pt-28 md:pb-20 lg:pt-32 lg:pb-32 overflow-hidden flex items-center">
      {/* Background accent elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white opacity-5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white opacity-5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">

          {/* Text Content */}
          <div className="w-full lg:w-1/2 lg:pr-6 text-center lg:text-left z-10">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 bg-white/20 border border-white/30 backdrop-blur-sm text-white text-sm font-semibold px-4 py-2 rounded-lg mb-6"
            >
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              #1 Rated Digital Marketing Agency
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white"
            >
              Grow Your Business with{' '}
              <span className="text-white/90">
                Data-Driven
              </span>{' '}
              Marketing
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-white/80 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              We help ambitious businesses like yours generate more profits by building awareness, driving web traffic, connecting with customers, and growing overall sales.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-8"
            >
              <Link to="/contact" className="btn-primary px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl flex items-center justify-center group">
                Get Free Consultation
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/services" className="bg-white hover:bg-gray-50 text-primary border-2 border-white px-8 py-4 rounded-lg font-semibold transition-all shadow-sm text-center">
                Our Services
              </Link>
            </motion.div>

            {/* Checklist */}
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 text-sm font-medium text-white/90"
            >
              {['No Long-term Contracts', 'Dedicated Account Manager', 'Data-Driven Results'].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <FiCheckCircle className="text-white flex-shrink-0" />
                  {item}
                </li>
              ))}
            </motion.ul>
          </div>

          {/* 3D Image Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="w-full lg:w-1/2 flex items-center justify-center"
            style={{ perspective: 1000 }}
          >
            <MarketingCube />
          </motion.div>
        </div>

        {/* Stats Section - Part of same section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="w-full"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center py-16 md:py-20">
            {[
              { value: '500+', label: 'Happy Clients' },
              { value: '1200+', label: 'Projects Delivered' },
              { value: '98%', label: 'Client Satisfaction' },
              { value: '8+', label: 'Years of Excellence' },
            ].map((stat) => (
              <div key={stat.label} className="">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-sm text-white/70 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
