// Named imports for the 3 key images
import heroImg    from '../assets/images/badrali_hero.jpeg';
import hero2Img   from '../assets/images/badrali_hero2.jpeg';
import logoImg    from '../assets/images/name_logo.jpeg';

// Gallery images (gallery_01 – gallery_60)
import g01 from '../assets/images/gallery_01.jpeg';
import g02 from '../assets/images/gallery_02.jpeg';
import g03 from '../assets/images/gallery_03.jpeg';
import g04 from '../assets/images/gallery_04.jpeg';
import g05 from '../assets/images/gallery_05.jpeg';
import g06 from '../assets/images/gallery_06.jpeg';
import g07 from '../assets/images/gallery_07.jpeg';
import g08 from '../assets/images/gallery_08.jpeg';
import g09 from '../assets/images/gallery_09.jpeg';
import g10 from '../assets/images/gallery_10.jpeg';
import g11 from '../assets/images/gallery_11.jpeg';
import g12 from '../assets/images/gallery_12.jpeg';
import g13 from '../assets/images/gallery_13.jpeg';
import g14 from '../assets/images/gallery_14.jpeg';
import g15 from '../assets/images/gallery_15.jpeg';
import g16 from '../assets/images/gallery_16.jpeg';
import g17 from '../assets/images/gallery_17.jpeg';
import g18 from '../assets/images/gallery_18.jpeg';
import g19 from '../assets/images/gallery_19.jpeg';
import g20 from '../assets/images/gallery_20.jpeg';
import g21 from '../assets/images/gallery_21.jpeg';
import g22 from '../assets/images/gallery_22.jpeg';
import g23 from '../assets/images/gallery_23.jpeg';
import g24 from '../assets/images/gallery_24.jpeg';
import g25 from '../assets/images/gallery_25.jpeg';
import g26 from '../assets/images/gallery_26.jpeg';
import g27 from '../assets/images/gallery_27.jpeg';
import g28 from '../assets/images/gallery_28.jpeg';
import g29 from '../assets/images/gallery_29.jpeg';
import g30 from '../assets/images/gallery_30.jpeg';
import g31 from '../assets/images/gallery_31.jpeg';
import g32 from '../assets/images/gallery_32.jpeg';
import g33 from '../assets/images/gallery_33.jpeg';
import g34 from '../assets/images/gallery_34.jpeg';
import g35 from '../assets/images/gallery_35.jpeg';
import g36 from '../assets/images/gallery_36.jpeg';
import g37 from '../assets/images/gallery_37.jpeg';
import g38 from '../assets/images/gallery_38.jpeg';
import g39 from '../assets/images/gallery_39.jpeg';
import g40 from '../assets/images/gallery_40.jpeg';
import g41 from '../assets/images/gallery_41.jpeg';
import g42 from '../assets/images/gallery_42.jpeg';
import g43 from '../assets/images/gallery_43.jpeg';
import g44 from '../assets/images/gallery_44.jpeg';
import g45 from '../assets/images/gallery_45.jpeg';
import g46 from '../assets/images/gallery_46.jpeg';
import g47 from '../assets/images/gallery_47.jpeg';
import g48 from '../assets/images/gallery_48.jpeg';
import g49 from '../assets/images/gallery_49.jpeg';
import g50 from '../assets/images/gallery_50.jpeg';
import g51 from '../assets/images/gallery_51.jpeg';
import g52 from '../assets/images/gallery_52.jpeg';
import g53 from '../assets/images/gallery_53.jpeg';
import g54 from '../assets/images/gallery_54.jpeg';
import g55 from '../assets/images/gallery_55.jpeg';
import g56 from '../assets/images/gallery_56.jpeg';
import g57 from '../assets/images/gallery_57.jpeg';
import g58 from '../assets/images/gallery_58.jpeg';
import g59 from '../assets/images/gallery_59.jpeg';
import g60 from '../assets/images/gallery_60.jpeg';

// Re-export named images for use in pages
export { heroImg, hero2Img, logoImg };

export type MediaRatio = '16/9' | '9/16' | '1/1' | '4/3' | '3/4';

export interface GalleryItem {
  id: string;
  type: 'image' | 'video';
  src: string;
  poster?: string;
  ratio: MediaRatio;
  caption?: string;
  category: string;
  featured?: boolean;
}

