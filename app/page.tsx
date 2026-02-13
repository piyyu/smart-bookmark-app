import Link from "next/link";
import LandingGoogleButton from "@/components/LandingGoogleButton";

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

          <div className="flex items-center gap-4">
            <LandingGoogleButton className="bg-landing-forest text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-landing-forest/90 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 dark:bg-white dark:text-landing-forest dark:hover:bg-white/90 shadow-xl shadow-landing-forest/10">
              Sign up with Google
            </LandingGoogleButton>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-landing-forest/5 border border-landing-forest/10 text-xs font-medium text-landing-forest/60 mb-8 dark:bg-white/5 dark:border-white/10 dark:text-white/60 hover:bg-landing-forest/10 dark:hover:bg-white/10 transition-colors duration-300 cursor-default">
            Simple. Private. Yours.
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] mb-8 text-landing-forest dark:text-white">
            A quiet corner for your <br /> <span className="text-landing-primary italic">digital thoughts.</span>
          </h1>
          <p className="text-lg md:text-xl text-landing-forest/70 dark:text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
            No teams. No AI. No social features. Just a clean, private archive for the articles, designs, and inspiration you want to keep for yourself.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <LandingGoogleButton className="w-full sm:w-auto bg-landing-primary hover:scale-[1.02] active:scale-[0.98] text-white px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 shadow-xl shadow-landing-primary/30 hover:shadow-2xl hover:shadow-landing-primary/40">
              Getting Started <span className="material-icons ml-2">arrow_forward</span>
            </LandingGoogleButton>
          </div>
          <p className="mt-6 text-sm text-landing-forest/40 dark:text-white/40">Free for personal use.</p>
        </div>
      </header>

      {/* App Preview Mockup */}
      <section className="px-6 py-12 max-w-7xl mx-auto perspective-1000">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-landing-primary/30 to-purple-500/30 rounded-[2rem] blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
          <div className="relative bg-white dark:bg-[#0A0A0A] border border-landing-forest/5 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden transform transition-transform duration-500 hover:scale-[1.002]">
            {/* Browser Bar */}
            <div className="h-10 border-b border-landing-forest/5 dark:border-white/5 bg-landing-forest/5 dark:bg-white/5 flex items-center px-4 gap-2">
              <div className="flex gap-1.5 opacity-50">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
              </div>
            </div>
            {/* Dashboard Mockup UI */}
            <div className="flex h-[500px] md:h-[600px] bg-landing-background-light dark:bg-landing-background-dark">
              <aside className="w-16 md:w-64 border-r border-landing-forest/5 dark:border-white/5 p-4 hidden sm:block bg-landing-background-light/50 dark:bg-landing-background-dark/50">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="h-9 bg-landing-forest/5 dark:bg-white/5 rounded-lg flex items-center px-3 text-landing-forest/90 dark:text-white/90 font-medium">
                      <span className="material-icons text-landing-forest/60 dark:text-white/60 text-sm mr-3">inbox</span>
                      <span className="text-sm">Inbox</span>
                    </div>
                    {['star_border', 'history'].map((icon, i) => (
                      <div key={i} className="h-9 hover:bg-landing-forest/5 dark:hover:bg-white/5 rounded-lg flex items-center px-3 transition-colors cursor-pointer group">
                        <span className="material-icons text-landing-forest/40 dark:text-white/40 text-sm mr-3 group-hover:text-landing-forest/60 dark:group-hover:text-white/60 transition-colors">{icon}</span>
                        <span className="text-sm text-landing-forest/60 dark:text-white/60 group-hover:text-landing-forest/80 dark:group-hover:text-white/80 transition-colors">{i === 0 ? 'Favorites' : 'Read Later'}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-landing-forest/5 dark:border-white/5">
                    <div className="text-[10px] font-bold text-landing-forest/40 dark:text-white/30 uppercase tracking-widest mb-3 px-3">Folders</div>
                    <div className="space-y-1">
                      <div className="h-9 hover:bg-landing-forest/5 dark:hover:bg-white/5 rounded-lg flex items-center px-3 transition-colors cursor-pointer group">
                        <span className="w-2 h-2 rounded-full bg-landing-primary mr-3 ring-2 ring-landing-primary/20"></span>
                        <span className="text-sm text-landing-forest/60 dark:text-white/60 group-hover:text-landing-forest/80 dark:group-hover:text-white/80 transition-colors">Design Inspiration</span>
                      </div>
                      <div className="h-9 hover:bg-landing-forest/5 dark:hover:bg-white/5 rounded-lg flex items-center px-3 transition-colors cursor-pointer group">
                        <span className="w-2 h-2 rounded-full bg-blue-400 mr-3 ring-2 ring-blue-400/20"></span>
                        <span className="text-sm text-landing-forest/60 dark:text-white/60 group-hover:text-landing-forest/80 dark:group-hover:text-white/80 transition-colors">Tech Articles</span>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
              <main className="flex-1 p-6 md:p-8 overflow-hidden bg-white/50 dark:bg-black/20">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-bold text-landing-forest dark:text-white tracking-tight">Inbox</h2>
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

      {/* Philosophy / Features Grid */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="mb-24 max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-landing-forest dark:text-white">Intentionally simple.</h2>
          <p className="text-landing-forest/60 dark:text-white/60 text-lg leading-relaxed font-light">
            We stripped away the noise. No algorithmic feeds, no team inboxes, no "smart" suggestions. Just a calm place for the things you value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: 'lock', title: 'Private by Default', desc: "Your bookmarks are yours. We don't mine your data, and your collection is visible only to you." },
            { icon: 'folder', title: 'Manual Organization', desc: "Organize at the speed of thought. Create folders and tags that make sense to your unique mental model." },
            { icon: 'bolt', title: 'Instant Search', desc: "Find anything in milliseconds. A powerful, no-nonsense search that respects your time." }
          ].map((feature, i) => (
            <div key={i} className="p-8 border border-landing-forest/10 dark:border-white/10 rounded-2xl bg-white/50 dark:bg-white/5 hover:bg-white hover:shadow-xl hover:-translate-y-1 dark:hover:bg-white/10 transition-all duration-300 group">
              <div className="w-12 h-12 bg-landing-forest/5 dark:bg-white/10 rounded-xl flex items-center justify-center mb-6 text-landing-forest dark:text-white group-hover:bg-landing-primary group-hover:text-white transition-colors duration-300">
                <span className="material-icons-outlined text-2xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-landing-forest dark:text-white">{feature.title}</h3>
              <p className="text-landing-forest/60 dark:text-white/60 leading-relaxed group-hover:text-landing-forest/80 dark:group-hover:text-white/80 transition-colors">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Final minimalist CTA */}
      <section className="py-32 px-6 border-t border-landing-forest/5 dark:border-white/5 bg-gradient-to-b from-transparent to-landing-forest/5 dark:to-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif italic mb-12 text-landing-forest dark:text-white">"The most efficient way to organize your mind."</h2>
          <LandingGoogleButton className="bg-landing-forest text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-landing-forest/90 hover:scale-105 transition-all duration-300 dark:bg-white dark:text-landing-forest shadow-2xl shadow-landing-forest/20">
            Sign up with Google
          </LandingGoogleButton>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-landing-forest/5 dark:border-white/5 bg-landing-background-light dark:bg-landing-background-dark">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
            <span className="font-bold text-landing-forest dark:text-white tracking-tight">Markit</span>
            <span className="text-landing-forest/40 dark:text-white/40 text-sm">© 2026</span>
          </div>

          <div className="flex gap-8 text-sm text-landing-forest/60 dark:text-white/60 font-medium">
            <a href="#" className="hover:text-landing-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-landing-primary transition-colors">Terms</a>
            <a href="mailto:hello@markit.io" className="hover:text-landing-primary transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
