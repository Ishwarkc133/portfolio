export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  organization?: string;
  icon?: string;
}

export const achievements: Achievement[] = [
  {
    id: '1',
    title: 'Hult Prize Winner 2023',
    description: 'Won the Hult Prize at Kathmandu University for innovative social impact startup connecting rural artisans to global markets.',
    date: '2023',
    organization: 'Hult Prize / Kathmandu University',
    icon: 'trophy',
  },
  {
    id: '2',
    title: 'Idea Pitching Winner',
    description: 'First place in Idea Pitching competition at IT MEET 2023.',
    date: '2023',
    organization: 'IT MEET 2023',
    icon: 'award',
  },
  {
    id: '3',
    title: 'Best Presenter at Idea Pitching',
    description: 'Awarded Best Presenter at Idea Pitching competition, IT Meet 2022.',
    date: '2022',
    organization: 'IT Meet 2022',
    icon: 'mic',
  },
  {
    id: '4',
    title: '2nd Position — Ideathon',
    description: 'Second place in Ideathon competition organized by KU Robotics Club.',
    date: 'Mar 2024',
    organization: 'KU Robotics Club',
    icon: 'lightbulb',
  },
  {
    id: '5',
    title: 'Ideation Event Winner',
    description: 'Winner of Ideation Event organized by KU Robotics Club.',
    date: 'Mar 2023',
    organization: 'KU Robotics Club',
    icon: 'lightbulb',
  },
  {
    id: '6',
    title: '2nd Position — Knowledge Mastero',
    description: 'Second place in Knowledge Mastero competition, Young Nepal Edition by Glocal Pvt Ltd.',
    date: '2022',
    organization: 'Glocal Pvt Ltd',
    icon: 'book-open',
  },
  {
    id: '7',
    title: '2nd Position — National Cyber Olympiad Nepal',
    description: 'Second place in National Cyber Olympiad Nepal.',
    date: 'Sep 2016',
    organization: 'National Cyber Olympiad Nepal',
    icon: 'shield',
  },
  {
    id: '8',
    title: 'Winner — Inter Color Quiz',
    description: 'Winner of Inter Color Quiz competition at Sainik Awasiya Mahavidyalaya.',
    date: '2016',
    organization: 'Sainik Awasiya Mahavidyalaya',
    icon: 'palette',
  },
];