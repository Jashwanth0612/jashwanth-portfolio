export function LaurelHalf({
  mirror = false,
  color = "#A9793D",
  className = "",
}: {
  mirror?: boolean;
  color?: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 60 84"
      fill="none"
      className={className}
      style={mirror ? { transform: "scaleX(-1)" } : undefined}
    >
      <path d="M30 82C22 60 14 46 6 30" stroke={color} strokeWidth="2" />
      <g fill={color}>
        <ellipse cx="10" cy="30" rx="7" ry="3.2" transform="rotate(-40 10 30)" />
        <ellipse cx="15" cy="40" rx="7.5" ry="3.4" transform="rotate(-35 15 40)" />
        <ellipse cx="20" cy="50" rx="8" ry="3.6" transform="rotate(-30 20 50)" />
        <ellipse cx="24" cy="61" rx="8.2" ry="3.6" transform="rotate(-24 24 61)" />
        <ellipse cx="27" cy="72" rx="8.2" ry="3.6" transform="rotate(-16 27 72)" />
      </g>
    </svg>
  );
}

export function LaurelFull({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 84" fill="none" className={className}>
      <path d="M30 82C22 60 14 46 6 30" stroke="#C99A56" strokeWidth="2" />
      <path d="M30 82C38 60 46 46 54 30" stroke="#C99A56" strokeWidth="2" />
      <g fill="#C99A56">
        <ellipse cx="10" cy="30" rx="7" ry="3.2" transform="rotate(-40 10 30)" />
        <ellipse cx="20" cy="50" rx="8" ry="3.6" transform="rotate(-30 20 50)" />
        <ellipse cx="27" cy="72" rx="8.2" ry="3.6" transform="rotate(-16 27 72)" />
        <ellipse cx="50" cy="30" rx="7" ry="3.2" transform="rotate(40 50 30)" />
        <ellipse cx="40" cy="50" rx="8" ry="3.6" transform="rotate(30 40 50)" />
        <ellipse cx="33" cy="72" rx="8.2" ry="3.6" transform="rotate(16 33 72)" />
      </g>
    </svg>
  );
}
