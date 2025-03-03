import About from "./Components/About";
import Contact from "./Components/Contact";
import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";
import Experience from "./Components/Experience";
import Skills from "./Components/Skills";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#11071F] text-white font-family">
      <div className="w-full">
        <Navbar />
        <main className="max-w-5xl mx-auto">
          <Banner />
          <About />
          <Experience />
          <Skills />
        </main>
        <Contact />
      </div>
    </div>
  );
};

export default Home;
