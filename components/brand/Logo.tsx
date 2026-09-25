import Image from "next/image";

type Props = { className?: string; inverted?: boolean };

// Full lockup from public/brand/logo.png. On dark backgrounds it sits on a white chip,
// since the navy wordmark has no light variant.
export function Logo({ className = "h-11", inverted = false }: Props) {
  return (
    <span className={`inline-flex items-center ${inverted ? "rounded-xl bg-white px-3 py-1.5 shadow-soft" : ""}`}>
      <Image
        src="/brand/logo.png"
        alt="Popular Passenger Transport L.L.C"
        width={989}
        height={160}
        priority
        className={`${className} w-auto`}
      />
    </span>
  );
}
