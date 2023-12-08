import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"

export const Home = () => {

    useEffect(() => {
        document.title = "Inicio | AkStore CSGO"
    }, [])


    return (
        <>
            <div className='main-home'>
                <h1>AK STORE</h1>
                <h3 className='greeting'>La mejor opción para comprar skins de CS:GO en Argentina</h3>
                <p>


                    Si estás buscando skins de CS:GO en Argentina, AK Store es la mejor opción. La tienda ofrece una amplia variedad de skins, un servicio de atención al cliente excelente y precios competitivos.

                    AK Store es la tienda ideal para los jugadores de CS:GO que buscan skins de calidad para mejorar su experiencia de juego.
                </p>

                <div className='buttons'>
                    <Link to={"/tienda"}><button className="carrito-boton">Comprar skins</button></Link>
                    <Link to={"/vender-skins"}><button className="carrito-boton">Vender mis skins</button></Link>
                </div>

            </div>
        </>
    )
}
