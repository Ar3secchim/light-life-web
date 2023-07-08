import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import * as yup from 'yup'

import Input from '../../Components/Inputs'
import ElipseSuperior from '../../assets/SignIn/elipse-superior.png'
import IlustracaoSignIn from '../../assets/SignIn/ilustratorSingIn.png'

const schema = yup
  .object({
    email: yup.string().required(),
    password: yup.number().required(),
  })
  .required()

function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const onSubmit = (data) => console.log(data)

  return (
    <main className="container">
      <img
        className="relative -left-6 -top-6 z-0"
        src={ElipseSuperior}
        alt="Elipses verdes no canto superior esquerdo"
      />
      <section className="z-1 relative -top-24 flex flex-col items-center justify-center">
        <h1 className="mb-5 text-2xl ">Seja Bem Vindo</h1>
        <img
          src={IlustracaoSignIn}
          alt="Rapaz em pé parco com camisa branca e calça verde apontando para um gradro branco "
        />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-4 flex w-full flex-col gap-6"
        >
          <Input {...register('email')} type="text" placeholder="Email" />
          <p>{errors.email?.message}</p>

          <Input
            {...register('password')}
            type="password"
            placeholder="Senha"
          />
          <p>{errors.password?.message}</p>
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
