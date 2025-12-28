import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, TrendingUp, Star, Gift } from 'lucide-react';
import bannerImg from '../assets/img/banner.jpg';  

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-100 via-white to-purple-100 py-20 px-6">
        <div className="container mx-auto grid md:grid-cols-2 items-center gap-12">
          {/* Left Content */}
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-pink-600 leading-tight">
              Discover Deals.  
              <span className="text-purple-700"> Earn Rewards.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              PickifyHub brings you top affiliate products, exclusive offers, and 
              curated recommendations to help you save money while you shop smarter.  
            </p>
            <div className="flex flex-col sm:flex-row sm:justify-start justify-center gap-4">
              <Link
                to="/products"
                className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-md font-semibold transition"
              >
                Explore Products
              </Link>
              <Link
                to="/about"
                className="border border-pink-600 text-pink-600 hover:bg-pink-50 px-6 py-3 rounded-md font-semibold transition"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Right Image (Placeholder for hero banner / product mockup) */}
          <img
            src={bannerImg}
            alt="Affiliate Deals"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
            Why Choose <span className="text-pink-600">PickifyHub?</span>
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="p-6 bg-pink-50 rounded-xl shadow hover:shadow-md transition">
              <ShoppingCart className="w-12 h-12 mx-auto text-pink-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Curated Products</h3>
              <p className="text-gray-600">Only the best affiliate products, hand-picked for you.</p>
            </div>
            <div className="p-6 bg-pink-50 rounded-xl shadow hover:shadow-md transition">
              <TrendingUp className="w-12 h-12 mx-auto text-pink-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Top Deals</h3>
              <p className="text-gray-600">Stay ahead with trending discounts and offers.</p>
            </div>
            <div className="p-6 bg-pink-50 rounded-xl shadow hover:shadow-md transition">
              <Star className="w-12 h-12 mx-auto text-pink-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Trusted Reviews</h3>
              <p className="text-gray-600">Real product reviews to help you make smart choices.</p>
            </div>
            <div className="p-6 bg-pink-50 rounded-xl shadow hover:shadow-md transition">
              <Gift className="w-12 h-12 mx-auto text-pink-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Earn Rewards</h3>
              <p className="text-gray-600">Enjoy cashback & reward points on selected deals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Products Preview */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
            Popular <span className="text-pink-600">Products</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <img
                  src={`https://via.placeholder.com/300x200.png?text=Product+${item}`}
                  alt={`Product ${item}`}
                  className="rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">
                  Product {item} Title
                </h3>
                <p className="text-gray-600 mb-4">
                  Short description of the product goes here.
                </p>
                <Link
                  to="/products"
                  className="text-pink-600 font-semibold hover:underline"
                >
                  View Details →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Start Saving & Earning with PickifyHub
        </h2>
        <Link
          to="/products"
          className="bg-white text-pink-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
        >
          Browse Products
        </Link>
      </section>
    </div>
  );
};

export default Home;
