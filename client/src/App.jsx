import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Volunteers from './pages/Volunteers';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';
import JoinPopup from './components/JoinPopup';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/volunteers" element={<Volunteers />} />
          </Routes>
        </main>
        <Footer />
        <JoinPopup />
      </div>
    </Router>
  );
}

export default App;
