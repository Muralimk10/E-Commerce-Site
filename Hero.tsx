export default function Hero() {
  return (
    <section id="home" className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Welcome to MuraliHub
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Discover amazing products at unbeatable prices
          </p>
          <p className="text-lg mb-8 text-blue-50 max-w-2xl mx-auto">
            Shop from our hub collection of electronics, fashion, home goods, and more.
            Quality products delivered right to your doorstep.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('products');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors shadow-lg"
          >
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}
