export function VerifiedBadge() {
  return (
    <span className="verified" title="Trade licence verified">
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path
          d="M8 1l1.8 1.4 2.3-.3.5 2.2 2 1.1-1 2 .4 2.3-2.1.7-1.4 1.9L8 11l-2.4 1.3-1.4-1.9-2.1-.7.4-2.3-1-2 2-1.1.5-2.2 2.3.3z"
          fill="#1a8753"
        />
        <path
          d="M5.5 8L7 9.5 10.5 6"
          stroke="#fff"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      Verified
    </span>
  );
}
