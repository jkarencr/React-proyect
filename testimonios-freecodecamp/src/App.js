import './App.css';
import Testimonio from './componentes/Testimonio.js';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1>Esto es lo que dicen nuestros clientes sobre freeCodeCamp:</h1>
    <Testimonio
      nombre='Shawn Wang'
      pais='Singapur'
      imagen='shawn'
      cargo='Ingeniera de Software'
      empresa='Amazon'
      testimonio='Da miedo cambiar de carrera.Solo gané la confianza de que podía hacerlo.'/>
    <Testimonio
      nombre='Sarah'
      pais='Nigeria'
      imagen='sarah'
      cargo='Ingeniera de Software'
      empresa='ChatDesk'
      testimonio='FreeCodeCamp fue esencial al iniciar mi carrrera como ingeniera en Software.'/>
    <Testimonio
      nombre='Emma'
      pais='Suecia'
      imagen='shawn'
      cargo='Ingeniero de Software'
      empresa='Spotify'
      testimonio='Siempre he tenido problemas para aprender JavaScript.'/>

      </div>
    </div>
  );
}

export default App;
