import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Communities from './components/Communities';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-gray-100 selection:bg-fuchsia-500 selection:text-white font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Communities />
        <Contact />
      </main>
    </div>
  );
}
