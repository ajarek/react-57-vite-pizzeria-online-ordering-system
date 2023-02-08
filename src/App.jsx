import { useState, createContext } from 'react'
import Header from './components/Header/Header'
import MenuSection from './components/MenuSection/MenuSection'
import InfoSection from './components/InfoSection/InfoSection'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import FullPageLayout from './components/FullPageLayout/FullPageLayout'
import PizzaId from './components/PizzaId/PizzaId'
import Cart from './components/Cart/Cart'

export const AppContext = createContext()

function App() {
  const [items, setItems] = useState(null)
  const [count, setCount] = useState(1)
  const[addToCart,setAddToCart]=useState(false)
  const[openCart,setOpenCart]=useState(false)
  const valueAll = count * items?.price || 0

  return (
    <div className='App'>
      <AppContext.Provider
        value={{ items, setItems, count, setCount, valueAll,openCart,setOpenCart, addToCart,setAddToCart}}
      >
        {items ? (
          <FullPageLayout>
            <PizzaId />
          </FullPageLayout>
        ) : null}
        <Header />
        <MenuSection />
        <InfoSection />
        <Contact />
        <Footer />
        {openCart?
        <FullPageLayout>
        <Cart/>
        </FullPageLayout>
        :null}
      </AppContext.Provider>
    </div>
  )
}

export default App
