import "./Cart.css"
import { useContext, useEffect } from "react"
import { CartContex } from "../../context/CartContex"
import { CartItems } from "../CartItems/CartItems"
import { BiShoppingBag } from "react-icons/bi";
import { Link } from "react-router-dom";

export const Cart = () => {

  const { cart, clearCart, finalPrice } = useContext(CartContex)

  useEffect(() => {
    document.title = "Carrito | AkStore CSGO"
  }, [])


  return (
    <>
      <div className="main-cart">
        <h1 className="tu-carrito">Tu carrito</h1>

        {
          cart.length > 0 ? (
            <>
              {cart.map((item) => {
                return <CartItems key={item.producto.id} product={item.producto} />
              })}

              <div className="buy-container">
                <div className="buy-elements">
                  <h2>Precio Final: ${finalPrice()}</h2>
                  <button onClick={clearCart}>Vaciar carrito</button>
                  <Link to={"/checkout"}><button>Comprar</button></Link>
                </div>
              </div>
            </>

          ) : (
            <div className="no-items">
              <BiShoppingBag size={75} />
              <h1>Tu carrito está vacío</h1>
              <Link to={"/tienda"}><button className="carrito-boton">Tienda de skins</button></Link>
            </div>
          )}
      </div>
    </>
  )
}
