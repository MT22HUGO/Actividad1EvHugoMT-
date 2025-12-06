import React, { useState } from "react";
import '../Styles/PaginaRegistro.css';
import { Link } from "react-router-dom";
function PaginaRegistro() {

  const [nombre, setnombre] = useState("");
  const cambiarnombre = (nuevonombre) => {
    setnombre(nuevonombre);
  }

  const [contraseña, setcontraseña] = useState("");
  const cambiarcontraseña = (nuevacontraseña) => {
    setcontraseña(nuevacontraseña);
  }

  const [correo, setcorreo] = useState("");
  const cambiarcorreo = (nuevocorreo) => {
    setcorreo(nuevocorreo);
  }

  const isValid = nombre.trim() !== "" && correo.includes('@') && contraseña.length >= 7;

  return (
    <div className='contenedor'>
      <div className='superior'>
        <div className='titulo'>
          <div className='texto-titulo'></div>
          <h1>¡Bienvenido a Sabor Compartido!</h1>
        </div>
      </div>
      <div className='principal'>
        <div className='registro'>
          <h2 className='titulo-registro'>REGISTRATE <br></br>
            Y DISFRUTA DE LAS MEJORES RECETAS!!</h2>
          <form className='formulario'>
            <input placeholder='Nombre' type='text' onChange={e => cambiarnombre(e.target.value)} required></input><br></br>
            <input placeholder='Correo electronico' type='email' onChange={e => cambiarcorreo(e.target.value)} required></input><br></br>
            <input placeholder='Contraseña' type='password' minLength={7} onChange={e => cambiarcontraseña(e.target.value)} required></input><br></br>

            {/* Mostrar el boton sin enlace cuando el formulario no es valido */}
            {!isValid && (
              <button className='env' type='button'>A cocinar!!</button>
            )}

            {/* Mostrar el boton con enlace cuando el formulario es valido */}
            {isValid && (
              <Link to="/Recetas"><button className='env' type='button'>A cocinar!!</button></Link>
            )}
          </form>

        </div>

        <div className='cocinero'>

          <p className='nom'>🍳 <strong> {nombre}</strong> </p>
          <p className='con'>🔐 <strong className={contraseña.length >= 7 ? 'verde' : 'rojo'}>{"*".repeat(contraseña.length)}</strong> </p>
          <p className='corr'>📬 <strong className={correo.includes('@') ? 'verde' : 'rojo'}>{correo}</strong>  </p>
          <img className='gif-personaje' src="/images/cocinero.gif" alt="Cocinero animado" />
          <img className='cocina' src="/images/cocina.png" alt="Imagen de cocina" />
          {nombre.trim() != "" && correo.includes('@') && contraseña.length >= 7 && (
           <Link to="/Recetas"><button className='env'>A cocinar!!</button></Link>
          )}

        </div>
      </div>
      <div className='pie'>
        <div className='pie'>
          <p>© 2025 <strong>Sabor Compartido</strong> 🍳</p>
          <p>Recetas que unen, sabores que inspiran. ❤️🥘</p>
          <p>Síguenos en nuestras redes:<a href='https://www.instagram.com/karguinano/?hl=es' target="_blank"> 📸 </a>
            <a href='https://www.tiktok.com/@karguinano' target="_blank">🎶 </a>
            <a href='https://x.com/karguinano' target="_blank">✖️</a></p>
        </div>

      </div>
    </div>
  )
} 

export default PaginaRegistro