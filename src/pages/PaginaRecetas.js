import React, { useState } from 'react';
import Galletas from '../elements/Galletas';
import NuevaReceta from '../elements/NuevaReceta';
import Pastel from '../elements/Pastel';
import '../Styles/PaginaRecetas.css';

function PaginaRecetas() {
  const [mostrarGalletas, setMostrarGalletas] = useState(true);
  const [mostrarPastel, setMostrarPastel] = useState(true);
  const [mostrarNuevaReceta, setMostrarNuevaReceta] = useState(true);
  return (
    <div className="pagina-recetas">
      <div className='container'>
        <div className='top'>
          <div className='title'>
            <div className='title-text'></div>
            <h1>Recetas Destacadas</h1>
          </div>
        </div>
        <div className='recipes'>
          <div className='subtitle'>
            <h2>Crea tu propia receta!!</h2>
          </div>
          <div className='cards'>
            {mostrarGalletas && <Galletas onClose={() => setMostrarGalletas(false)} />}
            {mostrarPastel && <Pastel onClose={() => setMostrarPastel(false)} />}
            {mostrarNuevaReceta && <NuevaReceta onClose={() => setMostrarNuevaReceta(false)} />}
          </div>
        </div>
        <div className='footer'>
          <div className='footer'>
            <p>© 2025 <strong>Sabor Compartido</strong> 🍳</p>
            <p>Recetas que unen, sabores que inspiran. ❤️🥘</p>
            <p>Síguenos en nuestras redes:<a href='https://www.instagram.com/karguinano/?hl=es' target="_blank"> 📸 </a>
              <a href='https://www.tiktok.com/@karguinano' target="_blank">🎶 </a>
              <a href='https://x.com/karguinano' target="_blank">✖️</a></p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default PaginaRecetas