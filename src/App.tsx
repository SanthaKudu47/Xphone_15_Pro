import "./App.css";
import Colors from "./components/Colors";
import FullStory from "./components/FullStory";
import Hero from "./components/HeroSection";
import Highlights from "./components/Highlights";
import P17ProChip from "./components/P17ProChip";

function App() {
  return (
    <>
      <Hero />
      <Highlights />
      <Colors />
      <FullStory />
      <P17ProChip/>
      <div className="bg-green-950 h-[2500px] flex w-full"></div>
    </>
  );
}

export default App;
