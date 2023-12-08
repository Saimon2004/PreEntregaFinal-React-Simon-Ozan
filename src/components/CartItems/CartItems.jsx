import React from 'react'
import "./CartItems.css"
import { IoIosCloseCircle } from "react-icons/io";
import { useContext } from 'react';
import { CartContex } from '../../context/CartContex';

export const CartItems = ({ product }) => {

    const { removeItem } = useContext(CartContex)

    return (
        <>
            <div className='cart-items'>
                <img src={product.img} alt={product.nombreSkin} />

                <h4>{product.nombreSkin}</h4>
                <h4>$ {product.precio} </h4>

                <IoIosCloseCircle onClick={() => removeItem(product.id)} size={50} cursor="pointer" />
            </div>
        </>
    )
}
