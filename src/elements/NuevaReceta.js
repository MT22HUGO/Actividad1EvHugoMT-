import '../Styles/NuevaReceta.css'
import React, { useState } from 'react';

function NuevaReceta({ onClose }) {
    const [nombre, setnombre] = useState("Nueva Receta");
    const cambiarnombre = (nuevonombre) => {
        setnombre(nuevonombre);
    }
    return (
        <div className="card">
            <div className="card-landing" style={{ '--i': 'url("/images/nuevareceta.jpg")' }}>
                <h6>{nombre}</h6>
                <button className="close-btn" onClick={onClose}>x</button>
            </div>
            <div className="card-info">
                <div className='head'>
                    <p className='date-container'>  <i className="fa-solid fa-calendar-days"></i> <input type='date' className='date'></input></p>
                    <input type="text" placeholder='Nombre de la receta' className='name-recipe' onChange={e => cambiarnombre(e.target.value)} />
                    <div className="description">
                        <div className="item">
                            <i className="fa-regular fa-clock"></i>
                            <input type="text" placeholder='Tiempo' className='time' />
                        </div>
                        <div className="item">
                            <i className="fa-regular fa-user"></i>
                            <input type="text" placeholder='Porciones' className='portions' />
                        </div>
                        <div className="item">
                            <i className="fa-regular fa-star"></i>
                            <input type="text" placeholder='Valoracion' className='assessment' />
                        </div>
                    </div>
                </div>
                <div className="content">
                    <p className='title-ingredients'>Ingredientes:</p>
                    <input type="text" placeholder='Ingrediente' className='ingredient' />
                    <input type="text" placeholder='Ingrediente' className='ingredient' />
                    <input type="text" placeholder='Ingrediente' className='ingredient' />
                    <input type="text" placeholder='Ingrediente' className='ingredient' />
                </div>
                <div className="action">
                    <a href='' className='btn'>Añadir receta</a>
                </div>
            </div>
        </div>
    )
}

export default NuevaReceta