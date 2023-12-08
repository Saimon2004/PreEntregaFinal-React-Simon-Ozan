import { useState, useEffect } from "react"
import { ItemList } from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { getFirestore, collection, getDocs, query, where, orderBy } from "firebase/firestore"
import { LoadingScreen } from "../LoadingScreen/LoadingScreen"

export const ItemListContainer = () => {

    const [products, setProducts] = useState([])

    const [loading, setLoading] = useState(true)

    const { categoria, estado } = useParams()

    useEffect(() => {

        document.title = "Tienda | AkStore CSGO"

        setLoading(true)

        const db = getFirestore()

        const category = categoria
            ? query(collection(db, "productos"),
                where("categoria", "==", categoria),
                orderBy("categoria", "desc"),
                orderBy("enStock", "desc"),
                orderBy("nombreSkin", "asc"),
                orderBy("precio", "desc"))

            : query(collection(db, "productos"),
                orderBy("enStock", "desc"),
                orderBy("categoria", "desc"),
                orderBy("nombreSkin", "asc"), //El codigo hasta aca funciona bien, el precio no lo toma
                orderBy("precio", "desc"))

        const state = estado
            ? query(collection(db, "productos"),
                where("estado", "==", estado),
                orderBy("estado", "desc"),
                orderBy("enStock", "desc"),
                orderBy("nombreSkin", "asc"),
                orderBy("precio", "desc"))

            : query(collection(db, "productos"),
                orderBy("enStock", "desc"),
                orderBy("categoria", "desc"),
                orderBy("nombreSkin", "asc"),
                orderBy("precio", "desc"))

        getDocs(categoria ? category : state)
            .then((res) => {

                // aca hace un .map por que necesita iterar sobre cada producto, si fuera 1 solo, no habria necesidad
                const nuevosProductos = res.docs.map((el) => {
                    const data = el.data()
                    return { id: el.id, ...data }

                })

                setProducts(nuevosProductos)
            })
            .catch((error) => console.log(error))
            .finally(() => {
                setLoading(false)
            })
    }, [categoria, estado])

    return (
        <>
            {loading ? <LoadingScreen changeBg={"../../../public/fondos/Fondo-tienda.jpg"} /> : <ItemList products={products} />}
        </>
    )
}
