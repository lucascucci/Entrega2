import { useState } from "react";
import './itemDetail.css' 

function ItemDetail ({productos}) {
    const [contador, setContador] = useState(0)

    const botonAumento = () => {
        setContador(contador +1)
    }
    const botonResta = () => {
        setContador(contador -1)
    }

    return (
        <div className="detail-conteiner">
            <div className="detail-item-container">
                <h3 className="titulo-detail">{productos.nombre}</h3>
                <img className="imgF" src={productos.imagen} alt={productos.id}></img>
                <p className="detalle-precio">${productos.precio}</p>
                <button onClick={botonResta} className="boton-hand">-</button>
                <button onClick={botonAumento} className="boton-hand">+</button>
                <p className="contador2">Cantidad:{contador}</p>
            </div>
        </div>
    )
}; 

export default ItemDetail;