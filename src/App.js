import './App.css';
import Landing from './Components/Landing';
import Navbar from './Components/Navbar';
import News from './Components/News';
import PlayReel from './Components/PlayReel';
import Spread from './Components/Spread';
import Story from './Components/Story';
import Work from './Components/Work';
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-full select-none">
      <Navbar />
      <Landing />
      <Work />
      <PlayReel />
      <News />
      <Spread />
      <Story />
    </div>
  );
}

export default App;
