import React from 'react';
export type Stat = {
  value: string;
  label: string;
  description?: string;
  color: string;
};
export type Experience = {
  company: string;
  role: string;
  period: string;
  color: string;
  initial: string;
  logo?: string; // <-- Yeh optional property add kar di logo ke liye
};

export type Education = {
  school: string;
  degree: string;
  period: string;
  color: string;
  initial: string;
};

export type Skill = {
  name: string;
  color: string;
  initial: string;
};

export type Project = {
  title: string;
  period: string;
  description: string;
  tags: string[];
  badges: { label: string; icon?: string }[];
  image?: string;
  link: string;
};

export type CreativeProject = {
  title: string;
  badges: { label: string; icon?: string }[];

  image: string;
};

export type Hackathon = {
  date: string;
  title: string;
  location: string;
  description: string;
  tags: { label: string; icon?: string }[];
  color: string;
  emoji: string;
};
export const stats = [
  {
    value: "1+",
    label: "Years Experience",
    color: "#3b82f6",
  },
  {
    value: "10+",
    label: "Projects Built",
    color: "#10b981",
  },
  {
    value: "3rd",
    label: "Hackathon Winner",
    color: "#f59e0b",
  },
  {
    value: "AWS",
    label: "Cloud Exposure",
    color: "#8b5cf6",
  },
];


export const experiences: Experience[] = [
  {
    company: 'AMD Soft and Services',
    role: 'Web Developer',
    period: 'Jun 2025 – May 2026',
    color: '#3b82f6',
    initial: 'AMD',
    logo: '/images/amd.png' // Aapne jahan logo save kiya hai wo path dalein
  },
  {
    company: 'Habbale Academy',
    role: 'Full Stack Development Intern',
    period: 'Jan 2024 – Apr 2024',
    color: '#10b981',
    initial: 'HA',
    logo: '/images/ha-logo.png' // Habbale Academy ka logo path
  },
  {
    company: 'Cloud First Hackathon', // Aapka hackathon event
    role: '3rd Place Winner (Project: Real-Base)', // Aapki rank aur project
    period: 'Mar 2024', // Hackathon ka time
    color: '#ea4335', // Google Cloud Red type color kyunki Cloud hackathon tha
    initial: 'CF',
    logo: '/images/ha-logo.png' // Habbale academy ke under tha toh wahi logo use kar sakte hain
  }
];

export const education: Education[] = [
  {
    school: 'GIET UNIVERSITY',
    degree: 'Bachelor of Computer Applications (CGPA: 7.43)',
    period: '2022 – 2025',
    color: '#1e3a8a', // Deep Blue for University
    initial: 'GIET'
  },
  {
    school: 'SHRI CHANDRA HIGHER SECONDARY SCHOOL',
    degree: 'Higher Secondary (Commerce) - 74%',
    period: '2020 – 2022',
    color: '#7c3aed', // Purple for High School
    initial: 'SC'
  },
  {
    school: 'EVERGREEN ACADEMY',
    degree: '10th Standard (83%)',
    period: '2020',
    color: '#059669', // Green for Academy
    initial: 'EA'
  },

];
export const skills: Skill[] = [
  // Frontend
  { name: 'React', color: '#61dafb', initial: '⚛️' },
  { name: 'Next.js', color: '#000000', initial: '▲' },
  { name: 'TypeScript', color: '#3178c6', initial: 'TS' },
  { name: 'JavaScript', color: '#f7df1e', initial: 'JS' },
  { name: 'HTML & CSS', color: '#e34f26', initial: '🌐' },
  { name: 'Tailwind CSS', color: '#06b6d4', initial: 'TW' },
  { name: 'Bootstrap', color: '#7952b3', initial: 'B' },

  // Backend
  { name: 'PHP', color: '#777bb4', initial: '🐘' },
  { name: 'Laravel', color: '#ff2d20', initial: '🔴' },
  { name: '.NET', color: '#512bd4', initial: '🥅' },

  // Database
  { name: 'MySQL', color: '#00758f', initial: '🐬' },
  { name: 'PostgreSQL', color: '#336791', initial: '🐘' },

  // Cloud
  { name: 'AWS', color: '#ff9900', initial: 'AWS' },

  // Creative
  { name: 'Photoshop', color: '#31a8ff', initial: 'Ps' },
  { name: 'Video Editing', color: '#ff0000', initial: '🎬' },
  { name: 'Graphics Design', color: '#ff61f6', initial: '🎨' },
];

