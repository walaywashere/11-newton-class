import { Award, BookOpen, Calendar, Rocket } from 'lucide-react';

const comingSoonPhoto = "https://media.discordapp.net/attachments/1394255915443552316/1398910732732727367/360_F_354511285_Rk4Pm1gWvS00XHNwthtxBBpyZvCWSEyk.jpg?ex=6887bd65&is=68866be5&hm=57b627aec9503734d7b07bfa96fca0a1077892dea29b94a948962b3294720536&=&format=webp";

export const adviser = {
  name: 'Ms. Evelyn Reyes',
  role: 'Class Adviser',
  photo: comingSoonPhoto,
  fact: 'Loves gardening and has a passion for teaching Physics.',
  email: 'evelyn.reyes@school.edu',
  department: 'Science Department',
  experience: '8 years',
  specialization: 'Physics & Mathematics',
  quote: 'Every student has the potential to shine brighter than they imagine.',
  achievements: [
    'Outstanding Teacher Award 2023',
    'Science Department Head',
    'Regional Physics Olympiad Coach'
  ]
};

// Class Officers - separate array for leadership page
export const classOfficers = [
  {
    name: 'Andrea Garcia',
    position: 'President',
    photo: comingSoonPhoto,
    dreamJob: 'Corporate Lawyer',
    funFact: 'Is a certified scuba diver.',
    socials: { instagram: 'andrea.g' },
    quote: "Leading with purpose and passion.",
    responsibilities: ['Overall class coordination', 'Representing class in school events', 'Leading student initiatives']
  },
  {
    name: 'John Michael Reyes',
    position: 'Vice President',
    photo: comingSoonPhoto,
    dreamJob: 'Civil Engineer',
    funFact: 'Loves to go on mountain hikes.',
    quote: "Building a stronger class, together.",
    responsibilities: ['Assisting the president', 'Project management', 'Event coordination']
  },
  {
    name: 'Samantha Cruz',
    position: 'Secretary',
    photo: comingSoonPhoto,
    dreamJob: 'Novelist',
    funFact: 'Has written over 50 short stories.',
    quote: "Every detail matters.",
    responsibilities: ['Meeting documentation', 'Communication management', 'Record keeping']
  },
  {
    name: 'Isabella Santos',
    position: 'Treasurer',
    photo: comingSoonPhoto,
    dreamJob: 'Accountant',
    funFact: 'Manages a small online sticker shop.',
    quote: "Count on me to make it count.",
    responsibilities: ['Financial management', 'Budget planning', 'Fund tracking']
  },
  {
    name: 'Mark Bautista',
    position: 'Auditor',
    photo: comingSoonPhoto,
    dreamJob: 'Game Developer',
    funFact: 'Is ranked in the top 1% of a popular online game.',
    quote: "Ensuring fairness in every step.",
    responsibilities: ['Financial auditing', 'Process oversight', 'Compliance monitoring']
  },
  {
    name: 'Angela David',
    position: 'P.R.O.',
    photo: comingSoonPhoto,
    dreamJob: 'Journalist',
    funFact: 'Runs the unofficial class social media page.',
    quote: "Connecting our class, one post at a time.",
    responsibilities: ['Public relations', 'Social media management', 'External communications']
  }
];

