import Link from "next/link";

export default function Logo({ className = "" }) {
  return (
    <img src="/wordmark.svg" alt="Your Brand Logo" className="h-12 w-auto" />
  );
}
