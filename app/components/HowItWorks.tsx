export default function HowItWorks() {
  return (
    <section className="px-6 py-24" id="how-it-works">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-headline text-3xl font-bold tracking-tight mb-4">The Launch Sequence</h2>
          <p className="text-slate-400">Simple, deterministic steps to your first customer.</p>
        </div>
        
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[2px] bg-linear-to-r from-purple-500/30 via-blue-500/30 to-purple-300/30 z-0"></div>
          
          <div className="relative z-10 flex flex-col items-center text-center group">
            <div className="w-24 h-24 rounded-3xl bg-slate-800/50 border border-slate-700/50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 bg-linear-to-b from-slate-700 to-slate-800">
              <span className="font-headline text-4xl font-black text-purple-400">1</span>
            </div>
            <h3 className="font-headline text-2xl font-bold mb-4">Enter your idea</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Tell us what you&apos;re building. Our engine analyzes market fit and feasibility in seconds.
            </p>
          </div>
          
          <div className="relative z-10 flex flex-col items-center text-center group">
            <div className="w-24 h-24 rounded-3xl bg-slate-800/50 border border-slate-700/50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 bg-linear-to-b from-slate-700 to-slate-800">
              <span className="font-headline text-4xl font-black text-blue-400">2</span>
            </div>
            <h3 className="font-headline text-2xl font-bold mb-4">Get a startup plan</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              A generated roadmap customized to your niche, including tech stack and marketing strategy.
            </p>
          </div>
          
          <div className="relative z-10 flex flex-col items-center text-center group">
            <div className="w-24 h-24 rounded-3xl bg-slate-800/50 border border-slate-700/50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 bg-linear-to-b from-slate-700 to-slate-800">
              <span className="font-headline text-4xl font-black text-purple-300">3</span>
            </div>
            <h3 className="font-headline text-2xl font-bold mb-4">Launch your business</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Deploy your landing page and start collecting leads directly through the StartBox hub.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}