import './Tabs.css';

export interface TabItem {
  id: string;
  label: string;
}

export function PillTabs({
  items,
  active,
  onChange,
  dark = false,
}: {
  items: TabItem[];
  active: string;
  onChange: (id: string) => void;
  dark?: boolean;
}) {
  return (
    <div className="pill-tabs">
      {items.map((item) => (
        <button
          key={item.id}
          className={`pill-tab ${active === item.id ? 'pill-tab--active' : ''} ${dark ? 'pill-tab--dark' : ''}`}
          onClick={() => onChange(item.id)}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
