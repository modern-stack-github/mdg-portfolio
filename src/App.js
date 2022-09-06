import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './nav/Navigation';
import Footer from './footer/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/about/About';
import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import NotFound from './components/NotFound';

function App() {

  return (
    <BrowserRouter>
      {/* <div className="App"> */}
        <Navigation />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
        <footer>
          <Footer />
        </footer>
      {/* </div> */}
    </BrowserRouter>
  );
}

export default App;
