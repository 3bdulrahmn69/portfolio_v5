import type { ProjectMetric } from '@/lib/definitions';

interface ProjectMetricsProps {
  metrics: ProjectMetric[];
}

const P0 = { x: 30, y: 160 };
const C1 = { x: 290, y: 160 };
const C2 = { x: 510, y: 50 };
const P3 = { x: 770, y: 30 };
const BASELINE_Y = 188;
const CURVE_PATH = `M ${P0.x} ${P0.y} C ${C1.x} ${C1.y}, ${C2.x} ${C2.y}, ${P3.x} ${P3.y}`;

function pointOnCurve(t: number) {
  const mt = 1 - t;
  return {
    x:
      mt * mt * mt * P0.x +
      3 * mt * mt * t * C1.x +
      3 * mt * t * t * C2.x +
      t * t * t * P3.x,
    y:
      mt * mt * mt * P0.y +
      3 * mt * mt * t * C1.y +
      3 * mt * t * t * C2.y +
      t * t * t * P3.y,
  };
}

export default function ProjectMetrics({ metrics }: ProjectMetricsProps) {
  if (metrics.length === 0) {
    return null;
  }

  const count = metrics.length;
  const points = metrics.map((metric, index) => ({
    metric,
    ...pointOnCurve(
      count === 1 ? 0.5 : 0.08 + (index / (count - 1)) * 0.84,
    ),
  }));

  return (
    <div className="mt-8">
      <ul className="sr-only">
        {metrics.map((metric) => (
          <li key={metric.label}>
            {metric.value} {metric.label}
          </li>
        ))}
      </ul>

      <dl className="grid grid-cols-2 gap-x-4 gap-y-6 sm:hidden">
        {metrics.map((metric) => (
          <div key={metric.label}>
            <dt className="sr-only">{metric.label}</dt>
            <dd className="text-3xl font-black text-primary">{metric.value}</dd>
            <dd className="mt-1 text-xs font-medium text-muted-foreground">
              {metric.label}
            </dd>
          </div>
        ))}
      </dl>

      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        By the numbers
      </p>
      <svg
        viewBox="0 0 800 235"
        fill="none"
        aria-hidden="true"
        className="hidden w-full text-primary sm:block"
      >
        <defs>
          <linearGradient
            id="metric-area-gradient"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop
              offset="0%"
              style={{
                stopColor: 'var(--color-primary)',
                stopOpacity: 0.2,
              }}
            />
            <stop
              offset="100%"
              style={{
                stopColor: 'var(--color-primary)',
                stopOpacity: 0,
              }}
            />
          </linearGradient>
        </defs>

        {[70, 115, 160].map((gridY) => (
          <line
            key={gridY}
            x1={16}
            y1={gridY}
            x2={784}
            y2={gridY}
            strokeWidth={1}
            strokeDasharray="2 8"
            className="stroke-border"
          />
        ))}

        <g className="metric-point" style={{ animationDelay: '800ms' }}>
          <path
            d={`${CURVE_PATH} L ${P3.x} ${BASELINE_Y} L ${P0.x} ${BASELINE_Y} Z`}
            fill="url(#metric-area-gradient)"
          />
        </g>
        <line
          x1={16}
          y1={BASELINE_Y}
          x2={784}
          y2={BASELINE_Y}
          strokeWidth={1.5}
          className="stroke-border"
        />
        <path
          d={CURVE_PATH}
          strokeWidth={9}
          strokeLinecap="round"
          className="stroke-primary/15 metric-curve"
        />
        <path
          d={CURVE_PATH}
          strokeWidth={3}
          strokeLinecap="round"
          className="stroke-primary metric-curve"
        />
        <polygon
          points="770,30 757.5,36.5 756.6,25.5"
          className="fill-primary metric-point"
          style={{ animationDelay: '1550ms' }}
        />

        {points.map(({ metric, x, y }, index) => (
          <g
            key={metric.label}
            className="metric-point"
            style={{ animationDelay: `${450 + index * 320}ms` }}
          >
            <line
              x1={x}
              y1={y}
              x2={x}
              y2={BASELINE_Y}
              strokeWidth={1.5}
              strokeDasharray="3 6"
              className="stroke-primary/30"
            />
            <circle cx={x} cy={y} r={10} className="fill-primary/15" />
            <circle
              cx={x}
              cy={y}
              r={5}
              strokeWidth={2.5}
              className="fill-primary stroke-background"
            />
            <text
              x={x}
              y={y - 18}
              textAnchor="middle"
              className="fill-foreground text-lg font-extrabold"
            >
              {metric.value}
            </text>
            <text
              x={x}
              y={BASELINE_Y + 24}
              textAnchor="middle"
              className="fill-muted-foreground text-sm font-medium"
            >
              {metric.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
