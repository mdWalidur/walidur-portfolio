interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <div className="mb-20">
      {subtitle && (
        <p className="mb-3 uppercase tracking-[0.35em] text-sm text-emerald-400">
          {subtitle}
        </p>
      )}

      <h2 className="text-5xl md:text-6xl font-bold leading-tight">
        {title}
      </h2>
    </div>
  );
}