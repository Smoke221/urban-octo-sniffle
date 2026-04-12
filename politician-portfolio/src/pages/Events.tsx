import { useState } from 'react';
import { events } from '../data/events';
import EventCard from '../components/ui/EventCard';
import SectionTitle from '../components/ui/SectionTitle';
import FadeInSection, { StaggerContainer, StaggerItem } from '../components/ui/FadeInSection';

export default function Events() {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');
  const filtered = events.filter(e => e.status === activeTab);

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
            Events
          </span>
          <h1 className="font-poppins font-black text-4xl md:text-5xl text-white mb-4">
            Events & <span className="text-saffron">Engagements</span>
          </h1>
          <p className="text-gray-300 font-inter text-base max-w-xl mx-auto leading-relaxed">
            Basanagouda Badarli's schedule as an MLC and key figure in Karnataka Congress,
            centered around high-level policy and regional development.
          </p>
        </div>
      </div>

      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab toggle */}
          <div className="flex justify-center mb-10">
            <div className="flex items-center gap-1 bg-white rounded-full p-1 border border-gray-200 shadow-sm">
              {(['upcoming', 'past'] as const).map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 py-2.5 rounded-full text-sm font-semibold font-inter transition-all capitalize ${
                    activeTab === tab
                      ? 'bg-saffron text-white shadow-sm'
                      : 'text-gray-500 hover:text-navy'
                  }`}
                >
                  {tab} ({events.filter(e => e.status === tab).length})
                </button>
              ))}
            </div>
          </div>

          <FadeInSection className="mb-8">
            <SectionTitle
              tag={activeTab === 'upcoming' ? 'Upcoming' : 'Past Events'}
              title={activeTab === 'upcoming' ? 'Upcoming Engagements' : 'Recent Events'}
              subtitle={
                activeTab === 'upcoming'
                  ? 'Scheduled events and ongoing commitments in the coming weeks.'
                  : 'A look back at recent events, inaugurations and community engagements.'
              }
            />
          </FadeInSection>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(event => (
              <StaggerItem key={event.id}>
                <EventCard event={event} />
              </StaggerItem>
            ))}
          </StaggerContainer>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-400 font-inter">No {activeTab} events found.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
