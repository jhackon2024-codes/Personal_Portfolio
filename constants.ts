import { Project, Experience, Skill, SectionId, Testimonial, BlogPost } from './types';

export const PORTFOLIO_DATA = {
  name: "Alex Dev",
  role: "Senior Full Stack Engineer",
  tagline: "Building digital experiences that matter.",
  bio: "I am a passionate developer with over 6 years of experience in building scalable web applications. I specialize in the React ecosystem and modern UI/UX principles. When I'm not coding, I'm exploring new AI technologies or contributing to open source.",
  email: "alex.dev@example.com",
  github: "https://github.com/alexdev",
  linkedin: "https://linkedin.com/in/alexdev",
  twitter: "https://twitter.com/alexdev",
};

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Nexus Dashboard',
    description: 'A real-time analytics dashboard helping businesses track key performance indicators with AI-driven insights.',
    tech: ['React', 'TypeScript', 'D3.js', 'Tailwind'],
    imageUrl: 'https://picsum.photos/800/600?random=1',
    link: '#',
    github: '#'
  },
  {
    id: '2',
    title: 'E-Commerce Redux',
    description: 'A headless e-commerce solution built for speed and accessibility, featuring advanced filtering and search.',
    tech: ['Next.js', 'GraphQL', 'Stripe', 'Framer Motion'],
    imageUrl: 'https://picsum.photos/800/600?random=2',
    link: '#',
    github: '#'
  },
  {
    id: '3',
    title: 'TaskFlow AI',
    description: 'Smart project management tool that uses generative AI to suggest task breakdowns and time estimates.',
    tech: ['Vue.js', 'Python', 'FastAPI', 'Gemini API'],
    imageUrl: 'https://picsum.photos/800/600?random=3',
    link: '#',
    github: '#'
  },
  {
    id: '4',
    title: 'CryptoWatch',
    description: 'Mobile-first application for tracking cryptocurrency prices with custom alerts and portfolio management.',
    tech: ['React Native', 'Firebase', 'Redux'],
    imageUrl: 'https://picsum.photos/800/600?random=4',
    link: '#',
    github: '#'
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: '1',
    role: 'Senior Frontend Engineer',
    company: 'TechFlow Solutions',
    period: '2021 - Present',
    description: 'Leading the frontend team in migrating legacy applications to React. Improved site performance by 40%.'
  },
  {
    id: '2',
    role: 'Full Stack Developer',
    company: 'Innovate Digital',
    period: '2018 - 2021',
    description: 'Developed and maintained multiple client projects. Implemented CI/CD pipelines and automated testing strategies.'
  },
  {
    id: '3',
    role: 'Junior Web Developer',
    company: 'Creative Agency',
    period: '2016 - 2018',
    description: 'Collaborated with designers to bring creative visions to life. Built responsive websites for diverse clients.'
  }
];

export const SKILLS: Skill[] = [
  { name: 'React', icon: 'Atom', category: 'Frontend' },
  { name: 'TypeScript', icon: 'FileCode', category: 'Frontend' },
  { name: 'Tailwind CSS', icon: 'Palette', category: 'Frontend' },
  { name: 'Node.js', icon: 'Server', category: 'Backend' },
  { name: 'GraphQL', icon: 'Database', category: 'Backend' },
  { name: 'Python', icon: 'Snake', category: 'Backend' },
  { name: 'Figma', icon: 'PenTool', category: 'Design' },
  { name: 'Git', icon: 'GitBranch', category: 'Tools' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Product Manager',
    company: 'TechFlow Solutions',
    avatar: 'https://i.pravatar.cc/150?u=1',
    text: "Alex is an exceptional developer who brings both technical expertise and creative problem-solving to every project. His ability to translate complex requirements into intuitive user interfaces is remarkable."
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'CTO',
    company: 'Innovate Digital',
    avatar: 'https://i.pravatar.cc/150?u=2',
    text: "Working with Alex was a game-changer for our platform. He optimized our core application performance by 40% and established best practices that the team still follows today."
  },
  {
    id: '3',
    name: 'Emily Davis',
    role: 'Lead Designer',
    company: 'Creative Agency',
    avatar: 'https://i.pravatar.cc/150?u=3',
    text: "Rarely do you find a developer with such a keen eye for design details. Alex perfectly implemented our vision and often improved upon the original designs with thoughtful animations and interactions."
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of Frontend Architecture',
    excerpt: 'Exploring the shift towards island architecture, server components, and what it means for the next generation of web apps.',
    date: 'Oct 12, 2023',
    readTime: '5 min read',
    imageUrl: 'https://picsum.photos/800/600?random=10',
    category: 'Engineering',
    link: '#'
  },
  {
    id: '2',
    title: 'Mastering Framer Motion in React',
    excerpt: 'A deep dive into creating complex, gesture-based animations that feel natural and performant on all devices.',
    date: 'Sep 28, 2023',
    readTime: '8 min read',
    imageUrl: 'https://picsum.photos/800/600?random=11',
    category: 'Tutorial',
    link: '#'
  },
  {
    id: '3',
    title: 'AI-Driven Development Workflow',
    excerpt: 'How I use tools like Gemini and Copilot to accelerate my coding process without losing the human touch.',
    date: 'Sep 15, 2023',
    readTime: '6 min read',
    imageUrl: 'https://picsum.photos/800/600?random=12',
    category: 'Productivity',
    link: '#'
  }
];

export const NAV_LINKS = [
  { id: SectionId.HERO, label: 'Home' },
  { id: SectionId.ABOUT, label: 'About' },
  { id: SectionId.PROJECTS, label: 'Projects' },
  { id: SectionId.EXPERIENCE, label: 'Experience' },
  { id: SectionId.BLOG, label: 'Blog' },
  { id: SectionId.CONTACT, label: 'Contact' },
];

export const SYSTEM_INSTRUCTION = `
You are an AI assistant for a developer portfolio named ${PORTFOLIO_DATA.name}.
Your goal is to answer questions about Alex's skills, experience, and projects in a professional, friendly, and concise manner.
Use the following context to answer questions:

Name: ${PORTFOLIO_DATA.name}
Role: ${PORTFOLIO_DATA.role}
Bio: ${PORTFOLIO_DATA.bio}

Experience:
${EXPERIENCE.map(e => `- ${e.role} at ${e.company} (${e.period}): ${e.description}`).join('\n')}

Projects:
${PROJECTS.map(p => `- ${p.title}: ${p.description} (Tech: ${p.tech.join(', ')})`).join('\n')}

Skills: ${SKILLS.map(s => s.name).join(', ')}

Testimonials:
${TESTIMONIALS.map(t => `- ${t.name} (${t.role} at ${t.company}): "${t.text}"`).join('\n')}

Blog Posts:
${BLOG_POSTS.map(b => `- ${b.title} (${b.date}): ${b.excerpt}`).join('\n')}

Contact: ${PORTFOLIO_DATA.email}

If the user asks something unrelated to the portfolio or professional topics, politely steer them back to Alex's work.
Keep responses short (under 100 words) unless asked for details.
`;