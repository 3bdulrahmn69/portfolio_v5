import { siteConfig } from '@/lib/site';
import Button from '@/components/ui/button';
import Tooltip from '@/components/ui/tool-tip';
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMedium,
  FaXTwitter,
} from 'react-icons/fa6';

type SocialLinksProps = {
  className?: string;
};

export default function SocialLinks({ className }: SocialLinksProps) {
  const iconMap = {
    GitHub: FaGithub,
    LinkedIn: FaLinkedin,
    Medium: FaMedium,
    Twitter: FaXTwitter,
    Facebook: FaFacebook,
    Instagram: FaInstagram,
  } as const;

  return (
    <div className={className}>
      <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
        Social
      </p>
      <div className="flex flex-wrap gap-2">
        {siteConfig.socialLinks.map((social) => {
          const Icon =
            iconMap[social.label as keyof typeof iconMap] ?? FaGithub;

          return (
            <Tooltip key={social.label} content={social.label}>
              <Button
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                variant="icon"
                size="icon"
                aria-label={`Open ${social.label}`}
                className="text-base"
              >
                <Icon />
              </Button>
            </Tooltip>
          );
        })}
      </div>
    </div>
  );
}
