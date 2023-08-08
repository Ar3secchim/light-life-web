import { Outlet } from 'react-router-dom'
import NavBar from '../NavBar'

function PageRoot({ children }) {
  return (
    <main className="container flex h-screen flex-col p-0">
      <div className="flex flex-1 flex-col">
        <Outlet />
        {children}
      </div>

      <div className="flex-2 flex">
        <NavBar />
      </div>
    </main>
  )
}

export default PageRoot
