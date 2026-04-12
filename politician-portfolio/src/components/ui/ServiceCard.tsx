import type { ComponentType } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Wheat, GraduationCap, HeartPulse, Shield, ScrollText, Building2 } from 'lucide-react';
import type { Service } from '../../data/services';

const iconMap: Record<string, ComponentType<{ size?: number; className?: string }>> = {
  Wheat,
  GraduationCap,
  HeartPulse,
  Shield,
  ScrollText,
  Building2,
};

const colorMap: Record<string, { bg: string; icon: string; border: string }> = {
  Wheat:      { bg: 'bg-green-50', icon: 'text-green-600', border: 'group-hover:border-green-400' },
  GraduationCap: { bg: 'bg-blue-50', icon: 'text-blue-600', border: 'group-hover:border-blue-400' },
  HeartPulse: { bg: 'bg-red-50', icon: 'text-red-500', border: 'group-hover:border-red-400' },
  Shield:     { bg: 'bg-indigo-50', icon: 'text-indigo-600', border: 'group-hover:border-indigo-400' },
  ScrollText: { bg: 'bg-yellow-50', icon: 'text-yellow-600', border: 'group-hover:border-yellow-400' },
  Building2:  { bg: 'bg-orange-50', icon: 'text-orange-500', border: 'group-hover:border-orange-400' },
};

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = iconMap[service.icon] || Building2;
  const colors = colorMap[service.icon] || colorMap['Building2'];

  return (
    <Link
      to={`/services/${service.slug}`}
      className={`group block bg-white rounded-2xl p-6 border-2 border-transparent hover:border-saffron/40 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
    >
      {/* Icon */}
      <div
        className={`w-14 h-14 rounded-xl ${colors.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
      >
        <Icon size={28} className={colors.icon} />
      </div>

      {/* Kannada label */}
      <p className="font-kannada text-xs text-gray-400 mb-1">{service.kannada}</p>

      {/* Title */}
      <h3 className="font-poppins font-bold text-lg text-navy mb-3 group-hover:text-saffron transition-colors">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-500 font-inter leading-relaxed line-clamp-2 mb-4">
        {service.shortDescription}
      </p>

      {/* Read more */}
      <span className="inline-flex items-center gap-1.5 text-sm font-semibold font-inter text-saffron group-hover:gap-3 transition-all duration-200">
        Read More <ArrowRight size={14} />
      </span>
    </Link>
  );
}