// Complete student list including officers
export const students = [
  // Class Officers (also part of the student list)
  {
    name: 'Andrea Garcia',
    photo: comingSoonPhoto,
    position: 'President',
    dreamJob: 'Corporate Lawyer',
    funFact: 'Is a certified scuba diver.',
    socials: { instagram: 'andrea.g' },
    quote: "Leading with purpose and passion.",
  },
  {
    name: 'John Michael Reyes',
    photo: comingSoonPhoto,
    position: 'Vice President',
    dreamJob: 'Civil Engineer',
    funFact: 'Loves to go on mountain hikes.',
    quote: "Building a stronger class, together.",
  },
  {
    name: 'Samantha Cruz',
    photo: comingSoonPhoto,
    position: 'Secretary',
    dreamJob: 'Novelist',
    funFact: 'Has written over 50 short stories.',
    quote: "Every detail matters.",
  },
  {
    name: 'Isabella Santos',
    photo: comingSoonPhoto,
    position: 'Treasurer',
    dreamJob: 'Accountant',
    funFact: 'Manages a small online sticker shop.',
    quote: "Count on me to make it count.",
  },
  {
    name: 'Mark Bautista',
    photo: comingSoonPhoto,
    position: 'Auditor',
    dreamJob: 'Game Developer',
    funFact: 'Is ranked in the top 1% of a popular online game.',
    quote: "Ensuring fairness in every step.",
  },
  {
    name: 'Angela David',
    photo: comingSoonPhoto,
    position: 'P.R.O.',
    dreamJob: 'Journalist',
    funFact: 'Runs the unofficial class social media page.',
    quote: "Connecting our class, one post at a time.",
  },

  // Regular Students
  {
    name: 'James Villanueva',
    photo: comingSoonPhoto,
    position: 'Student',
    dreamJob: 'Pilot',
    funFact: 'Builds and flies model airplanes.',
  },
  {
    name: 'Joshua Castillo',
    photo: comingSoonPhoto,
    position: 'Student',
    dreamJob: 'Chef',
    funFact: 'Can name every type of pasta.',
  },
  {
    name: 'Daniel Mercado',
    photo: comingSoonPhoto,
    position: 'Student',
    dreamJob: 'Architect',
    funFact: 'Enjoys architectural photography.',
  },
  {
    name: 'Christian Ramos',
    photo: comingSoonPhoto,
    position: 'Student',
    dreamJob: 'Marine Biologist',
    funFact: 'Has a collection of unique seashells.',
  },
  {
    name: 'Miguel Ocampo',
    photo: comingSoonPhoto,
    position: 'Student',
    dreamJob: 'VFX Artist',
    funFact: 'Creates amazing video edits.',
  },
  {
    name: 'Ethan Torres',
    photo: comingSoonPhoto,
    position: 'Student',
    dreamJob: 'Mechanical Engineer',
    funFact: 'Loves to tinker with old gadgets.',
  },
  {
    name: 'Sophia Lim',
    photo: comingSoonPhoto,
    position: 'Student',
    dreamJob: 'Fashion Designer',
    funFact: 'Sews and designs her own clothes.',
  },
  {
    name: 'Chloe Gonzales',
    photo: comingSoonPhoto,
    position: 'Student',
    dreamJob: 'Doctor',
    funFact: 'Volunteers at the local animal shelter.',
  },
  {
    name: 'Jasmine Aquino',
    photo: comingSoonPhoto,
    position: 'Student',
    dreamJob: 'Graphic Designer',
    funFact: 'Is learning digital painting.',
  },
  {
    name: 'Nicole Mendoza',
    photo: comingSoonPhoto,
    position: 'Student',
    dreamJob: 'Teacher',
    funFact: 'Speaks three languages fluently.',
  },
  {
    name: 'Maria Dela Cruz',
    photo: comingSoonPhoto,
    position: 'Student',
    dreamJob: 'Veterinarian',
    funFact: 'Has two dogs, three cats, and a parrot.',
  },
  {
    name: 'Kathryn Perez',
    photo: comingSoonPhoto,
    position: 'Student',
    dreamJob: 'Dancer',
    funFact: 'Leads the school dance troupe.',
  },
  {
    name: 'Nadine Fernandez',
    photo: comingSoonPhoto,
    position: 'Student',
    dreamJob: 'Photographer',
    funFact: 'Only shoots with vintage film cameras.',
  },
  {
    name: 'Liza Pascual',
    photo: comingSoonPhoto,
    position: 'Student',
    dreamJob: 'Interior Designer',
    funFact: 'Loves rearranging her room.',
  },
  {
    name: 'Julia Flores',
    photo: comingSoonPhoto,
    position: 'Student',
    dreamJob: 'Scientist',
    funFact: 'Won the regional chemistry quiz bee.',
  },
  {
    name: 'Angelica Lopez',
    photo: comingSoonPhoto,
    position: 'Student',
    dreamJob: 'Animator',
    funFact: 'Creates stop-motion short films.',
  },
  {
    name: 'Patricia Mariano',
    photo: comingSoonPhoto,
    position: 'Student',
    dreamJob: 'Entrepreneur',
    funFact: 'Sells handmade bracelets online.',
  },
  {
    name: 'Bea Alonzo',
    photo: comingSoonPhoto,
    position: 'Student',
    dreamJob: 'Actress',
    funFact: 'Starred in all the school plays.',
  },
  {
    name: 'Ella Santiago',
    photo: comingSoonPhoto,
    position: 'Student',
    dreamJob: 'Astronomer',
    funFact: 'Owns a powerful telescope.',
  },
  {
    name: 'Gabrielle Diaz',
    photo: comingSoonPhoto,
    position: 'Student',
    dreamJob: 'Psychologist',
    funFact: 'Is a great listener.',
  },
  {
    name: 'Kyline Alcantara',
    photo: comingSoonPhoto,
    position: 'Student',
    dreamJob: 'Singer',
    funFact: 'Has a popular YouTube cover channel.',
  },
  {
    name: 'Francine Rivera',
    photo: comingSoonPhoto,
    position: 'Student',
    dreamJob: 'Lawyer',
    funFact: 'Is the captain of the debate team.',
  },
  {
    name: 'Alyssa Valdez',
    photo: comingSoonPhoto,
    position: 'Student',
    dreamJob: 'Athlete',
    funFact: 'Is the varsity volleyball captain.',
  },
  {
    name: 'Heart Evangelista',
    photo: comingSoonPhoto,
    position: 'Student',
    dreamJob: 'Artist',
    funFact: 'Paints on luxury bags as a hobby.',
  },
  {
    name: 'Kim Chiu',
    photo: comingSoonPhoto,
    position: 'Student',
    dreamJob: 'Business Owner',
    funFact: 'Loves watching business documentaries.',
  },
  {
    name: 'Maja Salvador',
    photo: comingSoonPhoto,
    position: 'Student',
    dreamJob: 'Choreographer',
    funFact: 'Has won multiple dance competitions.',
  },
  {
    name: 'Pia Wurtzbach',
    photo: comingSoonPhoto,
    position: 'Student',
    dreamJob: 'Advocate',
    funFact: 'Is passionate about charity work.',
  },
  {
    name: 'Catriona Gray',
    photo: comingSoonPhoto,
    position: 'Student',
    dreamJob: 'Ambassador',
    funFact: 'Loves to travel and learn new cultures.',
  },
];

export const achievements = [
  {
    icon: Rocket,
    date: '2024-08-15',
    title: 'School Year Kick-off',
    description: 'Began our senior high school journey together as 11-Newton, marking the start of an incredible academic adventure.',
    tags: ['Academic', 'Beginning', 'Unity']
  },
  {
    icon: BookOpen,
    date: '2024-11-20',
    title: 'Science Fair Winners',
    description: 'Won 1st place in the annual school-wide Science Fair competition with our innovative research project.',
    tags: ['Science', 'Competition', 'Victory']
  },
  {
    icon: Award,
    date: '2025-02-14',
    title: 'Sports Fest Champions',
    description: 'Crowned as the overall champions of the intramural sports festival, showcasing our teamwork and athletic prowess.',
    tags: ['Sports', 'Champions', 'Teamwork']
  },
  {
    icon: Calendar,
    date: '2025-06-10',
    title: 'Finals Week Success',
    description: 'Successfully completed our final academic examinations for the year with outstanding results across all subjects.',
    tags: ['Academic', 'Success', 'Excellence']
  },
];
