import '../Styles/RecetasCreadas.css'
function Galletas({ onClose }) {
    return (
        <div className="card">
            <div className="card-landing" style={{ '--i': 'url("/images/galletas.png")' }}>
                <h6>Galletas</h6>
                <button className="close-btn" onClick={onClose}>x</button> 
            </div>
            <div className="card-info">
                <div className='head'>
                    <pre>Galletas    <i className="fa-solid fa-calendar-days"></i> 06/12/2025</pre>
                    <div className="description">
                        <div className="item">
                            <i className="fa-regular fa-clock"></i>
                            <p>40 min</p>
                        </div>
                        <div className="item">
                            <i className="fa-regular fa-user"></i>
                            <p>4</p>
                        </div>
                        <div className="item">
                            <i className="fa-regular fa-star"></i>
                            <p>4,5</p>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <p className='title-ingredients'>Ingredientes:</p>
                    <div className='list'>
                        <label>
                            <input type="checkbox" /> <span>200g de harina</span>
                        </label>
                        <label>
                            <input type="checkbox" /> <span>100g de azúcar</span>
                        </label>
                        <label>
                            <input type="checkbox" /> <span>100g de mantequilla</span>
                        </label>
                        <label>
                            <input type="checkbox" /> <span>1 huevo</span>
                        </label>
                        <label>
                            <input type="checkbox" /> <span>1 cucharadita de esencia de vainilla</span>
                        </label>
                        <label>
                            <input type="checkbox" /> <span>1 pizca de sal</span>
                        </label>
                    </div>
                </div>
                <div className="action">
                    <a href='' className='btn'>Ver receta</a>
                </div>
            </div>
        </div>
    )
}

export default Galletas