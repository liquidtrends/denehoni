import Link from "next/link";

export default function Logo({ className = "" }) {
  return (
    <Link href="/" aria-label="Go to homepage">
      <img
        src="/wordmark.svg"
        alt="Dene Honi logo"
        className={`h-12 w-auto cursor-pointer transition-transform hover:scale-105 ${className}`}
      />
    </Link>
  );
}
