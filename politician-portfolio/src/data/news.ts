export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: string;
  image?: string;
  isTicker?: boolean;
}

export const newsItems: NewsItem[] = [
  {
    id: '1',
    title: 'Sainik School Inaugurated in Sindhanur — A Major Win for North Karnataka',
    date: 'April 4, 2026',
    category: 'Education',
    excerpt:
      'Badarli participated in the high-profile inauguration of the Sainik School in Sindhanur, attended by Union Minister H.D. Kumaraswamy and Defence MoS Sanjay Seth.',
    content:
      'Badarli participated in the high-profile inauguration of the new Sainik School in Sindhanur, Raichur district. The event was attended by Union Minister H.D. Kumaraswamy and Union Minister of State for Defence Sanjay Seth. This project marks a major step in bringing defense-oriented education to rural North Karnataka — a goal that Badarli has supported for years.',
    isTicker: true,
  },
  {
    id: '2',
    title: 'Sindhanur District Formation: Feasibility Report in Progress',
    date: 'March 2026',
    category: 'Administration',
    excerpt:
      'Badarli has officially renewed his commitment to making Sindhanur a separate district. The State Revenue Minister has already requested a feasibility report from the Regional Commissioner.',
    content:
      'Badarli has officially renewed his commitment to making Sindhanur a separate district. He recently chaired a preparatory meeting at the Town Hall in Sindhanur with the "Sindhanur District Struggle Committee." The State Revenue Minister has already requested a feasibility report from the Regional Commissioner. Badarli has personally petitioned CM Siddaramaiah and DCM D.K. Shivakumar on this matter.',
    isTicker: true,
  },
  {
    id: '3',
    title: '155+ Borewells Sanctioned for SC/ST Farmers — ₹7 Crore Allocated',
    date: 'March 31, 2026',
    category: 'Agriculture',
    excerpt:
      'At his Jana Spandana office, Badarli presided over the distribution of borewell equipment to local farmers. Over 155 borewells were sanctioned with ₹6–7 crore allocated for agricultural borewells.',
    content:
      'At his Jana Spandana (People\'s Pulse) office in Sindhanur, Badarli presided over a ceremony distributing borewell equipment and materials to local farmers. Through his efforts and support of Minister N.S. Boseraju, over 155 borewells were sanctioned for SC/ST beneficiaries. An allocation of ₹6–7 crore was specifically earmarked for agricultural borewells in the Sindhanur constituency.',
    isTicker: true,
  },
  {
    id: '4',
    title: 'Tungabhadra Dam: 33 New Crest Gates On Track for June 2026',
    date: 'February 2026',
    category: 'Agriculture',
    excerpt:
      'In response to a starred question raised by Badarli in the Legislative Council, the government confirmed that installation of 33 new crest gates at Tungabhadra Dam will be completed by June 2026.',
    content:
      'In response to a starred question raised by Badarli in the Legislative Council, the government confirmed that the installation of 33 new crest gates at the Tungabhadra Dam is on track to be completed by June 2026. This is a major win for farmers in the Sindhanur and Raichur regions who rely on the dam for irrigation, ensuring water security for the upcoming monsoon season.',
    isTicker: true,
  },
  {
    id: '5',
    title: 'Student Union Elections Revival: Committee in Final Stages',
    date: 'April 2026',
    category: 'Education Policy',
    excerpt:
      'Badarli remains a core member of the 11-member high-level committee to reintroduce campus politics in Karnataka after 37 years. The report submission is expected mid-April 2026.',
    content:
      'Badarli remains a core member of the 11-member high-level committee tasked with reintroducing campus politics in Karnataka after a 37-year hiatus. The committee is in the final stages of drafting the framework to "tap young political talent" — a move strongly advocated by Badarli based on his roots in the Youth Congress. The report is expected to be submitted to the Chief Minister by mid-April 2026.',
    isTicker: true,
  },
  {
    id: '6',
    title: 'Raichur Zilla Utsav 2026 Celebrated with Cultural Grandeur',
    date: 'February 9, 2026',
    category: 'Cultural',
    excerpt:
      'Badarli played an active role in the three-day Raichur Zilla Utsav, highlighting the history, agriculture, and art of the Raichur district.',
    content:
      'Badarli played an active role in organizing and attending the three-day Raichur Zilla Utsav cultural festival. The event, supported by the district administration, highlighted the history, agriculture (paddy and cotton), and art of the Raichur district. The festival drew large crowds and celebrated the cultural richness of North Karnataka.',
  },
  {
    id: '7',
    title: 'Critical Care Unit Push: 50-Bed Facility for Sindhanur Region',
    date: 'January 2026',
    category: 'Healthcare',
    excerpt:
      'Badarli successfully lobbied for a 50-bed critical care unit in the Sindhanur region, reducing the need for residents to travel to distant cities for emergency care.',
    content:
      'Badarli successfully lobbied for a 50-bed critical care unit in the region to handle emergencies and trauma cases. This reduces the need for residents to travel to distant cities like Hubli or Bengaluru for critical care. He conducted site visits and progress reviews with district health officials in early 2026 to monitor the facility\'s development.',
  },
];

export const tickerItems = newsItems.filter(n => n.isTicker);
