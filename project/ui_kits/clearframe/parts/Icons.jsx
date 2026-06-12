// Clearframe UI kit — shared icon set (Lucide-style, 1.6 stroke).
function Icon({ paths, size = 20, sw = 1.6, ...rest }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" {...rest}>{paths}</svg>
  );
}
const Icons = {
  Check: (p) => <Icon {...p} paths={<path d="M20 6 9 17l-5-5" />} />,
  Plus: (p) => <Icon {...p} paths={<path d="M12 5v14M5 12h14" />} />,
  ArrowRight: (p) => <Icon {...p} paths={<><path d="M5 12h14M13 6l6 6-6 6" /></>} />,
  Phone: (p) => <Icon {...p} paths={<path d="M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />} />,
  Menu: (p) => <Icon {...p} paths={<path d="M3 6h18M3 12h18M3 18h18" />} />,
  Star: (p) => <Icon {...p} fill="currentColor" sw="0" paths={<path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 17l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9Z" />} />,
  Zap: (p) => <Icon {...p} paths={<path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />} />,
  Shield: (p) => <Icon {...p} paths={<><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3Z" /><path d="m9 12 2 2 4-4" /></>} />,
  Layout: (p) => <Icon {...p} paths={<><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M9 9v11" /></>} />,
  Search: (p) => <Icon {...p} paths={<><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></>} />,
  Phone2: (p) => <Icon {...p} paths={<><rect x="7" y="3" width="10" height="18" rx="2" /><path d="M11 18h2" /></>} />,
  Clock: (p) => <Icon {...p} paths={<><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>} />,
  Pin: (p) => <Icon {...p} paths={<><path d="M12 21s7-5.5 7-11a7 7 0 0 0-14 0c0 5.5 7 11 7 11Z" /><circle cx="12" cy="10" r="2.5" /></>} />,
  Mail: (p) => <Icon {...p} paths={<><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>} />,
  Pen: (p) => <Icon {...p} paths={<><path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" /></>} />,
  Rocket: (p) => <Icon {...p} paths={<><path d="M5 15c-1.5 1.5-2 5-2 5s3.5-.5 5-2" /><path d="M14 4c4 0 6 2 6 6 0 5-5 9-9 11l-3-3C10 14 9 9 14 4Z" /><circle cx="14.5" cy="9.5" r="1.5" /></>} />,
};
APP.Icons = Icons;
