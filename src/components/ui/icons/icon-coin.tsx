type IconProps = {
  className?: string;
};

/**
 * Ícone de moeda — usado no card "Contribua com a causa".
 */
export function IconCoin({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v12" />
      <path d="M15 9.5a3 3 0 0 0-3-1.5c-1.5 0-3 .8-3 2.3 0 1.5 1.5 2.2 3 2.7 1.5.5 3 1.2 3 2.7 0 1.5-1.5 2.3-3 2.3a3 3 0 0 1-3-1.5" />
    </svg>
  );
}
