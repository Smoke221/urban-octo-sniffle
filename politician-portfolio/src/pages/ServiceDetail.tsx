import { useParams, Link } from 'react-router-dom';
import { services } from '../data/services';
import { galleryItems } from '../data/gallery';
import FadeInSection, { StaggerContainer, StaggerItem } from '../components/ui/FadeInSection';
import SectionTitle from '../components/ui/SectionTitle';
import MediaCard from '../components/ui/MediaCard';
import {
  ArrowLeft,
  CheckCircle2,
  Wheat,
  GraduationCap,
  HeartPulse,
  Shield,
  ScrollText,
  Building2,
  type LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Wheat,
  GraduationCap,
  HeartPulse,
  Shield,
  ScrollText,
  Building2,
};

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find(s => s.slug === slug);

  if (!service) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500 font-inter mb-4">Service not found.</p>
          <Link to="/services" className="text-saffron font-semibold">← Back to Services</Link>
        </div>
      </div>
    );
  }

  const Icon = iconMap[service.icon] || Building2;
  const relatedMedia = galleryItems.filter(item => item.category === service.slug);

  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="bg-navy py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)`,
          backgroundSize: '30px 30px',
        }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-saffron hover:text-saffron-light font-inter text-sm mb-8 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to All Services
          </Link>
          <div className="flex items-start gap-5">
            <div className="w-16 h-16 rounded-xl bg-saffron/20 flex items-center justify-center shrink-0">
              <Icon size={32} className="text-saffron" />
            </div>
            <div>
              <p className="font-kannada text-saffron/70 text-base mb-1">{service.kannada}</p>
              <h1 className="font-poppins font-black text-3xl md:text-5xl text-white mb-3">
                {service.title}
              </h1>
              <p className="text-gray-300 font-inter text-base max-w-2xl leading-relaxed">
                {service.shortDescription}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main content */}
            <FadeInSection className="lg:col-span-2">
              <SectionTitle tag="Overview" title="About This Service" />
              <p className="text-gray-600 font-inter text-base leading-relaxed mb-10">
                {service.fullDescription}
              </p>

              <SectionTitle tag="Key Initiatives" title="Highlights &" titleHighlight="Achievements" />
              <div className="space-y-4">
                {service.highlights.map((highlight, idx) => (
                  <FadeInSection key={idx} delay={idx * 0.06}>
                    <div className="flex items-start gap-4 p-4 bg-surface rounded-xl border border-gray-100">
                      <CheckCircle2 size={20} className="text-saffron shrink-0 mt-0.5" />
                      <p className="text-gray-700 font-inter text-sm leading-relaxed">{highlight}</p>
                    </div>
                  </FadeInSection>
                ))}
              </div>
            </FadeInSection>

            {/* Sidebar */}
            <FadeInSection direction="right">
              <div className="bg-surface rounded-2xl p-6 border border-gray-100">
                <h3 className="font-poppins font-bold text-navy text-lg mb-4 pb-3 border-b border-gray-200">
                  Quick Overview
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-semibold font-inter text-saffron uppercase tracking-wider mb-1">
                      Service Area
                    </p>
                    <p className="text-sm font-inter text-navy">{service.title}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold font-inter text-saffron uppercase tracking-wider mb-1">
                      Region
                    </p>
                    <p className="text-sm font-inter text-navy">Sindhanur, Raichur District, North Karnataka</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold font-inter text-saffron uppercase tracking-wider mb-1">
                      Key Initiatives
                    </p>
                    <p className="text-sm font-inter text-navy">{service.highlights.length} documented initiatives</p>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <Link
                    to="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 bg-saffron hover:bg-saffron-dark text-white font-semibold font-poppins py-3 rounded-full transition-all text-sm"
                  >
                    Raise a Support Ticket
                  </Link>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Related Media */}
      {relatedMedia.length > 0 && (
        <section className="py-16 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInSection>
              <SectionTitle
                tag="Gallery"
                title={`${service.title}`}
                titleHighlight="Gallery"
                subtitle="Photos and videos from our work in this area."
              />
            </FadeInSection>
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {relatedMedia.map((item) => (
                <StaggerItem key={item.id} className={item.ratio === '16/9' ? 'col-span-2' : 'col-span-1'}>
                  <MediaCard item={item} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}

      {/* Other services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInSection>
            <h2 className="font-poppins font-bold text-2xl text-navy mb-6">Explore Other Services</h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {services
                .filter(s => s.slug !== slug)
                .map(s => {
                  const SIcon = iconMap[s.icon] || Building2;
                  return (
                    <Link
                      key={s.slug}
                      to={`/services/${s.slug}`}
                      className="inline-flex items-center gap-2 border border-gray-200 hover:border-saffron text-navy hover:text-saffron font-inter text-sm px-4 py-2 rounded-full transition-all hover:shadow-sm"
                    >
                      <SIcon size={14} />
                      {s.title}
                    </Link>
                  );
                })}
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
