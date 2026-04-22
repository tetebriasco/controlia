interface LogoProps {
  variant?: 'full' | 'icon';
  size?: number;
  light?: boolean;
}

export function Logo({ variant = 'full', size = 32, light = false }: LogoProps) {
  const textColor = light ? '#FFFFFF' : '#0D1B2A';
  const blueColor = '#2563EB';
  const greenColor = '#22C55E';
  const tealColor = '#17BEBB';

  const icon = (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer C shape */}
      <path
        d="M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20c7.5 0 14.09-4.13 17.5-10.23"
        stroke={blueColor}
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      {/* Clock hand - minute */}
      <line x1="24" y1="24" x2="24" y2="14" stroke={blueColor} strokeWidth="3" strokeLinecap="round" />
      {/* Clock hand - hour */}
      <line x1="24" y1="24" x2="31" y2="24" stroke={tealColor} strokeWidth="3" strokeLinecap="round" />
      {/* Clock center dot */}
      <circle cx="24" cy="24" r="2.5" fill={blueColor} />
      {/* Data bars */}
      <rect x="36" y="18" width="4" height="14" rx="2" fill={greenColor} />
      <rect x="42" y="22" width="4" height="10" rx="2" fill={tealColor} />
    </svg>
  );

  if (variant === 'icon') return icon;

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: size * 0.3 }}>
      {icon}
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
        <span
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 600,
            fontSize: size * 0.7,
            color: textColor,
            letterSpacing: '-0.02em',
          }}
        >
          Controlia
        </span>
        {size >= 28 && (
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: size * 0.25,
              color: light ? 'rgba(255,255,255,0.7)' : '#64748B',
              letterSpacing: '0.03em',
              textTransform: 'uppercase',
            }}
          >
            Control Horario y Novedades Laborales
          </span>
        )}
      </div>
    </div>
  );
}
