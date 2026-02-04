import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Hero from './components/Hero';
import Wallets from './components/Wallets';
import Lifecycle from './components/Lifecycle';
import Compatibility from './components/Compatibility';
import Playground from './components/Playground';
import Contact from './components/Contact';
import LiveDemo from './components/LiveDemo';

// Layout component to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const HomePage = () => (
  <>
    <Hero /> {/* 1. Dark Blue (#0B1C2D) */}
    <Playground /> {/* 2. Light (#F7F9FC) */}
    <Compatibility /> {/* 3. Dark Blue (#0B1C2D) */}
    <Wallets /> {/* 4. Light (#F7F9FC) */}
    <Lifecycle /> {/* 5. Dark Blue (#0B1C2D/Midnight) */}
    <Contact /> {/* 6. Light (#F7F9FC) */}
  </>
);

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-surface">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/live-demo" element={<LiveDemo />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
