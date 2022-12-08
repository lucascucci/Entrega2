import { useState, useEffect } from "react";
import Item from "../Item/Item";
import './itemListContainer.css' 


const ItemListContainer = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch(`/Data/data.json`)
        .then((res) => res.json())
        .then((obj) => setPosts(obj))
    }, []);



    return (
        <div className="lista">
            {posts.map((productos) => <Item data = {productos} key = {productos.id}></Item>)}
        </div>
    )
};

export default ItemListContainer;