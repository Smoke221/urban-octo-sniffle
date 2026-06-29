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
      'Basanagouda Badarli sir fought for our water rights from the Tungabhadra canal for years. When the dam gates were finally approved for replacement, we felt relief. He never forgot the tail-end farmers like us.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Savitha Devi',
    location: 'Manvi, Raichur District',
    role: 'Schoolteacher',
    quote:
      'The inauguration of the Sainik School in Sindhanur is a dream come true for our children. Students from poor families now have access to quality education. Basanagouda Badarli sir made this possible.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Mohammed Shareef',
    location: 'Raichur City',
    role: 'Small Business Owner',
    quote:
      'During COVID, Basanagouda Badarli\'s oxygen kit distribution saved lives in our area. He came personally to check on affected families. That kind of leadership is rare. He truly is the "Janara Mechina Nayaka."',
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
      'The push for a 50-bed critical care unit is a game-changer. Patients who would have died on the way to Hubli can now get emergency treatment right here. Basanagouda Badarli sir\'s dedication to healthcare is commendable.',
    rating: 5,
  },
  {
    id: '7',
    name: 'Nagamma Devi',
    location: 'Badarli Village, Sindhanur',
    role: 'Senior Citizen',
    quote:
      'We are from Badarli village — his own village. He never forgot where he came from. He got our roads repaired, helped with ration card issues, and the old age home regularly receives his support. He is truly our own son.',
    rating: 5,
  },
  {
    id: '8',
    name: 'Raju Nayak',
    location: 'Sindhanur City',
    role: 'Youth Congress Volunteer',
    quote:
      'I started as an NSUI volunteer in 2012 inspired by Basanagouda Badarli sir. He taught us that service comes before politics. The values he instilled — integrity, hard work, and helping others — shape everything I do even today.',
    rating: 5,
  },
  {
    id: '9',
    name: 'Shanthavva Patil',
    location: 'Manvi Taluk, Raichur',
    role: 'BB Foundation Beneficiary',
    quote:
      'My daughter was married through the Samuhika Madive organized by Basanagouda Badarli sir\'s BB Foundation. Without his program, we could never have afforded a proper wedding. He gave our family dignity we could not have given ourselves. We are forever grateful.',
    rating: 5,
  },
  {
    id: '10',
    name: 'Venkatesh Kammar',
    location: 'Sindhanur Taluk',
    role: 'Cooperative Society Member',
    quote:
      'As a member of the Krushi Mitra cooperative that Basanagouda Badarli sir leads, I have seen how he fights for farmers in meetings and policy discussions. He is not just a politician — he is a farmer himself and he understands our daily struggles on the ground.',
    rating: 5,
  },
];
