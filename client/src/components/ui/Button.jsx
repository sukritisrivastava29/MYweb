import { Link } from "react-router-dom";

export default function Button({
  children,
  to,
  href,
  variant = "primary",
}) {
  const classes =
    variant === "primary"
      ? "inline-flex items-center rounded-full bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
      : "inline-flex items-center rounded-full border border-neutral-300 px-6 py-3 font-semibold text-neutral-900 transition hover:border-orange-500 hover:text-orange-500";

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes}>
      {children}
    </button>
  );
}