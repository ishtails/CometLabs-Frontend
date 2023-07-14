import NavBar from "./components/NavBar";
import Footer from "./pages/Footer";
import Hero from "./pages/Hero";
import Products from "./pages/Products";
import Reviews from "./pages/Reviews";

export default function App() {
  return (
    <div className="bg-white relative min-h-screen">
      {/* Navbar */}
      <NavBar />

      {/* Hero */}
      <Hero />

      {/* Products */}
      <Products />

      {/* Reviews */}
      <Reviews />

      {/* Footer */}
      <Footer />
    </div>
  );
}
