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

  const isUpcoming = event.status === 'upcoming';

  return (
    <div
      className={`relative bg-white rounded-2xl overflow-hidden group transition-all duration-300
        border border-gray-100 hover:border-saffron/20
        shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_24px_rgba(15,44,89,0.12)]
        hover:-translate-y-0.5
        ${event.highlight ? 'ring-1 ring-saffron/40' : ''}`}
    >
      {/* Left accent bar */}
      <div
        className={`absolute left-0 top-0 bottom-0 w-1 transition-all duration-300 ${
          isUpcoming
            ? 'bg-saffron group-hover:w-1.5'
            : 'bg-gray-200 group-hover:bg-gray-300'
        }`}
      />

      <div className="pl-5 pr-5 pt-5 pb-5 lg:pl-6 lg:pr-6 lg:pt-5 lg:pb-5">
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
              isUpcoming
                ? 'bg-saffron/10 text-saffron'
                : 'bg-gray-100 text-gray-500'
            }`}
          >
            {isUpcoming ? 'Upcoming' : 'Past'}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-poppins font-bold text-base text-navy mb-3 leading-snug group-hover:text-saffron transition-colors line-clamp-2">
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
