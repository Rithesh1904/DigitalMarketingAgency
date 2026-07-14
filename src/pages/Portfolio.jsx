import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'TechCorp Rebranding',
    client: 'TechCorp Inc.',
    industry: 'Technology',
    technologies: 'Branding, UI/UX Design, React',
    description: 'A complete brand overhaul and website redesign for a leading B2B technology provider, resulting in a 40% increase in lead generation.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    title: 'EcoStore SEO Campaign',
    client: 'EcoStore',
    industry: 'E-commerce',
    technologies: 'SEO, Content Marketing, Analytics',
    description: 'An aggressive 6-month SEO campaign that boosted organic traffic by 150% and doubled online sales for an eco-friendly brand.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    title: 'FinServe Social Media',
    client: 'FinServe Financial',
    industry: 'Finance',
    technologies: 'Social Media Management, PPC',
    description: 'Developed a comprehensive social media strategy to build trust and authority, generating over 10,000 qualified leads.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    title: 'HealthApp Launch',
    client: 'HealthApp Solutions',
    industry: 'Healthcare',
    technologies: 'App Store Optimization, Google Ads',
    description: 'Go-to-market strategy for a new healthcare app, achieving 50,000 downloads in the first month through targeted ad campaigns.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 5,
    title: 'RealEstate Web Portal',
    client: 'Prime Real Estate',
    industry: 'Real Estate',
    technologies: 'Web Development, Node.js, SEO',
    description: 'Built a high-performance property listing portal with advanced search capabilities and integrated CRM.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 6,
    title: 'FoodBox Email Marketing',
    client: 'FoodBox Delivery',
    industry: 'Food & Beverage',
    technologies: 'Email Automation, Copywriting',
    description: 'Designed and implemented automated email sequences that improved customer retention by 35% and increased lifetime value.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80'
  }
];

const Portfolio = () => {
  return (
    <div>
      {/* Hero Header */}
      <section className="relative gradient-hero-bg overflow-hidden py-32 text-center">
        {/* Decorative blobs */}
        <div className="absolute top-[-80px] left-1/3 w-96 h-96 bg-accent opacity-10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-80px] right-[-60px] w-80 h-80 bg-secondary opacity-20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-[-40px] left-[-60px] w-72 h-72 bg-secondary opacity-10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 container mx-auto px-6">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm text-white text-sm font-semibold px-5 py-2 rounded-full mb-8"
          >
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            Real Projects. Real Results.
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Our{' '}
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Portfolio
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-12"
          >
            Explore our recent work and see how we've helped businesses across industries achieve extraordinary digital growth.
          </motion.p>

          {/* Industry chips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {['Technology', 'E-commerce', 'Finance', 'Healthcare', 'Real Estate', 'Food & Beverage'].map((tag) => (
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
                { value: '6+', label: 'Featured Projects' },
                { value: '1200+', label: 'Total Projects Done' },
                { value: '15+', label: 'Industries Served' },
                { value: '98%', label: 'Client Satisfaction' },
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

      <section className="py-20 app-section container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div key={project.id} className="app-card rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group border border-gray-100">
              <div className="relative overflow-hidden h-60">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-primary">
                  {project.industry}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-2">{project.title}</h3>
                <p className="text-sm text-accent font-medium mb-4">Client: {project.client}</p>
                <p className="text-gray-600 mb-6">{project.description}</p>
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-2">Technologies</p>
                  <p className="text-sm text-gray-700 font-medium">{project.technologies}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
