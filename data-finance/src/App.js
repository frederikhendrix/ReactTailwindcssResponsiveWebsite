import React from 'react';
import Analytics from './components/Analytics';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="">
      <Navbar/>
      <Hero />
      <Analytics />
      <Footer />
    </div>
  );
}

export default App;
