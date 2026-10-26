export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location: string;
  cgpa: string;
  description?: string[];
}

export const education: Education[] = [
  {
    id: '1',
    degree: 'B.Sc. Computer Science',
    institution: 'Kathmandu University',
    period: '2019 — 2026',
    location: 'Dhulikhel, Nepal',
    cgpa: '3.83 / 4.0',
    description: [
      'Focused on Data Science, Machine Learning, and Software Engineering',
      'Final year project: Deep Learning for Natural Disaster Detection from Social Media',
      'Published research in Springer LNNS 2024 (EAIT Conference)',
    ],
  },
  {
    id: '2',
    degree: 'Higher Secondary (+2) Science',
    institution: 'Sainik Awasiya Mahavidyalaya',
    period: '2017 — 2019',
    location: 'Bhaktapur, Nepal',
    cgpa: '3.50 / 4.0',
    description: [
      'Major subjects: Physics, Chemistry, Mathematics, Computer Science',
    ],
  },
  {
    id: '3',
    degree: 'Secondary Education Examination (SEE)',
    institution: 'Sainik Awasiya Mahavidyalaya',
    period: '2016',
    location: 'Bhaktapur, Nepal',
    cgpa: '3.70 / 4.0',
    description: [
      'Core subjects: Mathematics, Science, English, Computer Studies',
    ],
  },
];