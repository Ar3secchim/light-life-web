import { Link } from 'react-router-dom'
import Input from '../../Components/Inputs'
import ElipseSuperior from '../../assets/SignIn/elipse-superior.png'
import IlustracaoSignIn from '../../assets/SignIn/ilustratorSingIn.png'

function SignIn() {
  return (
    <main className="container">
      <img
        className="z-0 relative -top-6 -left-6"
        src={ElipseSuperior}
        alt="Elipses verdes no canto superior esquerdo"
      />
      <section className="relative z-1 -top-20 flex flex-col justify-center items-center">
        <h1 className="text-2xl mb-5 ">Seja Bem Vindo</h1>
        <img
          src={IlustracaoSignIn}
          alt="Rapaz em pé parco com camisa branca e calça verde apontando para um gradro branco "
        />

        <form className="flex flex-col gap-6 mt-4 w-full">
          <Input type="text" placeholder="Email" />

          <Input type="password" placeholder="Senha" />
        </form>

        <Link className="text-accent text-base mt-6">Esqueceu a senha?</Link>

        <Link to={'/home'} className="w-full">
          <button className="btn btn-primary w-full mt-6" type="submit">
            Entrar
          </button>
        </Link>

        <p className="text-sm mt-6">
          Não tem uma conta ?
          <Link to={'/register'} className="text-accent text-sm pl-1">
            Cadastra-se aqui
          </Link>
        </p>
      </section>
    </main>
  )
}

export default SignIn
