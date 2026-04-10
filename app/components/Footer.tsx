export default function Footer() {
  return (
    <footer className="w-full py-12 px-6 border-t border-slate-700/50 bg-black">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 max-w-7xl mx-auto">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="text-lg font-bold text-white font-headline">StartnBox</div>
          <p className="font-inter text-xs text-slate-400 tracking-wider uppercase">
            © 2026 StartnBox. The Neon Monolith Frontier.
          </p>
        </div>
        
        <div className="flex gap-8">
          <a className="text-slate-500 hover:text-blue-400 transition-colors font-inter text-xs uppercase tracking-widest font-bold" href="#how-it-works">
            How it works
          </a>
          <a className="text-slate-500 hover:text-blue-400 transition-colors font-inter text-xs uppercase tracking-widest font-bold" href="#features">
            Features
          </a>
          <a className="text-slate-500 hover:text-blue-400 transition-colors font-inter text-xs uppercase tracking-widest font-bold" href="#solutions">
            Solutions
          </a>
        </div>
        
        <div className="flex gap-6">
          <a className="text-slate-500 hover:text-blue-400 transition-colors font-inter text-xs font-medium" href="#">
            Privacy
          </a>
          <a className="text-slate-500 hover:text-blue-400 transition-colors font-inter text-xs font-medium" href="#">
            Terms
          </a>
        </div>
      </div>
    </footer>
  )
}
