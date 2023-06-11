import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Cv from './pages/Cv'
import Navi from "./components/Navi"
import Footer from "./components/Footer"
import "./assets/css/style.css"
import Contact from './pages/Contact';

function App() {
  
  return (
    <div>
      <div className='container'>
        <Navi color="" light expand="md" className="mt-4" dark></Navi>
        <div id="main">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cv" element={<Cv />}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
          </Routes>
        </div>
        <Footer ></Footer>
      </div>
    </div>
  );
}

export default App;
