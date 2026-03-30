import type { Metadata } from 'next';
import { AboutSummary } from '@/components/shared/about-summary';
import { EducationList } from '@/components/shared/education-list';
import { CertificationsList } from '@/components/shared/certifications-list';
import { HopesGoals } from '@/components/shared/hopes-goals';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: `About | ${siteConfig.name}`,
  description:
    'Background, education, certifications, and goals as a frontend engineer.',
  openGraph: {
    title: `About | ${siteConfig.name}`,
    description: 'Experience, education, certifications, and goals.',
    url: `${siteConfig.url}/about`,
    images: [siteConfig.ogImages.about],
  },
};

export default function AboutPage() {
  return (
    <div className="space-y-12">
      <AboutSummary />
      <EducationList />
      <CertificationsList />
      <HopesGoals />
    </div>
  );
}
