import Header from '@/components/header'
import Hero from '@/components/hero'
import Ticker from '@/components/ticker'
import Services from '@/components/services'
import ElevateSection from '@/components/elevate-section'
import WhyUs from '@/components/why-us'
import About from '@/components/about'
import Testimonials from '@/components/testimonials'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Page() {
  return (
    <main>
      <Header />
      <Hero />
      <Ticker />
      <Services />
      <ElevateSection />
      <WhyUs />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