// 
export const webProjects: Project[] = [
  {
    title: 'Enterprise Admin Dashboard',
    period: 'AMD Soft and Services · Web Developer',
    description:
      'Developed a responsive admin dashboard for monitoring business operations, analytics, user activities, and reporting.',
    tags: ['Laravel', 'HTML ', 'CSS', 'JavaScript', 'TailwindCSS', 'Chart.js'],
    badges: [{ label: 'Production Project', icon: '🚀' }],
    link: '#'
  },

  {
    title: 'Poultry Farm Management System',
    period: 'AMD Soft and Services · Frontend Development',
    description:
      'Built interfaces for poultry records, inventory tracking, production management and reporting.',
    tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    badges: [{ label: 'Management System', icon: '📊' }],
    link: '#'
  },

  {
    title: 'E-Learning Platform',
    period: 'AMD Soft and Services · Frontend Development',
    description:
      'Developed responsive learning interfaces, student dashboards and course management views.',
    tags: ['Bootstrap', 'HTML ', 'CSS', 'JavaScript', 'Responsive Design'],
    badges: [{ label: 'Education Platform', icon: '🎓' }],
    link: '#'
  },

  {
    title: 'Book Publication System',
    period: 'AMD Soft and Services · Frontend Development',
    description:
      'Created book catalog management and publication workflow interfaces.',
    tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    badges: [{ label: 'Publishing System', icon: '📚' }],
    link: '#'
  },

  {
    title: 'Assaman Nepal NGO Portal',
    period: 'AMD Soft and Services · Frontend Development',
    description:
      'Developed a responsive NGO portal showcasing programs, donations and impact reports.',
    tags: ['Bootstrap', 'HTML ', 'CSS', 'JavaScript', 'Responsive Design'],
    badges: [{ label: 'NGO Platform', icon: '🤝' }],
    link: '#'
  },

  {
    title: 'Cooperative Management App',
    period: 'AMD Soft and Services · Frontend Development',
    description:
      'Designed interfaces for member management, transactions and financial operations.',
    tags: ['HTML ', 'CSS', 'Bootstrap', 'JavaScript', 'Data Tables'],
    badges: [{ label: 'Finance Platform', icon: '💰' }],
    link: '#'
  },

  {
    title: 'Clean Profession',
    period: 'Personal Project · Full Stack Development',
    description:
      'Built a full-stack application using Laravel, MySQL and JavaScript.',
    tags: ['PHP', 'MySQL', 'HTML ', 'CSS', 'JavaScript'],
    badges: [
      { label: 'Full Stack', icon: '⚡' },
      { label: 'College Project', icon: '🎯' },

    ],
    link: '#'
  },

  {
    title: 'Real-Base',
    period: 'Cloud First Hackathon · 3rd Place Winner',
    description:
      'Built a cloud-based solution prototype that secured 3rd place in the hackathon.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Python', 'AWS', 'Git / Github'],
    badges: [
      { label: '3rd Place', icon: '🏆' },
      { label: 'Hackathon', icon: '🚀' },
    ],
    link: '#'
  },
];



export const creativeProjects: CreativeProject[] = [
  {
    title: "Poster Design 01",
    image: "/images/graphic1.png",
    badges: [{ label: 'Poster Design', icon: '🚀' }],

  },
  {
    title: "Social Media Banner",
    image: "/images/graphic2.png",
    badges: [{ label: 'About Me', icon: '🚀' }],

  },
  {
    title: "Branding Design",
    image: "/images/graphic3.png",
    badges: [{ label: 'Degital Marketing', icon: '🚀' }],

  },

];

// 
export const hackathons: Hackathon[] = [
  {
    date: 'March 2024',
    title: 'Cloud First Hackathon',
    location: 'Habbale Academy',
    description: 'Secured 3rd Place by designing and developing "Real-Base", a high-performance cloud-based application logic solution tailored for streamlined remote data access and optimization.',
    tags: [{ label: '3rd Place' }, { label: 'Cloud Solution' }, { label: 'Real-Base' }],
    color: '#ea4335', // Google Cloud Red theme color
    emoji: '🏆',
  }
];


export const contactInfo = {
  title: "Get In Touch",
  subtitle: "Let's build something amazing together! Feel free to reach out for collaborations, job opportunities, or just a friendly developer chat.",
  email: "uditkumar.dev@gmail.com", // <-- Agar email alag ho toh change kar lena bhai
  phone: "+91 XXXXXXXXXX", // <-- Apna real phone number yahan daal dena
  location: "India",
  socials: [
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/your-username", // <-- Apna username paste kar lena
      icon: "💼",
      color: "#0077b5"
    },
    {
      platform: "GitHub",
      url: "https://github.com/your-username", // <-- Apna username paste kar lena
      icon: "💻",
      color: "#24292e"
    },
    {
      platform: "WhatsApp",
      url: "https://wa.me/91XXXXXXXXXX", // <-- Apna number daal dena direct chat ke liye
      icon: "💬",
      color: "#25d366"
    }
  ]
};
