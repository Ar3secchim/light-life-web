import {
  AiOutlineCalendar,
  AiOutlineFileDone,
  AiOutlineHome,
  AiOutlineUser,
} from 'react-icons/ai'

function NavBar() {
  return (
    <div className="btm-nav  btm-nav-md bg-primary rounded-t-3xl">
      <button>
        <AiOutlineHome size={22} />
        <span className="text-sm">Home </span>
      </button>
      <button className="active text-primary font-bold">
        <AiOutlineFileDone size={22} />
        <span className="text-sm">Taks</span>
      </button>
      <button>
        <AiOutlineCalendar size={22} />
        <span className="text-sm">Calendário</span>
      </button>
      <button>
        <AiOutlineUser size={22} />
        <span className="text-sm">Perfil</span>
      </button>
    </div>
  )
}

export default NavBar
