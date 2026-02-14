import HeaderAuth from "./HeaderAuth";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-landing-forest/5 bg-landing-background-light/80 backdrop-blur-xl dark:bg-landing-background-dark/80 dark:border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 bg-landing-primary rounded-lg flex items-center justify-center transform group-hover:rotate-3 transition-transform duration-300 shadow-lg shadow-landing-primary/20">
            <span className="material-icons text-landing-forest text-xl">bookmark</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-landing-forest dark:text-white">Markit</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-landing-forest/60 dark:text-white/60">
          <Link href="/dashboard" className="hover:text-landing-primary transition-colors">
            Dashboard
          </Link>
          <Link href="/pricing" className="hover:text-landing-primary transition-colors">
            Pricing
          </Link>
          <Link href="/about" className="hover:text-landing-primary transition-colors">
            About
          </Link>
        </nav>
        <HeaderAuth />
      </div>
    </header>
  );
}
