import NavBar from "./components/NavBar";
import Footer from "./pages/Footer";
import Hero from "./pages/Hero";
import Products from "./pages/Products";
import Reviews from "./pages/Reviews";
import { animateScroll as scroll } from "react-scroll";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { useState, useEffect } from "react";

export default function App() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="bg-white relative min-h-screen scroll-smooth">
      {/* Navbar */}
      <div className="sticky top-0 z-50 bg-white">
        <NavBar />
      </div>

      {/* Hero */}
      <Hero />

      {/* Products */}
      <Products />

      {/* Reviews */}

      <Reviews />

      {/* Footer */}
      <Footer />

      {showButton && (
        <button
          className="fixed bottom-10 right-10"
          onClick={() => {
            scroll.scrollToTop();
          }}
        >
          <BsFillArrowUpCircleFill style={{ fontSize: "1.5em" }} />
        </button>
      )}
    </div>
  );
}
