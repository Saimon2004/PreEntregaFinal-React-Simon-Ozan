import { Link } from 'react-router-dom'
import './Item.css'
import { CartContex } from '../../context/CartContex'
import { useContext, useEffect } from 'react'

export const Item = ({ product }) => {

    const { addToCart } = useContext(CartContex)



    const evento = (event) => {

        event.preventDefault();

        addToCart(product, product.cantidad)
    }

    return (
        <>
            <li>
                {product.enStock ?
                    <Link to={`/item/${product.id}`}><div className='skin'>
                        <img src={product.img} alt={product.nombreSkin} />
                        {product.enStock === false ? <h5 className="text-center"><span className="badge bg-danger">SIN STOCK</span></h5> : <h5 className="text-center"><span className="badge bg-success">EN STOCK</span></h5>}
                        <h4 className="skin-texto">{product.nombreSkin}</h4>
                        <hr className="hr" />
                        <h4 className="precio-texto">$ {product.precio}</h4>
                        <button className="boton-anadir" onClick={evento}>añadir al carrito</button>
                    </div></Link>
                    :
                    <div className='skin'>
                        <img src={product.img} alt={product.nombreSkin} />
                        {product.enStock === false ? <h5 className="text-center"><span className="badge bg-danger">SIN STOCK</span></h5> : <h5 className="text-center"><span className="badge bg-success">EN STOCK</span></h5>}
                        <h4 className="skin-texto">{product.nombreSkin}</h4>
                        <hr className="hr" />
                        <h4 className="precio-texto">$ {product.precio}</h4>
                        <button className="boton-no-anadir">añadir al carrito</button>
                    </div>

                }
            </li>
        </>
    )
}
