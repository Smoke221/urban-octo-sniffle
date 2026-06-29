export interface SchoolEntry {
  grades: string;
  school?: string;
  location: string;
}

export interface CollegeEntry {
  location: string;
  note?: string;
}

export const schoolEducation: SchoolEntry[] = [
  { grades: '1st – 3rd', school: 'Badarli Government School', location: 'Badarli' },
  { grades: '4th – 6th', school: 'Sindhanur RGM School', location: 'Sindhanur' },
  { grades: '7th – 9th', location: 'Bellary' },
  { grades: '10th Standard', location: 'Sindhanur' },
];

export const collegeEducation: CollegeEntry[] = [
  { location: 'Bellary', note: 'Higher education' },
  { location: 'Sindhanur', note: 'Higher education' },
];

export const educationQualification = 'B.Com — Commerce Graduate';
