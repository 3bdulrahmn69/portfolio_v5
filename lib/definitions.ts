import { StaticImageData } from 'next/image';

export enum ProjectCategory {
  FRONTEND = 'Front-End Website',
  BACKEND = 'Back-End Service',
  FULLSTACK = 'Full-Stack Website',
  PYTHON_APP = 'Python Desktop App',
  SCRAPING = 'Web Scraping',
}

export enum Technology {
  HTML = 'HTML',
  CSS = 'CSS',
  JAVASCRIPT = 'JavaScript',
  BOOTSTRAP = 'Bootstrap',
  REACT = 'React.js',
  NEXTJS = 'Next.js',
  TYPESCRIPT = 'TypeScript',
  NEXTAUTH = 'NextAuth',
  TAILWINDCSS = 'Tailwind CSS',
  SOCKETIO = 'Socket.io',
  SASS = 'Sass',
  PUPPETEER = 'Puppeteer',
  REACTDND = 'React DnD',
  DnDkit = 'DnD Kit',
  KONVAJS = 'Konva.js',
  LOCALSTORAGE = 'Local Storage',
  RAPIDAPI = 'Rapid API',
  AXIOS = 'Axios',
  LEAFLET = 'Leaflet',
  GEOLOCATION = 'Geolocation',
  JSONSERVER = 'JSON-SERVER',
  DAISYUI = 'DaisyUI',
  OMDBAPI = 'OMDb API',
  FRAMERMOTION = 'Framer Motion',
  I18NEXT = 'I18next',
  MATERIALUI = 'Material UI',
  GSAP = 'GSAP',
  TANSTACKQUERY = 'TanStack Query',
  HELLOPANGEADND = 'Hello Pangea DnD',
  EXPRESSJS = 'Express.js',
  NODEJS = 'Node.js',
  MONGODB = 'MongoDB',
  RECHARTS = 'Recharts',
  VERCELCRONS = 'Vercel Cron',
  NEXTINTL = 'Next-Intl',
  GEMINI = 'Gemini',
  DRIZZLEORM = 'Drizzle ORM',
  POSTGRESQL = 'PostgreSQL',
  ZUSTAND = 'Zustand',
  BETTERAUTH = 'BetterAuth',
  REACTQILL = 'React Quill',
}

export type ProjectPart = {
  label: string;
  description?: string;
  liveUrl?: string;
  githubUrl?: string;
};

export type Project = {
  title: string;
  slug: string;
  description: string;
  image: StaticImageData | string;
  techStack: Technology[];
  type: 'personal' | 'professional';
  year: number;
  tags: string[];
  whatILearned?: string[];
  category: ProjectCategory;
  status: 'completed' | 'in-progress' | 'stalled';
  highlights?: string[];
  githubUrl?: string;
  liveUrl?: string;
  paid?: boolean;
  demoUrl?: string;
  gallery?: (StaticImageData | string)[];
  parts?: ProjectPart[];
};

export type Certification = {
  title: string;
  issuer: string;
  image: StaticImageData | string;
  credentialUrl?: string;
  issueDate: string;
};
