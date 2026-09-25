import Image from "next/image";

type Props = {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
  children?: React.ReactNode;
};

// Dark hero used on inner pages so the transparent header reads correctly.
export function PageHero({ eyebrow, title, intro, image, imageAlt, children }: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-brand-deep pt-36 pb-20 sm:pt-44 sm:pb-28">
      <Image src={image} alt={imageAlt} fill priority sizes="100vw" className="-z-20 object-cover opacity-40" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-deep via-brand-deep/90 to-brand-deep/40" />
      <div className="container-x grid gap-10 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8">
          <p className="eyebrow text-sky-200! before:bg-signal!">{eyebrow}</p>
          <h1 className="mt-5 text-4xl leading-[1.05] font-extrabold text-white! sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">{intro}</p>
        </div>
        {children && <div className="lg:col-span-4">{children}</div>}
      </div>
    </section>
  );
}
