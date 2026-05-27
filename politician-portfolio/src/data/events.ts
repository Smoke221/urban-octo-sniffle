export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  category: string;
  description: string;
  status: 'upcoming' | 'past';
  highlight?: boolean;
}

export const events: Event[] = [
  {
    id: '0',
    title: 'Samuhika Madive 2026 — 5001 Couples, DCM Shivakumar as Chief Guest',
    date: 'May 3, 2026',
    location: 'Sindhanur, Raichur District',
    category: 'Social',
    description:
      'Badarli organized the most ambitious mass marriage ceremony of his career — 5001 couples wed in a single day in Sindhanur, with Deputy Chief Minister D.K. Shivakumar attending as chief guest. Organized through the BB Foundation on the occasion of his 1-year anniversary as MLC, this landmark event provided a dignified and completely cost-free wedding to thousands of families from economically weaker sections across Kalyana Karnataka.',
    status: 'past',
    highlight: true,
  },
  {
    id: '1',
    title: 'Inauguration of Sainik School, Sindhanur',
    date: 'April 4, 2026',
    location: 'Sindhanur, Raichur District',
    category: 'Education',
    description:
      'Badarli was a key participant in the high-profile inauguration of the new Sainik School in Sindhanur. The event was attended by Union Minister H.D. Kumaraswamy, Union Minister of State for Defence Sanjay Seth, and other state leaders — marking a major milestone for defense-oriented education in North Karnataka.',
    status: 'past',
    highlight: true,
  },
  {
    id: '2',
    title: 'Borewell Equipment Distribution Ceremony',
    date: 'March 31, 2026',
    location: 'Jana Spandana Office, Sindhanur',
    category: 'Agriculture',
    description:
      'At his Jana Spandana (People\'s Pulse) office in Sindhanur, Badarli presided over a ceremony distributing borewell equipment and materials to local farmers. Over 155 borewells were sanctioned for SC/ST beneficiaries with an allocation of ₹6–7 crore specifically for agricultural borewells.',
    status: 'past',
    highlight: true,
  },
  {
    id: '3',
    title: 'Raichur Zilla Utsav 2026',
    date: 'February 7–9, 2026',
    location: 'Raichur District',
    category: 'Cultural',
    description:
      'Badarli played an active role in organizing and attending this three-day cultural festival. The event, supported by the district administration, highlighted the history, agriculture (paddy and cotton), and art of the Raichur district.',
    status: 'past',
  },
  {
    id: '4',
    title: 'Student Union Committee Meetings',
    date: 'January–February 2026',
    location: 'Bengaluru, Karnataka',
    category: 'Education Policy',
    description:
      'Badarli participated in a series of high-level 11-member committee meetings to finalize the report on reviving student union elections in Karnataka after a 37-year hiatus. These sessions were critical in shaping the new framework for campus democracy.',
    status: 'past',
  },
  {
    id: '5',
    title: 'Rural Health & Safety Review Visit',
    date: 'Early 2026',
    location: 'Raichur-Lingsugur Belt',
    category: 'Healthcare',
    description:
      'Following his push for a 50-bed critical care center, Badarli conducted site visits and progress reviews with district health officials across the Raichur-Lingsugur belt to monitor healthcare infrastructure development.',
    status: 'past',
  },
  {
    id: '6',
    title: 'Sindhanur District Demand Townhall',
    date: 'January 2026',
    location: 'Town Hall, Sindhanur',
    category: 'Administration',
    description:
      'Badarli chaired a preparatory meeting at the Town Hall in Sindhanur with the "Sindhanur District Struggle Committee." He informed the public that the State Revenue Minister has requested a feasibility report from the Regional Commissioner for making Sindhanur a separate district.',
    status: 'past',
  },
  {
    id: '7',
    title: 'Student Union Election Report Submission',
    date: 'April 2026',
    location: 'Bengaluru, Karnataka',
    category: 'Education Policy',
    description:
      'Badarli participated in the formal submission of the Student Union Elections report to the Chief Minister as a member of the state-appointed panel. The report outlined the framework for reviving campus democracy in Karnataka after a 37-year hiatus.',
    status: 'past',
  },
  {
    id: '8',
    title: 'Janaspandana People-Connect Rallies',
    date: 'April–May 2026',
    location: 'Sindhanur Region, Raichur District',
    category: 'Community',
    description:
      'Badarli led a series of grassroots "Janaspandana" (people-connect) meetings across the Sindhanur region, furthering the demand for Sindhanur\'s recognition as a separate district for better administrative reach.',
    status: 'past',
  },
  {
    id: '9',
    title: 'Tungabhadra Board Meeting – Water Distribution',
    date: 'Upcoming – Summer 2026',
    location: 'Sindhanur & Manvi Taluks',
    category: 'Agriculture',
    description:
      'Badarli is scheduled to meet with the Tungabhadra Board and irrigation department officials to ensure tail-end farmers of Sindhanur and Manvi taluks receive adequate water during the summer peak season.',
    status: 'upcoming',
    highlight: true,
  },
  {
    id: '10',
    title: 'Karnataka Legislative Council Sessions',
    date: 'Upcoming – 2026',
    location: 'Vidhan Soudha, Bengaluru',
    category: 'Legislative',
    description:
      'Badarli will be active in the upcoming sessions of the Karnataka Legislative Council, raising questions regarding the status of rural infrastructure development and teacher recruitment in the Kalyana-Karnataka region.',
    status: 'upcoming',
  },
  {
    id: '11',
    title: 'Samuhika Madive — BB Foundation Mass Marriage Series',
    date: 'May 3, 2026',
    location: 'Raichur & Sindhanur Regions',
    category: 'Social',
    description:
      'Badarli has championed Samuhika Madive (Mass Marriages) as a vital social service to reduce the financial burden on rural families. The BB Foundation has now conducted mass marriages for 51 couples (2023), 72 couples (2025), and a landmark 5001 couples on May 3, 2026 — with Deputy CM D.K. Shivakumar presiding.',
    status: 'past',
  },
];
