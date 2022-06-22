import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Listar from "./components/Listar";
import Crear from "./components/Crear";
import Editar from './components/Editar';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand navbar-light bg-light">
            <div className="nav navbar-nav">
                <Link to={"/"} className="nav-item nav-link active">Home</Link>
                <Link to={"/crear"} className="nav-item nav-link">Crear Empleado</Link>
                <Link to={"editar"} className="nav-item nav-link">Editar Empleado</Link>
            </div>
        </nav>
      <div className="container">
        
        <br></br>
        
          <Routes>
            <Route path='/' element={<Listar></Listar>}></Route>
            <Route path='/crear' element={<Crear></Crear>}></Route>
            <Route path='/editar' element={<Editar></Editar>}></Route>
          </Routes>
          </div>
        </Router>
      
  );
}

export default App;
