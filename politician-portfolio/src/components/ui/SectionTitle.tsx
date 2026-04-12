interface SectionTitleProps {
  tag?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export default function SectionTitle({
  tag,
  title,
  titleHighlight,
  subtitle,
  center = false,
  light = false,
}: SectionTitleProps) {
  return (
    <div className={`max-w-2xl ${center ? 'mx-auto text-center' : ''} mb-12`}>
      {tag && (
        <span className="inline-block text-xs font-semibold font-inter uppercase tracking-widest text-saffron bg-saffron/10 px-3 py-1 rounded-full mb-3">
          {tag}
        </span>
      )}
      <h2
        className={`font-poppins font-bold text-3xl md:text-4xl leading-tight ${
          light ? 'text-white' : 'text-navy'
        }`}
      >
        {title}{' '}
        {titleHighlight && <span className="text-saffron">{titleHighlight}</span>}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base leading-relaxed font-inter ${
            light ? 'text-gray-300' : 'text-gray-500'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
