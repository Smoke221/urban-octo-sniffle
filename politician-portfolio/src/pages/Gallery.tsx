import { useState } from 'react';
import { galleryItems, galleryCategories, type GalleryCategory } from '../data/gallery';
import MediaCard from '../components/ui/MediaCard';
import SectionTitle from '../components/ui/SectionTitle';
import FadeInSection, { StaggerContainer, StaggerItem } from '../components/ui/FadeInSection';
import type { ComponentType } from 'react';
import { Images, Film } from 'lucide-react';

const categoryLabels: Record<string, string> = {
  all: 'All',
  agriculture: 'Agriculture',
  education: 'Education',
  healthcare: 'Healthcare',
  events: 'Events',
  community: 'Community',
  infrastructure: 'Infrastructure',
};

type MediaFilter = 'all' | 'image' | 'video';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('all');
  const [mediaFilter, setMediaFilter] = useState<MediaFilter>('all');

  const filtered = galleryItems.filter(item => {
    const catMatch = activeCategory === 'all' || item.category === activeCategory;
    const typeMatch = mediaFilter === 'all' || item.type === mediaFilter;
    return catMatch && typeMatch;
  });

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
            Gallery
          </span>
          <h1 className="font-poppins font-black text-4xl md:text-5xl text-white mb-4">
            Moments &<span className="text-saffron"> Memories</span>
          </h1>
          <p className="text-gray-300 font-inter text-base max-w-xl mx-auto leading-relaxed">
            Snapshots from Basanagouda Badarli's journey with Karnataka's people — in images and
            videos across all service areas.
          </p>
        </div>
      </div>

      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center mb-8">
            {/* Category chips */}
            <div className="flex flex-wrap gap-2">
              {galleryCategories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold font-inter transition-all capitalize ${
                    activeCategory === cat
                      ? 'bg-saffron text-white shadow-sm'
                      : 'bg-white text-gray-600 border border-gray-200 hover:border-saffron hover:text-saffron'
                  }`}
                >
                  {categoryLabels[cat]}
                </button>
              ))}
            </div>

            {/* Media type filter */}
            <div className="flex items-center gap-2 bg-white rounded-full p-1 border border-gray-200 shrink-0">
              {([
                { value: 'all', label: 'All' },
                { value: 'image', label: 'Photos', icon: Images },
                { value: 'video', label: 'Videos', icon: Film },
              ] as { value: MediaFilter; label: string; icon?: ComponentType<{ size?: number }> }[]).map(opt => (
                <button
                  key={opt.value}
                  onClick={() => setMediaFilter(opt.value)}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold font-inter transition-all ${
                    mediaFilter === opt.value
                      ? 'bg-navy text-white shadow-sm'
                      : 'text-gray-500 hover:text-navy'
                  }`}
                >
                  {opt.icon && <opt.icon size={14} />}
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <FadeInSection className="mb-6">
            <p className="text-sm text-gray-400 font-inter">
              Showing {filtered.length} items
              {activeCategory !== 'all' && ` in ${categoryLabels[activeCategory]}`}
              {mediaFilter !== 'all' && ` · ${mediaFilter === 'image' ? 'Photos' : 'Videos'} only`}
            </p>
          </FadeInSection>

          {/* Masonry grid — ratio-aware column spans */}
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-auto">
              {filtered.map((item) => {
              const colSpan = item.ratio === '16/9' ? 'col-span-2' : 'col-span-1';
              return (
                <StaggerItem key={item.id} className={colSpan}>
                  <MediaCard item={item} />
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 font-inter mb-2">No items found for this filter.</p>
              <button
                onClick={() => { setActiveCategory('all'); setMediaFilter('all'); }}
                className="text-saffron font-semibold font-inter text-sm hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}

          {/* Note about upcoming media */}
          <FadeInSection className="mt-12 p-6 bg-navy/5 rounded-2xl border border-navy/10 text-center">
            <p className="text-sm text-gray-500 font-inter">
              More photos and videos are being added regularly.{' '}
              <span className="text-navy font-medium">
                Videos support all aspect ratios — portrait (9:16), landscape (16:9), square (1:1) and standard (4:3).
              </span>
            </p>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
