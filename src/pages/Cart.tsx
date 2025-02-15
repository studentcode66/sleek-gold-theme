
import { ContentLayout } from '@/components/layouts/ContentLayout';
import { Button } from '@/components/ui/button';
import { Minus, Plus, Trash2 } from 'lucide-react';

const cartItems = [
  { id: 1, name: 'Classic White Tee', price: 49.99, quantity: 1, size: 'M' },
  { id: 2, name: 'Black Essential', price: 49.99, quantity: 2, size: 'L' },
];

const Cart = () => {
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 10;
  const total = subtotal + shipping;

  return (
    <ContentLayout>
      <div className="text-center mb-16 animate-fade-up">
        <h1 className="font-lora text-4xl md:text-5xl mb-6">Shopping Cart</h1>
        <p className="text-white/60">Review and manage your selected items.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-white/5 backdrop-blur-lg rounded-xl p-6 flex gap-6"
            >
              <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                <img
                  src="/placeholder.svg"
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-grow">
                <div className="flex justify-between mb-2">
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-gold">${item.price}</p>
                </div>
                <p className="text-white/60 mb-4">Size: {item.size}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 bg-white/5 border-white/10"
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span>{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 bg-white/5 border-white/10"
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white/60 hover:text-white"
                  >
                    <Trash2 className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 h-fit">
          <h2 className="font-lora text-xl mb-6">Order Summary</h2>
          <div className="space-y-4 text-white/80">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div className="border-t border-white/10 pt-4 flex justify-between font-medium">
              <span>Total</span>
              <span className="text-gold">${total.toFixed(2)}</span>
            </div>
          </div>
          <Button className="w-full btn-primary mt-6">
            Proceed to Checkout
          </Button>
        </div>
      </div>
    </ContentLayout>
  );
};

export default Cart;
