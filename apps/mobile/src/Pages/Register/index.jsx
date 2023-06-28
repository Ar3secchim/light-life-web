import { Link } from 'react-router-dom'
import Input from '../../Components/Inputs'
import ElipseSuperior from '../../assets/SignIn/elipse-superior.png'

function Register() {
  return (
    <main className="container">
      <img
        className="relative -left-6 -top-6 z-0"
        src={ElipseSuperior}
        alt="Elipses verdes no canto superior esquerdo"
      />
      <section className="z-1 relative -top-6 flex flex-col items-center justify-center">
        <h1 className="mb-5 text-2xl ">Se cadastre aqui</h1>
        <form className="mt-4 flex w-full flex-col gap-6">
          <Input type="text" placeholder="Primeiro nome" />

          <Input type="password" placeholder="Senha" />

          <Input type="email" placeholder="Email" />

          <Input type="checkbox" placeholder="Aceito Termos e condições" />
        </form>

        <Link className="w-full">
          <button className="btn-primary btn mt-6 w-full" type="submit">
            Entrar
          </button>
        </Link>
      </section>
    </main>
  )
}

export default Register
