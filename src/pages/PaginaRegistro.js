import React, { useState } from "react";
import '../Styles/PaginaRegistro.css';
import { Link } from "react-router-dom";
function PaginaRegistro() {
/* He añadido estas funciones para que aparezca lo que vas escribiendo en el formulario encima del personaje*/
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
/* Esta verifica si lo añadido en cada campo cumple las condiciones y cuando las cumple muestra el boton que tiene el enlace a la siguiente pagina*/
  const isValid = nombre.trim() !== "" && correo.includes('@') && contraseña.length >= 7;

  return (
    <div className='container'>
      <div className='top'>
        <div className='title'>
          <div className='title-text'></div>
          <h1>¡Bienvenido a Sabor Compartido!</h1>
        </div>
      </div>
      <div className='main'>
        <div className='signup'>
          <h2 className='signup-title'>REGISTRATE <br></br>
            Y DISFRUTA DE LAS MEJORES RECETAS!!</h2>
          <form className='form'>
            <input placeholder='Nombre' type='text' onChange={e => cambiarnombre(e.target.value)} required></input><br></br>
            <input placeholder='Correo electronico' type='email' onChange={e => cambiarcorreo(e.target.value)} required></input><br></br>
            <input placeholder='Contraseña' type='password' minLength={7} onChange={e => cambiarcontraseña(e.target.value)} required></input><br></br>

            {/* Mostrar el boton sin enlace cuando el formulario no es valido */}
            {!isValid && (
              <button className='submit' type='button'>A cocinar!!</button>
            )}

            {/* Mostrar el boton con enlace cuando el formulario es valido */}
            {isValid && (
              <Link to="/Recetas"><button className='submit' type='button'>A cocinar!!</button></Link>
            )}
          </form>

        </div>

        <div className='chef'>

          <p className='name'>🍳 <strong> {nombre}</strong> </p>
          <p className='pass'>🔐 <strong className={/*Cdependiendo de si se cumple o no tiene una clase u otra*/contraseña.length >= 7 ? 'green' : 'red'}>{"*".repeat(contraseña.length)}</strong> </p>
          <p className='email'>📬 <strong className={correo.includes('@') ? 'green' : 'red'}>{correo}</strong>  </p>
          <img className='gif-character' src="/images/cocinero.gif" alt="Cocinero animado" />
          <img className='kitchen' src="/images/cocina.png" alt="Imagen de cocina" />
          {/* Mostrar el boton con enlace cuando el formulario es valido y si no no muestra nada */}
          {nombre.trim() != "" && correo.includes('@') && contraseña.length >= 7 && (
            <Link to="/Recetas"><button className='submit'>A cocinar!!</button></Link>
          )}

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
  )
}

export default PaginaRegistro