// Distribute 60 gallery images across 6 categories (10 each)
// Alternate ratios for visual variety in the masonry grid
export const galleryItems: GalleryItem[] = [
  // ── EVENTS (01–10) ──────────────────────────────────────
  { id: 'g01', type: 'image', src: g01, ratio: '16/9', caption: 'Public Address — Community Event', category: 'events', featured: true },
  { id: 'g02', type: 'image', src: g02, ratio: '4/3',  caption: 'Rally — Raichur District',         category: 'events', featured: true },
  { id: 'g03', type: 'image', src: g03, ratio: '1/1',  caption: 'Meeting with Party Leaders',        category: 'events', featured: true },
  { id: 'g04', type: 'image', src: g04, ratio: '3/4',  caption: 'Cultural Programme — Sindhanur',   category: 'events' },
  { id: 'g05', type: 'image', src: g05, ratio: '16/9', caption: 'Raichur Zilla Utsav 2026',          category: 'events', featured: true },
  { id: 'g06', type: 'image', src: g06, ratio: '4/3',  caption: 'Flag Hoisting Ceremony',            category: 'events' },
  { id: 'g07', type: 'image', src: g07, ratio: '1/1',  caption: 'Press Conference',                  category: 'events' },
  { id: 'g08', type: 'image', src: g08, ratio: '3/4',  caption: 'Inauguration Ceremony',             category: 'events' },
  { id: 'g09', type: 'image', src: g09, ratio: '4/3',  caption: 'Community Gathering',               category: 'events' },
  { id: 'g10', type: 'image', src: g10, ratio: '16/9', caption: 'Youth Congress Convention',         category: 'events' },

  // ── COMMUNITY (11–20) ────────────────────────────────────
  { id: 'g11', type: 'image', src: g11, ratio: '1/1',  caption: 'Samuhika Madive — Mass Marriage',   category: 'community', featured: true },
  { id: 'g12', type: 'image', src: g12, ratio: '3/4',  caption: 'Jana Spandana Office Visit',        category: 'community', featured: true },
  { id: 'g13', type: 'image', src: g13, ratio: '16/9', caption: 'Addressing Citizens — Sindhanur',   category: 'community', featured: true },
  { id: 'g14', type: 'image', src: g14, ratio: '4/3',  caption: 'Citizen Grievance Redressal',       category: 'community' },
  { id: 'g15', type: 'image', src: g15, ratio: '1/1',  caption: 'Voter Awareness Drive',             category: 'community' },
  { id: 'g16', type: 'image', src: g16, ratio: '3/4',  caption: 'Youth Engagement Program',          category: 'community' },
  { id: 'g17', type: 'image', src: g17, ratio: '4/3',  caption: 'Social Welfare Distribution',       category: 'community' },
  { id: 'g18', type: 'image', src: g18, ratio: '16/9', caption: 'Janadhikara Rally — Karnataka',     category: 'community' },
  { id: 'g19', type: 'image', src: g19, ratio: '1/1',  caption: 'Party Workers Meeting',             category: 'community' },
  { id: 'g20', type: 'image', src: g20, ratio: '4/3',  caption: 'Grassroots Campaign',               category: 'community' },

  // ── AGRICULTURE (21–30) ──────────────────────────────────
  { id: 'g21', type: 'image', src: g21, ratio: '16/9', caption: 'Borewell Distribution — Sindhanur', category: 'agriculture', featured: true },
  { id: 'g22', type: 'image', src: g22, ratio: '4/3',  caption: 'Farmer Welfare Program',            category: 'agriculture', featured: true },
  { id: 'g23', type: 'image', src: g23, ratio: '1/1',  caption: 'Tungabhadra Canal Visit',           category: 'agriculture' },
  { id: 'g24', type: 'image', src: g24, ratio: '3/4',  caption: 'Agriculture Awareness Camp',         category: 'agriculture' },
  { id: 'g25', type: 'image', src: g25, ratio: '4/3',  caption: 'Irrigation Scheme Inspection',      category: 'agriculture' },
  { id: 'g26', type: 'image', src: g26, ratio: '16/9', caption: 'Farmer Support Distribution',       category: 'agriculture' },
  { id: 'g27', type: 'image', src: g27, ratio: '1/1',  caption: 'SC/ST Farmer Meeting',              category: 'agriculture' },
  { id: 'g28', type: 'image', src: g28, ratio: '3/4',  caption: 'Paddy Cultivation Review',          category: 'agriculture' },
  { id: 'g29', type: 'image', src: g29, ratio: '4/3',  caption: 'Agricultural Subsidy Camp',         category: 'agriculture' },
  { id: 'g30', type: 'image', src: g30, ratio: '16/9', caption: 'Water Distribution Meeting',        category: 'agriculture' },

  // ── EDUCATION (31–40) ────────────────────────────────────
  { id: 'g31', type: 'image', src: g31, ratio: '16/9', caption: 'Sainik School Inauguration — Sindhanur', category: 'education', featured: true },
  { id: 'g32', type: 'image', src: g32, ratio: '4/3',  caption: 'Student Union Committee Meeting',   category: 'education' },
  { id: 'g33', type: 'image', src: g33, ratio: '1/1',  caption: 'Government School Visit',           category: 'education' },
  { id: 'g34', type: 'image', src: g34, ratio: '3/4',  caption: 'Scholarship Distribution',          category: 'education' },
  { id: 'g35', type: 'image', src: g35, ratio: '4/3',  caption: 'Digital Literacy Program',          category: 'education' },
  { id: 'g36', type: 'image', src: g36, ratio: '16/9', caption: 'Hostel Audit — Social Welfare',     category: 'education' },
  { id: 'g37', type: 'image', src: g37, ratio: '1/1',  caption: 'Education Policy Discussion',       category: 'education' },
  { id: 'g38', type: 'image', src: g38, ratio: '3/4',  caption: 'Youth Congress Campaign',           category: 'education' },
  { id: 'g39', type: 'image', src: g39, ratio: '4/3',  caption: 'Campus Policy Workshop',            category: 'education' },
  { id: 'g40', type: 'image', src: g40, ratio: '16/9', caption: 'School Infrastructure Review',      category: 'education' },

  // ── HEALTHCARE (41–50) ───────────────────────────────────
  { id: 'g41', type: 'image', src: g41, ratio: '4/3',  caption: 'Rural Medical Camp',                category: 'healthcare', featured: true },
  { id: 'g42', type: 'image', src: g42, ratio: '1/1',  caption: 'Trauma Center Inspection',          category: 'healthcare' },
  { id: 'g43', type: 'image', src: g43, ratio: '16/9', caption: 'COVID Relief — Oxygen Distribution',category: 'healthcare' },
  { id: 'g44', type: 'image', src: g44, ratio: '3/4',  caption: 'PHC Upgrade Review',                category: 'healthcare' },
  { id: 'g45', type: 'image', src: g45, ratio: '4/3',  caption: 'Health Awareness Program',          category: 'healthcare' },
  { id: 'g46', type: 'image', src: g46, ratio: '16/9', caption: 'Critical Care Center Visit',        category: 'healthcare' },
  { id: 'g47', type: 'image', src: g47, ratio: '1/1',  caption: 'Medicine Distribution Camp',        category: 'healthcare' },
  { id: 'g48', type: 'image', src: g48, ratio: '3/4',  caption: 'Health Checkup Camp — Lingsugur',   category: 'healthcare' },
  { id: 'g49', type: 'image', src: g49, ratio: '4/3',  caption: 'Food Kit Distribution',             category: 'healthcare' },
  { id: 'g50', type: 'image', src: g50, ratio: '16/9', caption: 'Rural Healthcare Review',           category: 'healthcare' },

  // ── INFRASTRUCTURE (51–60) ───────────────────────────────
  { id: 'g51', type: 'image', src: g51, ratio: '16/9', caption: 'Road Development — Sindhanur',      category: 'infrastructure', featured: true },
  { id: 'g52', type: 'image', src: g52, ratio: '4/3',  caption: 'Drinking Water Project Review',     category: 'infrastructure' },
  { id: 'g53', type: 'image', src: g53, ratio: '1/1',  caption: 'Community Hall Inauguration',       category: 'infrastructure' },
  { id: 'g54', type: 'image', src: g54, ratio: '3/4',  caption: 'Drainage System Inspection',        category: 'infrastructure' },
  { id: 'g55', type: 'image', src: g55, ratio: '16/9', caption: 'State Highway Development',         category: 'infrastructure' },
  { id: 'g56', type: 'image', src: g56, ratio: '4/3',  caption: 'Jawalagera Water Project Site',     category: 'infrastructure' },
  { id: 'g57', type: 'image', src: g57, ratio: '1/1',  caption: 'Village Link Road — Manvi Taluk',   category: 'infrastructure' },
  { id: 'g58', type: 'image', src: g58, ratio: '3/4',  caption: 'Urban Development — Sindhanur',     category: 'infrastructure' },
  { id: 'g59', type: 'image', src: g59, ratio: '4/3',  caption: 'Park & Public Space Upgrade',       category: 'infrastructure' },
  { id: 'g60', type: 'image', src: g60, ratio: '16/9', caption: 'Infrastructure Progress Review',    category: 'infrastructure' },
];

export const galleryCategories = [
  'all',
  'events',
  'community',
  'agriculture',
  'education',
  'healthcare',
  'infrastructure',
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export const featuredGalleryItems = galleryItems.filter(item => item.featured);
