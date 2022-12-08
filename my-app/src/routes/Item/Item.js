import ItemList from "../ItemList/ItemList";
import { Link } from "react-router-dom";

const Item = ({data}) => {
    return (
        <ItemList>
            <div className="contain-card">
                <p className="hola">{data.titulo}</p>
                <p className="">${data.precio}</p>
                <img src={data.imagen} alt={data.id} className=""></img>
                <div className="">
                    <Link to={`/item/${data.id}`} className="">Ver detalle</Link>
                </div>
            </div>
        </ItemList>
    )
};

export default Item;