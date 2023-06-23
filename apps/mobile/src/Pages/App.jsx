import { AiOutlineHome, AiOutlineBulb, AiOutlineProfile } from 'react-icons/ai'
function App() {
  return (
    <>
      <span className="font-poppins flex items-center text-3xl text-primary">
        Hellou Word!!
      </span>
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
    </>
  )
}

export default App
