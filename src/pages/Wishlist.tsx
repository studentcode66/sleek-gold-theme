
import { ContentLayout } from '@/components/layouts/ContentLayout';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Trash2 } from 'lucide-react';

const wishlistItems = [
  { id: 1, name: 'Classic White Tee', price: 49.99 },
  { id: 2, name: 'Black Essential', price: 49.99 },
  { id: 3, name: 'Navy Premium', price: 59.99 },
];

const Wishlist = () => {
  return (
    <ContentLayout>
      <div className="text-center mb-16 animate-fade-up">
        <h1 className="font-lora text-4xl md:text-5xl mb-6">Your Wishlist</h1>
        <p className="text-white/60">Items you've saved for later.</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {wishlistItems.map((item) => (
          <div
            key={item.id}
            className="bg-white/5 backdrop-blur-lg rounded-xl overflow-hidden group"
          >
            <div className="aspect-square relative">
              <img
                src="/placeholder.svg"
                alt={item.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm hover:bg-white/20"
              >
                <Trash2 className="w-5 h-5" />
              </Button>
            </div>
            <div className="p-6">
              <h3 className="font-medium mb-2">{item.name}</h3>
              <div className="flex items-center justify-between">
                <p className="text-gold">${item.price}</p>
                <Button size="sm" className="bg-gold text-charcoal hover:bg-gold/90">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {wishlistItems.length === 0 && (
        <div className="text-center py-12">
          <p className="text-white/60">Your wishlist is empty.</p>
          <Button asChild className="mt-4">
            <a href="/shop">Continue Shopping</a>
          </Button>
        </div>
      )}
    </ContentLayout>
  );
};

export default Wishlist;
