import { useContext, useState, useEffect } from "react"
import { collection, doc, addDoc, getDoc, updateDoc, getFirestore } from "firebase/firestore"
import { useForm } from "react-hook-form"
import { CartContex } from "../../context/CartContex"
import "./CheckOut.css"

export const CheckOut = () => {

    const [ordenId, setOrdenId] = useState("")

    const { register, handleSubmit, formState: { errors }, reset } = useForm()

    const { cart, finalPrice, clearCart } = useContext(CartContex)

    useEffect(() => {
        document.title = "CheckOut | AkStore CSGO"
    }, [])

    const submit = ({
        nombre,
        apellido,
        telefono,
        email
    }, event) => {

        event.preventDefault()

        const db = getFirestore()

        const orden = {
            items: cart.map((producto) => ({
                id: producto.producto.id,
                nombre: producto.producto.nombreSkin,
                cantidad: producto.cantidad

            })),
            total: finalPrice(),
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        }

        //generamos la logica para el orden y reduccion del stock
        //hacemos un .map por que se utiliza para actualizar el stock de los productos comprados en la base de datos.
        Promise.all(
            orden.items.map(async (productoOrden) => {

                const productoRef = doc(db, "productos", productoOrden.id)
                const productoDoc = await getDoc(productoRef)
                const stockActual = productoDoc.data().cantidad


                //reducimos el stock
                await updateDoc(productoRef, {
                    cantidad: stockActual - productoOrden.cantidad,
                    enStock: false
                })
            })
        )

            // cuando termino de llenar el formulario me da un id, ese id es porque aca en estas lineas, crea la coleccion ordenes y anade un id a ese documento
            .then(() => {
                addDoc(collection(db, "ordenes"), orden)
                    .then((docRef) => {
                        setOrdenId(docRef.id)
                        clearCart()
                        reset()
                    })
            })
            .catch((error) => {
                console.log(error)
            })
            .catch((error) => {
                console.log(error)
            })
    }



    return (
        <main className="formulario-layout">
            <div className="formulario-contenedor">
                <h1 className="formulario-titulo">Armado del formulario</h1>

                <form className="formulario" onSubmit={handleSubmit(submit)}>
                    <div className="input-contenedor">

                        <label htmlFor="nombre">Nombre</label>
                        <input className="input" {...register("nombre", {
                            required: {
                                value: true,
                                message: "Nombre es requerido"
                            },
                            minLength: {
                                value: 3,
                                message: "El nombre debe tener al menos 3 caracteres"
                            },
                            maxLength: {
                                value: 20,
                                message: "El Nombre no puede tener mas de 20 caracteres"
                            },

                            pattern: {
                                value: /^[A-Za-z]+$/,
                                message: "El nombre debe tener solo letras"
                            },

                            validate: (value, formValue) => value !== formValue.apellido || `El nombre y el apellido no pueden ser iguales`,

                        })} />
                        {errors.nombre && <p className="mensaje-error">{errors.nombre.message}</p>}

                    </div>

                    <div className="input-contenedor">

                        <label htmlFor="apellido">Apellido</label>
                        <input className="input" {...register("apellido", {
                            required: {
                                value: true,
                                message: "Apellido es requerido"
                            },
                            minLength: {
                                value: 3,
                                message: "El apellido debe tener al menos 3 caracteres"
                            },

                            maxLength: {
                                value: 20,
                                message: "El Apellido no puede tener mas de 20 caracteres"
                            },

                            pattern: {
                                value: /^[A-Za-z ]+$/,
                                message: "El apellido debe tener solo letras"
                            },

                            validate: (value, formValue) => value !== formValue.nombre || `El nombre y el apellido no pueden ser iguales`,




                        })} />
                        {errors.apellido && <p className="mensaje-error">{errors.apellido.message}</p>}

                    </div>

                    <div className="input-contenedor">

                        <label htmlFor="telefono">Telefono</label>
                        <input className="input" {...register("telefono", {
                            required: {
                                value: true,
                                message: "Telefono es requerido"
                            },

                            minLength: {
                                value: 8,
                                message: "El telefono debe tener minimamente 8 numeros"
                            },

                            maxLength: {
                                value: 15,
                                message: "El telefono no puede tener mas de 15 caracteres"
                            },

                            pattern: {
                                value: /^[0-9]+$/,
                                message: "Debe tener solo numeros y no tener ningun espacio"
                            }

                        })} />
                        {errors.telefono && <p className="mensaje-error">{errors.telefono.message}</p>}

                    </div>

                    <div className="input-contenedor">

                        <label htmlFor="email">Email</label>
                        <input className="input" {...register("email", {
                            required: {
                                value: true,
                                message: "Email es requerido"
                            },
                            maxLength: {
                                value: 50,
                                message: "No puede pasarse de los 50 caracteres"
                            },
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: "Debe de ser un email valido"
                            }
                        })} />
                        {errors.email && <p className="mensaje-error">{errors.email.message}</p>}

                    </div>

                    <div className="input-contenedor">

                        <label htmlFor="confirmar">Email de confirmacion</label>
                        <input className="input" {...register("confirmar", {
                            required: {
                                value: true,
                                message: "El confirmar debe ser requerido"
                            },
                            validate: (value, formValue) => value === formValue.email || `Los emails no coinciden`
                        })} />
                        {errors.confirmar && <p className="mensaje-error">{errors.confirmar.message}</p>}

                    </div>

                    <div className="separador espaciado">
                        <button type="submit">Comprar</button>
                        <p className="m-0"><b>Precio final: ${finalPrice()}</b></p>
                    </div>

                    {
                        ordenId && (

                            <p className="ticket">
                                GRACIAS POR TU COMPRA TU NUMERO DE ID ES: {ordenId}
                            </p>
                        )
                    }
                </form>
            </div>
        </main>
    )
}