import { createContext, useState } from "react";

export const CartContex = createContext()

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const addToCart = (producto, cantidad) => {
        if (!isInCart(producto.id)) {
            setCart((el) => [...el, { producto, cantidad }])

            {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })
                Toast.fire({
                    icon: 'success',
                    title: 'El producto se ha añadido con exito'
                });
            }
        } else {
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })

            Toast.fire({
                icon: 'error',
                title: 'El producto ya está añadido al carrito'
            });
        }
    }

    const isInCart = (itemId) => {
        return cart.some((el) => el.producto.id === itemId)
    }

    const getTotalItems = () => {
        let total = 0
        cart.forEach((el) => total += el.cantidad)
        return total
    }

    const finalPrice = () => {
        let total = 0
        cart.forEach((el) => total = total + el.producto.precio)
        return total
    }

    //trae todos los elementos diferentes al id que clickeaste
    const removeItem = (id) => {
        const filtarCarrito = cart.filter((el) => el.producto.id !== id)
        setCart(filtarCarrito)
    }

    const clearCart = () => {
        setCart([])
    }


    return (
        <CartContex.Provider value={
            {
                cart,
                setCart,
                addToCart,
                isInCart,
                getTotalItems,
                finalPrice,
                removeItem,
                clearCart
            }
        }>
            {children}
        </CartContex.Provider>
    )
}

