import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "./App.css";
import Index from "./paginas/Index";
import InicioSesion from "./paginas/InicioSesion";
import Registro from "./paginas/Registro";
import Fondo from "./componetes/Fondo/Fondo";
import Servicios from "./paginas/servicios";
import Nosotros from "./paginas/Nosotros";
import Objetivos from "./paginas/Objetivos";
import Feedback from "./paginas/Feedback";
import Caracteristicas from "./paginas/Caracteristicas";
import PagInicio from "./paginas/Inicio";
import Cuenta from "./paginas/PanelUsuario";
import MicroUP from "./paginas/MicroUP";
import SoporteUp from "./paginas/SoporteUP";
import Foro from "./paginas/Foro";
import MapaColegio from "./componetes/UserComp/MapaComp/MapaColegio"; 

function App() {
  return (
    <>
    <Fondo/>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/inicio-sesion" element={<InicioSesion />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/objetivos" element={<Objetivos />} />
          <Route path="/contactanos" element={<Feedback />} />
          <Route path="/caracteristicas" element={<Caracteristicas/>} />
          <Route path="/inicio" element={<PagInicio/>} />
          <Route path="/cuenta" element={<Cuenta/>}></Route>
          <Route path="/microConfig" element={<MicroUP/>}></Route>
          <Route path="/soporte" element={<SoporteUp/>}></Route>
          <Route path="/foro" element={<Foro/>}></Route>
          <Route path="/mapacolegio" element= {<MapaColegio/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
