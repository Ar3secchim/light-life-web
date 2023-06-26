import { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import NavBar from '../../Components/NavBar'
import avatar from '../../assets/avatar.png'

function Home() {
  const [check, setCheck] = useState(false)

  function Ischeck(event) {
    setCheck(event.target.checked)
  }

  return (
    <>
      <div className="flex bg-primary py-8 px-4 gap-2 rounded-b-3xl	">
        <div className="avatar">
          <div className="w-12 ">
            <img src={avatar} alt="exmplo de avatar" />
          </div>
        </div>

        <div className="flex justify-between align items-center w-full">
          <div className="rounded-sm">
            <h3 className="font-normal text-base ">Helou Name</h3>
            <h2 className="font-bold text-lg ">Taks para o dia</h2>
          </div>
          <spam>
            <AiOutlineSearch size={28} />
          </spam>
        </div>
      </div>

      <section className="container mt-8">
        <h3 className="text-lg">Today Tasks</h3>
        <div>
          <div className="form-control mt-4">
            <label className="cursor-pointer flex items-center gap-6 my-3">
              <input
                onChange={Ischeck}
                type="checkbox"
                checked={check}
                className="checkbox checkbox-lg checkbox-primary"
              />
              <span className={`text-lg ${!check ? '' : 'line-through'}`}>
                Ler 10 páginas
              </span>
            </label>

            <label className="cursor-pointer flex items-center gap-6 my-3">
              <input
                onClick={(event) => setCheck(event.target.value)}
                type="checkbox"
                checked=""
                className="checkbox checkbox-lg checkbox-primary"
              />
              <p className="text-lg">Rotina matinal</p>
            </label>
          </div>
        </div>
      </section>
      <NavBar />
    </>
  )
}

export default Home
