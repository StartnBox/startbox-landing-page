'use client'

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900/60 backdrop-blur-xl">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <div className="text-2xl font-black tracking-tighter text-white font-headline">
          StartBox
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a className="font-manrope text-sm tracking-wide uppercase text-purple-400 font-bold" href="#how-it-works">
            How it works
          </a>
          <a className="font-manrope text-sm tracking-wide uppercase text-slate-400 hover:text-white transition-colors" href="#features">
            Features
          </a>
          <a className="font-manrope text-sm tracking-wide uppercase text-slate-400 hover:text-white transition-colors" href="#solutions">
            Solutions
          </a>
        </div>

        <a href="#waitlist">
        <button className="bg-linear-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-lg font-manrope text-sm font-bold uppercase tracking-wider scale-95 active:scale-90 transition-transform shadow-lg shadow-purple-500/25">
          Join Waitlist
        </button>
          </a>
      </div>
      <div className="bg-linear-to-r from-transparent via-slate-500/15 to-transparent h-px bottom-0 absolute w-full"></div>
    </nav>
  )
}