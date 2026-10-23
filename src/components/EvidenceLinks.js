import Icon from "./Icon";
export default function EvidenceLinks({ links, detailed = false }) {
  if (!links?.length) return null;
  return (
    <div className={detailed ? "evidence-links" : "inline-evidence"}>
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={detailed ? "evidence-link" : "text-link"}
        >
          {detailed && (
            <span className="evidence-icon">
              <Icon
                name={link.type.startsWith("Video") ? "play" : "external"}
              />
            </span>
          )}
          <span>
            {link.label}
            {detailed && <small>{link.type} · opens in a new tab</small>}
          </span>
          <Icon name="external" size={18} />
        </a>
      ))}
    </div>
  );
}
