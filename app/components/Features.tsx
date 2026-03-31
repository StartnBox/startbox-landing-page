export default function Features() {
  return (
    <section className="px-6 py-24 bg-slate-900" id="features">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <label className="text-blue-400 font-label text-xs tracking-[0.3em] uppercase mb-4">
            Core Engine
          </label>
          <h2 className="font-headline text-4xl font-bold tracking-tight">The Founders Toolkit</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-1 bg-linear-to-b from-slate-700/20 to-transparent rounded-4xl">
            <div className="h-full bg-slate-800/50 p-8 rounded-[1.9rem] border border-slate-700/50">
              <span className="material-symbols-outlined text-purple-400 mb-6 text-3xl">auto_awesome</span>
              <h4 className="font-headline text-lg font-bold mb-3">Startup roadmap generator</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                AI-driven task lists that adapt to your progress and hurdles.
              </p>
            </div>
          </div>
          
          <div className="p-1 bg-linear-to-b from-slate-700/20 to-transparent rounded-4xl">
            <div className="h-full bg-slate-800/50 p-8 rounded-[1.9rem] border border-slate-700/50">
              <span className="material-symbols-outlined text-blue-400 mb-6 text-3xl">web</span>
              <h4 className="font-headline text-lg font-bold mb-3">Landing page builder</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                No-code components optimized for ultra-high conversion rates.
              </p>
            </div>
          </div>
          
          <div className="p-1 bg-linear-to-b from-slate-700/20 to-transparent rounded-4xl">
            <div className="h-full bg-slate-800/50 p-8 rounded-[1.9rem] border border-slate-700/50">
              <span className="material-symbols-outlined text-purple-300 mb-6 text-3xl">construction</span>
              <h4 className="font-headline text-lg font-bold mb-3">Business toolkit</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                Legal templates, financial models, and pitch deck foundations.
              </p>
            </div>
          </div>
          
          <div className="p-1 bg-linear-to-b from-slate-700/20 to-transparent rounded-4xl">
            <div className="h-full bg-slate-800/50 p-8 rounded-[1.9rem] border border-slate-700/50">
              <span className="material-symbols-outlined text-rose-400 mb-6 text-3xl">support_agent</span>
              <h4 className="font-headline text-lg font-bold mb-3">Optional expert help</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                On-demand access to vetted mentors when you hit a wall.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}