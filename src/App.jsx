import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Login'
import UDashboard from './user/UDashboard'
import ViewProducts from './user/ViewProducts'
import ADashboard from './admin/ADashboard'
import AddProducts from './admin/AddProducts'
import UHome from './user/UHome'
import AHome from './admin/AHome'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path="/user" element={<UDashboard></UDashboard>}>
      <Route path="home" element={<UHome></UHome>}></Route>
      <Route path='view' element={<ViewProducts></ViewProducts>}></Route>
      </Route>
      <Route path='/admin' element={<ADashboard></ADashboard>}>
        <Route path="home" element={<AHome></AHome>}></Route>
        <Route path='add' element={<AddProducts></AddProducts>}></Route>
      </Route>

    </Routes>
    
    
    
    </BrowserRouter>

    </>
  )
}

export default App
