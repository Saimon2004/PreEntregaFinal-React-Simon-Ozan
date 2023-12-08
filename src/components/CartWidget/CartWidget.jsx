import { BiShoppingBag } from "react-icons/bi";
import "./CartWidget.css"
import { useContext } from "react";
import { CartContex } from "../../context/CartContex";
import { Link } from "react-router-dom";

export const CartWidget = () => {

    const { getTotalItems } = useContext(CartContex)

    return (
        <>
            <div className='div-carrito'>
                <Link to={"/carrito"}>
                    <button id='boton-carrito'><BiShoppingBag size={25} color='White' /></button>
                </Link>
                <p>{getTotalItems()}</p>
            </div>
        </>
    )
}
