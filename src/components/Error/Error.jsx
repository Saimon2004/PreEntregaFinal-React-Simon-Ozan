import React from 'react'
import "./Error.css"
import { Link } from 'react-router-dom'

export const Error = () => {
  return (
    <div className='error'>
      <h1>Página no encontrada</h1>

      <Link to={"/tienda"}><button className="carrito-boton">Tienda de skins</button></Link>
    </div>
  )
}
