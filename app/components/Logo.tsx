export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <rect
        x="2"
        y="2"
        width="20"
        height="20"
        stroke="currentColor"
        strokeWidth="2"
      />
      <rect x="6" y="6" width="3" height="3" fill="currentColor" />
      <rect
        x="11"
        y="11"
        width="3"
        height="3"
        fill="currentColor"
        opacity="0.65"
      />
      <rect
        x="16"
        y="16"
        width="3"
        height="3"
        fill="currentColor"
        opacity="0.35"
      />
    </svg>
  );
}
