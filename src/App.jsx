import { useState } from 'react'
import Contact from './compoment/contact'
import Header from './compoment/header'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Header/>
      <Contact/>
    </>
  )
}

export default App
