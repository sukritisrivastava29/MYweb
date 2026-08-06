export default function SectionTitle({
  eyebrow,
  title,
  align = "left",
}) {
  return (
    <div
      className={`mb-24 ${
        align === "center" ? "text-center" : ""
      }`}
    >
      <p className="mb-4 uppercase tracking-[6px] text-sm text-orange-500">
        {eyebrow}
      </p>

      <h2 className="text-5xl font-black leading-tight text-neutral-900 lg:text-7xl">
        {title}
      </h2>

      <div
        className={`mt-8 h-[2px] w-24 bg-orange-500 ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </div>
  );
}