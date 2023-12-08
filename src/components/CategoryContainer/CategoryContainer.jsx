import React from 'react'
import "./CategoryContainer.css"
import { Link, useLocation } from 'react-router-dom'
import { armas, estados } from './filters'


export const CategoryContainer = () => {

    const ruta = useLocation();

    return (
        <>
            <div className="section-tienda-contenedor" >



                <h2>Filtros</h2>

                <hr />
                <li className='ruta'>Usted esta en la ruta: <br /> {ruta.pathname}</li>
                <hr />
                <h4>Armas</h4>
                <ul>
                    <li>
                        <Link to={"/tienda"}><p className='arma-estado'>Todos</p></Link>
                    </li>
                    {
                        armas.map((arma) => (
                            <li key={arma.name}>
                                <Link to={`/tienda/categoria/${arma.to}`}>
                                    <p className='arma-estado'>{arma.name}</p>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <hr />
                <h4>Estado</h4>
                <ul>
                    <li>
                        <Link to={"/tienda"}>
                            <p className='arma-estado'>Todos</p>
                        </Link>
                    </li>
                    {estados.map((estado) => (
                        <li key={estado.name}><Link to={`/tienda/estado/${estado.to}`}><p className='arma-estado'>{estado.name}</p></Link></li>
                    ))}


                </ul>
            </div >
        </>
    )
}
