import Galletas from '../elements/Galletas';
import '../Styles/PaginaRecetas.css';

function PaginaRecetas() {
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
          <Galletas />
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