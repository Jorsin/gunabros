// import logo from './logo.svg';
import Header from './components/main/Header.jsx';
import Home from './components/Home.jsx';
import Products from './components/Products.jsx';
import Services from './components/Services.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import {
  Routes,
  Route
} from "react-router-dom";
import Footer from './components/main/Footer.jsx';
import { useState } from 'react';

function MainWrapper() {

  const [dropMenu, setDropMenu] = useState("hideNav");

  return (
    <div id="Container">
      <Header dropMenu={dropMenu} setDropMenu={setDropMenu} />

      <div id="Content">
        <Routes>
          <Route path={"/"} exact element={<Home setDropMenu={setDropMenu} />} />
          <Route path={"/products/*"} element={<Products setDropMenu={setDropMenu} />} />
          <Route path={"/services"} element={<Services setDropMenu={setDropMenu} />} />
          <Route path={"/about"} element={<About setDropMenu={setDropMenu} />} />
          <Route path={"/contact"} element={<Contact setDropMenu={setDropMenu} />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default MainWrapper;