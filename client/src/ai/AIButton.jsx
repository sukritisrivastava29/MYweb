export default function AIButton({ onClick, isOpen = false }) {
  if (isOpen) return null;

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Open AI assistant"
      className="group fixed bottom-6 right-6 z-[90] flex items-center gap-2 rounded-full border border-neutral-200 bg-[#FAFAF8] px-4 py-3 text-sm font-medium text-neutral-900 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-neutral-400 hover:shadow-xl"
    >
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900 text-xs text-white transition-transform duration-300 group-hover:rotate-12">
        ✦
      </span>

      <span>Ask AI</span>
    </button>
  );
}