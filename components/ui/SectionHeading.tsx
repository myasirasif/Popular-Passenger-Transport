type Props = {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  as?: "h1" | "h2";
  light?: boolean;
  className?: string;
};

export function SectionHeading({ eyebrow, title, intro, as: Tag = "h2", light, className = "" }: Props) {
  return (
    <div className={`max-w-2xl ${className}`}>
      <p className={`eyebrow ${light ? "text-sky-200! before:bg-signal!" : ""}`}>{eyebrow}</p>
      <Tag
        className={`mt-4 text-3xl leading-tight font-extrabold sm:text-4xl lg:text-[2.75rem] ${light ? "text-white!" : ""}`}
      >
        {title}
      </Tag>
      {intro && (
        <p className={`mt-5 text-base leading-relaxed sm:text-lg ${light ? "text-white/75" : "text-slate"}`}>
          {intro}
        </p>
      )}
    </div>
  );
}
