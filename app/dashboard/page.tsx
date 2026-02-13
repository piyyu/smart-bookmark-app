import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="font-sans bg-dash-main-bg text-dash-text-main min-h-screen flex overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 border-r border-dash-sidebar-bg/10 flex-shrink-0 flex flex-col bg-dash-sidebar-bg text-dash-sidebar-text h-full">
        <div className="p-6 flex items-center gap-3">
          <div className="w-8 h-8 bg-dash-primary rounded-lg flex items-center justify-center">
            <span className="material-icons-outlined text-white text-lg">description</span>
          </div>
          <h1 className="font-bold text-lg tracking-tight text-white">Notebooks</h1>
        </div>
        <nav className="flex-1 px-4 py-2 space-y-1 overflow-y-auto sidebar-scrollbar">
          <div className="mb-8">
            <p className="px-3 mb-2 text-[10px] font-bold text-dash-sidebar-text/50 uppercase tracking-[0.1em]">Navigation</p>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded bg-dash-sidebar-active text-white">
              <span className="material-symbols-outlined text-[20px] text-dash-primary">grid_view</span>
              All Notes
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded hover:bg-dash-sidebar-active/50 transition-all">
              <span className="material-symbols-outlined text-[20px]">schedule</span>
              Recent
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded hover:bg-dash-sidebar-active/50 transition-all">
              <span className="material-symbols-outlined text-[20px]">star</span>
              Shortcuts
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded hover:bg-dash-sidebar-active/50 transition-all">
              <span className="material-symbols-outlined text-[20px]">delete</span>
              Trash
            </a>
          </div>
          <div className="mb-8">
            <div className="flex items-center justify-between px-3 mb-2">
              <p className="text-[10px] font-bold text-dash-sidebar-text/50 uppercase tracking-[0.1em]">Notebooks</p>
              <button className="text-dash-sidebar-text/50 hover:text-white">
                <span className="material-icons-outlined text-sm">add</span>
              </button>
            </div>
            <a href="#" className="flex items-center justify-between px-3 py-1.5 text-sm font-medium rounded hover:bg-dash-sidebar-active/50 transition-all">
              <span className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-dash-primary"></span>
                Product Design
              </span>
              <span className="text-xs opacity-40">12</span>
            </a>
            <a href="#" className="flex items-center justify-between px-3 py-1.5 text-sm font-medium rounded hover:bg-dash-sidebar-active/50 transition-all">
              <span className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                Development
              </span>
              <span className="text-xs opacity-40">45</span>
            </a>
            <a href="#" className="flex items-center justify-between px-3 py-1.5 text-sm font-medium rounded hover:bg-dash-sidebar-active/50 transition-all">
              <span className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-dash-primary/40"></span>
                Research
              </span>
              <span className="text-xs opacity-40">8</span>
            </a>
          </div>
          <div className="mb-8">
            <p className="px-3 mb-2 text-[10px] font-bold text-dash-sidebar-text/50 uppercase tracking-[0.1em]">Tags</p>
            <div className="flex flex-wrap gap-2 px-3">
              <span className="px-2 py-0.5 bg-dash-sidebar-active text-[10px] font-medium rounded border border-white/5 text-dash-sidebar-text">#inspiration</span>
              <span className="px-2 py-0.5 bg-dash-sidebar-active text-[10px] font-medium rounded border border-white/5 text-dash-sidebar-text">#react</span>
            </div>
          </div>
        </nav>
        <div className="p-4 border-t border-white/5 bg-dash-sidebar-active/20">
          <div className="flex items-center gap-3 p-2 rounded hover:bg-dash-sidebar-active transition-all cursor-pointer">
            <img className="w-8 h-8 rounded-full object-cover" data-alt="User profile avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcLvfWw3La4mgPzewwIAgEMoxmDyyD4Awpupn0-3vH8PcKk_LKy98rZZ-vAi0XsbDp2EQm2Qi9vyShEJPpOP7Vv9TrPbVnsrc8pO14LjUNpnhElvNLMm_qdEuVQ_oEK_MfK3RtVB-dF5D3hRrp9z9tFMyDYh6ZnFkPuVaETf5kU5sVgOjBvcNZDbw_I66XDB7HR2tyl5VaZZpwRYGLnqaOXllpoe2C3ou2sY9d4v8843DOuPaJ1g3yxrClMLdz0rsu4yYaRhM6hQA" />
            <div className="flex-1 overflow-hidden">
              <p className="text-xs font-semibold text-white truncate">Alex Rivera</p>
              <p className="text-[10px] text-dash-sidebar-text/60 truncate">Premium Plan</p>
            </div>
            <span className="material-icons-outlined text-dash-sidebar-text/40 text-sm">settings</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col bg-dash-main-bg overflow-hidden h-full">
        <header className="h-16 border-b border-dash-border-subtle bg-white/50 backdrop-blur-sm flex items-center justify-between px-8 z-10">
          <div className="relative w-full max-w-xl group">
            <span className="material-symbols-outlined absolute left-0 top-1/2 -translate-y-1/2 text-dash-text-muted text-xl transition-colors">search</span>
            <input type="text" placeholder="Search in all notes..." className="w-full pl-8 pr-12 py-2 bg-transparent border-none rounded text-sm focus:ring-0 placeholder:text-dash-text-muted/50 outline-none" />
            <kbd className="absolute right-0 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-1 px-1.5 py-0.5 border border-dash-border-subtle rounded text-[9px] font-sans text-dash-text-muted bg-white">
              ⌘ K
            </kbd>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 bg-dash-primary text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-dash-primary-hover transition-all shadow-sm active:scale-95">
              <span className="material-icons-outlined text-sm">add</span>
              New Note
            </button>
            <div className="h-6 w-[1px] bg-dash-border-subtle"></div>
            <button className="p-2 text-dash-text-muted hover:text-dash-primary transition-colors">
              <span className="material-symbols-outlined text-[22px]">notifications</span>
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-dash-text-main">All Bookmarks</h2>
                <p className="text-sm text-dash-text-muted mt-1">Organized by date created</p>
              </div>
              <div className="flex items-center gap-1.5 bg-white p-1 rounded-lg border border-dash-border-subtle">
                <button className="p-1.5 bg-dash-main-bg border border-dash-border-subtle rounded text-dash-primary">
                  <span className="material-symbols-outlined text-[18px]">grid_view</span>
                </button>
                <button className="p-1.5 text-dash-text-muted hover:text-dash-text-main transition-colors">
                  <span className="material-symbols-outlined text-[18px]">view_list</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pb-8">
              {/* Card 1 */}
              <div className="group bg-white border border-dash-border-subtle rounded-xl overflow-hidden card-hover-effect shadow-sm">
                <div className="aspect-[16/10] relative overflow-hidden bg-[#F1EFEC] border-b border-dash-border-subtle">
                  <img className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-110" data-alt="Sleek dark mode software landing page" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgg8ecwFePl4oglYH5P63NYyxwnDZsgBWruhjt-LMK73-S9Vu1NlQS0sFLkoE9u3lf8tftgd0GKrZUT60azgMB7DI9BEHe5Q2es8GuAJGehMTryNbDnXD7FQuo29LZEg75pHRmfkQd3ibF-CHdx3jyNhVonD8qer7UYzHZg-HOW8jLjuFk0V7HDTbZOVAE_kcv6KJ4smuzJ_XTCpWw4VGw4jyNVggLCHfuJsUBuz6T5ArhS7Ms9qKENUeWQP-3TPvo8CDCqrOLXEQ" />
                  <div className="absolute inset-0 bg-dash-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 backdrop-blur-[1px]">
                    <button className="w-9 h-9 rounded-full border border-dash-border-subtle bg-white text-dash-text-main flex items-center justify-center hover:text-dash-primary transition-colors shadow-lg">
                      <span className="material-symbols-outlined text-[18px]">star</span>
                    </button>
                    <button className="w-9 h-9 rounded-full border border-dash-border-subtle bg-white text-dash-text-main flex items-center justify-center hover:text-dash-primary transition-colors shadow-lg">
                      <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                    </button>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <img className="w-4 h-4 rounded-sm border border-dash-border-subtle" data-alt="Minimalist circular tech logo icon" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-29tJ4jOVuYiy_ndVXg-xF-WfL0vs0NI4jpc5majBETt0rNZZmEvuQEtxIoxrt68rCff-yD1wGEvLlkyuwlIwoYo7JgKSOKMBiC3DKw54h7yq-G5KrrQVz2C7E8b5FbMO2qxkkWUm7OHUP6DG-Z1iZOikd2ALOiQIAhFY4U7UKUCQP9DYyS7ZaBHlA1dFQPm9ni9M2tgdGuCJ3CJvkjlxfK0C_lBabmV99O36EOPGMrU-pVLNgm8F_grnhkbL1EUNZCVTQhNTbxE" />
                    <span className="text-[10px] font-bold text-dash-primary uppercase tracking-wider">framer.com</span>
                  </div>
                  <h3 className="font-bold text-base text-dash-text-main leading-snug group-hover:text-dash-primary transition-colors">Framer Motion Documentation</h3>
                  <p className="mt-2 text-xs text-dash-text-muted line-clamp-2 leading-relaxed">
                    A production-ready motion library for React. Utilize the power of CSS animations with the simplicity of JavaScript.
                  </p>
                  <div className="mt-4 pt-4 border-t border-dash-border-subtle flex items-center justify-between">
                    <span className="text-[10px] text-dash-text-muted">Today at 2:45 PM</span>
                    <span className="material-symbols-outlined text-[14px] text-dash-text-muted">attachment</span>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="group bg-white border border-dash-border-subtle rounded-xl overflow-hidden card-hover-effect shadow-sm">
                <div className="aspect-[16/10] relative overflow-hidden bg-[#F1EFEC] border-b border-dash-border-subtle">
                  <img className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-110" data-alt="Modern code editor" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZFDHNgG3dkdfm2WGjgDZ923YN0l-baoz7pb3iUer-opmBEmhtemRT4qsAltnWfk4Rv7aBakDD5BhQCaLDsTl4Okbia0s1Dkqp0YDedNO45Bgz2_UQ19JoXN-GbSZKdny_ISUfW9M6EnsDoUARP0Za5441D4wTWpDbz4l-mn4TY1KlJDPU31AQ1yAdP5RTfC7nU0T__hbVd1dCaoAq7_YURdPQwK5JNRxsaDIFJDdgD9fOO-4vG37irmPtbbBHmhvH3nGrM3oguQc" />
                  <div className="absolute inset-0 bg-dash-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 backdrop-blur-[1px]">
                    <button className="w-9 h-9 rounded-full border border-dash-border-subtle bg-white text-dash-text-main flex items-center justify-center hover:text-dash-primary transition-colors shadow-lg">
                      <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                    </button>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <img className="w-4 h-4 rounded-sm border border-dash-border-subtle" data-alt="Stylized blue sphere logo icon" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8I1QkIrgBBORPmz1B8A26pgOdHaZLcyDCAQVAQooHDNTrCgxNz_U4DHdukPHIW79C9rKjYKzV9FexowQMMwYMeJ41sTMZPAqOEVGcuuTIfEh9DVIf5n_GMlIHiX36sEs1cL5zA5QD7np0yEMlheRTUJa6oxKOuslhnPSyydqNABFNpiXfjqbrXKU09MgxkrSB-bdWseBBm7d10RV_HBR1B5CGDovwUue2rO8keQj3Ywe3b92YUuTjbDFb52L9yA4aemdNxziHnv0" />
                    <span className="text-[10px] font-bold text-dash-primary uppercase tracking-wider">github.com</span>
                  </div>
                  <h3 className="font-bold text-base text-dash-text-main leading-snug group-hover:text-dash-primary transition-colors">Next.js 14 Templates</h3>
                  <p className="mt-2 text-xs text-dash-text-muted line-clamp-2 leading-relaxed">
                    Curated list of high-performance Next.js starters for SaaS, E-commerce, and personal blogs.
                  </p>
                  <div className="mt-4 pt-4 border-t border-dash-border-subtle flex items-center justify-between">
                    <span className="text-[10px] text-dash-text-muted">Yesterday</span>
                    <span className="material-symbols-outlined text-[14px] text-dash-text-muted">push_pin</span>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="group bg-white border border-dash-border-subtle rounded-xl overflow-hidden card-hover-effect shadow-sm">
                <div className="aspect-[16/10] relative overflow-hidden bg-[#F1EFEC] border-b border-dash-border-subtle">
                  <img className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-110" data-alt="Minimalist abstract design" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBp5HkXCMEJWPx9R38wz8Ezlr5M8JB1plFANkN3WSBxczQfN4Kgvhc7ih5ktMJNDir7EfMjjPQz0jInzitXdllskDKi-JqZ6SlKmjLoM_tbgYV6banKPwh4sqVXrQGKhEpsbzRqnhGpz6dZjuNXLa8AwCzs1eElgH5YLE-6kOnxNsoLnl1E5JZlgMfuRHuHOxxpxT10DPKyNwS6CstG5b2_Iy-mpxbm3O_sY5_NgdKErRPk17moPDHutHvY7fjBiJXXM3Z3u3xmZNY" />
                  <div className="absolute inset-0 bg-dash-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 backdrop-blur-[1px]">
                    <button className="w-9 h-9 rounded-full bg-dash-primary text-white flex items-center justify-center shadow-lg">
                      <span className="material-symbols-outlined text-[18px] fill-1">star</span>
                    </button>
                    <button className="w-9 h-9 rounded-full border border-dash-border-subtle bg-white text-dash-text-main flex items-center justify-center hover:text-dash-primary transition-colors shadow-lg">
                      <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                    </button>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <img className="w-4 h-4 rounded-sm border border-dash-border-subtle" data-alt="Lettering logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhplJffTcsH2nGQqL7AV7qjNlGjwuFTjge_60bW6BbgMkaa_31jLpSamMiGK2zBMKutO7hrWtQDgwdC5sdq1V2pw_dNEj87f_NyECtE6r9X2WebuP7hFOh3HA_1JYe-rQEApc6VzX4UvMFOMu33Kdg2uk7oFl0-4AabuTRQ0sEFaJjyh13WdrPjaGmhVNt-Ef57jZ1PFO7SbBVzMblNUk33szvEZkG6p-c2ujbSZNqRkpgzdE-f0C3OxXTmPZ8F_EUbb0KMJx8bX4" />
                    <span className="text-[10px] font-bold text-dash-primary uppercase tracking-wider">dribbble.com</span>
                  </div>
                  <h3 className="font-bold text-base text-dash-text-main leading-snug group-hover:text-dash-primary transition-colors">Minimal SaaS Dashboard</h3>
                  <p className="mt-2 text-xs text-dash-text-muted line-clamp-2 leading-relaxed">
                    Inspiration for clean dashboard layouts with a focus on data visualization and spacing.
                  </p>
                  <div className="mt-4 pt-4 border-t border-dash-border-subtle flex items-center justify-between">
                    <span className="text-[10px] text-dash-text-muted">3 days ago</span>
                    <span className="material-symbols-outlined text-[14px] text-dash-primary">bookmark</span>
                  </div>
                </div>
              </div>

              {/* Placeholder Card */}
              <div className="bg-white border border-dash-border-subtle rounded-xl overflow-hidden shadow-sm opacity-60">
                <div className="aspect-[16/10] bg-[#F1EFEC] border-b border-dash-border-subtle animate-pulse"></div>
                <div className="p-5 space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-[#F1EFEC] animate-pulse"></div>
                    <div className="h-2 w-16 bg-[#F1EFEC] rounded animate-pulse"></div>
                  </div>
                  <div className="h-4 w-3/4 bg-[#F1EFEC] rounded animate-pulse"></div>
                  <div className="space-y-2">
                    <div className="h-2 w-full bg-[#F1EFEC] rounded animate-pulse"></div>
                    <div className="h-2 w-5/6 bg-[#F1EFEC] rounded animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <button className="fixed bottom-6 right-6 w-14 h-14 bg-dash-primary text-white rounded-full shadow-2xl flex items-center justify-center lg:hidden hover:scale-105 transition-transform active:scale-95 z-50">
        <span className="material-symbols-outlined text-[28px]">add</span>
      </button>
    </div>
  );
}
