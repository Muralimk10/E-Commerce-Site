import { ShoppingCart, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  cartItemCount: number;
  onCartClick: () => void;
  onNavigate: (section: string) => void;
}

export default function Navbar({ cartItemCount, onCartClick, onNavigate }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Products', id: 'products' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' }
  ];

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button
              onClick={() => handleNavClick('home')}
              className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
            >
              MuraliHub
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={onCartClick}
              className="relative p-2 text-gray-700 hover:text-blue-600 transition-colors"
              aria-label="Shopping cart"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>

            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-3 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
