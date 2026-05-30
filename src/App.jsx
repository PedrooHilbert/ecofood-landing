import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import HowItWorks from './components/HowItWorks'
import Impact from './components/Impact'
import Technology from './components/Technology'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <Impact />
      <Technology />
      <CTA />
      <Footer />
    </div>
  )
}
