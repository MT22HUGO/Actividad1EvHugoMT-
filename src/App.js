import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import PaginaRegistro from './pages/PaginaRegistro';
import PaginaRecetas from './pages/PaginaRecetas';

function App() {
  return (
    <Routes>
      <Route path='/' element={PaginaRegistro} />
      <Route path='/Recetas' element={PaginaRecetas} />

    </Routes>
  );
}

export default App;
