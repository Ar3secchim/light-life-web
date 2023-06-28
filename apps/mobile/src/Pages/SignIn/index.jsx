import { Link } from 'react-router-dom'
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
          <div className="form-control">
            <input
              type="text"
              placeholder="Digite seu email?"
              className="input focus:input-accent border-gray-700 "
            />
          </div>

          <div className="form-control">
            <input
              type="text"
              placeholder="Digite sua senha"
              className="input  border-gray-700  focus:input-accent"
            />
          </div>
        </form>

        <Link className="text-accent text-base mt-6">Esqueceu a senha?</Link>

        <Link to={'/home'} className="w-full">
          <button className="btn btn-primary w-full mt-6">Entrar</button>
        </Link>

        <p className="text-sm mt-6">
          Não tem uma conta ?
          <Link className="text-accent text-sm">Cadastra-se aqui</Link>
        </p>
      </section>
    </main>
  )
}

export default SignIn
