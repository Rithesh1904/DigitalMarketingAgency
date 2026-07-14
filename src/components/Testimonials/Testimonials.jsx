import React, { useState } from 'react';
import { FaStar, FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'Robert Thompson',
    company: 'TechCorp Inc.',
    review: 'Agency transformed our online presence completely. Our organic traffic tripled in just 6 months and our lead generation has been phenomenal. Truly a world-class team.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 2,
    name: 'Amanda Lee',
    company: 'EcoStore',
    review: 'The ROI from our Google Ads campaigns managed by Agency has been incredible. Sales doubled within the first quarter. I highly recommend their PPC expertise to any e-commerce business.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 3,
    name: 'James Patel',
    company: 'FinServe Financial',
    review: 'Working with Agency on our social media strategy was a game changer. They understand the nuances of financial marketing and delivered results that exceeded our expectations every month.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 4,
    name: 'Sophie Williams',
    company: 'HealthApp Solutions',
    review: 'From branding to app launch marketing, Agency handled everything seamlessly. We hit 50,000 downloads in month one. Their team is professional, communicative, and genuinely passionate.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 5,
    name: 'Daniel Foster',
    company: 'Prime Real Estate',
    review: 'The website Agency built for us is stunning and has dramatically improved our conversion rate. Their SEO work has us ranking on page one for all our key search terms.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const next = () => setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  const visible = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
  ];

  return (
    <section className="py-20 app-section">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold tracking-wider uppercase text-sm">What They Say</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-6">Client Testimonials</h2>
          <p className="text-gray-600 text-lg">
            Don't just take our word for it. Here's what our clients say about working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visible.map((t, i) => (
            <div key={i} className="app-card rounded-2xl p-8 shadow-md border border-gray-100 relative">
              <FaQuoteLeft className="text-secondary opacity-20 w-10 h-10 absolute top-6 right-6" />
              <div className="flex items-center gap-4 mb-6">
                <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full object-cover border-2 border-secondary" />
                <div>
                  <h4 className="font-bold text-primary">{t.name}</h4>
                  <p className="text-sm text-gray-600">{t.company}</p>
                  <div className="flex gap-1 mt-1">
                    {Array.from({ length: t.rating }).map((_, ri) => (
                      <FaStar key={ri} className="text-accent w-4 h-4" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed italic">" {t.review}"</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-10">
          <button onClick={prev} className="w-12 h-12 rounded-full app-card border border-gray-600 shadow-sm hover:bg-secondary hover:text-white hover:border-secondary transition-all flex items-center justify-center text-gray-300">
            <FaChevronLeft />
          </button>
          <button onClick={next} className="w-12 h-12 rounded-full app-card border border-gray-600 shadow-sm hover:bg-secondary hover:text-white hover:border-secondary transition-all flex items-center justify-center text-gray-300">
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
