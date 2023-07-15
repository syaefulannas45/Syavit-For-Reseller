import { useEffect } from "react";
import All from "./components/All";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pernikahan from "./components/Pernikahan";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="lg:mx-[75px] lg:mt-[10px] mx-[10px] mt-[10px]">
      <Navbar />
      <Hero />
      <Pernikahan />
      <All />
      <Footer/>
    </div>
  );
}

export default App;
