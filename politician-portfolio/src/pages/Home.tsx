import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import {
  ArrowRight,
  Target,
  Compass,
  Users,
  Leaf,
  BookOpen,
  HeartHandshake,
  Ticket,
  ChevronRight,
} from 'lucide-react';

import SectionTitle from '../components/ui/SectionTitle';
import ServiceCard from '../components/ui/ServiceCard';
import EventCard from '../components/ui/EventCard';
import NewsCard from '../components/ui/NewsCard';
import TestimonialCard from '../components/ui/TestimonialCard';
import MediaCard from '../components/ui/MediaCard';
import FadeInSection, { StaggerContainer, StaggerItem } from '../components/ui/FadeInSection';
import JoinCommunityModal from '../components/modals/JoinCommunityModal';
import RaiseTicketModal from '../components/modals/RaiseTicketModal';

import { services } from '../data/services';
import { events } from '../data/events';
import { newsItems, tickerItems } from '../data/news';
import { testimonials } from '../data/testimonials';
import { achievements } from '../data/achievements';
import { featuredGalleryItems, heroImg, hero2Img } from '../data/gallery';

const stats = [
  { label: 'Votes Margin (Youth Congress)', value: 9000, suffix: '+', prefix: '' },
  { label: 'Borewells Sanctioned', value: 155, suffix: '+', prefix: '' },
  { label: 'Infrastructure Secured', value: 400, suffix: ' Cr+', prefix: '₹' },
  { label: 'Key Sectors of Service', value: 6, suffix: '', prefix: '' },
];

function StatItem({ stat }: { stat: typeof stats[0] }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  return (
    <div ref={ref} className="text-center px-4">
      <p className="font-poppins font-bold text-3xl md:text-4xl text-white mb-1">
        {stat.prefix}
        {inView ? (
          <CountUp end={stat.value} duration={2} separator="," />
        ) : (
          '0'
        )}
        {stat.suffix}
      </p>
      <p className="text-gray-300 text-sm font-inter">{stat.label}</p>
    </div>
  );
}

