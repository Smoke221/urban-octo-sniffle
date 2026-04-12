import { Calendar, MapPin, Tag } from 'lucide-react';
import type { Event } from '../../data/events';

const categoryColors: Record<string, string> = {
  Education: 'bg-blue-100 text-blue-700',
  Agriculture: 'bg-green-100 text-green-700',
  Healthcare: 'bg-red-100 text-red-700',
  Cultural: 'bg-purple-100 text-purple-700',
  'Education Policy': 'bg-indigo-100 text-indigo-700',
  Administration: 'bg-yellow-100 text-yellow-700',
  Community: 'bg-pink-100 text-pink-700',
  Legislative: 'bg-gray-100 text-gray-700',
  Social: 'bg-teal-100 text-teal-700',
};

interface EventCardProps {
  event: Event;
  compact?: boolean;
}

export default function EventCard({ event, compact = false }: EventCardProps) {
  const catColor = categoryColors[event.category] || 'bg-gray-100 text-gray-700';

  return (
    <div
      className={`bg-white rounded-2xl border border-gray-100 hover:border-saffron/30 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group ${
        event.highlight ? 'border-l-4 !border-l-saffron' : ''
      }`}
    >
      {/* Status strip */}
      <div
        className={`h-1 w-full ${
          event.status === 'upcoming' ? 'bg-saffron' : 'bg-gray-200'
        }`}
      />

      <div className="p-5 lg:p-6">
        {/* Top row */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <span
            className={`inline-flex items-center gap-1 text-xs font-semibold font-inter px-2.5 py-1 rounded-full ${catColor}`}
          >
            <Tag size={10} />
            {event.category}
          </span>
          <span
            className={`text-xs font-semibold font-inter px-2.5 py-1 rounded-full ${
              event.status === 'upcoming'
                ? 'bg-saffron/10 text-saffron'
                : 'bg-gray-100 text-gray-500'
            }`}
          >
            {event.status === 'upcoming' ? 'Upcoming' : 'Past'}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-poppins font-bold text-base text-navy mb-2 leading-snug group-hover:text-saffron transition-colors line-clamp-2">
          {event.title}
        </h3>

        {/* Meta */}
        <div className="flex flex-col gap-1.5 mb-3">
          <div className="flex items-center gap-2 text-xs text-gray-500 font-inter">
            <Calendar size={12} className="text-saffron shrink-0" />
            {event.date}
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-500 font-inter">
            <MapPin size={12} className="text-saffron shrink-0" />
            {event.location}
          </div>
        </div>

        {/* Description */}
        {!compact && (
          <p className="text-sm text-gray-500 font-inter leading-relaxed line-clamp-2">
            {event.description}
          </p>
        )}
      </div>
    </div>
  );
}
