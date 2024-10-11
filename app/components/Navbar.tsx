import Link from "next/link";
import { ThemeToggler } from "./ThemeToggler";

export default function Navbar() {
  return (
    <nav className="w-full relative flex items-center justify-between max-w-6xl mx-auto px-4 py-5">
      <Link href="/" className="font-bold text-2xl">
        Hugo Ramon&apos;s <span className="text-primary">Blog</span>
      </Link>
      <ThemeToggler />
    </nav>
  )
}