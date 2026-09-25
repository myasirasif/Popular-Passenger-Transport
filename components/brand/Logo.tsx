import { LogoMark } from "./LogoMark";

type Props = { className?: string; inverted?: boolean };

// Full lockup: mark + "POPULAR" wordmark with the legal name beneath.
export function Logo({ className = "h-11", inverted = false }: Props) {
  const main = inverted ? "#FFFFFF" : "#072F57";
  const sub = inverted ? "rgba(255,255,255,0.75)" : "#0B4F8F";
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-full w-auto shrink-0" inverted={inverted} />
      <svg
        viewBox="0 0 170 44"
        className="h-full w-auto"
        role="img"
        aria-label="Popular Passenger Transport L.L.C"
      >
        <text
          x="0"
          y="25"
          fill={main}
          style={{ font: "800 27px var(--font-heading), sans-serif", letterSpacing: "0.04em" }}
        >
          POPULAR
        </text>
        <text
          x="1"
          y="39"
          fill={sub}
          style={{ font: "600 8.4px var(--font-heading), sans-serif", letterSpacing: "0.14em" }}
        >
          PASSENGER TRANSPORT L.L.C
        </text>
      </svg>
    </span>
  );
}
