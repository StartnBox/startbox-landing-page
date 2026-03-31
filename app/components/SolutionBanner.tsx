export default function SolutionBanner() {
  return (
    <section className="py-20 px-6 overflow-hidden" id="solutions">
      <div className="max-w-7xl mx-auto text-center">
        <div className="p-12 md:p-20 rounded-4xl bg-linear-to-br from-slate-800/50 to-slate-800/30 border border-slate-700/50 relative">
          <div className="relative z-10">
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold mb-6">
              All-in-one platform for guided startup building.
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-10 text-lg">
              We synthesized the complexity of startup growth into a single, cohesive command center.
            </p>
            <div className="h-1 w-24 bg-linear-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
          </div>
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-purple-500/20 blur-[100px] rounded-full"></div>
        </div>
      </div>
    </section>
  )
}