import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import Booking from "./components/Booking";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Offers from "./components/Offers";
import Footer from "./components/Footer";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";

function App() {
  useEffect(() => {
    // If a hash exists in the URL on refresh
    if (window.location.hash) {
      // Replaces the URL with just the base path (e.g., clears the '#about')
      window.history.replaceState(null, "", window.location.pathname);

      // Instantly reset view to top of page
      window.scrollTo(0, 0);
    }
  }, []);
  return (
    <>
      <NavBar />

      <main>
        <Hero />
        <Offers />
        <About />
        <Services />
        <Gallery />
        <Booking />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
