import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Twitter, Facebook, Instagram, Youtube } from 'lucide-react';
import logoImg from '../../assets/images/name_logo.jpeg';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Events', href: '/events' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'News', href: '/news' },
  { label: 'Contact', href: '/contact' },
];

const serviceLinks = [
  { label: 'Agriculture', href: '/services/agriculture' },
  { label: 'Education', href: '/services/education' },
  { label: 'Healthcare', href: '/services/healthcare' },
  { label: 'Police & Safety', href: '/services/police' },
  { label: 'Revenue & Administration', href: '/services/revenue' },
  { label: 'Infrastructure', href: '/services/infrastructure' },
];

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Bio */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-saffron/40 shrink-0">
                <img src={logoImg} alt="Basanagouda Badarli" className="w-full h-full object-cover object-top" />
              </div>
              <div>
                <p className="font-poppins font-bold text-lg text-white leading-tight">
                  Basanagouda Badarli
                </p>
                <p className="text-saffron text-xs font-inter mt-0.5">MLC · Karnataka · INC</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed font-inter mb-5">
              Basanagouda Badarli is a prominent leader within the Indian National Congress (INC) in
              Karnataka, currently serving as a Member of the Legislative Council (MLC). He is
              dedicated to uplifting Karnataka's communities through innovative solutions and
              heartfelt service.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-saffron transition-colors"
              >
                <Twitter size={15} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-saffron transition-colors"
              >
                <Facebook size={15} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-saffron transition-colors"
              >
                <Instagram size={15} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-saffron transition-colors"
              >
                <Youtube size={15} />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-poppins font-semibold text-base text-white mb-5 relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-saffron">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map(link => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-gray-300 text-sm font-inter hover:text-saffron transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-saffron/50 group-hover:bg-saffron transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="font-poppins font-semibold text-base text-white mb-5 relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-saffron">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map(link => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-gray-300 text-sm font-inter hover:text-saffron transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-saffron/50 group-hover:bg-saffron transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="font-poppins font-semibold text-base text-white mb-5 relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-saffron">
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-300 text-sm font-inter">
                <MapPin size={16} className="text-saffron mt-0.5 shrink-0" />
                <span>Jana Spandana Office, Sindhanur, Raichur District, Karnataka – 584128</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300 text-sm font-inter">
                <Phone size={16} className="text-saffron shrink-0" />
                <a href="tel:+919448000000" className="hover:text-saffron transition-colors">
                  +91 94480 00000
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-300 text-sm font-inter">
                <Mail size={16} className="text-saffron shrink-0" />
                <a
                  href="mailto:contact@basanagoudabadarli.com"
                  className="hover:text-saffron transition-colors"
                >
                  contact@basanagoudabadarli.com
                </a>
              </li>
            </ul>
            <Link
              to="/contact"
              className="inline-block mt-5 bg-saffron hover:bg-saffron-dark text-white text-sm font-semibold font-poppins px-5 py-2.5 rounded-full transition-all hover:shadow-lg"
            >
              Raise a Ticket
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-gray-400 font-inter">
          <p>© 2026 Basanagouda Badarli, MLC · Karnataka. All rights reserved.</p>
          <p>
            Indian National Congress (INC) ·{' '}
            <span className="text-saffron">Serving Karnataka with Dedication</span>
          </p>
        </div>
      </div>

      {/* INC Tricolor bottom strip */}
      <div className="inc-strip" />
    </footer>
  );
}
