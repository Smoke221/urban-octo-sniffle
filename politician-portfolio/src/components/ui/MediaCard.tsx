import { useState } from 'react';
import { Play, X, ZoomIn } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import type { GalleryItem, MediaRatio } from '../../data/gallery';

// Map ratio to CSS aspect-ratio value and grid column span class
const ratioStyles: Record<MediaRatio, { aspect: string; colSpan: string; rowSpan: string }> = {
  '16/9':  { aspect: 'aspect-video',         colSpan: 'col-span-2',  rowSpan: '' },
  '9/16':  { aspect: 'aspect-[9/16]',        colSpan: 'col-span-1',  rowSpan: '' },
  '1/1':   { aspect: 'aspect-square',        colSpan: 'col-span-1',  rowSpan: '' },
  '4/3':   { aspect: 'aspect-[4/3]',         colSpan: 'col-span-1',  rowSpan: '' },
  '3/4':   { aspect: 'aspect-[3/4]',         colSpan: 'col-span-1',  rowSpan: '' },
};

const PLACEHOLDER_COLORS: Record<string, string> = {
  agriculture:    'from-green-800 to-green-600',
  education:      'from-blue-800 to-blue-600',
  healthcare:     'from-red-800 to-red-600',
  events:         'from-purple-800 to-purple-600',
  community:      'from-pink-800 to-pink-600',
  infrastructure: 'from-orange-800 to-orange-600',
};

const CATEGORY_LABEL: Record<string, string> = {
  agriculture:    'ಕೃಷಿ',
  education:      'ಶಿಕ್ಷಣ',
  healthcare:     'ಆರೋಗ್ಯ',
  events:         'ಕಾರ್ಯಕ್ರಮ',
  community:      'ಸಮುದಾಯ',
  infrastructure: 'ಮೂಲಸೌಕರ್ಯ',
};

interface MediaCardProps {
  item: GalleryItem;
  className?: string;
}

export default function MediaCard({ item, className = '' }: MediaCardProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const { aspect } = ratioStyles[item.ratio] || ratioStyles['16/9'];
  const gradientClass = PLACEHOLDER_COLORS[item.category] || 'from-navy to-navy-light';
  const kannadaLabel = CATEGORY_LABEL[item.category] || '';

  const hasMedia = Boolean(item.src);
  const hasPoster = Boolean(item.poster);

  return (
    <>
      <div
        className={`relative overflow-hidden rounded-xl cursor-pointer group ${aspect} ${className}`}
        onClick={() => setLightboxOpen(true)}
      >
        {/* Media or placeholder */}
        {hasMedia && item.type === 'image' && (
          <img
            src={item.src}
            alt={item.caption || ''}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        )}

        {hasMedia && item.type === 'video' && (hasPoster ? (
          <img
            src={item.poster}
            alt={item.caption || ''}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <video
            src={item.src}
            className="w-full h-full object-cover"
            muted
            playsInline
            preload="metadata"
          />
        ))}

        {/* Placeholder (no src yet) */}
        {!hasMedia && (
          <div className={`w-full h-full bg-gradient-to-br ${gradientClass} flex flex-col items-center justify-center`}>
            <p className="font-kannada text-white/40 text-2xl">{kannadaLabel}</p>
            {item.type === 'video' && (
              <p className="text-white/25 text-xs font-inter mt-1">Video Coming Soon</p>
            )}
          </div>
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/40 transition-all duration-300" />

        {/* Play button for video */}
        {item.type === 'video' && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
              <Play size={20} className="text-saffron ml-1 fill-saffron" />
            </div>
          </div>
        )}

        {/* Zoom icon for images */}
        {item.type === 'image' && (
          <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <ZoomIn size={14} className="text-navy" />
          </div>
        )}

        {/* Caption bar */}
        {item.caption && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <p className="text-white text-xs font-inter">{item.caption}</p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setLightboxOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-screen-lg w-full max-h-[90vh] flex flex-col items-center"
              onClick={e => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setLightboxOpen(false)}
                className="absolute -top-10 right-0 text-white/70 hover:text-white p-2 z-10"
              >
                <X size={24} />
              </button>

              {/* Media — uses max-h so any ratio fits */}
              <div className="max-h-[85vh] w-auto mx-auto flex items-center justify-center">
                {item.type === 'image' && hasMedia && (
                  <img
                    src={item.src}
                    alt={item.caption || ''}
                    className="max-h-[85vh] max-w-full w-auto object-contain rounded-lg"
                  />
                )}

                {item.type === 'image' && !hasMedia && (
                  <div className={`w-80 h-60 bg-gradient-to-br ${gradientClass} rounded-lg flex items-center justify-center`}>
                    <p className="font-kannada text-white/50 text-3xl">{kannadaLabel}</p>
                  </div>
                )}

                {item.type === 'video' && hasMedia && (
                  <video
                    src={item.src}
                    poster={item.poster}
                    controls
                    autoPlay
                    className="max-h-[85vh] max-w-full w-auto object-contain rounded-lg"
                    style={{ background: '#000' }}
                  />
                )}

                {item.type === 'video' && !hasMedia && (
                  <div className={`w-80 h-60 bg-gradient-to-br ${gradientClass} rounded-lg flex items-center justify-center`}>
                    <p className="text-white/50 text-sm font-inter">Video Coming Soon</p>
                  </div>
                )}
              </div>

              {/* Caption */}
              {item.caption && (
                <p className="mt-4 text-white/70 text-sm font-inter text-center">
                  {item.caption}
                </p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
