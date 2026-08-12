type IconProps = { className?: string };

export function WhatsappIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.95 1.16-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.79-1.67-2.09-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47 0 1.46 1.06 2.87 1.21 3.07.15.2 2.09 3.2 5.07 4.48.71.3 1.26.48 1.69.62.71.22 1.36.19 1.87.12.57-.09 1.75-.71 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z" />
      <path d="M12.04 2C6.6 2 2.18 6.4 2.18 11.82c0 1.73.45 3.42 1.31 4.91L2 22l5.4-1.42a9.9 9.9 0 0 0 4.63 1.18h.01c5.44 0 9.86-4.4 9.86-9.82C21.9 6.4 17.48 2 12.04 2Zm0 17.96h-.01a8.2 8.2 0 0 1-4.16-1.14l-.3-.18-3.1.81.83-3.03-.19-.31a8.13 8.13 0 0 1-1.25-4.29c0-4.5 3.68-8.16 8.19-8.16 2.19 0 4.24.85 5.79 2.39a8.09 8.09 0 0 1 2.4 5.77c0 4.5-3.68 8.14-8.2 8.14Z" />
    </svg>
  );
}

export function ShieldIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 3l7 2.5v5.7c0 4.2-2.9 8-7 9.3-4.1-1.3-7-5.1-7-9.3V5.5L12 3Z" />
      <path d="M9.2 12.2l2 2 3.6-3.9" />
    </svg>
  );
}

export function DropletIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 3.5s5.5 5.6 5.5 9.5a5.5 5.5 0 1 1-11 0C6.5 9.1 12 3.5 12 3.5Z" />
    </svg>
  );
}

export function DownloadIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 4v10m0 0 3.5-3.5M12 14l-3.5-3.5" />
      <path d="M5 17.5v1.2A1.3 1.3 0 0 0 6.3 20h11.4a1.3 1.3 0 0 0 1.3-1.3v-1.2" />
    </svg>
  );
}

export function DistribuidorIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
      className={className}
    >
      <rect x="18" y="6" width="12" height="10" rx="1.5" />
      <path d="M24 16v8M10 32v-4h28v4M10 28h28" />
      <circle cx="10" cy="37" r="5" />
      <circle cx="24" cy="37" r="5" />
      <circle cx="38" cy="37" r="5" />
    </svg>
  );
}

export function EmpresaIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
      className={className}
    >
      <circle cx="12" cy="12" r="4" />
      <circle cx="24" cy="9" r="4" />
      <circle cx="36" cy="12" r="4" />
      <path d="M4 42V26a8 8 0 0 1 16 0v16M16 42V23a8 8 0 0 1 16 0v19M28 42V26a8 8 0 0 1 16 0v16" />
    </svg>
  );
}

export function ParticularIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
      className={className}
    >
      <circle cx="24" cy="10" r="5" />
      <path d="M14 42V24a10 10 0 0 1 20 0v18M24 30v12" />
    </svg>
  );
}
