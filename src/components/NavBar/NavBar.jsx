import { CartWidget } from '../CartWidget/CartWidget'
import { Link,NavLink } from 'react-router-dom'
import './NavBar.css'

export const NavBar = () => {
    return (
        <>
            <nav>
                <Link to={"/"} className="logo-nav">
                    <img src="../public/logo/logo transparente.png" alt="Logo ak store" className="logo-img" />AK STORE
                </Link>
                <div>
                    <ul>
                        <li><NavLink activeclassname="active" to={"/"}>Inicio</NavLink></li>
                        <li><NavLink activeclassname="active" to={'/tienda'}>Tienda de Skins</NavLink></li>
                        <li><NavLink activeclassname="active" to={"/vender-skins"}>Vender Skins</NavLink></li>
                        <li><NavLink activeclassname="active" to={"/contacto"}>Contacto</NavLink></li>
                    </ul>
                </div>

                <CartWidget/>
            </nav>
        </>
    )
}

