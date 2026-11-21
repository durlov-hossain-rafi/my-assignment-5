import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import Main from './Components/Main'
import { ToastContainer } from 'react-toastify'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Banner/>
    <Main/>
    <Footer/>
    <ToastContainer/>
    </>
  )
}

export default App
