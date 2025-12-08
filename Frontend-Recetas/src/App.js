import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import PaginaRegistro from './pages/PaginaRegistro';
import PaginaRecetas from './pages/PaginaRecetas';

function App() {
  return (
    /* El route es para enlazar las paginas atraves de botones que hay en las paginas en mi caso*/
    <Routes>
      <Route path='/' element={<PaginaRegistro/>} />
      <Route path='/Recetas' element={<PaginaRecetas/>} />
    </Routes>
  );
}

export default App;
