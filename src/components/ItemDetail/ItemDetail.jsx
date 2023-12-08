import './ItemDetail.css'
import { useContext } from 'react'
import { CartContex } from '../../context/CartContex'

export const ItemDetail = ({ producto }) => {

    const { addToCart } = useContext(CartContex)

    const onAdd = () => {
        addToCart(producto, producto.cantidad)
    }

    return (
        <>
            <div className="itemDetail-container">
                <div className="itemDetail">
                    <div className='itemDetail-img'>
                        <img src={producto.img} alt={producto.nombreSkin} />

                        <br /><br /><br />

                        {/* <h3>Float:  { }</h3> */}
                    </div>
                    <div className='itemDetail-info'>
                        <h1>{producto.nombreSkin}</h1>
                        <h3>${producto.precio} </h3>
                        <br />

                        <button onClick={onAdd}>Agregar al carrito</button>
                    </div>
                </div>
            </div>
        </>
    )
}
