import logo from './assets/images/logo.svg';
import './assets/css/App.css';

import Header from './components/Header';
import Slider from './components/Slider';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import SeccionPruebas from './components/SeccionPruebas';
import Peliculas from './components/Peliculas';

function App() {
  return (
    <div className="App">

      <Header />

      <Slider 
      title="Bienvenidos de nuevo"
      />


      <div className="center">

        <Peliculas />
        
        <Sidebar />


      </div>
      <div className="clearfix">
      <Footer />

      </div>


    </div>
  );
}

export default App;
