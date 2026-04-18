import { Certification } from '@/lib/definitions';

import softWare from '@/public/certifications/short-specializations.webp';
import aice from '@/public/certifications/aice.webp';
import founder from '@/public/certifications/founder-academy.webp';
import itiCert from '@/public/certifications/iti.webp';
import green_digital from '@/public/certifications/green_digital.webp';
import McKinsey_forward_program from '@/public/certifications/McKinsey_forward_program.webp';

export const certifications: Certification[] = [
  {
    title: 'McKinsey Forward Program',
    issuer: 'McKinsey.org',
    image: McKinsey_forward_program,
    issueDate: '2025-12-10',
  },
  {
    title: 'Green Digital Skills',
    issuer: 'Inco Academy',
    image: green_digital,
    issueDate: '2025-10-14',
  },

  {
    title: 'Intensive Training in Frontend & Cross-Platform Development',
    issuer: 'Information Technology Institute (ITI)',
    image: itiCert,
    issueDate: '2025-08-30',
  },
  {
    title: 'Software Engineering',
    issuer: 'ALX Africa',
    image: softWare,
    credentialUrl: 'https://intranet.alxswe.com/certificates/SzYXcy2N6M',
    issueDate: '2024-04-12',
  },
  {
    title: 'AI Career Essentials (AiCE)',
    issuer: 'ALX Africa',
    image: aice,
    credentialUrl: 'https://intranet.alxswe.com/certificates/J8RhZXpYBs',
    issueDate: '2024-09-24',
  },
  {
    title: 'Founder Academy',
    issuer: 'ALX Ventures',
    image: founder,
    credentialUrl: 'https://intranet.alxswe.com/certificates/sy62TnCxN9',
    issueDate: '2024-08-16',
  },
];
