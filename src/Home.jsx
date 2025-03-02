import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#11071F] text-white">
      <div className="w-full">
        <Navbar />
        <main className="max-w-5xl mx-auto">
          <Hero />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
