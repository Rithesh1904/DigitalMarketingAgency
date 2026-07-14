import React from 'react';

const Newsletter = () => (
  <section className="py-20 gradient-hero-bg">
    <div className="container mx-auto px-6 md:px-12 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Stay Ahead of the Curve</h2>
      <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto">
        Subscribe to our newsletter and get the latest digital marketing tips and insights delivered straight to your inbox.
      </p>
      <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
        <input
          type="email"
          placeholder="Enter your email address..."
          className="flex-grow px-6 py-4 rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-accent text-gray-800"
        />
        <button
          type="submit"
          className="bg-accent hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold transition-colors shadow-lg whitespace-nowrap"
        >
          Subscribe Now
        </button>
      </form>
      <p className="text-gray-400 text-sm mt-6">No spam, ever. Unsubscribe at any time.</p>
    </div>
  </section>
);

export default Newsletter;
