import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { z } from 'zod'

import { Button } from '@/Components/ui/button'
import { Input } from '@/Components/ui/input'
import { ChevronLeftIcon } from '@radix-ui/react-icons'

import ElipseSuperior from '../../assets/SignIn/elipse-superior.png'
import IlustracaoSignIn from '../../assets/SignIn/ilustratorSingIn.png'

const schemaSiginUserForm = z.object({
  email: z
    .string()
    .nonempty('o email é obrigatório')
    .email('Formato de email inválido'),
  password: z
    .string()
    .nonempty('A senha é obrigatória')
    .min(6, 'A senha precisa ter no minimo 6 caractéres'),
})

function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schemaSiginUserForm),
  })

  function createUser(data) {
    return <pre>{JSON.stringify(data, null, 2)}</pre>
  }

  return (
    <main className="container">
      <Link to={'/'}>
        <Button variant="ghost" className="absolute left-1 top-2 z-10">
          <ChevronLeftIcon className="h-6 w-6" />
        </Button>
      </Link>

      <img
        className="relative -left-8 z-0"
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
          onSubmit={handleSubmit(createUser)}
          className="mt-4 flex w-full flex-col gap-6"
        >
          <Input {...register('email')} type="Email" placeholder="Email" />

          {errors.email && (
            <span className="-mt-4 text-xs">{errors.email.message}</span>
          )}

          <Input
            type="password"
            placeholder="password"
            {...register('password')}
          />

          {errors.password && (
            <span className="-mt-4 text-xs">{errors.password.message}</span>
          )}

          <Button variant="link" className="decoration-emerald-900">
            Esqueceu a senha?
          </Button>

          <Link to={'/user'} className="w-full">
            <Button size="lg" type="submit" className="w-full">
              Entrar
            </Button>
          </Link>
        </form>

        <p className="mt-6 text-sm">
          Não tem uma conta ?
          <Link
            to={'/register'}
            className="pl-1 text-sm underline decoration-emerald-900"
          >
            Cadastra-se aqui
          </Link>
        </p>
      </section>
    </main>
  )
}

export default SignIn
