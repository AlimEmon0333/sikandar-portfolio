import Navbar from './components/navbar/Navbar';
import "./App.css";
import Hero from './components/Home/Home';
import Footer from './components/footer/app';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Hero />
    <Footer />
    </div>
  );
}

export default App;
