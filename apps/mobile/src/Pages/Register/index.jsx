import { Link } from 'react-router-dom'
import Input from '../../Components/Inputs'
import ElipseSuperior from '../../assets/SignIn/elipse-superior.png'

function Register() {
  return (
    <main className="container">
      <img
        className="z-0 relative -top-6 -left-6"
        src={ElipseSuperior}
        alt="Elipses verdes no canto superior esquerdo"
      />
      <section className="relative z-1 -top-6 flex flex-col justify-center items-center">
        <h1 className="text-2xl mb-5 ">Se cadastre aqui</h1>
        <form className="flex flex-col gap-6 mt-4 w-full">
          <Input type="text" placeholder="Primeiro nome" />

          <Input type="password" placeholder="Senha" />

          <Input type="email" placeholder="Email" />

          <Input type="checkbox" placeholder="Aceito Termos e condições" />
        </form>

        <Link className="w-full">
          <button className="btn btn-primary w-full mt-6" type="submit">
            Entrar
          </button>
        </Link>
      </section>
    </main>
  )
}

export default Register
