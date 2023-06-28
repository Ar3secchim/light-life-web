import { Link } from 'react-router-dom'
import Input from '../../Components/Inputs'
import ElipseSuperior from '../../assets/SignIn/elipse-superior.png'
import IlustracaoSignIn from '../../assets/SignIn/ilustratorSingIn.png'

function SignIn() {
  return (
    <main className="container">
      <img
        className="relative -left-6 -top-6 z-0"
        src={ElipseSuperior}
        alt="Elipses verdes no canto superior esquerdo"
      />
      <section className="z-1 relative -top-20 flex flex-col items-center justify-center">
        <h1 className="mb-5 text-2xl ">Seja Bem Vindo</h1>
        <img
          src={IlustracaoSignIn}
          alt="Rapaz em pé parco com camisa branca e calça verde apontando para um gradro branco "
        />

        <form className="mt-4 flex w-full flex-col gap-6">
          <Input type="text" placeholder="Email" />

          <Input type="password" placeholder="Senha" />
        </form>

        <Link className="mt-6 text-base text-accent">Esqueceu a senha?</Link>

        <Link to={'/home'} className="w-full">
          <button className="btn-primary btn mt-6 w-full" type="submit">
            Entrar
          </button>
        </Link>

        <p className="mt-6 text-sm">
          Não tem uma conta ?
          <Link to={'/register'} className="pl-1 text-sm text-accent">
            Cadastra-se aqui
          </Link>
        </p>
      </section>
    </main>
  )
}

export default SignIn
