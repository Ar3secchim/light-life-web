import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { z } from 'zod'

import { Button } from '@/Components/ui/button'
import { Checkbox } from '@/Components/ui/checkbox'
import { Input } from '@/Components/ui/input'
import { ChevronLeftIcon } from '@radix-ui/react-icons'

import ElipseSuperior from '../../assets/SignIn/elipse-superior.png'

const schemaCreateUserForm = z.object({
  name: z.string().min(2, 'Pelo menos 2 caractéres').nonempty(),
  email: z
    .string()
    .nonempty('o email é obrigatório')
    .email('Formato de email inválido'),
  password: z
    .string()
    .nonempty('A senha é obrigatória')
    .min(6, 'A senha precisa ter no minimo 6 caractéres'),
  checkbox: z.boolean(),
})

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schemaCreateUserForm),
  })

  function createUser(data) {
    console.log(JSON.stringify(data, null, 2))
    console.log(errors)
  }

  return (
    <main className="container">
      <Link to={'/signin'}>
        <Button variant="ghost" className="absolute left-1 top-2 z-10">
          <ChevronLeftIcon className="h-6 w-6" />
        </Button>
      </Link>

      <img
        className="relative -left-8 z-0"
        src={ElipseSuperior}
        alt="Elipses verdes no canto superior esquerdo"
      />

      <section className="z-1 relative -top-6 flex flex-col items-center justify-center">
        <h1 className="mb-5 text-2xl ">Se cadastre aqui</h1>
        <form
          onSubmit={handleSubmit(createUser)}
          className="mt-4 flex w-full flex-col gap-6"
        >
          <Input
            {...register('name')}
            type="text"
            placeholder="Primeiro nome"
          />
          {errors.name && (
            <span className="-mt-4 text-xs">{errors.name.message}</span>
          )}

          <Input {...register('email')} type="email" placeholder="Email" />
          {errors.email && (
            <span className="-mt-4 text-xs">{errors.email.message}</span>
          )}

          <Input
            {...register('password')}
            type="password"
            placeholder="Senha"
          />
          {errors.password && (
            <span className="-mt-4 text-xs">{errors.password.message}</span>
          )}
          <label className=" flex justify-center">
            <Checkbox {...register('checkbox')} type="checkbox" />
            <span className="label-text pl-4">Aceito Termos e condições</span>
          </label>
          {/* {errors.checkbox && <span>{errors.checkbox.message}</span>} */}

          <Button className="btn-primary btn mt-6 w-full" type="submit">
            Cadastrar
          </Button>
        </form>
      </section>
    </main>
  )
}

export default Register
