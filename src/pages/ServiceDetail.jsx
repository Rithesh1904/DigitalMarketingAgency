import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiArrowLeft, FiArrowRight, FiStar, FiTrendingUp, FiUsers, FiTarget } from 'react-icons/fi';

const serviceDetails = {
  seo: {
    title: 'Search Engine Optimization',
    subtitle: 'Rank Higher. Get Found. Grow Organically.',
    heroColor: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
    img: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    desc: "Our SEO strategies are built on a foundation of technical excellence, compelling content, and powerful link building. We don't believe in shortcuts — only sustainable rankings that bring long-term ROI for your business.",
    features: [
      { title: 'Keyword Research & Strategy', desc: 'We identify high-intent, low-competition keywords that your ideal customers are searching for, prioritizing keywords that drive revenue.' },
      { title: 'On-Page SEO Optimization', desc: 'We optimize meta tags, headings, internal linking, schema markup, and content structure to maximize relevance signals for search engines.' },
      { title: 'Technical SEO Audits', desc: 'Full crawl audits to uncover and fix site speed issues, broken links, duplicate content, Core Web Vitals, and indexing problems.' },
      { title: 'Quality Link Building', desc: 'We secure high-authority backlinks through outreach, guest posting, and digital PR to boost your domain authority and rankings.' },
      { title: 'Local SEO', desc: 'Google Business Profile optimization, local citations, and geo-targeted content strategies to dominate your local market.' },
      { title: 'Monthly Reporting', desc: 'Transparent, in-depth monthly reports showing ranking progress, traffic growth, and clear ROI metrics.' },
    ],
    process: ['SEO Audit & Competitor Analysis', 'Keyword Strategy', 'On-Page Optimization', 'Content & Link Building', 'Track & Refine'],
    stats: [{ val: '300%', label: 'Average Traffic Increase' }, { val: '8+', label: 'Years Experience' }, { val: '500+', label: 'Keywords Ranked #1' }, { val: '95%', label: 'Client Retention' }],
  },
  'social-media-marketing': {
    title: 'Social Media Marketing',
    subtitle: 'Build Communities. Drive Engagement. Grow Your Brand.',
    heroColor: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
    img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    desc: 'We create powerful, scroll-stopping social media campaigns across every major platform. From strategy to creative execution, we manage your presence end-to-end so you can focus on your business.',
    features: [
      { title: 'Platform Strategy', desc: 'Customized strategies for Facebook, Instagram, LinkedIn, YouTube, WhatsApp Business, TikTok, Telegram, and more — tailored to your audience.' },
      { title: 'Content Creation', desc: 'Professional graphics, reels, stories, and copy that reflect your brand voice and drive real engagement.' },
      { title: 'Community Management', desc: 'Daily monitoring, responding to comments/DMs, and building an active community around your brand.' },
      { title: 'Paid Social Campaigns', desc: 'Highly targeted ad campaigns on Facebook, Instagram, and LinkedIn to generate leads and increase sales.' },
      { title: 'Influencer Collaboration', desc: 'Connecting your brand with relevant influencers for authentic reach and trust-building.' },
      { title: 'Analytics & Reporting', desc: 'Detailed monthly reports with engagement metrics, follower growth, reach, and conversion tracking.' },
    ],
    process: ['Brand Audit', 'Platform Selection', 'Content Calendar Creation', 'Publishing & Engagement', 'Optimize & Scale'],
    stats: [{ val: '10x', label: 'Average Engagement Boost' }, { val: '50+', label: 'Platforms Managed' }, { val: '2M+', label: 'Followers Grown' }, { val: '98%', label: 'Client Satisfaction' }],
  },
  'google-ads': {
    title: 'Google Ads / PPC',
    subtitle: 'Instant Visibility. Targeted Traffic. Measurable ROI.',
    heroColor: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    desc: 'Our certified Google Ads specialists design and manage campaigns that put your brand in front of the right people at exactly the right moment. Every rupee of your ad spend is tracked, optimized, and maximized.',
    features: [
      { title: 'Search Ads', desc: 'Text-based ads that appear at the top of Google results for high-intent search queries, driving immediate qualified traffic.' },
      { title: 'Display Advertising', desc: 'Visually engaging banner ads across 2M+ Google partner websites to build brand awareness at scale.' },
      { title: 'Retargeting / Remarketing', desc: "Re-engage website visitors who didn't convert with tailored ads that bring them back to complete the journey." },
      { title: 'Shopping Ads', desc: 'Product listing ads for e-commerce businesses that showcase your products directly in Google search results.' },
      { title: 'A/B Testing & Optimization', desc: 'Continuous split testing of ad copy, landing pages, and targeting to lower CPCs and boost conversion rates.' },
      { title: 'Performance Reporting', desc: 'Real-time dashboards showing impressions, clicks, conversions, cost-per-acquisition, and full ROAS breakdown.' },
    ],
    process: ['Campaign Strategy', 'Keyword Selection', 'Ad Copy & Creative', 'Landing Page Setup', 'Launch, Monitor & Optimize'],
    stats: [{ val: '4x', label: 'Average ROAS' }, { val: '₹10Cr+', label: 'Ad Spend Managed' }, { val: '60%', label: 'Avg CPC Reduction' }, { val: '1200+', label: 'Campaigns Run' }],
  },
  'website-development': {
    title: 'Website Development',
    subtitle: 'Fast. Beautiful. Conversion-Optimized.',
    heroColor: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
    img: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    desc: "We design and develop websites that don't just look amazing — they perform. Built with the latest technologies, our websites are fast, responsive, SEO-ready, and optimized to convert visitors into customers.",
    features: [
      { title: 'UI/UX Design', desc: 'Intuitive user experiences crafted with Figma prototypes, user research, and modern design principles.' },
      { title: 'Responsive Development', desc: 'Pixel-perfect websites that work flawlessly on all screen sizes — from mobile to large desktop displays.' },
      { title: 'E-commerce Solutions', desc: 'Full-featured online stores with payment gateways, inventory management, and order tracking integrations.' },
      { title: 'CMS Integration', desc: 'WordPress, Webflow, or custom CMS setups that let you manage your content with ease.' },
      { title: 'Performance Optimization', desc: 'Core Web Vitals optimization, image compression, lazy loading, and CDN configuration for blazing-fast load times.' },
      { title: 'Website Maintenance', desc: 'Ongoing updates, security patches, uptime monitoring, and technical support to keep your site running perfectly.' },
    ],
    process: ['Discovery & Wireframing', 'UI Design', 'Development', 'Testing & QA', 'Launch & Handover'],
    stats: [{ val: '300+', label: 'Websites Delivered' }, { val: '<1s', label: 'Average Load Time' }, { val: '99.9%', label: 'Uptime Guarantee' }, { val: '100%', label: 'Mobile Optimized' }],
  },
  'email-marketing': {
    title: 'Email Marketing',
    subtitle: 'Nurture Leads. Retain Customers. Drive Revenue.',
    heroColor: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
    img: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    desc: 'Email remains the highest ROI digital marketing channel, returning $42 for every $1 spent. We create personalized, automated email campaigns that keep your audience engaged and your sales pipeline full.',
    features: [
      { title: 'Newsletter Campaigns', desc: 'Regular, value-packed newsletters that keep your audience informed, entertained, and coming back for more.' },
      { title: 'Promotional Emails', desc: 'High-converting sales and promotional emails designed to drive immediate action with compelling CTAs.' },
      { title: 'Email Automation', desc: 'Welcome sequences, drip campaigns, cart abandonment flows, and re-engagement series that work 24/7.' },
      { title: 'List Building & Segmentation', desc: 'Growing your subscriber list and segmenting by behavior, demographics, and purchase history for hyper-relevant messaging.' },
      { title: 'A/B Testing', desc: 'Subject line, content, and CTA testing to continuously improve open rates, click rates, and conversions.' },
      { title: 'Performance Analytics', desc: 'Full campaign reporting including open rates, click-through rates, conversions, and revenue attribution.' },
    ],
    process: ['List Audit & Segmentation', 'Strategy & Automation Setup', 'Template Design', 'Campaign Launch', 'Test & Optimize'],
    stats: [{ val: '42x', label: 'Average ROI' }, { val: '45%', label: 'Avg Open Rate Achieved' }, { val: '1M+', label: 'Emails Sent Monthly' }, { val: '98%', label: 'Deliverability Rate' }],
  },
  'influencer-marketing': {
    title: 'Influencer Marketing',
    subtitle: 'Authentic Stories. Massive Reach. Real Results.',
    heroColor: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)',
    img: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    desc: 'Consumers trust people over brands. We connect you with the right influencers — from nano to mega — who authentically advocate for your product to their engaged, loyal audiences.',
    features: [
      { title: 'Influencer Identification & Vetting', desc: 'Data-driven discovery of influencers whose audience demographics, engagement rates, and brand values align with yours.' },
      { title: 'Campaign Strategy & Brief', desc: 'Full creative direction, messaging guidelines, and campaign goals briefed to every influencer for consistent results.' },
      { title: 'Contract & Negotiation', desc: 'We handle all negotiations, contracts, deliverables, timelines, and payment to protect your brand and budget.' },
      { title: 'Content Approval', desc: 'Review and approval workflow ensuring all influencer content meets brand standards before publishing.' },
      { title: 'Multi-Platform Coverage', desc: 'Instagram, YouTube, TikTok, LinkedIn, and podcast influencer campaigns spanning all major content formats.' },
      { title: 'Performance Tracking', desc: 'Full campaign analytics including reach, impressions, engagement, link clicks, and conversion attribution.' },
    ],
    process: ['Brand Alignment', 'Influencer Discovery', 'Outreach & Onboarding', 'Content Production', 'Publish & Track'],
    stats: [{ val: '500+', label: 'Influencer Partners' }, { val: '10M+', label: 'Total Audience Reached' }, { val: '8%', label: 'Avg Engagement Rate' }, { val: '200+', label: 'Campaigns Executed' }],
  },
  branding: {
    title: 'Branding',
    subtitle: 'Stand Out. Be Remembered. Build Trust.',
    heroColor: 'linear-gradient(135deg, #020617 0%, #0f172a 100%)',
    img: 'https://images.unsplash.com/photo-1523726491640-f14d339acdce?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    desc: "Great brands aren't built by accident. We craft comprehensive brand identities that are visually stunning, emotionally resonant, and strategically sound — so your business makes the right first impression every time.",
    features: [
      { title: 'Logo Design', desc: 'Timeless, distinctive logos crafted through research, exploration, and refinement to perfectly represent your brand essence.' },
      { title: 'Brand Identity System', desc: 'Cohesive visual systems including color palettes, typography, iconography, and design patterns for total brand consistency.' },
      { title: 'Brand Guidelines', desc: 'A comprehensive brand book that ensures your visual identity is applied consistently across all touchpoints and teams.' },
      { title: 'Brand Strategy', desc: "Defining your brand's mission, vision, values, positioning, personality, and unique value proposition." },
      { title: 'Marketing Collateral', desc: 'Business cards, brochures, presentations, social media templates, and all other branded materials you need.' },
      { title: 'Brand Refresh', desc: 'Modernizing existing brands to stay relevant and competitive while preserving core equity and recognition.' },
    ],
    process: ['Discovery Workshop', 'Competitor Research', 'Concept Development', 'Refinement & Feedback', 'Brand Delivery'],
    stats: [{ val: '400+', label: 'Brands Built' }, { val: '100%', label: 'Unique Designs' }, { val: '8+', label: 'Design Awards Won' }, { val: '97%', label: 'Client Approval Rate' }],
  },
  'content-marketing': {
    title: 'Content Marketing',
    subtitle: 'Educate. Engage. Convert.',
    heroColor: 'linear-gradient(135deg, #064e3b 0%, #065f46 100%)',
    img: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    desc: 'Content is the engine of every successful digital marketing strategy. We create valuable, SEO-optimized content that attracts your target audience, builds authority, and drives measurable business growth.',
    features: [
      { title: 'Content Strategy', desc: 'A data-driven content plan aligned with your SEO goals, buyer journey stages, and business objectives.' },
      { title: 'Blog Writing', desc: 'Long-form, expert-level articles and blog posts that rank on Google and position you as an industry thought leader.' },
      { title: 'Video Scripts & Production', desc: 'Engaging video content for YouTube, social media, and your website that captures attention and drives action.' },
      { title: 'Infographics & Visual Content', desc: 'Shareable, visually compelling infographics that simplify complex information and earn backlinks naturally.' },
      { title: 'E-books & Whitepapers', desc: 'High-value lead magnets that generate qualified leads while establishing deep authority in your niche.' },
      { title: 'Content Distribution', desc: 'Multi-channel distribution across social, email, SEO, and partnerships to maximize every piece of content\'s reach.' },
    ],
    process: ['Audience & Keyword Research', 'Content Calendar', 'Writing & Design', 'SEO Optimization', 'Publish & Promote'],
    stats: [{ val: '5000+', label: 'Articles Published' }, { val: '3x', label: 'Avg Organic Traffic Lift' }, { val: '85%', label: 'Content Ranked on Page 1' }, { val: '200+', label: 'Active Content Clients' }],
  },
  'graphic-design': {
    title: 'Graphic Design',
    subtitle: 'Visuals that Wow. Designs that Sell.',
    heroColor: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)',
    img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    desc: 'Exceptional design is the difference between being noticed and being ignored. Our creative team delivers stunning, on-brand visuals that communicate your message powerfully and make your brand unforgettable.',
    features: [
      { title: 'Social Media Graphics', desc: 'Scroll-stopping posts, stories, reels covers, and banners for every platform — designed to drive engagement.' },
      { title: 'Ad Creatives', desc: 'High-converting display ads, Facebook/Google banner ads, and promotional visuals optimized for click-through rates.' },
      { title: 'Brochure & Print Design', desc: 'Professional flyers, brochures, catalogues, and print materials that make a lasting impression in the physical world.' },
      { title: 'Presentation Design', desc: 'Impactful pitch decks, investor presentations, and company profiles that tell your story with visual authority.' },
      { title: 'Packaging Design', desc: 'Creative, shelf-ready product packaging that stands out at retail and communicates your brand at a glance.' },
      { title: 'Illustration & Icon Design', desc: 'Custom illustrations and icon sets that give your brand a unique, ownable visual language.' },
    ],
    process: ['Creative Brief', 'Mood Board & Concepts', 'Design Drafts', 'Revisions & Feedback', 'Final Delivery'],
    stats: [{ val: '10K+', label: 'Designs Delivered' }, { val: '48hr', label: 'Average Turnaround' }, { val: '∞', label: 'Revisions Until Perfect' }, { val: '99%', label: 'Client Satisfaction' }],
  },
};

