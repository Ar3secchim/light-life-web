import { AiOutlineHome, AiOutlineBulb, AiOutlineProfile } from 'react-icons/ai'

function NavBar() {
  return (
    <div className="btm-nav">
      <button>
        <AiOutlineHome />
      </button>
      <button className="active">
        <AiOutlineBulb />
      </button>
      <button>
        <AiOutlineProfile />
      </button>
    </div>
  )
}

export default NavBar
