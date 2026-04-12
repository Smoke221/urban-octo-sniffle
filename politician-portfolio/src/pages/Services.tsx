import SectionTitle from '../components/ui/SectionTitle';
import ServiceCard from '../components/ui/ServiceCard';
import FadeInSection, { StaggerContainer, StaggerItem } from '../components/ui/FadeInSection';
import { services } from '../data/services';
import { Link } from 'react-router-dom';
import { Users } from 'lucide-react';

export default function Services() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="bg-navy py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)`,
          backgroundSize: '30px 30px',
        }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-semibold font-inter uppercase tracking-widest text-saffron bg-saffron/10 px-3 py-1 rounded-full mb-4">
            Services
          </span>
          <h1 className="font-poppins font-black text-4xl md:text-5xl text-white mb-4">
            Committed to <span className="text-saffron">Uplifting Karnataka</span>
          </h1>
          <p className="text-gray-300 font-inter text-base max-w-2xl mx-auto leading-relaxed">
            Basanagouda Badarli's work spans six key sectors, each rooted in a deep understanding of
            the needs of Raichur district and North Karnataka.
          </p>
        </div>
      </div>

      {/* Services grid */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <SectionTitle
              tag="All Services"
              title="Our Areas of"
              titleHighlight="Service"
              subtitle="Click on any service to learn more about Badarli's work and initiatives in that area."
              center
            />
          </FadeInSection>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(service => (
              <StaggerItem key={service.id}>
                <ServiceCard service={service} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy text-center">
        <FadeInSection>
          <p className="font-kannada text-saffron text-lg mb-2">ಸಮುದಾಯಕ್ಕೆ ಸೇರಿ</p>
          <h2 className="font-poppins font-bold text-2xl md:text-3xl text-white mb-3">
            Want to Know More or Need Help?
          </h2>
          <p className="text-gray-300 font-inter text-sm max-w-md mx-auto mb-7">
            Reach out to Basanagouda Badarli's office for support across any of these service areas.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-saffron hover:bg-saffron-dark text-white font-semibold font-poppins px-7 py-3 rounded-full transition-all hover:shadow-lg"
            >
              <Users size={16} />
              Raise a Ticket
            </Link>
          </div>
        </FadeInSection>
      </section>
    </div>
  );
}
