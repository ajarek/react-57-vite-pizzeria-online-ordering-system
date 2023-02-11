import { useState, createContext } from 'react'
import Header from './components/Header/Header'
import MenuSection from './components/MenuSection/MenuSection'
import InfoSection from './components/InfoSection/InfoSection'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import FullPageLayout from './components/FullPageLayout/FullPageLayout'
import PizzaId from './components/PizzaId/PizzaId'
import Cart from './components/Cart/Cart'
import Alert from './components/Alert/Alert'
import AlertMessage from './components/AlertMessage/AlertMessage'
import Location from './components/Location/Location'
import Payments  from './components/Payments/Payments'
import Summary  from './components/Summary/Summary'

export const AppContext = createContext()

function App() {
  const [items, setItems] = useState(null)
  const [count, setCount] = useState(1)
  const[addToCart,setAddToCart]=useState([])
  const[openCart,setOpenCart]=useState(false)
  const valueAll = count * items?.price || 0
  const[ message,setMessage]=useState(false)
  const[ sendMessage,setSendMessage]=useState(false)
  const [location,setLocation]=useState(false)
  const [openPayments,setOpenPayments]=useState(false)
  const [summary,setSummary]=useState(false)
  const [dataUser,setDataUser]=useState(null)

  return (
    <div className='App'>
      <AppContext.Provider
        value={{ items, setItems, count, setCount, valueAll, openCart, setOpenCart, addToCart,setAddToCart, message, setMessage, location, setLocation, openPayments, setOpenPayments, sendMessage, setSendMessage, summary, setSummary, dataUser,setDataUser}}
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
        {summary?
        <FullPageLayout>
        <Summary/>
        </FullPageLayout>
        :null}
        {message ? 
        <FullPageLayout>
        <Alert message={message} textAlert={'The assortment is already in the cart!'}/>
        </FullPageLayout>
       :null}
       {sendMessage ? 
        <FullPageLayout>
        <AlertMessage textAlert={'Thank you for the information. We will contact you soon.🙂'}/>
        </FullPageLayout>
       :null}
        {location ? 
        <FullPageLayout>
        <Location/>
        </FullPageLayout>
       :null}
       {openPayments ? 
        <FullPageLayout>
        <Payments />
        </FullPageLayout>
       :null}
      </AppContext.Provider>
    </div>
  )
}

export default App
