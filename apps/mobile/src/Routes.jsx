import { Routes, Route } from 'react-router-dom'

import PageInto from './Pages/SignIn/PageInto'
import SignIn from './Pages/SignIn'
import Home from './Pages/Home'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PageInto />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  )
}

export default AppRoutes
