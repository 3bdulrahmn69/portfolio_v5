import { Certification } from '@/lib/definitions';

import softWare from '@/public/certifications/short-specializations.png';
import aice from '@/public/certifications/aice.png';
import founder from '@/public/certifications/founder-academy.png';
import itiCert from '@/public/certifications/iti.jpg';

export const certifications: Certification[] = [
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
