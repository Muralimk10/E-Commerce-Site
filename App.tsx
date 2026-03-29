import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SearchBar from './components/SearchBar';
import ProductListing from './components/ProductListing';
import ShoppingCart from './components/ShoppingCart';
import About from './components/About';
import Contact from './components/Contact';
import { products } from './data/products';
import { Product, CartItem } from './types';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (productId: number, quantity: number) => {
    if (quantity === 0) {
      handleRemoveItem(productId);
    } else {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === productId ? { ...item, quantity } : item
        )
      );
    }
  };

  const handleRemoveItem = (productId: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const totalCartItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar
        cartItemCount={totalCartItems}
        onCartClick={() => setIsCartOpen(true)}
        onNavigate={handleNavigate}
      />

      <ShoppingCart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />

      <Hero />

      <section id="products" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            Our Products
          </h2>
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>
        <ProductListing
          products={products}
          onAddToCart={handleAddToCart}
          searchQuery={searchQuery}
        />
      </section>

      <About />
      <Contact />

      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-300">
            &copy; 2026 MuraliHub. All rights reserved.
          </p>
          <p className="text-gray-400 mt-2">
            Built with HTML,CSS, and JavaScript
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
