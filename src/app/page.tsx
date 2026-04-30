import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import PhotoGallery from '@/components/PhotoGallery';
import Pricing from '@/components/Pricing';
import DjCallout from '@/components/DjCallout';
import Rules from '@/components/Rules';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <PhotoGallery />
        <Pricing />
        <DjCallout />
        <Rules />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
