import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Header from "../components/Header/Header";
import Nav from "../components/Nav";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";
import Services from "../components/Services";

export default function Home() {
  return (
    <div className="w-full scroll-smooth bg-color-bg bg-[url('/assets/bg-texture.png')] leading-7 text-white">
      <Header />
      <Nav />
      <About />
      <Experience />
      {/* <Services /> */}
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}
