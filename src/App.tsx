import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Workshops from './components/Workshops';
import Trades from './components/Trades';
import Territory from './components/Territory';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Workshops />
        <Trades />
        <Territory />
      </main>
      <Footer />
    </div>
  );
}

export default App;