export default function Home({
  onJoinClick,
  onTicketClick,
}: {
  onJoinClick: () => void;
  onTicketClick: () => void;
}) {
  const upcomingEvents = events.filter(e => e.status === 'upcoming').slice(0, 3);
  const pastEvents = events.filter(e => e.status === 'past').slice(0, 3);
  const [eventsTab, setEventsTab] = useState<'upcoming' | 'past'>('upcoming');
  const displayedEvents = eventsTab === 'upcoming' ? upcomingEvents : pastEvents;

  return (
    <div>
      {/* ── 1. HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen bg-navy overflow-hidden flex items-center">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)`,
            backgroundSize: '30px 30px',
          }} />
        </div>

        {/* Saffron diagonal accent */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block">
          <div
            className="absolute inset-0 bg-gradient-to-br from-saffron/20 to-saffron/5"
            style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)' }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-2 bg-saffron/20 border border-saffron/30 text-saffron text-xs font-semibold font-inter px-4 py-2 rounded-full mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-saffron animate-pulse" />
                INC · Member of Legislative Council · Karnataka
              </motion.div>

              {/* Kannada headline */}
              <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="font-kannada text-saffron text-xl md:text-2xl mb-2"
              >
                ಜನರ ಮೆಚ್ಚಿನ ನಾಯಕ
              </motion.p>

              {/* English tagline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="text-white/60 text-sm font-inter tracking-widest uppercase mb-4"
              >
                JANARA MECHINA NAYAKA
              </motion.p>

              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="font-poppins font-black text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6"
              >
                Basanagouda
                <br />
                <span className="text-saffron">Badarli</span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-gray-300 font-inter text-base md:text-lg leading-relaxed max-w-lg mb-8"
              >
                Serving Karnataka with dedication, integrity and passion to create Opportunities,
                Empower communities and build a stronger future.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <button
                  onClick={onJoinClick}
                  className="inline-flex items-center gap-2 bg-saffron hover:bg-saffron-dark text-white font-semibold font-poppins px-8 py-3.5 rounded-full transition-all hover:shadow-xl hover:-translate-y-0.5 text-base"
                >
                  Join Community <Users size={18} />
                </button>
                <Link
                  to="/events"
                  className="inline-flex items-center gap-2 border-2 border-white/40 hover:border-saffron text-white hover:text-saffron font-semibold font-poppins px-8 py-3.5 rounded-full transition-all text-base"
                >
                  Upcoming Events <ArrowRight size={18} />
                </Link>
              </motion.div>
            </div>

            {/* Hero image placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex justify-center lg:justify-end relative"
            >
              <div className="relative w-72 h-96 md:w-80 md:h-[440px] lg:w-96 lg:h-[520px]">
                {/* Decorative frame */}
                <div className="absolute -top-3 -left-3 w-full h-full border-2 border-saffron/50 rounded-2xl" />
                <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={heroImg}
                    alt="Basanagouda Badarli — MLC Karnataka"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {/* Saffron tag badge */}
                <div className="absolute -bottom-4 -right-4 bg-saffron text-white rounded-xl px-4 py-3 shadow-xl">
                  <p className="font-poppins font-bold text-base">MLC</p>
                  <p className="text-xs font-inter opacity-90">Karnataka</p>
                </div>
                {/* INC badge */}
                <div className="absolute -top-4 -right-4 bg-white rounded-xl px-3 py-2 shadow-lg border border-gray-100">
                  <p className="font-poppins font-bold text-navy text-xs">INC</p>
                  <p className="text-gray-400 text-xs font-inter">Karnataka</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* News Ticker */}
        <div className="absolute bottom-0 left-0 right-0 bg-navy-dark/95 backdrop-blur-sm border-t border-white/10 overflow-hidden">
          <div className="flex items-stretch">
            <div className="shrink-0 bg-saffron text-white text-xs font-bold font-poppins px-5 py-3 uppercase tracking-widest flex items-center">
              LATEST
            </div>
            <div className="overflow-hidden flex-1 flex items-center py-3 pl-4">
              <p className="ticker-animate text-gray-200 text-sm font-inter">
                {tickerItems.map((item, i) => (
                  <span key={item.id}>
                    {i > 0 && <span className="mx-8 text-saffron/60">|</span>}
                    {item.title}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. STATS BAR ───────────────────────────────────────── */}
      <section className="bg-navy-dark py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 divide-y-2 lg:divide-y-0 lg:divide-x divide-white/10">
            {stats.map(stat => (
              <StatItem key={stat.label} stat={stat} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. MEET SECTION ────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <FadeInSection direction="left">
              <div className="relative">
                <div className="w-full max-w-md mx-auto">
                  <div className="relative">
                    <div className="absolute -top-4 -left-4 w-full h-full bg-saffron/10 rounded-2xl" />
                    <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={hero2Img}
                      alt="Basanagouda Badarli"
                      className="w-full h-full object-cover object-top"
                    />
                    {/* Subtle overlay for the badge */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="font-kannada text-white text-base font-medium drop-shadow">ಬಸನಗೌಡ ಬದರ್ಲಿ</p>
                      <p className="text-white/80 text-xs font-inter">MLC · Karnataka · INC</p>
                    </div>
                  </div>
                    {/* Stats badges */}
                    <div className="absolute -bottom-4 -right-4 bg-saffron text-white rounded-xl p-4 shadow-xl">
                      <p className="font-poppins font-bold text-2xl">9+</p>
                      <p className="text-xs font-inter">Years of Service</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>

            {/* Content */}
            <FadeInSection direction="right">
              <div>
                <SectionTitle
                  tag="Meet Our Leader"
                  title="Meet"
                  titleHighlight="Basanagouda Badarli"
                  subtitle="A dedicated leader working tirelessly to uplift Karnataka's communities through innovative solutions and heartfelt service."
                />

                <div className="space-y-5 mb-8">
                  <div className="flex items-start gap-4 p-4 bg-surface rounded-xl">
                    <div className="w-10 h-10 rounded-xl bg-saffron/10 flex items-center justify-center shrink-0">
                      <Target size={20} className="text-saffron" />
                    </div>
                    <div>
                      <h4 className="font-poppins font-semibold text-navy mb-1">Our Vision</h4>
                      <p className="text-sm text-gray-500 font-inter leading-relaxed">
                        A dedicated leader working tirelessly to uplift Karnataka's communities
                        through innovative solutions and heartfelt service.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-surface rounded-xl">
                    <div className="w-10 h-10 rounded-xl bg-saffron/10 flex items-center justify-center shrink-0">
                      <Compass size={20} className="text-saffron" />
                    </div>
                    <div>
                      <h4 className="font-poppins font-semibold text-navy mb-1">Our Mission</h4>
                      <p className="text-sm text-gray-500 font-inter leading-relaxed">
                        To bring positive change by empowering people with practical initiatives and
                        fostering unity across Karnataka.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-surface rounded-xl">
                    <div className="w-10 h-10 rounded-xl bg-saffron/10 flex items-center justify-center shrink-0">
                      <Users size={20} className="text-saffron" />
                    </div>
                    <div>
                      <h4 className="font-poppins font-semibold text-navy mb-1">
                        Youth Congress Legacy
                      </h4>
                      <p className="text-sm text-gray-500 font-inter leading-relaxed">
                        Elected KPYCC President (2017) with 9,000+ votes, digitizing youth wing
                        membership and conducting statewide Janadhikara rallies.
                      </p>
                    </div>
                  </div>
                </div>

                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 bg-saffron hover:bg-saffron-dark text-white font-semibold font-poppins px-7 py-3 rounded-full transition-all hover:shadow-lg"
                >
                  Learn More About Him <ArrowRight size={16} />
                </Link>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* ── 4. SERVICES ────────────────────────────────────────── */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <SectionTitle
              tag="Our Services"
              title="Committed to Uplifting Karnataka Through"
              titleHighlight="Dedicated Public Service"
              subtitle="Serving six key sectors across Raichur district with a focus on tangible, ground-level impact."
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

      {/* ── 5. ACHIEVEMENTS TIMELINE ───────────────────────────── */}
      <section className="py-20 bg-navy overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <SectionTitle
              tag="Milestones"
              title="A Journey of"
              titleHighlight="Impact & Achievement"
              subtitle="From leading Karnataka's youth to shaping state policy — key milestones in Basanagouda Badarli's career."
              light
              center
            />
          </FadeInSection>

          {/* Desktop horizontal scroll timeline */}
          <div className="hidden md:block relative mt-8">
            {/* Gold line */}
            <div className="absolute top-8 left-0 right-0 h-0.5 bg-gold/30" />
            <div className="flex gap-0 overflow-x-auto pb-4 snap-x snap-mandatory timeline-scroll">
              {achievements.map((item, idx) => (
                <FadeInSection key={item.id} delay={idx * 0.08} className="shrink-0 w-56 snap-start">
                  <div className="relative pt-16 pr-4">
                    {/* Dot */}
                    <div className="absolute top-5 left-0 w-6 h-6 rounded-full bg-saffron border-4 border-navy shadow-lg shadow-saffron/30 z-10" />
                    {/* Year badge */}
                    <span className="absolute top-0 left-0 bg-saffron text-white text-xs font-bold font-inter px-2.5 py-1 rounded-full">
                      {item.year}
                    </span>
                    <div className="bg-navy-light border border-white/10 rounded-xl p-4">
                      <h4 className="font-poppins font-semibold text-white text-sm leading-snug mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-400 text-xs font-inter leading-relaxed line-clamp-3">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>

          {/* Mobile vertical timeline */}
          <div className="md:hidden mt-8 space-y-6 relative before:absolute before:left-5 before:top-0 before:bottom-0 before:w-0.5 before:bg-gold/30">
            {achievements.map((item, idx) => (
              <FadeInSection key={item.id} delay={idx * 0.06}>
                <div className="flex gap-4 pl-12 relative">
                  <div className="absolute left-3 top-1 w-4 h-4 rounded-full bg-saffron border-2 border-navy" />
                  <div className="bg-navy-light border border-white/10 rounded-xl p-4 flex-1">
                    <span className="inline-block bg-saffron text-white text-xs font-bold font-inter px-2 py-0.5 rounded-full mb-2">
                      {item.year}
                    </span>
                    <h4 className="font-poppins font-semibold text-white text-sm mb-1">{item.title}</h4>
                    <p className="text-gray-400 text-xs font-inter leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. EVENTS PREVIEW ──────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <FadeInSection>
              <SectionTitle
                tag="Events"
                title="Events &"
                titleHighlight="Engagements"
                subtitle="Stay updated on Badarli's upcoming and recent events across Karnataka."
              />
            </FadeInSection>

            {/* Tab toggle */}
            <FadeInSection>
              <div className="flex items-center gap-1 bg-surface rounded-full p-1 border border-gray-200 shrink-0 self-start">
                {(['upcoming', 'past'] as const).map(tab => (
                  <button
                    key={tab}
                    onClick={() => setEventsTab(tab)}
                    className={`px-5 py-2 rounded-full text-sm font-semibold font-inter transition-all capitalize ${
                      eventsTab === tab
                        ? 'bg-saffron text-white shadow-sm'
                        : 'text-gray-500 hover:text-navy'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </FadeInSection>
          </div>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {displayedEvents.map(event => (
              <StaggerItem key={event.id}>
                <EventCard event={event} />
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div className="text-center">
            <Link
              to="/events"
              className="inline-flex items-center gap-2 border-2 border-saffron text-saffron hover:bg-saffron hover:text-white font-semibold font-poppins px-7 py-3 rounded-full transition-all"
            >
              View All Events <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 7. GALLERY SNEAK PEEK ──────────────────────────────── */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <FadeInSection>
              <SectionTitle
                tag="Moments"
                title="Snapshots from"
                titleHighlight="Karnataka's Journey"
                subtitle="Glimpses of Basanagouda Badarli's work and service across the state."
              />
            </FadeInSection>
            <FadeInSection>
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 text-saffron font-semibold font-inter hover:gap-4 transition-all shrink-0 self-start"
              >
                View Full Gallery <ChevronRight size={16} />
              </Link>
            </FadeInSection>
          </div>

          {/* Masonry-style grid with ratio-aware tile sizes */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-auto">
            {featuredGalleryItems.map((item, idx) => {
              const colSpanClass =
                item.ratio === '16/9'
                  ? 'col-span-2'
                  : 'col-span-1';
              return (
                <FadeInSection key={item.id} delay={idx * 0.05} className={colSpanClass}>
                  <MediaCard item={item} />
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 8. NEWS ────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breaking news ticker strip */}
          <div className="bg-navy-dark rounded-xl overflow-hidden mb-10 border border-navy/20 shadow-sm">
            <div className="flex items-stretch">
              <div className="shrink-0 flex items-center gap-2 bg-red-600 text-white text-xs font-bold font-poppins px-5 py-3.5 uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse shrink-0" />
                BREAKING
              </div>
              <div className="overflow-hidden flex-1 flex items-center py-3.5 px-5 border-l border-white/10">
                <p className="ticker-animate text-gray-200 text-sm font-inter">
                  {tickerItems.map((item, i) => (
                    <span key={item.id}>
                      {i > 0 && <span className="mx-8 text-saffron/50">•</span>}
                      {item.title}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <FadeInSection>
              <SectionTitle
                tag="Latest News"
                title="News &"
                titleHighlight="Notifications"
                subtitle="The latest updates, achievements and notifications from Basanagouda Badarli's office."
              />
            </FadeInSection>
            <FadeInSection>
              <Link
                to="/news"
                className="inline-flex items-center gap-2 text-saffron font-semibold font-inter hover:gap-4 transition-all shrink-0 self-start"
              >
                All News <ChevronRight size={16} />
              </Link>
            </FadeInSection>
          </div>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.slice(0, 3).map(item => (
              <StaggerItem key={item.id}>
                <NewsCard item={item} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── 9. TESTIMONIALS ────────────────────────────────────── */}
      <section className="py-20 bg-surface overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <SectionTitle
              tag="Testimonials"
              title="What People of"
              titleHighlight="Karnataka Say"
              subtitle="Words from the farmers, students, and citizens Badarli has served."
              center
            />
          </FadeInSection>

          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="pb-12"
          >
            {testimonials.map(t => (
              <SwiperSlide key={t.id} className="h-auto">
                <TestimonialCard testimonial={t} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ── 10. JOIN COMMUNITY CTA ─────────────────────────────── */}
      <section className="py-20 bg-gradient-to-br from-saffron to-saffron-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)`,
            backgroundSize: '30px 30px',
          }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeInSection direction="left">
              <div>
                <p className="font-kannada text-white/80 text-xl mb-2">ಸಮುದಾಯಕ್ಕೆ ಸೇರಿ</p>
                <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white leading-tight mb-4">
                  Be Part of the Change — Join Basanagouda's Movement
                </h2>
                <p className="text-white/80 font-inter text-base leading-relaxed mb-6">
                  Serving Karnataka with dedication, integrity and passion to create Opportunities,
                  Empower communities and build a stronger future.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-3 text-white">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <Leaf size={18} />
                    </div>
                    <span className="text-sm font-inter font-medium">Agricultural Support</span>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <BookOpen size={18} />
                    </div>
                    <span className="text-sm font-inter font-medium">Education Reform</span>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <HeartHandshake size={18} />
                    </div>
                    <span className="text-sm font-inter font-medium">Community Welfare</span>
                  </div>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection direction="right">
              <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-2xl">
                <h3 className="font-poppins font-bold text-xl text-navy mb-5">
                  Join Our Community
                </h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-inter focus:outline-none focus:border-saffron transition-all"
                  />
                  <input
                    type="tel"
                    placeholder="Phone number"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-inter focus:outline-none focus:border-saffron transition-all"
                  />
                  <input
                    type="text"
                    placeholder="District / Taluk"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-inter focus:outline-none focus:border-saffron transition-all"
                  />
                  <button
                    onClick={onJoinClick}
                    className="w-full bg-saffron hover:bg-saffron-dark text-white font-semibold font-poppins py-3.5 rounded-xl transition-all hover:shadow-lg"
                  >
                    Join Community
                  </button>
                  <p className="text-xs text-gray-400 font-inter text-center">
                    Your information will never be shared.
                  </p>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* ── 11. HELP & SUPPORT ─────────────────────────────────── */}
      <section className="py-16 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInSection>
            <p className="font-kannada text-saffron text-lg mb-2">ಸಹಾಯ ಮತ್ತು ಬೆಂಬಲ</p>
            <h2 className="font-poppins font-bold text-2xl md:text-3xl text-white mb-3">
              Help & Support
            </h2>
            <p className="text-gray-300 font-inter text-base max-w-xl mx-auto mb-8 leading-relaxed">
              Serving Karnataka with dedication, integrity and passion to create Opportunities,
              Empower communities and build a stronger future.
            </p>
            <button
              onClick={onTicketClick}
              className="inline-flex items-center gap-2 bg-saffron hover:bg-saffron-dark text-white font-semibold font-poppins px-8 py-3.5 rounded-full transition-all hover:shadow-xl hover:-translate-y-0.5"
            >
              <Ticket size={18} />
              Raise a Ticket
            </button>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
