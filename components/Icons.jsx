function Icon({ paths, size = 20, sw = 1.8, fill = "none", ...rest }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      stroke="currentColor"
      strokeWidth={sw}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      {paths}
    </svg>
  );
}

export function Check({ size = 24 }) {
  return <Icon size={size} paths={<path d="M20 6 9 17l-5-5" />} />;
}

export function Mail({ size = 24 }) {
  return (
    <Icon
      size={size}
      paths={
        <>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </>
      }
    />
  );
}

export function Phone({ size = 24 }) {
  return (
    <Icon
      size={size}
      paths={
        <path d="M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
      }
    />
  );
}

export function Pin({ size = 24 }) {
  return (
    <Icon
      size={size}
      paths={
        <>
          <path d="M12 21s7-5.5 7-11a7 7 0 0 0-14 0c0 5.5 7 11 7 11Z" />
          <circle cx="12" cy="10" r="2.5" />
        </>
      }
    />
  );
}

export function Clock({ size = 24 }) {
  return (
    <Icon
      size={size}
      paths={
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </>
      }
    />
  );
}

export function Zap({ size = 24 }) {
  return <Icon size={size} paths={<path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />} />;
}

export function Shield({ size = 24 }) {
  return (
    <Icon
      size={size}
      paths={
        <>
          <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3Z" />
          <path d="m9 12 2 2 4-4" />
        </>
      }
    />
  );
}

export function Layout({ size = 24 }) {
  return (
    <Icon
      size={size}
      paths={
        <>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M3 9h18M9 9v11" />
        </>
      }
    />
  );
}

export function Plus({ size = 24 }) {
  return <Icon size={size} paths={<path d="M12 5v14M5 12h14" />} />;
}

export function ArrowRight({ size = 24 }) {
  return (
    <Icon
      size={size}
      paths={
        <>
          <path d="M5 12h14M13 6l6 6-6 6" />
        </>
      }
    />
  );
}

const Icons = { Check, Mail, Phone, Pin, Clock, Zap, Shield, Layout, Plus, ArrowRight };
export default Icons;
