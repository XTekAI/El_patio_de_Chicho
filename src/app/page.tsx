import Hero from '@/components/Hero';
import About from '@/components/About';
import PhotoGallery from '@/components/PhotoGallery';
import Contact from '@/components/Contact';
import LanguageToggle from '@/components/LanguageToggle';

export default function Home() {
  return (
    <main>
      <LanguageToggle />
      <Hero />
      <About />
      <PhotoGallery />
      <Contact />
    </main>
  );
}
