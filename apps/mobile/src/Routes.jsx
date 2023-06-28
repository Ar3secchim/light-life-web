import { Routes, Route } from 'react-router-dom'

import PageInto from './Pages/SignIn/PageInto'
import SignIn from './Pages/SignIn'
import Home from './Pages/Home'
import Register from './Pages/Register'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PageInto />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/home" element={<Home />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default AppRoutes
