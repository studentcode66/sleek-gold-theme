
import { ContentLayout } from '@/components/layouts/ContentLayout';
import { Button } from '@/components/ui/button';
import { Heart, ShoppingCart } from 'lucide-react';

const products = [
  { id: 1, name: 'Classic White Tee', price: 49.99 },
  { id: 2, name: 'Black Essential', price: 49.99 },
  { id: 3, name: 'Navy Premium', price: 59.99 },
  { id: 4, name: 'Gray Comfort', price: 54.99 },
  { id: 5, name: 'Burgundy Elite', price: 64.99 },
  { id: 6, name: 'Forest Green', price: 54.99 },
];

const Shop = () => {
  return (
    <ContentLayout>
      <div className="text-center mb-16 animate-fade-up">
        <h1 className="font-lora text-4xl md:text-5xl mb-6">Our Collection</h1>
        <p className="text-white/60 max-w-2xl mx-auto">
          Premium essentials crafted with the finest materials.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-card group p-4"
          >
            <div className="relative aspect-square mb-4 overflow-hidden rounded-xl">
              <img
                src="/placeholder.svg"
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm hover:bg-white/20"
              >
                <Heart className="w-5 h-5" />
              </Button>
            </div>
            <h3 className="font-medium text-lg mb-2">{product.name}</h3>
            <div className="flex items-center justify-between">
              <p className="text-gold">${product.price}</p>
              <Button size="sm" className="bg-gold text-charcoal hover:bg-gold/90">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Add to Cart
              </Button>
            </div>
          </div>
        ))}
      </div>
    </ContentLayout>
  );
};

export default Shop;
