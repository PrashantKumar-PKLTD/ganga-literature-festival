const SOCIALS = [
  {
    key: "facebook",
    label: "Facebook",
    className: "guest-social-link--facebook",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14 8.3h2.1V5.1c-.4-.1-1.6-.2-3-.2-3 0-5 1.8-5 5.2V13H4.8v3.6h3.3V24h4v-7.4h3.2l.5-3.6h-3.7v-2.5c0-1 .3-2.2 1.9-2.2Z" />
      </svg>
    ),
  },
  {
    key: "x",
    label: "X",
    className: "guest-social-link--x",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14.4 10.2 22.9 0h-2l-7.4 8.8L7.6 0H.8l8.9 13.2L.8 24h2l7.8-9.4 6.3 9.4h6.8l-9.3-13.8Zm-2.8 3.3-.9-1.3L3.5 1.6h3.2l5.8 8.6.9 1.3 7.6 11h-3.2l-6.2-9Z" />
      </svg>
    ),
  },
  {
    key: "instagram",
    label: "Instagram",
    className: "guest-social-link--instagram",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7.2 2h9.6A5.2 5.2 0 0 1 22 7.2v9.6a5.2 5.2 0 0 1-5.2 5.2H7.2A5.2 5.2 0 0 1 2 16.8V7.2A5.2 5.2 0 0 1 7.2 2Zm0 1.8a3.4 3.4 0 0 0-3.4 3.4v9.6a3.4 3.4 0 0 0 3.4 3.4h9.6a3.4 3.4 0 0 0 3.4-3.4V7.2a3.4 3.4 0 0 0-3.4-3.4H7.2Zm4.8 3.7a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 1.8a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Zm5-2.8a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z" />
      </svg>
    ),
  },
];

export default function GuestSocialLinks({ social, name }) {
  return (
    <div className="guest-social-links" aria-label={`${name} social media links`}>
      {SOCIALS.map((item) => {
        const href = social?.[item.key];
        const className = `guest-social-link ${item.className}${href ? "" : " guest-social-link--disabled"}`;

        if (!href) {
          return (
            <span
              key={item.key}
              aria-label={`${item.label} link unavailable for ${name}`}
              className={className}
              role="img"
            >
              {item.icon}
            </span>
          );
        }

        return (
          <a
            key={item.key}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={`${name} on ${item.label}`}
            className={className}
          >
            {item.icon}
          </a>
        );
      })}
    </div>
  );
}
