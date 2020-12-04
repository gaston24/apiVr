import logo from './components/assets/images/logo.svg';
import './components/assets/css/App.css';
import MiComponente from './components/MiComponente';
import Peliculas from './components/Peliculas';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola mundo
        </p>
        


        <section className="componentes">
          <MiComponente />
          <Peliculas />

        </section>

      </header>
    </div>
  );
}

export default App;
