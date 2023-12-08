import { CategoryContainer } from "../CategoryContainer/CategoryContainer";
import { Item } from "../Item/Item"

export const ItemList = ({ products }) => {
    return (
        <>
            <main>
                <CategoryContainer />

                <ul className='ul-main'>
                    {products.length > 0 ?
                        products.map((el) => (
                            <Item key={el.id} product={el} />
                        )
                        )
                        :
                        <h1>No se encontraron los productos</h1>
                    }
                </ul>
            </main>
        </>
    )
};
