import './Footer.css'
import { Link } from 'react-router-dom'



export const Footer = () => {
    return (
        <>
            <footer className="row footer p-5 bg-black text-white">
                {/* <!--Logo--> */}
                <div className="col-lg-3 col-md-6 col-sm-12 logo">
                    <a href="#" className="logo-a"><img src="../public/logo/logo transparente.png" className="logo-img" />AK STORE</a>
                </div>

                {/* <!-- Skins div--> */}
                <div className="col-lg-3 col-md-6  skins">
                    <p className="h3 mb-3">Skins</p>
                    <div className="mb-3">
                        <Link className='secciones' to={"/tienda"}>Todas</Link>
                    </div>

                    <div className="mb-3">
                        <Link className='secciones' to={"/tienda/categoria/rifle"}>Rifles</Link>

                    </div>

                    <div className="mb-3">
                        <Link className='secciones' to={"/tienda/categoria/pistola"}>Pistolas</Link>

                    </div>

                    <div className="mb-3">
                        <Link className='secciones' to={"/tienda/categoria/cuchillo"}>Cuchillos y guantes</Link>

                    </div>
                </div>

                {/* <!--Nosotros div--> */}
                <div className="col-lg-3 col-md-6 col-sm-12 nosotros">
                    <p className="h3">Acerca de Nosotros</p>
                    <p>Somos una tienda de Skins que permanece en el mercado desde abril del 2023,pioneros en ventas online de skins
                        dentro de la escena de CS:GO Argentina. Nos identificamos con la palabra “confiabilidad” ya que siempre fue y es
                        parte de nuestra historia. Si buscas comprar, vender o intercambiar tus skins, contactanos.</p>
                </div>

                {/* <!--Contacto div--> */}
                <div className="col-lg-3 col-md-6 col-sm-12 contacto">
                    <p className="h3">Contacto</p>
                    <div className="mb-3">
                        <p>Nuestras redes oficiales <br /> para poder contactarte <br /> con Nosotros:</p>
                    </div>

                    <div className="nav-links">
                        <ul className="list-unstyled">
                            <li className="px-2"><a href="https://discord.gg/WWyRa9qd6U" target="_blank"><i className="bi bi-discord"></i></a>
                            </li>
                            <li className="px-2"><a href="" target="_blank"><i
                                className="bi bi-facebook"></i></a></li>
                            <li className="px-2"><a href="https://www.instagram.com/ak.store.csgo.ok/" target="_blank"><i
                                className="bi bi-instagram"></i></a></li>
                            <li className="px-2"><a href="https://steamcommunity.com/profiles/76561199104036735/" target="_blank"><i
                                className="bi bi-steam"></i></a></li>
                        </ul>
                    </div>
                </div>

                <hr />
                {/* <!--Derechos--> */}
                <div className="footer-2 text-center">
                    <p className="h6 p-1">© 2023 AK Store todos los derechos reservados.</p>
                </div>
            </footer>
        </>
    )
}
