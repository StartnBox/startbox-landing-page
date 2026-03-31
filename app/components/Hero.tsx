export default function Hero() {
  return (
    <section className="relative px-6 py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
        <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700/50">
          <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">
            Now accepting early access
          </span>
        </div>
        
        <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight mb-8 max-w-4xl">
          Turn Your Idea Into a <span className="text-gradient">Startup</span> — Step by Step
        </h1>
        
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mb-12 font-light leading-relaxed">
          StartBox guides you from idea to launch with tools, templates, and support. Stop dreaming and start building with the neon-powered platform for modern founders.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 items-center">
            <a href="#waitlist">
          <button className="bg-linear-to-r from-purple-500 to-blue-500 text-white px-10 py-4 rounded-xl font-headline font-bold text-lg hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all">
            Join the Waitlist
          </button>
            </a>
          <a href="#how-it-works">
          <button className="px-10 py-4 rounded-xl font-headline font-bold text-lg bg-slate-800/20 border border-slate-700/50 text-white hover:bg-slate-800/40 transition-all">
            View Roadmap
          </button>
            </a>
        </div>
      </div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-[120px] z-0"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] z-0"></div>
    </section>
  )
}