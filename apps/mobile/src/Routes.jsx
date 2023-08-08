import { Route, Routes } from 'react-router-dom'

import PageRoot from './Components/PageRoot'
import DasboardTasks from './Pages/DasboardTasks'
import Register from './Pages/Register'
import SignIn from './Pages/SignIn'
import PageInto from './Pages/SignIn/PageInto'
import DasboardCalendar from './Pages/DasboardCalendar'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/user" element={<PageRoot />}>
        <Route index element={<DasboardTasks />} />
        <Route path="calendar" element={<DasboardCalendar />} />
      </Route>

      <Route path="/" element={<PageInto />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default AppRoutes
