import { Home } from './components/Home/Home'
import { NavBar } from './components/NavBar/NavBar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { Footer } from './components/Footer/Footer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Error } from './components/Error/Error'
import { SellSkins } from './components/SellSkins/SellSkins'
import { Contact } from './components/Contact/Contact'

import { CartProvider } from './context/CartContex'
import { Cart } from './components/Cart/Cart'
import { CheckOut } from './components/CheckOut/CheckOut'

function App() {
  return (
    <>
      <BrowserRouter>

        <CartProvider>

          <NavBar />

          <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/tienda' element={<ItemListContainer />} />
            <Route path='/tienda/categoria/:categoria' element={<ItemListContainer />} />
            <Route path='/tienda/estado/:estado' element={<ItemListContainer />} />
            <Route path='/item/:idProduct' element={<ItemDetailContainer />} />

            <Route path='/vender-skins' element={<SellSkins />} />
            <Route path='/contacto' element={< Contact />} />

            <Route path='/carrito' element={<Cart />} />
            <Route path='/checkout' element={<CheckOut />} />
            <Route path='*' element={<Error />} />

          </Routes>

          <Footer />

        </CartProvider>

      </BrowserRouter>
    </>
  )
}

export default App
