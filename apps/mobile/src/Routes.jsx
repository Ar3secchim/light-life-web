import { Routes, Route } from 'react-router-dom'

import PageInto from './Pages/SignIn/PageInto'
import SignIn from './Pages/SignIn'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PageInto />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  )
}

export default AppRoutes
