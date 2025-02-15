
import { useState } from 'react';
import { ShoppingCart, Heart, ChevronRight } from 'lucide-react';

const FeaturedProduct = ({ title, price, image }: { title: string; price: string; image: string }) => (
  <div className="product-card group">
    <div className="relative aspect-[3/4] overflow-hidden">
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex gap-2">
            <button className="flex-1 btn-primary flex items-center justify-center gap-2">
              <ShoppingCart className="w-4 h-4" />
              Add to Cart
            </button>
            <button className="p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors">
              <Heart className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="p-4">
      <h3 className="font-lora text-lg">{title}</h3>
      <p className="text-gold mt-1">{price}</p>
    </div>
  </div>
);

const Index = () => {
  const [email, setEmail] = useState('');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen">
        <video 
          autoPlay 
          muted 
          loop 
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="your-video-url.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay absolute inset-0" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl animate-fade-up">
            <h1 className="font-lora text-5xl md:text-6xl lg:text-7xl font-bold">
              Limited Edition.
              <br />
              <span className="text-gold">Exclusive.</span> Yours.
            </h1>
            <p className="mt-6 text-lg text-white/80 max-w-lg">
              Discover our handcrafted collection of premium t-shirts, designed for those who appreciate true quality.
            </p>
            <button className="btn-primary mt-8 group">
              Shop Now
              <ChevronRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Featured Collections */}
      <section className="py-24 container mx-auto px-4">
        <h2 className="font-lora text-3xl md:text-4xl text-center mb-12">
          Featured <span className="text-gold">Collections</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <FeaturedProduct
              key={i}
              title={`Premium T-Shirt ${i}`}
              price="$99.00"
              image={`/placeholder.svg`}
            />
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-white/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-lora text-3xl md:text-4xl mb-6">
            Get <span className="text-gold">Early Access</span>
          </h2>
          <p className="text-white/80 max-w-md mx-auto mb-8">
            Subscribe to receive exclusive offers and be the first to know about new collections.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/10 rounded-xl border border-white/20 focus:border-gold outline-none transition-colors"
            />
            <button className="btn-primary animate-pulse-slow whitespace-nowrap">
              Get Early Access
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-lora text-xl mb-4">Quick Links</h3>
              <nav className="flex flex-col gap-2">
                <a href="#" className="nav-link">Shop</a>
                <a href="#" className="nav-link">About</a>
                <a href="#" className="nav-link">Contact</a>
                <a href="#" className="nav-link">Blog</a>
              </nav>
            </div>
            <div>
              <h3 className="font-lora text-xl mb-4">Connect With Us</h3>
              <div className="flex gap-4">
                {['Twitter', 'Instagram', 'Facebook'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors"
                  >
                    {/* Add social icons here */}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
