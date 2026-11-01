import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BrandStatement from './components/BrandStatement'
import SignatureDrinks from './components/SignatureDrinks'
import Menu from './components/Menu'
import Experience from './components/Experience'
import About from './components/About'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Instagram from './components/Instagram'
import VisitUs from './components/VisitUs'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        تخطَّ إلى المحتوى
      </a>
      <Navbar />
      <main id="main" tabIndex={-1}>
        <Hero />
        <BrandStatement />
        <SignatureDrinks />
        <Menu />
        <Experience />
        <About />
        <Gallery />
        <Testimonials />
        <Instagram />
        <VisitUs />
      </main>
      <Footer />
    </>
  )
}
