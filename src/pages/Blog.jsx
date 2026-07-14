import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiCalendar, FiTag } from 'react-icons/fi';
import AnimatedCounter from '../components/AnimatedCounter/AnimatedCounter';

const blogs = [
  {
    id: 1,
    title: 'Top 10 SEO Tips to Dominate Search Rankings in 2024',
    category: 'SEO',
    date: 'January 15, 2024',
    description: 'Discover the most effective SEO strategies that will help your website climb to the top of Google search results and stay there.',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'Digital Marketing Trends You Cannot Ignore This Year',
    category: 'Digital Marketing',
    date: 'February 8, 2024',
    description: 'From AI-powered campaigns to short-form video, explore the top digital marketing trends shaping the industry.',
    image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'How Google Ads Work: A Beginner\'s Complete Guide',
    category: 'PPC',
    date: 'March 3, 2024',
    description: 'Unlock the power of Google Ads. Learn about bidding strategies, Quality Score, and how to create campaigns that convert.',
    image: 'https://images.unsplash.com/photo-1542744173-05336fcc7ad4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    title: 'The Importance of Social Media for Modern Businesses',
    category: 'Social Media',
    date: 'March 20, 2024',
    description: 'Social media is no longer optional. Find out how a strong social presence can transform your brand awareness and sales.',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    title: 'Content Marketing: Build Trust and Drive Organic Growth',
    category: 'Content Marketing',
    date: 'April 5, 2024',
    description: 'Great content is the backbone of every successful digital marketing strategy. Learn how to create content that resonates.',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    title: 'Email Marketing in 2024: Still Relevant and More Powerful',
    category: 'Email Marketing',
    date: 'April 22, 2024',
    description: 'Email marketing delivers the highest ROI of any marketing channel. Discover how to craft campaigns your subscribers love.',
    image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
];

const categoryColors = {
  'SEO': 'bg-blue-100 text-blue-700',
  'Digital Marketing': 'bg-purple-100 text-purple-700',
  'PPC': 'bg-orange-100 text-orange-700',
  'Social Media': 'bg-pink-100 text-pink-700',
  'Content Marketing': 'bg-green-100 text-green-700',
  'Email Marketing': 'bg-yellow-100 text-yellow-700',
};

const Blog = () => {
  return (
    <div>
      {/* Hero Header */}
      <section className="relative gradient-hero-bg overflow-hidden py-32 text-center">
        {/* Decorative blobs */}
        <div className="absolute top-[-60px] right-1/4 w-80 h-80 bg-secondary opacity-20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-80px] left-[-60px] w-96 h-96 bg-accent opacity-10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-0 right-[-60px] w-72 h-72 bg-secondary opacity-10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 container mx-auto px-6">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm text-white text-sm font-semibold px-5 py-2 rounded-full mb-8"
          >
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            Expert Insights. Actionable Strategies.
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Our{' '}
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Blog
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-12"
          >
            Stay ahead of the curve with expert tips, digital marketing trends, and actionable strategies from our team of specialists.
          </motion.p>

          {/* Topic chips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {['SEO', 'Social Media', 'PPC & Google Ads', 'Content Marketing', 'Email Marketing', 'Branding'].map((tag) => (
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
                { value: '50+', label: 'Articles Published' },
                { value: '6', label: 'Expert Categories' },
                { value: '10K+', label: 'Monthly Readers' },
                { value: 'Weekly', label: 'New Content' },
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

      {/* Blog Grid */}
      <section className="py-20 app-section container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog) => (
            <article key={blog.id} className="app-card rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group border border-gray-100 flex flex-col">
              <div className="relative overflow-hidden h-56">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1 ${categoryColors[blog.category] || 'bg-gray-100 text-gray-700'}`}>
                    <FiTag className="w-3 h-3" />
                    {blog.category}
                  </span>
                  <span className="text-sm text-gray-400 flex items-center gap-1">
                    <FiCalendar className="w-3 h-3" />
                    {blog.date}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors leading-snug">
                  {blog.title}
                </h2>
                <p className="text-gray-600 mb-6 flex-grow">
                  {blog.description}
                </p>
                <Link
                  to="#"
                  className="text-secondary font-semibold hover:text-primary transition-colors flex items-center mt-auto"
                >
                  Read More
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
