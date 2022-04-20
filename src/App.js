import React from 'react';
import './assets/css/App.css';

// Componentes
import Header from './components/Header';
import Slider from './components/Slider';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import SeccionPruebas from './components/SeccionPruebas';
import Peliculas from './components/Peliculas';
import Guia from './Guia';

function App() {
  var buttonString = 'Ir al blog';
  return (
    <div className="App">
      <Header />
      <Slider
        title='Bienvenido al curso de React con @eldelgorrodepesca'
        btn={buttonString}
      />
      <div className="center">
        <Guia />
        <Sidebar />
        <div className="clearfix"></div>
      </div> {/* End div center */}
      <Footer />
    </div>
  );
}

export default App;
