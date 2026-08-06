export default function Badge({ children }) {
  return (
    <span className="inline-flex rounded-full bg-orange-100 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-orange-600">
      {children}
    </span>
  );
}