import { useState } from 'react';
import { newsItems, tickerItems } from '../data/news';
import NewsCard from '../components/ui/NewsCard';
import SectionTitle from '../components/ui/SectionTitle';
import FadeInSection, { StaggerContainer, StaggerItem } from '../components/ui/FadeInSection';

const allCategories = ['All', ...Array.from(new Set(newsItems.map(n => n.category)))];

export default function News() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All'
      ? newsItems
      : newsItems.filter(n => n.category === activeCategory);

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
            News
          </span>
          <h1 className="font-poppins font-black text-4xl md:text-5xl text-white mb-4">
            News & <span className="text-saffron">Notifications</span>
          </h1>
          <p className="text-gray-300 font-inter text-base max-w-xl mx-auto leading-relaxed">
            The latest updates, achievements, and official notifications from Basanagouda Badarli's
            office.
          </p>
        </div>
      </div>

      {/* Breaking news ticker */}
      <div className="bg-navy-dark border-b border-white/10 overflow-hidden">
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

      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category filter chips */}
          <div className="flex flex-wrap gap-2 mb-8">
            {allCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold font-inter transition-all ${
                  activeCategory === cat
                    ? 'bg-saffron text-white shadow-sm'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-saffron hover:text-saffron'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <FadeInSection className="mb-8">
            <SectionTitle
              tag="Latest Updates"
              title="All News &"
              titleHighlight="Updates"
              subtitle={`Showing ${filtered.length} articles${activeCategory !== 'All' ? ` in ${activeCategory}` : ''}.`}
            />
          </FadeInSection>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(item => (
              <StaggerItem key={item.id}>
                <NewsCard item={item} />
              </StaggerItem>
            ))}
          </StaggerContainer>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-400 font-inter">No articles found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
