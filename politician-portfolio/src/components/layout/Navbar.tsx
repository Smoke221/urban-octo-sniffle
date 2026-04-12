import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Twitter, Facebook, Instagram, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../../assets/images/name_logo.jpeg';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Agriculture', href: '/services/agriculture' },
      { label: 'Education', href: '/services/education' },
      { label: 'Healthcare', href: '/services/healthcare' },
      { label: 'Police & Safety', href: '/services/police' },
      { label: 'Revenue & Administration', href: '/services/revenue' },
      { label: 'Infrastructure', href: '/services/infrastructure' },
    ],
  },
  { label: 'Events', href: '/events' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'News', href: '/news' },
];

export default function Navbar({ onJoinClick }: { onJoinClick: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  // Only use transparent navbar on the Home page hero
  const isHome = location.pathname === '/';
  // Navbar is "solid" (white bg) when scrolled OR when not on the home page
  const isSolid = scrolled || !isHome;

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    // Re-check scroll position on route change (in case navigating to a scrolled position)
    handler();
    return () => window.removeEventListener('scroll', handler);
  }, [location.pathname]);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isActive = (href: string) =>
    href === '/' ? location.pathname === '/' : location.pathname.startsWith(href);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isSolid ? 'bg-white shadow-lg' : 'bg-transparent'
        }`}
      >
        {/* INC Tricolor top strip */}
        <div className="inc-strip" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-saffron/40 shrink-0">
                <img src={logoImg} alt="Basanagouda Badarli" className="w-full h-full object-cover object-top" />
              </div>
              <div className="flex flex-col leading-tight">
                <span
                  className={`font-poppins font-bold text-base lg:text-lg transition-colors ${
                    isSolid ? 'text-navy' : 'text-white'
                  }`}
                >
                  Basanagouda Badarli
                </span>
                <span
                  className={`text-xs font-inter transition-colors ${
                    isSolid ? 'text-saffron' : 'text-saffron-light'
                  }`}
                >
                  MLC · Karnataka · INC
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map(link =>
                link.children ? (
                  <div key={link.label} className="relative">
                    <button
                      onClick={() => setServicesOpen(v => !v)}
                      onBlur={() => setTimeout(() => setServicesOpen(false), 150)}
                      className={`flex items-center gap-1 text-sm font-medium font-inter transition-colors hover:text-saffron ${
                        isSolid ? 'text-navy' : 'text-white'
                      } ${isActive(link.href) ? 'text-saffron' : ''}`}
                    >
                      {link.label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 mt-2 w-52 bg-white shadow-xl rounded-lg overflow-hidden border border-gray-100"
                        >
                          {link.children.map(child => (
                            <Link
                              key={child.href}
                              to={child.href}
                              className="block px-4 py-2.5 text-sm text-navy hover:bg-saffron hover:text-white transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                          <Link
                            to="/services"
                            className="block px-4 py-2.5 text-sm font-semibold text-saffron border-t border-gray-100 hover:bg-saffron hover:text-white transition-colors"
                          >
                            All Services →
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`text-sm font-medium font-inter transition-colors hover:text-saffron ${
                      isSolid ? 'text-navy' : 'text-white'
                    } ${isActive(link.href) ? '!text-saffron font-semibold' : ''}`}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* Right: Social + CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <div className="flex items-center gap-2">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-1.5 rounded-full hover:text-saffron transition-colors ${
                    isSolid ? 'text-navy' : 'text-white'
                  }`}
                >
                  <Twitter size={16} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-1.5 rounded-full hover:text-saffron transition-colors ${
                    isSolid ? 'text-navy' : 'text-white'
                  }`}
                >
                  <Facebook size={16} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-1.5 rounded-full hover:text-saffron transition-colors ${
                    isSolid ? 'text-navy' : 'text-white'
                  }`}
                >
                  <Instagram size={16} />
                </a>
              </div>
              <button
                onClick={onJoinClick}
                className="bg-saffron hover:bg-saffron-dark text-white text-sm font-semibold font-poppins px-5 py-2 rounded-full transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                Join Community
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              className={`lg:hidden p-2 transition-colors ${isSolid ? 'text-navy' : 'text-white'}`}
              onClick={() => setMobileOpen(v => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-72 bg-white z-50 shadow-2xl flex flex-col lg:hidden"
            >
              <div className="inc-strip" />
              <div className="flex items-center justify-between p-5 border-b">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-saffron/40 shrink-0">
                    <img src={logoImg} alt="Basanagouda Badarli" className="w-full h-full object-cover object-top" />
                  </div>
                  <div>
                    <p className="font-poppins font-bold text-navy text-base">Basanagouda Badarli</p>
                    <p className="text-xs text-saffron font-inter">MLC · Karnataka · INC</p>
                  </div>
                </div>
                <button onClick={() => setMobileOpen(false)} className="text-navy">
                  <X size={22} />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto p-5">
                {navLinks.map(link => (
                  <div key={link.label}>
                    <Link
                      to={link.href}
                      className={`block py-3 text-base font-medium font-inter border-b border-gray-100 transition-colors hover:text-saffron ${
                        isActive(link.href) ? 'text-saffron' : 'text-navy'
                      }`}
                    >
                      {link.label}
                    </Link>
                    {link.children && (
                      <div className="pl-4 bg-gray-50 rounded">
                        {link.children.map(child => (
                          <Link
                            key={child.href}
                            to={child.href}
                            className="block py-2.5 text-sm text-gray-600 hover:text-saffron border-b border-gray-100 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Link
                  to="/contact"
                  className={`block py-3 text-base font-medium font-inter border-b border-gray-100 transition-colors hover:text-saffron ${
                    isActive('/contact') ? 'text-saffron' : 'text-navy'
                  }`}
                >
                  Contact
                </Link>
              </nav>

              <div className="p-5 border-t">
                <button
                  onClick={() => { onJoinClick(); setMobileOpen(false); }}
                  className="w-full bg-saffron hover:bg-saffron-dark text-white font-semibold font-poppins py-3 rounded-full transition-all"
                >
                  Join Community
                </button>
                <div className="flex justify-center gap-4 mt-4">
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-navy hover:text-saffron">
                    <Twitter size={20} />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-navy hover:text-saffron">
                    <Facebook size={20} />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-navy hover:text-saffron">
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
