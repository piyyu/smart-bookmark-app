import AuthButton from "@/components/AuthButton";

export default function LoginPage() {
  return (
    <div className="font-sans bg-landing-background-light dark:bg-landing-background-dark text-landing-forest dark:text-white min-h-screen flex flex-col items-center justify-center p-6 selection:bg-landing-primary selection:text-white">
      {/* Background Glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-landing-primary/10 rounded-full blur-[120px] opacity-40"></div>
      </div>

      {/* Logo */}
      <div className="flex items-center gap-2 group cursor-pointer mb-12 relative z-10">
        <div className="w-10 h-10 bg-landing-primary rounded-lg flex items-center justify-center transform group-hover:rotate-3 transition-transform duration-300 shadow-lg shadow-landing-primary/20">
          <span className="material-icons text-landing-forest text-2xl">bookmark</span>
        </div>
        <span className="text-2xl font-bold tracking-tight">Markit</span>
      </div>

      {/* Login Card */}
      <div className="relative w-full max-w-sm z-10">
        <div className="absolute -inset-1 bg-gradient-to-r from-landing-primary/20 to-purple-500/20 rounded-[1.5rem] blur-2xl opacity-30"></div>
        <div className="relative bg-white dark:bg-[#0A0A0A] border border-landing-forest/5 dark:border-white/10 rounded-2xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold tracking-tighter text-landing-forest dark:text-white mb-2">
              Welcome to Markit
            </h1>
            <p className="text-landing-forest/50 dark:text-white/50 text-sm">
              Sign in to save and organize your bookmarks
            </p>
          </div>

          <div className="flex justify-center">
            <AuthButton />
          </div>

          <p className="mt-8 text-center text-xs text-landing-forest/30 dark:text-white/30">
            Free forever &middot; No credit card required
          </p>
        </div>
      </div>
    </div>
  );
}
