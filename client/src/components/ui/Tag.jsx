export default function Tag({ children }) {
  return (
    <span className="rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium transition hover:border-orange-500 hover:text-orange-500">
      {children}
    </span>
  );
}