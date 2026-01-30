import React from 'react';
import Hero from './components/Hero';
import Wallets from './components/Wallets';
import Lifecycle from './components/Lifecycle';
import Compatibility from './components/Compatibility';
import Playground from './components/Playground';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-surface">
      <Hero />
      <Wallets />
      <Lifecycle />
      <Compatibility />
      <Playground />
      <Contact />
    </div>
  );
}

export default App;
