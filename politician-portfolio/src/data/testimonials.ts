export interface Testimonial {
  id: string;
  name: string;
  location: string;
  role: string;
  quote: string;
  rating: number;
  avatar?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Ramaiah Nayak',
    location: 'Sindhanur Taluk, Raichur',
    role: 'Farmer',
    quote:
      'Badarli sir fought for our water rights from the Tungabhadra canal for years. When the dam gates were finally approved for replacement, we felt relief. He never forgot the tail-end farmers like us.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Savitha Devi',
    location: 'Manvi, Raichur District',
    role: 'Schoolteacher',
    quote:
      'The inauguration of the Sainik School in Sindhanur is a dream come true for our children. Students from poor families now have access to quality education. Badarli sir made this possible.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Mohammed Shareef',
    location: 'Raichur City',
    role: 'Small Business Owner',
    quote:
      'During COVID, Badarli\'s oxygen kit distribution saved lives in our area. He came personally to check on affected families. That kind of leadership is rare. He truly is the "Janara Mechina Nayaka."',
    rating: 5,
  },
  {
    id: '4',
    name: 'Lalitha Patil',
    location: 'Sindhanur, Raichur',
    role: 'College Student',
    quote:
      'As a youth, I am inspired by his work to revive student union elections. He understands that empowering students today means building better leaders tomorrow. We need more leaders like him.',
    rating: 5,
  },
  {
    id: '5',
    name: 'Basavaraj Gondi',
    location: 'Lingsugur Taluk',
    role: 'Farmer',
    quote:
      'The 155 borewells he got sanctioned for SC/ST farmers changed lives in our village. We no longer have to beg for water. His work is real — we see it on the ground every day.',
    rating: 5,
  },
  {
    id: '6',
    name: 'Dr. Anitha Kumar',
    location: 'Sindhanur Town',
    role: 'Medical Professional',
    quote:
      'The push for a 50-bed critical care unit is a game-changer. Patients who would have died on the way to Hubli can now get emergency treatment right here. Badarli sir\'s dedication to healthcare is commendable.',
    rating: 5,
  },
];
