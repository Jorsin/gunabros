import { createBrowserRouter } from '@datadog/browser-rum-react/react-router-v6';
import Header from './components/main/Header.jsx';
import Home from './components/Home.jsx';
import Products from './components/Products.jsx';
import Services from './components/Services.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import { Outlet } from "react-router-dom";
import Footer from './components/main/Footer.jsx';
import { useState } from 'react';

function MainWrapper() {

  const [dropMenu, setDropMenu] = useState("hideNav");

  return (
    <div id="Container">
      <Header dropMenu={dropMenu} setDropMenu={setDropMenu} />

      <div id="Content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default MainWrapper;

// Create router configuration with Datadog's router
export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainWrapper />,
    children: [
      {
        path: '/',
        element: <Home setDropMenu={(val) => val} />
      },
      {
        path: '/products/*',
        element: <Products setDropMenu={(val) => val} />
      },
      {
        path: '/services',
        element: <Services setDropMenu={(val) => val} />
      },
      {
        path: '/about',
        element: <About setDropMenu={(val) => val} />
      },
      {
        path: '/contact',
        element: <Contact setDropMenu={(val) => val} />
      }
    ]
  }
]);