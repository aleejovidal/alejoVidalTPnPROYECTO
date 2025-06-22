import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Login from "./pantallas/login.jsx";
import Inicio from "./pantallas/inicio.jsx";
import Registro from "./pantallas/registro.jsx";
import Barra from './componentes/mapeo_actividad/componetizacion/barraNav.jsx';
import Footer from './componentes/mapeo_actividad/componetizacion/footer.jsx';
import './App.css';
function App(){
  return (
    <Router>
      <div className="aplicacion">
        <Barra />
        <div className="contenido-principal">
          <Routes>
            <Route path="/" element={<Inicio/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/registro" element={<Registro/>}/>
          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  )
}

export default App