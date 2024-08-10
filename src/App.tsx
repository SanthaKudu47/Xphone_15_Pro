import "./App.css";
import Hero from "./components/HeroSection";
import Highlights from "./components/Highlights";


function App() {
  return (
    <>
      <Hero />
      <Highlights/>
      <div className="bg-green-950 h-[2500px] flex w-full"></div>
    </>
  );
}

export default App;
