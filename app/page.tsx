import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProblemSection from './components/ProblemSection'
import SolutionBanner from './components/SolutionBanner'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import SocialProof from './components/SocialProof'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <Hero />
        <ProblemSection />
        <SolutionBanner />
        <HowItWorks />
        <Features />
        <SocialProof />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}