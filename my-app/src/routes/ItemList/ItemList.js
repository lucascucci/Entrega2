import './itemList.css' 


function ItemList ({src, children}) {
    return <div className="card">{children}</div>
    
}; 

export default ItemList;