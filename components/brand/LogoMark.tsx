type Props = { className?: string; title?: string; inverted?: boolean };

// Icon-only mark: abstract bus silhouette inside a rounded square.
export function LogoMark({ className = "h-10 w-10", title, inverted = false }: Props) {
  const bg = inverted ? "#FFFFFF" : "#0B4F8F";
  const fg = inverted ? "#0B4F8F" : "#FFFFFF";
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      <rect width="48" height="48" rx="12" fill={bg} />
      <path
        d="M9 16a3 3 0 0 1 3-3h20.5a5 5 0 0 1 4.6 3l2.6 6.1c.2.5.3 1 .3 1.6V31a2 2 0 0 1-2 2H11a2 2 0 0 1-2-2V16Z"
        fill={fg}
      />
      <rect x="12.5" y="17" width="6.5" height="6" rx="1.2" fill={bg} />
      <rect x="21.5" y="17" width="6.5" height="6" rx="1.2" fill={bg} />
      <path d="M30.5 17h2.3a2 2 0 0 1 1.8 1.2l1.7 3.9a.6.6 0 0 1-.6.9h-5.2V17Z" fill={bg} />
      <rect x="9" y="26.5" width="30" height="1.6" fill={bg} opacity=".35" />
      <circle cx="16" cy="33" r="4" fill={bg} stroke={fg} strokeWidth="2" />
      <circle cx="32" cy="33" r="4" fill={bg} stroke={fg} strokeWidth="2" />
    </svg>
  );
}
