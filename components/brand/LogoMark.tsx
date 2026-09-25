import Image from "next/image";

type Props = { className?: string; inverted?: boolean };

// Icon-only bus mark from public/brand/mark.png, used in the compact mobile header.
export function LogoMark({ className = "h-8", inverted = false }: Props) {
  return (
    <span className={`inline-flex items-center ${inverted ? "rounded-xl bg-white px-2 py-1.5 shadow-soft" : ""}`}>
      <Image
        src="/brand/mark.png"
        alt="Popular Passenger Transport"
        width={318}
        height={120}
        priority
        className={`${className} w-auto`}
      />
    </span>
  );
}
