import './App.css';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Images from './components/Images';
import Navbar from './components/Navbar';
import {Routes,Route} from "react-router-dom";
import Video from './components/Video';

function App() {
  return (
    <div className="App">
      <Navbar/>
        <Routes>
          <Route path="/" element={<Hero/>}/>
          <Route path="/images" element={<Images/>}/>
          <Route path="/videos" element={<Video/>}/>

        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
