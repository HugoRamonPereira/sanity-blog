import Link from "next/link";
import { ThemeToggler } from "./ThemeToggler";
import LogoIcon from "./icons/Logo";

export default function Navbar() {
  return (
    <nav className="w-full relative flex items-center justify-between max-w-6xl mx-auto px-4 py-5">
      <Link href="/" className="flex items-center gap-2 font-bold text-xl sm:text-2xl">
        <LogoIcon width={50} height={50} />
        Hugo Ramon&apos;s <span className="text-primary">Blog</span>
      </Link>
      <ThemeToggler />
    </nav>
  )
}