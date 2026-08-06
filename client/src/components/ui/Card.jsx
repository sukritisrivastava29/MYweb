export default function Card({
  children,
  className = "",
  hover = true,
}) {
  return (
    <div
      className={`
        rounded-3xl
        border border-neutral-200
        bg-white
        shadow-sm
        overflow-hidden
        transition-all
        duration-300
        ${
          hover
            ? "hover:-translate-y-1 hover:shadow-xl hover:border-orange-200"
            : ""
        }
        ${className}
      `}
    >
      {children}
    </div>
  );
}