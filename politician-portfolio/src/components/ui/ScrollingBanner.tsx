const bannerImages = Object.values(
  import.meta.glob<string>('../../assets/banner/*.{jpeg,jpg,png,webp}', {
    eager: true,
    import: 'default',
  }),
).sort();

/** Matches fixed banner strip height — use as spacer on homepage hero */
export const BANNER_STRIP_HEIGHT = 'h-12 sm:h-14 md:h-16';

/** How many times each banner tiles in one half of the loop (full track = 2×) */
const REPEATS_PER_BANNER = 12;

export default function ScrollingBanner() {
  if (bannerImages.length === 0) return null;

  const half = bannerImages.flatMap(src => Array(REPEATS_PER_BANNER).fill(src) as string[]);
  const track = [...half, ...half];

  return (
    <div
      className={`fixed left-0 right-0 z-40 overflow-hidden bg-navy-dark
        top-[calc(4px+4rem)] lg:top-[calc(4px+5rem)]
        ${BANNER_STRIP_HEIGHT}`}
      aria-label="Campaign banners"
    >
      <div className="banner-marquee h-full w-full overflow-hidden">
        <div
          className="banner-marquee-track flex h-full items-stretch gap-0 leading-[0]"
          style={{ animationDuration: `${Math.max(half.length * 6, 40)}s` }}
        >
          {track.map((src, idx) => (
            <img
              key={`${src}-${idx}`}
              src={src}
              alt=""
              className="h-full w-auto max-w-none shrink-0 block object-cover object-center"
              loading="eager"
              draggable={false}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
