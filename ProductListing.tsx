import { Product } from '../types';
import ProductCard from './ProductCard';

interface ProductListingProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  searchQuery: string;
}

export default function ProductListing({ products, onAddToCart, searchQuery }: ProductListingProps) {
  const filteredProducts = products.filter((product) => {
    const searchLower = searchQuery.toLowerCase();
    return (
      product.name.toLowerCase().includes(searchLower) ||
      product.description.toLowerCase().includes(searchLower) ||
      product.category.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {searchQuery && (
        <div className="mb-6">
          <p className="text-gray-600">
            Found <span className="font-semibold text-blue-600">{filteredProducts.length}</span> result
            {filteredProducts.length !== 1 ? 's' : ''} for "{searchQuery}"
          </p>
        </div>
      )}

      {filteredProducts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No products found matching your search.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      )}
    </div>
  );
}
