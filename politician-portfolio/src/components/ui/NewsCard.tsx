import { Calendar, Tag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { NewsItem } from '../../data/news';

const categoryColors: Record<string, string> = {
  Education: 'bg-blue-100 text-blue-700',
  Agriculture: 'bg-green-100 text-green-700',
  Healthcare: 'bg-red-100 text-red-700',
  Cultural: 'bg-purple-100 text-purple-700',
  'Education Policy': 'bg-indigo-100 text-indigo-700',
  Administration: 'bg-yellow-100 text-yellow-700',
};

interface NewsCardProps {
  item: NewsItem;
  showImage?: boolean;
}

export default function NewsCard({ item, showImage = true }: NewsCardProps) {
  const catColor = categoryColors[item.category] || 'bg-gray-100 text-gray-700';

  return (
    <Link
      to={`/news#${item.id}`}
      className="group bg-white rounded-2xl border border-gray-100 hover:border-saffron/30 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
    >
      {/* Image placeholder */}
      {showImage && (
        <div className="h-44 bg-gradient-to-br from-navy to-navy-light flex items-center justify-center overflow-hidden">
          {item.image ? (
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="text-center px-4">
              <p className="font-kannada text-white/30 text-2xl">ಸುದ್ದಿ</p>
              <p className="text-white/20 text-xs font-inter mt-1">{item.category}</p>
            </div>
          )}
        </div>
      )}

      <div className="p-5 flex flex-col flex-1">
        {/* Meta */}
        <div className="flex items-center gap-3 mb-3">
          <span
            className={`inline-flex items-center gap-1 text-xs font-semibold font-inter px-2.5 py-1 rounded-full ${catColor}`}
          >
            <Tag size={10} />
            {item.category}
          </span>
          <span className="flex items-center gap-1 text-xs text-gray-400 font-inter">
            <Calendar size={11} />
            {item.date}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-poppins font-bold text-base text-navy mb-2 leading-snug group-hover:text-saffron transition-colors line-clamp-2 flex-1">
          {item.title}
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-gray-500 font-inter leading-relaxed line-clamp-2 mb-4">
          {item.excerpt}
        </p>

        <span className="inline-flex items-center gap-1.5 text-sm font-semibold font-inter text-saffron group-hover:gap-3 transition-all duration-200 mt-auto">
          Read More <ArrowRight size={13} />
        </span>
      </div>
    </Link>
  );
}
