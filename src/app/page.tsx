import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Page() {
  return (
    <main className="bg-white text-black antialiased">
      <Header />
      <Hero />
      <Skills />
      <Experience />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
