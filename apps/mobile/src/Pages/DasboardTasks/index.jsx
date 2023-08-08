import { useState } from 'react'
import avatar from '../../assets/avatar.png'

function DasboardTasks() {
  const [check, setCheck] = useState(false)

  function Ischeck(event) {
    setCheck(event.target.checked)
  }

  return (
    <main className="px-4 py-8">
      <section className="flex gap-2 rounded-b-3xl 	">
        <div className="avatar">
          <div className="w-12 ">
            <img src={avatar} alt="exmplo de avatar" />
          </div>
        </div>

        <div className="align flex w-full items-center justify-between">
          <div className="rounded-sm">
            <h3 className="text-base font-normal ">Helou Name</h3>
            <h2 className="text-lg font-bold ">Taks para o dia</h2>
          </div>
          <spam>{/* <AiOutlineSearch size={28} /> */}</spam>
        </div>
      </section>

      <section>
        <h3 className="text-lg">Today Tasks</h3>
        <div>
          <div className="form-control mt-4">
            <label className="my-3 flex cursor-pointer items-center gap-6">
              <input
                onChange={Ischeck}
                type="checkbox"
                checked={check}
                className="checkbox-primary checkbox checkbox-lg"
              />
              <span className={`text-lg ${!check ? '' : 'line-through'}`}>
                Ler 10 páginas
              </span>
            </label>
          </div>
        </div>
      </section>
    </main>
  )
}

export default DasboardTasks
