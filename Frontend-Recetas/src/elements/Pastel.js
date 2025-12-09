import '../Styles/RecetasCreadas.css'
function Pastel({ onClose }) {
    return (
        <div className="card">
            <div className="card-landing" style={{ '--i': 'url("/images/pastel.jpg")' }}>
                <h6>Pastel de chocolate</h6>
                <button className="close-btn" onClick={onClose}>x</button>
            </div>
            <div className="card-info">
                <div className='head'>
                    <per><i className="fa-solid fa-calendar-days"></i> 07/12/2025</per>
                    <div className='halal'>
                    <input type="checkbox" required/> <span>halal</span>
                    </div>
                    <pre>Pastel de chocolate </pre>
                    <div className="description">
                        <div className="item">
                            <i className="fa-regular fa-clock"></i>
                            <p>70 min</p>
                        </div>
                        <div className="item">
                            <i className="fa-regular fa-user"></i>
                            <p>8</p>
                        </div>
                        <div className="item">
                            <i className="fa-regular fa-star"></i>
                            <p>3,5</p>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <p className='title-ingredients'>Ingredientes:</p>
                    <div className='list list--medium'>
                        <label>
                            <input type="checkbox" /> <span>200g de harina</span>
                        </label>
                        <label>
                            <input type="checkbox" /> <span>200g de azúcar</span>
                        </label>
                        <label>
                            <input type="checkbox" /> <span>120 g de cacao en polvo</span>
                        </label>
                        <label>
                            <input type="checkbox" /> <span>3 huevos</span>
                        </label>
                        <label>
                            <input type="checkbox" /> <span>1 sobre de levadura</span>
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

export default Pastel