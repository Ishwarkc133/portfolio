export interface Certification {
  id: string;
  name: string;
  provider: string;
  platform: string;
  date: string;
  credentialId?: string;
  url?: string;
}

export const certifications: Certification[] = [
  {
    id: '1',
    name: 'Data Analysis with Python',
    provider: 'IBM',
    platform: 'Coursera',
    date: 'Feb 2024',
    url: 'https://coursera.org/verify/...',
  },
  {
    id: '2',
    name: 'Crash Course on Python',
    provider: 'Google',
    platform: 'Coursera',
    date: 'Feb 2024',
    url: 'https://coursera.org/verify/...',
  },
  {
    id: '3',
    name: 'Agile Project Management: Scrum & Leadership',
    provider: 'Udemy',
    platform: 'Udemy',
    date: 'Mar 2024',
    url: 'https://udemy.com/certificate/...',
  },
  {
    id: '4',
    name: 'COVID-19 Data Analysis Using Python',
    provider: 'Coursera',
    platform: 'Coursera',
    date: 'Mar 2024',
    url: 'https://coursera.org/verify/...',
  },
  {
    id: '5',
    name: 'Python for Beginners: Variables and Strings',
    provider: 'Coursera',
    platform: 'Coursera',
    date: 'Mar 2024',
    url: 'https://coursera.org/verify/...',
  },
  {
    id: '6',
    name: 'Computer Vision Fundamentals',
    provider: 'Udemy',
    platform: 'Udemy',
    date: 'Feb 2024',
    url: 'https://udemy.com/certificate/...',
  },
  {
    id: '7',
    name: 'Mastering Microsoft Excel',
    provider: 'Udemy',
    platform: 'Udemy',
    date: '2023',
    url: 'https://udemy.com/certificate/...',
  },
  {
    id: '8',
    name: 'Introduction to Database Management Systems',
    provider: 'Udemy',
    platform: 'Udemy',
    date: '2023',
    url: 'https://udemy.com/certificate/...',
  },
  {
    id: '9',
    name: 'Introduction to Software Engineering',
    provider: 'Udemy',
    platform: 'Udemy',
    date: '2023',
    url: 'https://udemy.com/certificate/...',
  },
  {
    id: '10',
    name: 'Interviewing Skills for Jobs',
    provider: 'Udemy',
    platform: 'Udemy',
    date: '2023',
    url: 'https://udemy.com/certificate/...',
  },
];