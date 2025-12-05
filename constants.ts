import { BookOpen, Users, Award, Monitor, Globe, BrainCircuit } from 'lucide-react';
import { Course, Feature, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#' },
  { label: 'Courses', href: '#courses' },
  { label: 'Methodology', href: '#features' },
  { label: 'Contact', href: '#footer' },
];

export const COURSES: Course[] = [
  {
    id: 'kids-english',
    title: 'English for Kids',
    description: 'Fun, interactive lessons designed to spark a love for languages in young minds. Games, songs, and stories included.',
    level: 'Beginner',
    duration: '12 Weeks',
    students: 120,
    image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=800&auto=format&fit=crop',
    category: 'Language',
    tags: ['Interactive', 'Fun', 'Ages 6-12']
  },
  {
    id: 'basic-english',
    title: 'Basic English',
    description: 'Build a solid foundation in grammar, vocabulary, and daily conversation skills for adults and teens.',
    level: 'Beginner',
    duration: '8 Weeks',
    students: 340,
    image: 'https://picsum.photos/id/20/800/600',
    category: 'Language',
    tags: ['Grammar', 'Speaking', 'Foundations']
  },
  {
    id: 'advanced-english',
    title: 'Advanced English',
    description: 'Master complex fluency, idiomatic expressions, and professional communication nuances.',
    level: 'Advanced',
    duration: '10 Weeks',
    students: 85,
    image: 'https://picsum.photos/id/24/800/600',
    category: 'Language',
    tags: ['Business', 'Fluency', 'Debate']
  },
  {
    id: 'ielts-prep',
    title: 'IELTS Preparation',
    description: 'Targeted strategies and practice tests to achieve high band scores for study or work abroad.',
    level: 'Advanced',
    duration: '6 Weeks',
    students: 210,
    image: 'https://picsum.photos/id/4/800/600',
    category: 'Language',
    tags: ['Exam Prep', 'Academic', 'General']
  },
  {
    id: 'basic-computer',
    title: 'Computer Basics',
    description: 'Essential digital literacy skills: OS navigation, internet safety, and introduction to office productivity suites.',
    level: 'Beginner',
    duration: '4 Weeks',
    students: 150,
    image: 'https://picsum.photos/id/0/800/600',
    category: 'Technology',
    tags: ['Digital Literacy', 'Office', 'Safety']
  }
];

export const FEATURES: Feature[] = [
  {
    id: 'expert-tutors',
    title: 'Expert Instructors',
    description: 'Learn from certified professionals passionate about teaching and student success.',
    icon: Users
  },
  {
    id: 'interactive',
    title: 'Interactive Learning',
    description: 'Engage with dynamic content, quizzes, and live sessions to reinforce your knowledge.',
    icon: Monitor
  },
  {
    id: 'certified',
    title: 'Certified Curriculum',
    description: 'Our courses follow international standards to ensure your skills are recognized globally.',
    icon: Award
  },
  {
    id: 'flexible',
    title: 'Flexible Schedule',
    description: 'Access course materials 24/7 and join live classes at times that suit your lifestyle.',
    icon: BookOpen
  }
];