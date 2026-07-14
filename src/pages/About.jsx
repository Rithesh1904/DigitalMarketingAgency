import React from 'react';
import { motion } from 'framer-motion';
import { FiTarget, FiEye, FiHeart, FiCheckCircle } from 'react-icons/fi';
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const teamMembers = [
  { name: 'Sarah Jenkins', role: 'CEO & Founder', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { name: 'Michael Chen', role: 'Head of SEO', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { name: 'Emily Rodriguez', role: 'Creative Director', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { name: 'David Smith', role: 'Lead Developer', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
];

const About = () => {
  return (
    <div>
      {/* Hero Header */}
      <section className="relative gradient-hero-bg overflow-hidden py-32 text-center">
        {/* Decorative blobs */}
        <div className="absolute top-[-80px] left-[-80px] w-80 h-80 bg-secondary opacity-20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-80px] right-[-80px] w-96 h-96 bg-accent opacity-10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary opacity-5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 container mx-auto px-6">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm text-white text-sm font-semibold px-5 py-2 rounded-full mb-8"
          >
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            Passionate. Data-Driven. Results-Focused.
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            We Are{' '}
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Agency.
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-12"
          >
            A team of passionate digital marketers dedicated to driving real, measurable growth for your business — one campaign at a time.
          </motion.p>

          {/* CTA Chips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {['SEO Experts', 'Creative Designers', 'PPC Specialists', 'Growth Hackers', 'Brand Strategists'].map((tag) => (
              <span key={tag} className="bg-white/10 border border-white/20 text-gray-200 text-sm px-4 py-2 rounded-full backdrop-blur-sm">
                {tag}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Bottom stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="relative z-10 mt-16"
        >
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: '500+', label: 'Happy Clients' },
                { value: '1200+', label: 'Projects Delivered' },
                { value: '98%', label: 'Client Satisfaction' },
                { value: '8+', label: 'Years of Excellence' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-4xl font-bold text-accent mb-1">{stat.value}</p>
                  <p className="text-gray-400 text-sm font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>


      {/* Company Story & Experience */}
      <section className="py-20 app-section container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-primary mb-6">Our Story</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Founded over 8 years ago, Agency started with a simple idea: to provide transparent, result-oriented digital marketing services to businesses of all sizes. Over the years, we've evolved into a full-service digital agency, helping hundreds of clients navigate the ever-changing digital landscape.
            </p>
            <div className="flex items-center space-x-4 bg-primary text-white p-6 rounded-xl inline-flex shadow-lg">
              <span className="text-4xl font-bold text-accent">8+</span>
              <span className="text-lg font-medium">Years of<br/>Experience</span>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Our Team Working" 
              className="rounded-2xl shadow-xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="py-20 app-section">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="app-card p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-blue-50 text-secondary mx-auto rounded-full flex items-center justify-center mb-6">
                <FiTarget className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-gray-600">To empower businesses through innovative digital strategies that drive growth and maximize ROI.</p>
            </div>
            <div className="app-card p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-orange-50 text-accent mx-auto rounded-full flex items-center justify-center mb-6">
                <FiEye className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-gray-600">To be the most trusted and innovative digital marketing agency in the industry globally.</p>
            </div>
            <div className="app-card p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-blue-50 text-secondary mx-auto rounded-full flex items-center justify-center mb-6">
                <FiHeart className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Our Values</h3>
              <p className="text-gray-600">Integrity, Transparency, Innovation, and a relentless commitment to our clients' success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 app-section container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl font-bold text-primary mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="app-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
              <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-1">{member.name}</h3>
                <p className="text-secondary font-medium mb-4">{member.role}</p>
                <div className="flex justify-center space-x-3 text-gray-400">
                  <a href="#" className="hover:text-primary transition-colors"><FaLinkedinIn /></a>
                  <a href="#" className="hover:text-primary transition-colors"><FaTwitter /></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
