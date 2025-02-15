
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, User, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { label: 'Shop', path: '/shop' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
    { label: 'Blog', path: '/blog' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-charcoal/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="font-lora text-xl text-gold">
            LUXE
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${
                  isActive(item.path) ? 'text-gold' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop Right Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/wishlist" className="nav-link p-2">
              <Heart className="w-5 h-5" />
            </Link>
            <Link to="/cart" className="nav-link p-2">
              <ShoppingCart className="w-5 h-5" />
            </Link>
            <Link to="/login">
              <Button variant="ghost" className="text-white hover:text-gold">
                <User className="w-5 h-5" />
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-white/80 hover:text-gold"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 animate-fade-in">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block py-2 nav-link ${
                  isActive(item.path) ? 'text-gold' : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center space-x-4 pt-4 border-t border-white/10">
              <Link to="/wishlist" className="nav-link p-2" onClick={() => setIsOpen(false)}>
                <Heart className="w-5 h-5" />
              </Link>
              <Link to="/cart" className="nav-link p-2" onClick={() => setIsOpen(false)}>
                <ShoppingCart className="w-5 h-5" />
              </Link>
              <Link to="/login" onClick={() => setIsOpen(false)}>
                <Button variant="ghost" className="text-white hover:text-gold">
                  <User className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
