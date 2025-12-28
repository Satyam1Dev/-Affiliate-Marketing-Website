import React from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import AppRoutes from './routes/AppRoutes';
import SubscribeCTA from './components/SubscribeCTA';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen flex flex-col">
        <Helmet>
          <title>PickifyHub - Affiliate Deals</title>
        </Helmet>

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-1">
          <AppRoutes />
        </main>

        <SubscribeCTA />
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
