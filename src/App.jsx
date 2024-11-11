import { Branding } from "./components/Branding";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { BulletPoints } from "./components/BulletPoints";
import { CallToAction } from "./components/CallToAction";
import { Princing } from "./components/Princing";
import { Footer } from "./components/Footer";




function App() {
  
  return (
    <>
        <Header />
        <Hero />
        <Branding />
        <Features />
        <CallToAction />
        <BulletPoints />
        <Princing />
        <CallToAction minify />
        <Footer />
    </>
  )
}

export default App