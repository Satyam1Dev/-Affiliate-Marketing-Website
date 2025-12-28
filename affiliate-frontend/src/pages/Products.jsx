import React from 'react';

const productsData = [
  {
    id: 1,
    name: 'Premium Hosting Plan',
    price: '$29.99',
    description: 'Reliable and fast hosting for your websites.',
    link: '#'
  },
  {
    id: 2,
    name: 'SEO Tool Subscription',
    price: '$49.99',
    description: 'Boost your website ranking with our SEO tool.',
    link: '#'
  },
  {
    id: 3,
    name: 'Email Marketing Platform',
    price: '$19.99',
    description: 'Automate your email campaigns and increase sales.',
    link: '#'
  }
];

const Products = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Our Affiliate Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {productsData.map((product) => (
            <div key={product.id} className="border rounded-lg p-6 shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-700 mb-4">{product.description}</p>
              <p className="text-xl font-bold mb-4">{product.price}</p>
              <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-md transition"
              >
                Get Deal
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
