import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Classes from "./components/Classes";
import Styles from "./components/Styles";
import Studios from "./components/Studios";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Gallery />
        <Classes />
        <Styles />
        <Studios />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
