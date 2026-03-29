import { ShoppingBag, TrendingUp, Award, Shield } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <ShoppingBag className="w-8 h-8 text-blue-600" />,
      title: 'Wide Selection',
      description: 'Browse thousands of products across multiple categories'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      title: 'Best Prices',
      description: 'Competitive pricing with regular discounts and deals'
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: 'Quality Products',
      description: 'All products are verified for quality and authenticity'
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: 'Secure Shopping',
      description: 'Your payment and personal information is always protected'
    }
  ];

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About MuraliHub</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your one-stop destination for quality products at unbeatable prices.
            We are committed to providing an exceptional shopping experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Story</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Founded in 2026, MuraliHub started with a simple mission: to make online
            shopping easy, enjoyable, and accessible to everyone. We carefully curate
            our product selection to ensure you get the best quality at competitive prices.
          </p>
          <p className="text-gray-600 leading-relaxed">
            With thousands of satisfied customers and growing, we continue to expand
            our offerings while maintaining our commitment to excellent customer service
            and product quality.
          </p>
        </div>
      </div>
    </section>
  );
}
