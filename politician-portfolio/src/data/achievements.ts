export interface Achievement {
  id: string;
  year: string;
  title: string;
  description: string;
  category: string;
  icon: string;
}

export const achievements: Achievement[] = [
  {
    id: '1',
    year: '2017',
    title: 'President, Karnataka Pradesh Youth Congress',
    description:
      'Elected President of the Karnataka Pradesh Youth Congress Committee (KPYCC) with a record-breaking margin of over 9,000 votes. Digitized the youth wing\'s membership and conducted extensive grassroots "Janadhikara" rallies across the state.',
    category: 'Political Leadership',
    icon: 'Users',
  },
  {
    id: '2',
    year: '2021',
    title: 'COVID-19 Relief Operations',
    description:
      'Widely recognized across the Raichur belt for extensive Oxygen and Food Kit distribution drives during the pandemic — a service that continues to be cited by local constituents.',
    category: 'Social Welfare',
    icon: 'HeartHandshake',
  },
  {
    id: '3',
    year: '2024',
    title: 'Elected to Karnataka Legislative Council (MLC)',
    description:
      'Recognizing his organizational strength, the Congress party elevated him to MLC (Legislative Assembly quota) to represent the interests of North Karnataka in the upper house.',
    category: 'Political Milestone',
    icon: 'Award',
  },
  {
    id: '4',
    year: '2024',
    title: 'Trauma Care Center — ₹3 Crore Secured',
    description:
      'Secured ₹3 crore for the construction of a dedicated Trauma Care Center at the Sindhanur Taluk Public Hospital to handle emergency cases and reduce fatalities from road accidents.',
    category: 'Healthcare',
    icon: 'HeartPulse',
  },
  {
    id: '5',
    year: '2025',
    title: 'Joined Student Union Revival Panel',
    description:
      'Appointed to the state-level 11-member high-level committee to reintroduce student union elections in Karnataka after 37 years — one of his most significant policy roles.',
    category: 'Education Policy',
    icon: 'GraduationCap',
  },
  {
    id: '6',
    year: '2026',
    title: 'Sainik School Inaugurated in Sindhanur',
    description:
      'Instrumental in the successful establishment and inauguration of the Sainik School in Sindhanur on April 4, 2026 — providing high-quality defense-oriented education to rural students in the Raichur district.',
    category: 'Education',
    icon: 'School',
  },
  {
    id: '7',
    year: '2026',
    title: '155+ Borewells for SC/ST Farmers',
    description:
      'Facilitated the distribution of high-quality borewell equipment to over 155 SC/ST farmers, backed by an allocation of approximately ₹7 crore for agricultural development in Sindhanur.',
    category: 'Agriculture',
    icon: 'Droplets',
  },
  {
    id: '8',
    year: '2026',
    title: '₹400 Crore Jawalagera Water Project',
    description:
      'Secured significant funding (approx. ₹400 crore) for the Jawalagera drinking water project and development of state highways connecting Sindhanur to surrounding taluks.',
    category: 'Infrastructure',
    icon: 'Building2',
  },
];
