export interface Service {
  id: string;
  slug: string;
  title: string;
  kannada: string;
  icon: string;
  shortDescription: string;
  fullDescription: string;
  highlights: string[];
  color: string;
}

export const services: Service[] = [
  {
    id: '1',
    slug: 'agriculture',
    title: 'Agriculture',
    kannada: 'ಕೃಷಿ',
    icon: 'Wheat',
    shortDescription: 'Supporting sustainable farming and ensuring water rights for tail-end farmers in Raichur.',
    fullDescription:
      'Coming from a family with deep agricultural roots, Badarli views farming as the backbone of the Raichur economy. He consistently champions the rights of farmers, particularly those who depend on the Tungabhadra Left Bank Canal for paddy cultivation.',
    highlights: [
      'Irrigation Advocacy: Regularly raises issues regarding the Tungabhadra Left Bank Canal (TLBC) to ensure tail-end farmers receive fair water share.',
      'Tungabhadra Dam Security: Successfully pushed for government commitment to replace 33 crest gates at the Tungabhadra Dam (completion by June 2026), ensuring water security for lakhs of farmers.',
      'Borewell Distribution: Facilitated distribution of borewell equipment to over 155 SC/ST farmers in March 2026, backed by ₹7 crore allocation.',
      'Farmer Welfare: Organizes awareness programs on government subsidies and modern farming techniques to help farmers transition to high-yield methods.',
      'Jawalagera Drinking Water Project: Secured approximately ₹400 crore for the Jawalagera drinking water project.',
    ],
    color: 'bg-green-50 border-green-200',
  },
  {
    id: '2',
    slug: 'education',
    title: 'Education',
    kannada: 'ಶಿಕ್ಷಣ',
    icon: 'GraduationCap',
    shortDescription: 'Building future leaders through academic reform, digital literacy, and defense education.',
    fullDescription:
      'Education is the cornerstone of Badarli\'s political agenda. He believes in creating future leaders through both academic and systemic reform, from rural schools to state-level policy.',
    highlights: [
      'Student Union Revival: Serves on a high-level 11-member government committee to reintroduce student union elections in Karnataka after a 37-year hiatus.',
      'Sainik School in Sindhanur (2026): Instrumental in the successful establishment and inauguration of the Sainik School in Sindhanur — providing defense-oriented education to rural students.',
      'Digital Literacy: Pushed for appointment of computer teachers in all government schools in his taluk to bridge the digital divide.',
      'Hostel Infrastructure: Actively monitors and audits social welfare hostels in Raichur, lobbying for increased grants to improve food quality and amenities.',
      'Infrastructure Support: Lobbied for the recent inauguration of a Sainik School in Sindhanur providing defense-oriented education.',
    ],
    color: 'bg-blue-50 border-blue-200',
  },
  {
    id: '3',
    slug: 'healthcare',
    title: 'Healthcare',
    kannada: 'ಆರೋಗ್ಯ ರಕ್ಷಣೆ',
    icon: 'HeartPulse',
    shortDescription: 'Accessible medical care, trauma centers and rural health upgrades for Raichur region.',
    fullDescription:
      'Badarli focuses on bridging the gap in specialized medical care for the Kalyana-Karnataka region. His efforts have brought critical care infrastructure to a region that previously had to rely on distant cities like Hubli or Bengaluru for emergency services.',
    highlights: [
      'Trauma Care Center: Secured ₹3 crore for construction of a dedicated Trauma Care Center at the Sindhanur Taluk Public Hospital.',
      '50-Bed Critical Care Unit: Successfully lobbied for a 50-bed critical care unit in the region to handle emergencies and reduce travel for residents.',
      'PHC Upgrades: Instrumental in advocating for the upgrade of local Primary Health Centers (PHCs) into 24/7 facilities.',
      'COVID-19 Relief: Widely recognized for extensive Oxygen and Food Kit distribution drives during the pandemic across the Raichur belt.',
      'Medical Camps: Providing accessible medical camps and health awareness programs across rural areas.',
    ],
    color: 'bg-red-50 border-red-200',
  },
  {
    id: '4',
    slug: 'police',
    title: 'Police & Safety',
    kannada: 'ಪೊಲೀಸ್ ಮತ್ತು ಸುರಕ್ಷತೆ',
    icon: 'Shield',
    shortDescription: 'Modernizing police infrastructure and fostering community policing in Sindhanur-Raichur.',
    fullDescription:
      'Badarli emphasizes a collaborative relationship between the public and the police to maintain law and order. He supports modernization of police infrastructure while advocating for transparent and fair treatment of personnel.',
    highlights: [
      'Infrastructure Modernization: Supported development of better infrastructure for local police stations, including improved staff quarters.',
      'Digital Record-Keeping: Promoted implementation of digital record-keeping systems in police stations.',
      'Community Policing: Advocates for transparent recruitment and fair treatment of police personnel across the Sindhanur-Raichur belt.',
      'Public Safety Outreach: Organized public safety awareness programs in rural communities.',
      'Collaborative Governance: Works to build trust between the community and law enforcement for better public safety outcomes.',
    ],
    color: 'bg-indigo-50 border-indigo-200',
  },
  {
    id: '5',
    slug: 'revenue',
    title: 'Revenue & Administration',
    kannada: 'ಕಂದಾಯ ಮತ್ತು ಆಡಳಿತ',
    icon: 'ScrollText',
    shortDescription: 'Fighting for Sindhanur\'s district status to bring governance closer to the people.',
    fullDescription:
      'His most significant contribution in this sector is his ongoing fight for administrative decentralization. Badarli is a leading voice in the movement to make Sindhanur a separate district, arguing it would simplify land records and grievance redressal for rural citizens.',
    highlights: [
      'Sindhanur District Demand: Leading voice in the movement to make Sindhanur a separate district — successfully moved the proposal to the "feasibility report" stage with the State Revenue Department.',
      'CM Petition: Personally petitioned CM Siddaramaiah and DCM D.K. Shivakumar for the district formation.',
      'Sakal Services: Works to ensure timed government services reach the rural poor without middleman interference.',
      'Jan Spandana Office: Operates a "Jana Spandana" (People\'s Pulse) office in Sindhanur for direct citizen grievance redressal.',
      'Regional Commissioner Report: State Revenue Minister has requested a feasibility report following Badarli\'s advocacy.',
    ],
    color: 'bg-yellow-50 border-yellow-200',
  },
  {
    id: '6',
    slug: 'infrastructure',
    title: 'Infrastructure',
    kannada: 'ಮೂಲಸೌಕರ್ಯ',
    icon: 'Building2',
    shortDescription: 'Connecting villages, improving roads and modernizing Sindhanur\'s urban amenities.',
    fullDescription:
      'Badarli has prioritized physical connectivity and urban development as enablers of economic growth. His infrastructure work ranges from village link roads to urban amenity upgrades in Sindhanur city.',
    highlights: [
      '₹400 Crore Water Project: Secured significant funding for the Jawalagera drinking water project.',
      'State Highways: Prioritized development of state highways and village link roads in Raichur district.',
      'Urban Development: Worked alongside Sindhanur municipal council to improve drainage, drinking water supply and modernization of public parks.',
      'Agricultural Connectivity: Improved transport infrastructure for movement of agricultural produce from rural areas to markets.',
      'Community Halls: Supported modernization of community halls in Sindhanur and surrounding areas.',
    ],
    color: 'bg-orange-50 border-orange-200',
  },
];
