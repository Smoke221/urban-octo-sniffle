import { Star, Quote } from 'lucide-react';
import type { Testimonial } from '../../data/testimonials';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-md border border-gray-100 h-full flex flex-col">
      {/* Quote icon */}
      <div className="mb-4">
        <Quote size={32} className="text-saffron/30 fill-saffron/20" />
      </div>

      {/* Stars */}
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} size={14} className="fill-saffron text-saffron" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-gray-600 font-inter text-sm leading-relaxed italic flex-1 mb-6">
        "{testimonial.quote}"
      </p>

      {/* Commenter */}
      <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
        <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-white font-bold font-poppins text-sm shrink-0">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold font-poppins text-navy text-sm">{testimonial.name}</p>
          <p className="text-xs text-gray-400 font-inter">
            {testimonial.role} · {testimonial.location}
          </p>
        </div>
      </div>
    </div>
  );
}
