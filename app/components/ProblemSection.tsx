export default function ProblemSection() {
  return (
    <section className="px-6 py-24 bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-4 flex flex-col justify-center">
            <label className="text-purple-400 font-label text-xs tracking-[0.3em] uppercase mb-4">
              The Friction
            </label>
            <h2 className="font-headline text-4xl font-bold tracking-tight mb-6">
              Why most ideas <span className="text-slate-500">never launch.</span>
            </h2>
            <p className="text-slate-400 leading-relaxed">
              Launching is hard because the ecosystem is fragmented. We identified the three primary killers of innovation.
            </p>
          </div>
          
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-8 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:bg-slate-700/50 transition-all duration-500">
              <div className="w-12 h-12 rounded-xl bg-slate-700/50 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-purple-400">inventory_2</span>
              </div>
              <h3 className="font-headline text-xl font-bold mb-3">Too many tools</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Subscriptions for 20 different SaaS platforms just to get a MVP live. High costs, zero integration.
              </p>
            </div>
            
            <div className="p-8 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:bg-slate-700/50 transition-all duration-500">
              <div className="w-12 h-12 rounded-xl bg-slate-700/50 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-blue-400">map</span>
              </div>
              <h3 className="font-headline text-xl font-bold mb-3">Don&apos;t know where to start</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Analysis paralysis is real. Without a sequence of operations, founders wander in the dark.
              </p>
            </div>
            
            <div className="sm:col-span-2 p-8 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:bg-slate-700/50 transition-all duration-500 flex flex-col md:flex-row gap-8 items-center">
              <div className="w-16 h-16 shrink-0 rounded-2xl bg-slate-700/50 flex items-center justify-center">
                <span className="material-symbols-outlined text-purple-300 text-3xl">code_off</span>
              </div>
              <div>
                <h3 className="font-headline text-xl font-bold mb-3">No technical skills</h3>
                <p className="text-slate-400 text-sm leading-relaxed max-w-md">
                  The barrier to entry is still too high. Hiring developers is expensive, and learning to code takes years you don&apos;t have.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}