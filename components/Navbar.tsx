import React, { useState, useEffect } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import Button from './Button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer group">
            <div className="bg-brand-blue p-2 rounded-lg text-white group-hover:bg-brand-dark transition-colors">
              <GraduationCap size={24} />
            </div>
            <span className={`text-2xl font-bold tracking-tight ${scrolled ? 'text-brand-dark' : 'text-slate-900'}`}>
              Our<span className="text-brand-blue">School</span>.it
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-brand-accent ${
                  scrolled ? 'text-slate-600' : 'text-slate-700'
                }`}
              >
                {item.label}
              </a>
            ))}
            <Button variant="primary" size="sm">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-slate-700 hover:text-brand-blue focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl py-4 px-4 flex flex-col space-y-4">
           {NAV_ITEMS.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-slate-700 hover:text-brand-blue block p-2 rounded-lg hover:bg-slate-50"
              >
                {item.label}
              </a>
            ))}
            <Button className="w-full" variant="primary">Get Started</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;