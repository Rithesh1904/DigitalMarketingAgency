import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiClock, FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const faqs = [
  { q: 'What services do you provide?', a: 'We offer a full suite of digital marketing services including SEO, Social Media Marketing, Google Ads, Website Development, Email Marketing, Branding, Content Marketing, and Graphic Design.' },
  { q: 'How long does SEO take to show results?', a: 'SEO is a long-term strategy. You can typically expect to see noticeable improvements in 3–6 months, with significant results appearing within 6–12 months depending on the competition.' },
  { q: 'Do you offer website development?', a: 'Yes! Our expert development team builds high-performance, responsive, and SEO-friendly websites tailored to your specific business needs.' },
  { q: 'How can I contact your team?', a: 'You can reach us through the contact form on this page, by calling +1 (555) 123-4567, or by emailing hello@agency.com. We respond within 24 hours.' },
  { q: 'Do you work with startups?', a: 'Absolutely! We love working with startups. We have flexible pricing plans and custom packages specifically designed to meet the needs and budgets of early-stage businesses.' },
];

const Contact = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error on change
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full Name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required.';
    } else if (!/^[+]?[\d\s\-()]{7,15}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number.';
    }
    if (!formData.message.trim()) newErrors.message = 'Message cannot be empty.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // Build WhatsApp message
    const message = [
      '--------------------------------------',
      'New Website Enquiry',
      '',
      'Name:',
      formData.name,
      '',
      'Email:',
      formData.email,
      '',
      'Phone:',
      formData.phone,
      '',
      'Company:',
      formData.company || 'N/A',
      '',
      'Message:',
      formData.message,
      '--------------------------------------',
    ].join('\n');

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/918489421954?text=${encodedMessage}`;

    setSubmitted(true);
    // Open WhatsApp after a brief moment to let user see success UI
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 800);
  };

  return (
    <div>
      {/* Hero Header */}
      <section className="relative gradient-hero-bg overflow-hidden py-32 text-center">
        {/* Decorative blobs */}
        <div className="absolute top-[-60px] left-1/4 w-80 h-80 bg-secondary opacity-20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-60px] right-[-60px] w-96 h-96 bg-accent opacity-10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-0 left-[-60px] w-64 h-64 bg-accent opacity-5 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 container mx-auto px-6">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm text-white text-sm font-semibold px-5 py-2 rounded-full mb-8"
          >
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            We Respond Within 24 Hours
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Let&apos;s{' '}
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Talk
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-12"
          >
            Ready to grow your business? Reach out to our team of experts and let&apos;s build something remarkable together.
          </motion.p>

          {/* Contact channel chips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {['📞 +1 (555) 123-4567', '📧 hello@agency.com', '📍 New York, NY', '🕘 Mon–Fri 9AM–6PM'].map((tag) => (
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
                { value: '<24h', label: 'Response Time' },
                { value: '500+', label: 'Happy Clients' },
                { value: '98%', label: 'Satisfaction Rate' },
                { value: '8+', label: 'Years in Business' },
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

      {/* Contact Info + Form */}
      <section className="py-20 container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left: Info */}
          <div>
            <h2 className="text-3xl font-bold text-primary mb-8">Get In Touch</h2>
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FiMapPin className="text-secondary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Office Address</h4>
                  <p className="text-gray-600">123 Marketing Ave, Suite 400<br />New York, NY 10001, USA</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FiPhone className="text-accent w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Phone Number</h4>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FiMail className="text-secondary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Email Address</h4>
                  <p className="text-gray-600">hello@agency.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FiClock className="text-accent w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Business Hours</h4>
                  <p className="text-gray-600">Mon – Fri: 9:00 AM – 6:00 PM<br />Sat: 10:00 AM – 2:00 PM</p>
                </div>
              </div>
            </div>

            {/* Google Maps Placeholder */}
            <div className="w-full h-64 bg-gray-100 rounded-2xl overflow-hidden border border-gray-200 flex items-center justify-center">
              <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.1583091352!2d-74.11976397304903!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1680000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right: Form */}
          <div className="app-card rounded-3xl shadow-xl p-10 border border-gray-100">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center text-center py-12"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <FiCheckCircle className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">Message Sent!</h3>
                <p className="text-gray-600 mb-6 max-w-sm">
                  WhatsApp is opening with your pre-filled message. Just press <strong>Send</strong> to connect with us!
                </p>
                <div className="flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 px-5 py-3 rounded-full font-semibold">
                  <FaWhatsapp className="w-5 h-5" />
                  Redirecting to WhatsApp...
                </div>
                <button
                  className="mt-8 text-secondary underline text-sm"
                  onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', company: '', message: '' }); }}
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-primary mb-2">Send Us a Message</h2>
                <p className="text-gray-500 text-sm mb-8 flex items-center gap-2">
                  <FaWhatsapp className="text-green-500 w-4 h-4" />
                  Your enquiry will be sent directly to our WhatsApp.
                </p>
                <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-red-400 bg-red-50' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-secondary transition`}
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><FiAlertCircle className="w-3 h-3" />{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address <span className="text-red-500">*</span></label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-400 bg-red-50' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-secondary transition`}
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><FiAlertCircle className="w-3 h-3" />{errors.email}</p>}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number <span className="text-red-500">*</span></label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className={`w-full px-4 py-3 rounded-xl border ${errors.phone ? 'border-red-400 bg-red-50' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-secondary transition`}
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><FiAlertCircle className="w-3 h-3" />{errors.phone}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Company <span className="text-gray-400 text-xs">(optional)</span></label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary transition"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message <span className="text-red-500">*</span></label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      className={`w-full px-4 py-3 rounded-xl border ${errors.message ? 'border-red-400 bg-red-50' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-secondary transition resize-none`}
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><FiAlertCircle className="w-3 h-3" />{errors.message}</p>}
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-bold transition-colors flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-300"
                  >
                    <FaWhatsapp className="w-5 h-5" />
                    Send via WhatsApp
                  </button>
                  <p className="text-center text-gray-400 text-xs">Fields marked with <span className="text-red-500">*</span> are required.</p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 app-section">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <div className="text-center mb-12">
          
            <p className="text-gray-600">Have questions? We have answers.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="app-card rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <button
                  className="w-full flex justify-between items-center px-8 py-5 text-left"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-semibold text-primary text-lg">{faq.q}</span>
                  <span className={`text-2xl text-secondary transition-transform duration-300 ${openFaq === index ? 'rotate-45' : ''}`}>+</span>
                </button>
                {openFaq === index && (
                  <div className="px-8 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
