import './App.css';
import { About } from './components/About';
import { Banner } from './components/Banner';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Works } from './components/Works';

function App() {
  return (
    <div className="App selection:bg-blue-200">
      <Navbar/>
      <Hero/>
      <About/>
      <Banner/>
      <Works/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