const serviceFAQs = {
  'seo': [
    { q: 'How long does SEO take to show results?', a: 'SEO is a long-term strategy. Typically, you can expect to see noticeable improvements in 3-6 months, with compounding results over time.' },
    { q: 'Do you guarantee #1 rankings?', a: 'No reputable agency can guarantee a #1 ranking due to Google\'s ever-changing algorithm. However, we guarantee proven strategies that consistently improve visibility and traffic.' },
    { q: 'What is included in the monthly report?', a: 'You will receive a detailed breakdown of keyword rankings, organic traffic growth, backlink acquisition, and completed on-page optimizations.' }
  ],
  'social-media-marketing': [
    { q: 'Which platforms should my business be on?', a: 'It depends on your target audience. B2B companies do well on LinkedIn and Twitter, while B2C brands thrive on Instagram, Facebook, and TikTok. We help you choose the best mix.' },
    { q: 'Do you create the content for us?', a: 'Yes! Our team handles everything from graphic design and copywriting to video editing and publishing.' },
    { q: 'How do you measure social media success?', a: 'We track engagement rates, follower growth, website clicks, and most importantly, the leads and sales generated from social channels.' }
  ],
  'google-ads': [
    { q: 'What budget do I need for Google Ads?', a: 'While you can start with any budget, we recommend a minimum ad spend of $1,000/month to generate enough data for optimization and clear ROI.' },
    { q: 'How soon will I see results?', a: 'Google Ads generates immediate traffic. Once the campaign goes live, you can start receiving clicks and leads within 24-48 hours.' },
    { q: 'Do I pay you or Google for the ads?', a: 'You pay Google directly for the ad spend, and you pay us a management fee for strategy, creation, and ongoing optimization.' }
  ],
  'website-development': [
    { q: 'How long does it take to build a website?', a: 'A standard website takes 4-6 weeks from discovery to launch. Complex e-commerce or custom web applications may take 8-12 weeks.' },
    { q: 'Will my website be mobile-friendly?', a: 'Absolutely. All our websites are built with a mobile-first approach, ensuring they look and perform flawlessly on all devices.' },
    { q: 'Do you provide ongoing maintenance?', a: 'Yes, we offer monthly maintenance packages that include hosting, security updates, backups, and content changes.' }
  ],
  'email-marketing': [
    { q: 'How often should I email my list?', a: 'It varies by industry, but typically 1-2 times per week is a sweet spot for staying top-of-mind without causing list fatigue.' },
    { q: 'Can you help me grow my email list?', a: 'Yes, we design lead magnets, landing pages, and pop-ups specifically optimized to capture emails and grow your subscriber base.' },
    { q: 'What is a good open rate?', a: 'While averages vary, we aim for open rates above 25% and click-through rates above 2-3%, which signifies a healthy, engaged list.' }
  ],
  'influencer-marketing': [
    { q: 'How do you find the right influencers?', a: 'We use advanced tools and manual vetting to analyze an influencer\'s audience demographics, engagement rate, and brand safety to ensure a perfect match.' },
    { q: 'Are micro-influencers effective?', a: 'Highly effective! Micro-influencers (10k-50k followers) often have much higher engagement rates and trust with their audience than massive celebrities.' },
    { q: 'Who owns the content created?', a: 'We negotiate content usage rights upfront, ensuring your brand has the permission to repurpose influencer content for your own ads and social media.' }
  ],
  'branding': [
    { q: 'What is a brand identity?', a: 'Brand identity is the visual and emotional representation of your business. It includes your logo, color palette, typography, voice, and overall aesthetic.' },
    { q: 'How much does branding cost?', a: 'Costs vary based on the scope. A simple logo refresh is less than a comprehensive brand identity system and strategy guide. Contact us for a custom quote.' },
    { q: 'Do I get the source files?', a: 'Yes, upon final approval and payment, you receive all original vector source files (AI, EPS, SVG) and high-resolution exports (PNG, JPG).' }
  ],
  'content-marketing': [
    { q: 'Why is content marketing important?', a: 'Content builds trust, educates your audience, improves SEO, and fuels all your other marketing channels (social, email, ads).' },
    { q: 'Who writes the content?', a: 'We have a team of professional, native English writers who specialize in various industries and write highly researched, engaging content.' },
    { q: 'How long should blog posts be?', a: 'For SEO purposes, long-form content (1,500+ words) tends to rank best. However, we tailor length based on the topic and user intent.' }
  ],
  'graphic-design': [
    { q: 'Can you design for print?', a: 'Yes! We design business cards, brochures, billboards, packaging, and any other print materials you need, delivered in print-ready formats.' },
    { q: 'How does the revision process work?', a: 'We typically include 2-3 rounds of revisions in our standard packages to ensure you are 100% happy with the final design.' },
    { q: 'What if I need designs on a recurring basis?', a: 'We offer monthly graphic design retainers for businesses that need consistent, high-quality design work without hiring in-house.' }
  ]
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = serviceDetails[slug];
  const faqs = serviceFAQs[slug] || [];
  const [openFaq, setOpenFaq] = useState(null);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center gradient-hero-bg">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Service Not Found</h1>
          <Link to="/services" className="text-secondary underline">Back to Services</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden py-28 md:py-36" style={{ background: service.heroColor }}>
        <div className="absolute top-[-80px] right-[-80px] w-[500px] h-[500px] bg-white opacity-5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-80px] left-[-80px] w-[400px] h-[400px] bg-white opacity-5 rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            onClick={() => navigate('/services')}
            className="inline-flex items-center text-white/70 hover:text-white mb-8 transition-colors group"
          >
            <FiArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to All Services
          </motion.button>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-block text-white/60 font-semibold uppercase tracking-widest text-sm mb-4"
              >
                Our Services
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6"
              >
                {service.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-white/80 leading-relaxed mb-8"
              >
                {service.subtitle}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <Link to="/contact" className="inline-flex items-center bg-white text-slate-900 font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors shadow-xl hover:-translate-y-1 transform duration-300">
                  Get a Free Quote <FiArrowRight className="ml-2" />
                </Link>
                <Link to="/services" className="inline-flex items-center border border-white/30 text-white font-bold px-8 py-4 rounded-full hover:bg-white/10 transition-colors">
                  View All Services
                </Link>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            >
              <img src={service.img} alt={service.title} className="w-full h-72 md:h-96 object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="bg-white shadow-md py-10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {service.stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <p className="text-3xl md:text-4xl font-bold text-primary">{s.val}</p>
                <p className="text-gray-500 text-sm mt-1 font-medium">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 container mx-auto px-6 md:px-12">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-secondary font-semibold uppercase tracking-wider text-sm"
          >
            Overview
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-primary mt-3 mb-6"
          >
            What We Deliver
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-600 text-lg leading-relaxed"
          >
            {service.desc}
          </motion.p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-10 pb-24 container mx-auto px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-primary mb-12 text-center"
        >
          What's Included
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {service.features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transform transition-all duration-300"
            >
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-5">
                <FiCheckCircle className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-3">{f.title}</h3>
              <p className="text-gray-600 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary mb-14 text-center"
          >
            Our Process
          </motion.h2>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative">
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-slate-200 z-0" />
            {service.process.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="flex flex-col items-center text-center relative z-10 flex-1"
              >
                <div className="w-16 h-16 rounded-full bg-primary text-white text-xl font-bold flex items-center justify-center shadow-lg mb-4 border-4 border-white ring-4 ring-slate-100">
                  {i + 1}
                </div>
                <p className="text-slate-700 font-semibold text-sm max-w-[130px]">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {faqs.length > 0 && (
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-6 md:px-12 max-w-4xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-primary mb-12 text-center"
            >
              Frequently Asked Questions
            </motion.h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                  <button
                    className="w-full flex justify-between items-center px-8 py-5 text-left"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <span className="font-semibold text-primary text-lg">{faq.q}</span>
                    <span className={`text-2xl text-secondary transition-transform duration-300 ${openFaq === index ? 'rotate-45' : ''}`}>+</span>
                  </button>
                  {openFaq === index && (
                    <div className="px-8 pb-6 text-gray-600 leading-relaxed border-t border-slate-50 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-24" style={{ background: service.heroColor }}>
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/80 text-lg mb-10 max-w-xl mx-auto"
          >
            Let's discuss how our {service.title} services can elevate your business. Get a free consultation today.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link to="/contact" className="inline-flex items-center bg-white text-slate-900 font-bold px-10 py-4 rounded-full hover:bg-gray-100 transition-colors shadow-xl hover:-translate-y-1 transform duration-300 text-lg">
              Book Free Consultation <FiArrowRight className="ml-2" />
            </Link>
            <Link to="/services" className="inline-flex items-center border border-white/30 text-white font-bold px-10 py-4 rounded-full hover:bg-white/10 transition-colors text-lg">
              Explore Other Services
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
