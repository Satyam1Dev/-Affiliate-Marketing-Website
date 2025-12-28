import React, { useState } from 'react';
import axios from 'axios';

const SubscribeCTA = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) {
      setStatus('Please enter your email.');
      return;
    }

    try {
      // Replace with your actual backend API endpoint
      await axios.post('/api/subscribe', { email });
      setStatus('Subscribed successfully!');
      setEmail('');
    } catch (error) {
      setStatus('Failed to subscribe. Please try again.');
    }
  };

  return (
    <section className="bg-gradient-to-r from-pink-500 to-purple-600 py-12 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Join our Newsletter
        </h2>
        <p className="mb-6">Get exclusive affiliate deals and updates directly to your inbox.</p>
        <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row justify-center max-w-xl mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="p-3 rounded-md text-black w-full md:w-2/3 mb-4 md:mb-0 md:mr-2 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-900 transition"
          >
            Subscribe
          </button>
        </form>
        {status && <p className="mt-4">{status}</p>}
      </div>
    </section>
  );
};

export default SubscribeCTA;
