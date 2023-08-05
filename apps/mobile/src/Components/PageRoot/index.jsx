import { Outlet } from "react-router-dom"
import NavBar from '../NavBar'

function PageRoot({children}) {
  return (
    <main className="container p-0 h-screen flex flex-col"> 
      <div className="flex flex-col flex-1">
				<Outlet />
				{children}
			</div>

      <div className="flex flex-2">
       <NavBar />
      </div>
    </main>
  )
}

export default PageRoot
