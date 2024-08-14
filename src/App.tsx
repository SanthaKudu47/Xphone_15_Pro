import "./App.css";
import Colors from "./components/Colors";
import Hero from "./components/HeroSection";
import Highlights from "./components/Highlights";


function App() {
  return (
    <>
      <Hero />
      <Highlights/>
      <Colors/>
      <div className="bg-green-950 h-[2500px] flex w-full"></div>
    </>
  );
}

export default App;
