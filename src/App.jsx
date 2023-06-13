import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './pages/About'
import Home from './pages/Home'
import Alert from './components/Alert'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Auth from './components/Auth'
import Footer from './components/Footer'


const App = () => {
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  return (
    <BrowserRouter>
      <Navbar />
      <Alert alert={alert} />
      <Routes>
        <Route exact path='/' element={<Home showAlert={showAlert} />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/signup' element={<SignUp showAlert={showAlert} />} />
        <Route exact path='/login' element={<Login showAlert={showAlert} />} />
        <Route exact path='/auth' element={<Auth showAlert={showAlert} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App