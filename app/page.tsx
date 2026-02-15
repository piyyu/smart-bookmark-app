import Link from "next/link";
import LandingGoogleButton from "@/components/LandingGoogleButton";
import ThemeToggle from "@/components/ThemeToggle";

export default function LandingPage() {
  return (
    <div className="font-sans bg-landing-background-light dark:bg-landing-background-dark text-landing-forest dark:text-white transition-colors duration-500 min-h-screen selection:bg-landing-primary h-full selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-landing-forest/5 bg-landing-background-light/80 backdrop-blur-xl dark:bg-landing-background-dark/80 dark:border-white/5 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-8 h-8 bg-landing-primary rounded-lg flex items-center justify-center transform group-hover:rotate-3 transition-transform duration-300 shadow-lg shadow-landing-primary/20">
              <span className="material-icons text-landing-forest text-xl">bookmark</span>
            </div>
            <span className="text-xl font-bold tracking-tight">Markit</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-landing-forest/60 dark:text-white/60">
            <a href="#features" className="hover:text-landing-primary transition-colors duration-200">Features</a>
            <a href="#preview" className="hover:text-landing-primary transition-colors duration-200">Preview</a>
            <a href="#philosophy" className="hover:text-landing-primary transition-colors duration-200">Philosophy</a>
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle className="text-landing-forest/50 dark:text-white/50 hover:text-landing-primary dark:hover:text-landing-primary hover:bg-landing-forest/5 dark:hover:bg-white/5" />
            <Link href="/login" className="flex items-center gap-2 bg-landing-forest text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-landing-forest/90 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 dark:bg-white dark:text-landing-forest dark:hover:bg-white/90 shadow-xl shadow-landing-forest/10">
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Login
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-36 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-landing-primary/10 border border-landing-primary/20 text-xs font-semibold text-landing-primary mb-8 dark:bg-landing-primary/10 dark:border-landing-primary/20 hover:bg-landing-primary/15 transition-colors duration-300 cursor-default tracking-wide uppercase">
            <span className="material-icons text-sm">auto_awesome</span>
            Save Smarter, Browse Better
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.08] mb-8 text-landing-forest dark:text-white">
            Your bookmarks, <br /> <span className="text-landing-primary italic">beautifully organized.</span>
          </h1>
          <p className="text-lg md:text-xl text-landing-forest/60 dark:text-white/50 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Stop losing links in the chaos of browser tabs. Markit gives you a clean, private space to save, organize, and rediscover the web pages that matter most.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <LandingGoogleButton className="w-full sm:w-auto bg-landing-primary hover:scale-[1.02] active:scale-[0.98] text-white px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 shadow-xl shadow-landing-primary/30 hover:shadow-2xl hover:shadow-landing-primary/40">
              Start Saving for Free <span className="material-icons ml-2 text-xl align-middle">arrow_forward</span>
            </LandingGoogleButton>
            <a href="#preview" className="w-full sm:w-auto text-center px-8 py-4 rounded-xl text-lg font-semibold border border-landing-forest/10 dark:border-white/10 text-landing-forest/70 dark:text-white/70 hover:bg-landing-forest/5 dark:hover:bg-white/5 transition-all duration-300">
              See How It Works
            </a>
          </div>
          <p className="mt-8 text-sm text-landing-forest/40 dark:text-white/30 flex items-center justify-center gap-2">
            <span className="material-icons text-sm text-landing-primary/60">check_circle</span>
            Free forever &middot; No credit card &middot; One-click Google sign in
          </p>
        </div>
      </header>

      {/* App Preview Mockup */}
      <section id="preview" className="px-6 py-16 max-w-7xl mx-auto perspective-1000">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-landing-primary/30 to-purple-500/30 rounded-[2rem] blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
          <div className="relative bg-white dark:bg-[#0A0A0A] border border-landing-forest/5 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden transform transition-transform duration-500 hover:scale-[1.002]">
            {/* Browser Bar */}
            <div className="h-10 border-b border-landing-forest/5 dark:border-white/5 bg-landing-forest/[0.03] dark:bg-white/5 flex items-center px-4 gap-2">
              <div className="flex gap-1.5 opacity-50">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="px-4 py-1 bg-landing-forest/5 dark:bg-white/5 rounded-md text-[10px] text-landing-forest/40 dark:text-white/30 font-mono">app.markit.io/dashboard</div>
              </div>
            </div>
            {/* Dashboard Mockup UI */}
            <div className="flex h-[500px] md:h-[600px] bg-landing-background-light dark:bg-landing-background-dark">
              <aside className="w-16 md:w-64 border-r border-landing-forest/5 dark:border-white/5 p-4 hidden sm:block bg-landing-background-light/50 dark:bg-landing-background-dark/50">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="h-9 bg-landing-forest/5 dark:bg-white/5 rounded-lg flex items-center px-3 text-landing-forest/90 dark:text-white/90 font-medium">
                      <span className="material-icons text-landing-primary text-sm mr-3">inbox</span>
                      <span className="text-sm">All Bookmarks</span>
                    </div>
                    {[
                      { icon: 'star_border', label: 'Favorites' },
                      { icon: 'schedule', label: 'Read Later' },
                      { icon: 'label', label: 'Tags' }
                    ].map((item, i) => (
                      <div key={i} className="h-9 hover:bg-landing-forest/5 dark:hover:bg-white/5 rounded-lg flex items-center px-3 transition-colors cursor-pointer group">
                        <span className="material-icons text-landing-forest/40 dark:text-white/40 text-sm mr-3 group-hover:text-landing-forest/60 dark:group-hover:text-white/60 transition-colors">{item.icon}</span>
                        <span className="text-sm text-landing-forest/60 dark:text-white/60 group-hover:text-landing-forest/80 dark:group-hover:text-white/80 transition-colors">{item.label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-landing-forest/5 dark:border-white/5">
                    <div className="text-[10px] font-bold text-landing-forest/40 dark:text-white/30 uppercase tracking-widest mb-3 px-3">Folders</div>
                    <div className="space-y-1">
                      {[
                        { color: 'bg-landing-primary', label: 'Design Inspiration', count: '12' },
                        { color: 'bg-blue-400', label: 'Tech Articles', count: '28' },
                        { color: 'bg-amber-400', label: 'Tutorials', count: '7' }
                      ].map((folder, i) => (
                        <div key={i} className="h-9 hover:bg-landing-forest/5 dark:hover:bg-white/5 rounded-lg flex items-center justify-between px-3 transition-colors cursor-pointer group">
                          <span className="flex items-center gap-3">
                            <span className={`w-2 h-2 rounded-full ${folder.color} ring-2 ${folder.color}/20`}></span>
                            <span className="text-sm text-landing-forest/60 dark:text-white/60 group-hover:text-landing-forest/80 dark:group-hover:text-white/80 transition-colors">{folder.label}</span>
                          </span>
                          <span className="text-[10px] text-landing-forest/30 dark:text-white/30">{folder.count}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </aside>
              <main className="flex-1 p-6 md:p-8 overflow-hidden bg-white/50 dark:bg-black/20">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-bold text-landing-forest dark:text-white tracking-tight">All Bookmarks</h2>
                  <div className="flex gap-2 p-1 bg-landing-forest/5 dark:bg-white/5 rounded-lg border border-landing-forest/5 dark:border-white/5">
                    <span className="material-icons text-landing-forest dark:text-white p-1 rounded bg-white dark:bg-white/10 shadow-sm">grid_view</span>
                    <span className="material-icons text-landing-forest/40 dark:text-white/40 p-1">list</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Mock Cards */}
                  {[
                    { icon: 'image', w1: 'w-3/4', w2: 'w-1/2' },
                    { icon: 'text_snippet', w1: 'w-full', w2: 'w-5/6', text: true },
                    { icon: 'article', w1: 'w-2/3', w2: 'w-1/2' }
                  ].map((card, i) => (
                    <div key={i} className="bg-white dark:bg-[#111] border border-landing-forest/5 dark:border-white/10 rounded-xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
                      {card.text ? (
                        <div className="p-5 h-full flex flex-col justify-between">
                          <div>
                            <div className={`h-4 ${card.w1} bg-landing-forest/10 dark:bg-white/10 rounded mb-3`}></div>
                            <div className={`h-3 ${card.w2} bg-landing-forest/5 dark:bg-white/5 rounded mb-2`}></div>
                            <div className="h-3 w-4/6 bg-landing-forest/5 dark:bg-white/5 rounded"></div>
                          </div>
                          <div className="mt-4 flex gap-2">
                            <div className="h-2 w-12 bg-landing-forest/5 dark:bg-white/5 rounded-full"></div>
                          </div>
                        </div>
                      ) : (
                        <>
                          <div className="h-40 bg-landing-forest/5 dark:bg-white/5 flex items-center justify-center text-landing-forest/10 dark:text-white/10 group-hover:text-landing-primary/50 transition-colors duration-300">
                            <span className="material-icons text-4xl">{card.icon}</span>
                          </div>
                          <div className="p-5">
                            <div className={`h-4 ${card.w1} bg-landing-forest/10 dark:bg-white/10 rounded mb-3 group-hover:bg-landing-forest/20 dark:group-hover:bg-white/20 transition-colors`}></div>
                            <div className={`h-3 ${card.w2} bg-landing-forest/5 dark:bg-white/5 rounded`}></div>
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </main>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="mb-20 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-landing-primary/10 border border-landing-primary/20 text-xs font-semibold text-landing-primary mb-6 tracking-wide uppercase">
            Why Markit
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-landing-forest dark:text-white">Built for focus, <br />not distraction.</h2>
          <p className="text-landing-forest/60 dark:text-white/50 text-lg leading-relaxed font-light">
            We stripped away the noise — no algorithmic feeds, no team inboxes, no &quot;smart&quot; suggestions that miss the point. Just a calm, private space for the things you actually care about.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: 'shield', title: 'Private by Default', desc: "Your bookmarks belong to you. We never track, sell, or analyze your data. Everything stays private, visible only to your account." },
            { icon: 'folder_open', title: 'Effortless Organization', desc: "Create folders with color-coded labels and custom tags. Build a system that mirrors the way you think — not someone else's template." },
            { icon: 'search', title: 'Lightning Fast Search', desc: "Find any bookmark in milliseconds. Full-text search across titles, URLs, and tags — zero latency, zero frustration." },
            { icon: 'sync', title: 'Real-Time Sync', desc: "Save a bookmark on your laptop, see it on your phone instantly. Your collection stays perfectly in sync across every device." },
            { icon: 'palette', title: 'Beautiful Interface', desc: "A thoughtfully designed workspace that makes browsing your bookmarks a pleasure, not a chore. Dark mode included." },
            { icon: 'verified_user', title: 'One-Click Sign In', desc: "No passwords to remember, no forms to fill. Sign in securely with your Google account and start saving in seconds." }
          ].map((feature, i) => (
            <div key={i} className="p-8 border border-landing-forest/10 dark:border-white/10 rounded-2xl bg-white/50 dark:bg-white/5 hover:bg-white hover:shadow-xl hover:-translate-y-1 dark:hover:bg-white/10 transition-all duration-300 group">
              <div className="w-12 h-12 bg-landing-forest/5 dark:bg-white/10 rounded-xl flex items-center justify-center mb-6 text-landing-forest dark:text-white group-hover:bg-landing-primary group-hover:text-white transition-colors duration-300">
                <span className="material-icons-outlined text-2xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-landing-forest dark:text-white">{feature.title}</h3>
              <p className="text-landing-forest/55 dark:text-white/50 leading-relaxed group-hover:text-landing-forest/75 dark:group-hover:text-white/70 transition-colors">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section id="philosophy" className="py-32 px-6 border-t border-landing-forest/5 dark:border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-landing-primary/10 border border-landing-primary/20 text-xs font-semibold text-landing-primary mb-6 tracking-wide uppercase">
              How It Works
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-landing-forest dark:text-white">Three steps to a<br /> clutter-free web.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { step: '01', title: 'Sign In Instantly', desc: 'Connect your Google account with a single click. No forms, no verification emails — you\'re in within seconds.', icon: 'login' },
              { step: '02', title: 'Save What Matters', desc: 'Drop any URL into Markit with a title. Organize into color-coded folders and add tags to build your personal knowledge base.', icon: 'bookmark_add' },
              { step: '03', title: 'Find It Later', desc: 'When you need that link again, search by title, URL, or tag. Your entire collection is searchable and always at your fingertips.', icon: 'manage_search' }
            ].map((step, i) => (
              <div key={i} className="text-center group">
                <div className="w-16 h-16 bg-landing-primary/10 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-landing-primary group-hover:text-white text-landing-primary transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-landing-primary/20">
                  <span className="material-icons-outlined text-3xl">{step.icon}</span>
                </div>
                <div className="text-[10px] font-bold text-landing-primary/60 uppercase tracking-[0.2em] mb-3">{step.step}</div>
                <h3 className="text-xl font-bold mb-3 text-landing-forest dark:text-white">{step.title}</h3>
                <p className="text-landing-forest/55 dark:text-white/50 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 bg-gradient-to-b from-transparent to-landing-forest/5 dark:to-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-serif italic mb-6 text-landing-forest dark:text-white leading-tight">&ldquo;Stop losing the links that inspire you.&rdquo;</h2>
          <p className="text-landing-forest/50 dark:text-white/40 text-lg mb-10 max-w-xl mx-auto">Join thousands of people who use Markit to save, organize, and rediscover their favorite corners of the internet.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-landing-forest/5 dark:border-white/5 bg-landing-background-light dark:bg-landing-background-dark">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
            <div className="w-6 h-6 bg-landing-primary rounded-md flex items-center justify-center">
              <span className="material-icons text-landing-forest text-sm">bookmark</span>
            </div>
            <span className="font-bold text-landing-forest dark:text-white tracking-tight">Markit</span>
            <span className="text-landing-forest/30 dark:text-white/30 text-sm">&copy; 2026</span>
          </div>

          <div className="flex gap-8 text-sm text-landing-forest/50 dark:text-white/50 font-medium">
            <a href="#" className="hover:text-landing-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-landing-primary transition-colors">Terms of Service</a>
            <a href="mailto:hello@markit.io" className="hover:text-landing-primary transition-colors">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
