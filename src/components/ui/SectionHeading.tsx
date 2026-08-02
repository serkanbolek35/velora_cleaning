import { cn } from "@/lib/utils";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
}) {
  return (
    <div className={cn("mb-12 md:mb-16", align === "center" ? "text-center mx-auto max-w-2xl" : "text-left")}>
      {eyebrow && (
        <p className="section-eyebrow text-gold text-xs md:text-sm font-semibold uppercase mb-3">
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-display text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight",
          light ? "text-ivory" : "text-ivory"
        )}
      >
        {title}
      </h2>
      <div className={cn("gold-divider w-20 h-px mt-5", align === "center" ? "mx-auto" : "")} />
      {description && (
        <p className="mt-5 text-graystone text-base md:text-lg leading-relaxed">{description}</p>
      )}
    </div>
  );
}
