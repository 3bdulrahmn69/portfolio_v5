import { ImageResponse } from 'next/og';
import { projects, works } from '@/data';
import { siteConfig } from '@/lib/site';
import { StaticImageData } from 'next/image';

export const alt = 'Project share image';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

type Props = {
  params: Promise<{ slug: string }>;
};

function toAbsoluteImageUrl(image: string | StaticImageData): string {
  const src = typeof image === 'string' ? image : image.src;
  if (/^https?:\/\//.test(src)) return src;
  return `${siteConfig.url}${src.startsWith('/') ? '' : '/'}${src}`;
}

export default async function Image({ params }: Props) {
  const { slug } = await params;
  const project = [...works, ...projects].find((item) => item.slug === slug);

  if (!project) {
    return new ImageResponse(
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background:
            'linear-gradient(135deg, rgb(14, 20, 34), rgb(24, 34, 54))',
          color: 'white',
          fontSize: 54,
          fontWeight: 700,
          letterSpacing: '-0.02em',
          padding: 48,
        }}
      >
        Project Not Found
      </div>,
      size,
    );
  }

  const imageUrl = toAbsoluteImageUrl(project.gallery?.[0] || project.image);

  return new ImageResponse(
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        position: 'relative',
        background:
          'linear-gradient(135deg, rgb(11, 16, 28), rgb(27, 37, 60) 70%)',
        color: 'white',
        padding: 36,
      }}
    >
      {/* next/image is not supported inside next/og ImageResponse JSX */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imageUrl}
        alt={project.title}
        style={{
          width: '54%',
          height: '100%',
          objectFit: 'cover',
          borderRadius: 24,
          border: '2px solid rgba(255, 255, 255, 0.25)',
        }}
      />

      <div
        style={{
          marginLeft: 28,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '46%',
          paddingTop: 12,
          paddingBottom: 12,
        }}
      >
        <div
          style={{
            fontSize: 24,
            opacity: 0.86,
            display: 'flex',
          }}
        >
          Abdulrahman Moussa
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 18,
          }}
        >
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              display: 'flex',
              flexWrap: 'wrap',
            }}
          >
            {project.title}
          </div>

          <div
            style={{
              fontSize: 26,
              opacity: 0.9,
              lineHeight: 1.35,
              display: 'flex',
            }}
          >
            {project.category}
          </div>
        </div>

        <div
          style={{
            fontSize: 20,
            opacity: 0.82,
            display: 'flex',
          }}
        >
          View details, stack, and live links
        </div>
      </div>
    </div>,
    size,
  );
}
