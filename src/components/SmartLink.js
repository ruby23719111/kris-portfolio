import Link from "next/link";
import Icon from "./Icon";

// Internal links use next/link; external links open in a new tab and say so.
export default function SmartLink({ href, children, className, ...props }) {
  const external = /^https?:\/\//.test(href);
  if (!external) {
    return (
      <Link href={href} className={className} {...props}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={className} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
      <Icon name="external" size={13} className="link-icon" />
      <span className="visually-hidden"> (opens in a new tab)</span>
    </a>
  );
}
