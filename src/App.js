import './App.css';
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import Inicio from './Inicio';
import Salas from './Salas';
import Peliculas from './Peliculas';
import Navbar from './Navbar';
import Funciones from './componentes/Funciones';
import LogicaExtras from './LogicaExtras';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/salas" element={<Salas />} />
          <Route path="/peliculas" element={<Peliculas />} />
          <Route path="/funciones" element={<Funciones  />} />
          <Route path="/extras" element={<LogicaExtras  />} />   
        </Routes>
      </Router>
    </div>
  );
}


export default App;
