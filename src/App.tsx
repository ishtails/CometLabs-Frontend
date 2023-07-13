import NavBar from "./components/NavBar";
import Hero from "./pages/Hero";
import Products from "./pages/Products";

export default function App() {
  return (
    <div className="bg-white min-h-screen snap-mandatory">
      {/* Navbar */}
      <NavBar />

      {/* Hero */}
      <Hero />

      {/* Products */}
      <Products />

      {/* Reviews */}

      {/* Footer */}
    </div>
  );
}
