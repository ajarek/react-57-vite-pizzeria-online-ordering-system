import { useState, createContext } from 'react'
import Header from './components/Header/Header'
import MenuSection from './components/MenuSection/MenuSection'
import InfoSection from './components/InfoSection/InfoSection'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import FullPageLayout from './components/FullPageLayout/FullPageLayout'

export const AppContext = createContext()

function App() {
  const [items, setItems] = useState(null);
  return (
    <div className='App'>
      {items?<FullPageLayout/>:null}
      <AppContext.Provider value={{items, setItems}}>
      <Header />
      <MenuSection />
      <InfoSection/>
      <Contact />
     <Footer/>
     </AppContext.Provider>
    </div>
  )
}

export default App
