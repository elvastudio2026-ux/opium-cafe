import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ isDark, toggleDark }: { isDark: boolean, toggleDark: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6 border-b border-white/20'}`}>
      <div className="max-w-[95%] lg:max-w-[90%] mx-auto flex justify-between items-center text-white font-sans text-xs uppercase tracking-widest">
        
        {/* Brand */}
        <div className="flex items-center gap-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
          </svg>
          <a href="#" className="font-medium flex items-center gap-2 text-sm tracking-wide capitalize ml-2">
            Opium Café
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
          </a>
        </div>

        {/* Center Nav */}
        <div className="hidden md:flex items-center absolute left-1/2 -translate-x-1/2 space-x-10">
          <a href="#menu" className="hover:text-gray-300 transition-colors">MENU</a>
          <a href="#contact" className="hover:text-gray-300 transition-colors">CONTACT</a>
        </div>

        {/* Right Nav */}
        <div className="hidden md:flex items-center space-x-10">
            <a href="#reservation" className="hover:text-gray-300 transition-colors">RÉSERVER</a>
            <div className="flex items-center space-x-2">
                <div className="px-4 py-1.5 border border-white/30 rounded-full hover:bg-white hover:text-black transition-colors cursor-pointer">FR</div>
                <button className="hover:text-gray-300 transition-colors opacity-60">ENG</button>
            </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0a0a0a] shadow-lg py-4 px-6 flex flex-col space-y-4">
          <a href="#menu" onClick={() => setMobileMenuOpen(false)} className="text-white py-2 border-b border-white/10 text-xs tracking-widest uppercase">Menu</a>
          <a href="#reservation" onClick={() => setMobileMenuOpen(false)} className="text-white py-2 border-b border-white/10 text-xs tracking-widest uppercase">Réserver</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-white py-2 border-b border-white/10 text-xs tracking-widest uppercase">Contact</a>
        </div>
      )}
    </nav>
  );
}
