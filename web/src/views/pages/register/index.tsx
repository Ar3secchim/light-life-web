import { routes } from '@app/Router/routes';
import { zodResolver } from '@hookform/resolvers/zod';
import { Field } from '@views/components/field';
import { Button } from '@views/components/ui/button';
import { Input } from '@views/components/ui/input';
import { FormProvider, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { z } from 'zod';

const schemaCreateUserForm = z
  .object({
    name: z
      .string()
      .min(3, { message: 'nome dever ter pelo menos 3 caractéres' }),
    email: z
      .string()
      .min(1, { message: 'email obrigátorio' })
      .email('Formato de email inválido'),
    password: z.string().trim().min(6, {
      message: 'A senha deve ter pelo menos 6 caractéres.',
    }),
    confirmedPassword: z.string().trim().min(6, {
      message: 'A senha deve ter pelo menos 6 caractéres.',
    }),
  })
  .refine((data) => data.password === data.confirmedPassword, {
    message: 'Senhas não conferem',
    path: ['confirmedPassword'],
  });

export function Register() {
  const createUserForm = useForm({
    resolver: zodResolver(schemaCreateUserForm),
    mode: 'onSubmit',
  });

  const onSubmit = (data) => console.log(data);

  const {
    handleSubmit,
    formState: { errors },
  } = createUserForm;

  return (
    <section className="m-4 mx-6 flex h-screen flex-col items-center justify-center">
      <h1 className="text-center text-2xl font-extrabold">
        Bem vindo a bordo!
      </h1>
      <h2 className="mb-8 text-xl font-bold text-primary">
        Vamos ajudá-lo a seguir seus hábitos
      </h2>

      <FormProvider {...createUserForm}>
        <form
          className="flex w-full flex-col items-center gap-3"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Field>
            <Input
              label='Email'
              name="email"
              placeholder="email@gmail.com"
              error={errors.email ? true : false}
            />
          </Field>

          <Field>
            <Input
              label='Nome'
              name="name"
              type="name"
              placeholder="Nome e Sobrenome"
              error={errors.name ? true : false}
            />
          </Field>

          <Field>
            <Input
              label='Senha'
              name="password"
              type="password"
              placeholder="••••••"
              error={errors.password ? true : false}
            />
          </Field>

          <Field>
            <Input
              label='Confirme sua senha'
              name="confirmedPassword"
              type="password"
              placeholder="••••••"
              error={errors.confirmedPassword ? true : false}
            />
          </Field>

          <span className="w-full">
            <Button asChild variant="link" className="p-2">
              <Link className="w-fit" to="/">
                Esqueceu a senha?
              </Link>
            </Button>
          </span>

          <Button type="submit" className="mt-8 w-56">
            Entrar
          </Button>
        </form>
      </FormProvider>

      <div className="my-4 flex w-full items-center justify-center text-center">
        <span>Já tem um conta?</span>

        <Button asChild variant="link" className="p-2">
          <Link to={routes.login}>Faça seu login.</Link>
        </Button>
      </div>
    </section>
  );
}
