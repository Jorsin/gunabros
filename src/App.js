// import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import Home from './components/Home.js';
import Products from './components/Products.js';
import Services from './components/Services.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <div id="Container">
      <Header />
      
      <div id="Content">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/products" element ={<Products/>} />
            <Route path="/services" element ={<Services/>} />
            <Route path="/about" element ={<About/>} />
            <Route path="/contact" element ={<Contact/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
