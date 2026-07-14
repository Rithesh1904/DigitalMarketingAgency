import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiCheckCircle, FiArrowRight } from 'react-icons/fi';
import { 
  FaWhatsapp, FaFacebook, FaInstagram, FaYoutube, FaTelegram, FaLinkedin, 
  FaGoogle, FaChartLine, FaSearch, FaGlobe, FaLink, FaRocket,
  FaMousePointer, FaLaptop, FaSync, FaShoppingCart, FaVial, FaMoneyBillWave,
  FaEnvelopeOpenText, FaPaperPlane, FaRobot, FaUsers, FaFilter, FaChartPie,
  FaStar, FaHandshake, FaBullhorn, FaHeart, FaChartBar,
  FaPalette, FaIdBadge, FaLightbulb, FaBook, FaFont, FaTint
} from 'react-icons/fa';
const services = [
  {
    id: 1,
    title: 'Social Media Marketing',
    desc: 'Engage your audience and build brand loyalty across all major social media platforms.',
    features: [
      'WhatsApp Business',
      'Facebook',
      'Instagram',
      'YouTube',
      'Telegram'
    ],
    bgColor: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', // Blue Gradient
    img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 2,
    title: 'Search Engine Optimization',
    desc: 'Boost your organic traffic and rank higher on search engines with our proven SEO strategies.',
    features: ['Keyword Research & Strategy', 'On-Page SEO Optimization', 'Technical SEO Audits', 'Quality Link Building'],
    bgColor: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', // Deep Slate
    img: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
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
    title: 'Email Marketing',
    desc: 'Create personalized email campaigns that nurture customer relationships, increase engagement, and drive higher conversions.',
    features: [
      'Newsletter Campaigns',
      'Promotional Emails',
      'Email Automation',
      'Performance Analytics'
    ],
    bgColor: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)', // Ocean Blue
    img: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
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

const serviceVisuals = {
  1: [
    { Icon: FaWhatsapp, color: 'text-[#25D366]', label: 'WhatsApp' },
    { Icon: FaFacebook, color: 'text-[#1877F2]', label: 'Facebook' },
    { Icon: FaInstagram, color: 'text-[#E1306C]', label: 'Instagram' },
    { Icon: FaYoutube, color: 'text-[#FF0000]', label: 'YouTube' },
    { Icon: FaTelegram, color: 'text-[#229ED9]', label: 'Telegram' },
    { Icon: FaLinkedin, color: 'text-[#0077B5]', label: 'LinkedIn' },
  ],
  2: [
    { Icon: FaGoogle, color: 'text-white', label: 'Google' },
    { Icon: FaSearch, color: 'text-white', label: 'Keywords' },
    { Icon: FaChartLine, color: 'text-white', label: 'Analytics' },
    { Icon: FaLink, color: 'text-white', label: 'Link Building' },
    { Icon: FaGlobe, color: 'text-white', label: 'Local SEO' },
    { Icon: FaRocket, color: 'text-white', label: 'Optimization' },
  ],
  3: [
    { Icon: FaMousePointer, color: 'text-white', label: 'Search Ads' },
    { Icon: FaLaptop, color: 'text-white', label: 'Display Ads' },
    { Icon: FaSync, color: 'text-white', label: 'Retargeting' },
    { Icon: FaShoppingCart, color: 'text-white', label: 'Shopping Ads' },
    { Icon: FaVial, color: 'text-white', label: 'A/B Testing' },
    { Icon: FaMoneyBillWave, color: 'text-white', label: 'ROI Tracking' },
  ],
  4: [
    { Icon: FaEnvelopeOpenText, color: 'text-white', label: 'Newsletters' },
    { Icon: FaPaperPlane, color: 'text-white', label: 'Campaigns' },
    { Icon: FaRobot, color: 'text-white', label: 'Automation' },
    { Icon: FaUsers, color: 'text-white', label: 'Segmentation' },
    { Icon: FaVial, color: 'text-white', label: 'A/B Testing' },
    { Icon: FaChartPie, color: 'text-white', label: 'Analytics' },
  ],
  5: [
    { Icon: FaStar, color: 'text-white', label: 'Influencers' },
    { Icon: FaHandshake, color: 'text-white', label: 'Partnerships' },
    { Icon: FaBullhorn, color: 'text-white', label: 'Campaigns' },
    { Icon: FaUsers, color: 'text-white', label: 'Social Reach' },
    { Icon: FaHeart, color: 'text-white', label: 'Engagement' },
    { Icon: FaChartBar, color: 'text-white', label: 'Tracking' },
  ],
  6: [
    { Icon: FaPalette, color: 'text-white', label: 'Logo Design' },
    { Icon: FaIdBadge, color: 'text-white', label: 'Identity' },
    { Icon: FaLightbulb, color: 'text-white', label: 'Strategy' },
    { Icon: FaBook, color: 'text-white', label: 'Guidelines' },
    { Icon: FaFont, color: 'text-white', label: 'Typography' },
    { Icon: FaTint, color: 'text-white', label: 'Colors' },
  ]
};

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

            {/* Right Image / Content */}
            <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden flex items-center justify-center bg-black/5">
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 md:from-black/20 to-transparent z-10 hidden md:block"></div>
              
              <div className="relative z-20 w-full h-full p-6 md:p-12 flex items-center justify-center">
                <div className="grid grid-cols-3 gap-x-6 gap-y-10 md:gap-x-12 md:gap-y-14 w-full max-w-lg">
                  {serviceVisuals[service.id]?.map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center justify-center gap-3 group">
                      <item.Icon className={`w-12 h-12 md:w-20 md:h-20 ${item.color} group-hover:scale-110 transition-transform duration-300 drop-shadow-xl`} />
                      <span className="text-white font-medium text-sm md:text-base text-center">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
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
