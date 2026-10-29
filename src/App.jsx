import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import UDashboard from './user/UDashboard'
import ViewProducts from './user/ViewProducts'
import ADashboard from './admin/ADashboard'
import AddProducts from './admin/AddProducts'
import UHome from './user/UHome'
import AHome from './admin/AHome'
import Login from './pages/Login'
import ProductDetail from './user/ProductDetail'
import Manage from './admin/Manage'
import Cart from './user/Cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path="/user" element={<UDashboard></UDashboard>}>
            <Route path="home" element={<UHome></UHome>}></Route>
            <Route path="detail/:pid" element={<ProductDetail></ProductDetail>}></Route>
            <Route path='view' element={<ViewProducts></ViewProducts>}></Route>
            <Route path='cart' element={<Cart></Cart>}></Route>
         
          </Route>
          <Route path='/admin' element={<ADashboard></ADashboard>}>
            <Route path="home" element={<AHome></AHome>}></Route>
            <Route path="manage" element={<Manage></Manage>}></Route> 
            <Route path='add' element={<AddProducts></AddProducts>}></Route>
          </Route>

        </Routes>



      </BrowserRouter>

    </>
  )
}

export default App
