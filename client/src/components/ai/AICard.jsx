import { ArrowUpRight } from "lucide-react";

export default function AICard({
  number,
  title,
  description,
  technologies,
}) {
  return (
    <div className="group border-t border-neutral-300 pt-6">
      <div className="flex items-start justify-between">
        <span className="text-sm text-neutral-400">
          {number}
        </span>

        <ArrowUpRight
          size={20}
          className="text-neutral-400 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
        />
      </div>

      <h3 className="mt-8 text-2xl font-medium tracking-tight text-neutral-900">
        {title}
      </h3>

      <p className="mt-4 max-w-md text-base leading-7 text-neutral-600">
        {description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full border border-neutral-300 px-3 py-1 text-xs text-neutral-600"
          >
            {technology}
          </span>
        ))}
      </div>
    </div>
  );
}