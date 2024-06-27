import Link from 'next/link';
import Button from '../components/button';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import GoogleLogo from '../components/icons/google-logo';
import AppleLogo from '../components/icons/apple-logo';
import { Form } from '../components/form';
import { FormProvider, useForm } from 'react-hook-form';

function Login() {
  const schemaCreateUserForm = z.object({
    email: z
      .string()
      .min(1, { message: 'email obrigátorio' })
      .email('Formato de email inválido'),
    password: z.string().trim().min(6, {
      message: 'A senha deve ter pelo menos 6 caractéres.',
    }),
  });

  const createUserForm = useForm({
    resolver: zodResolver(schemaCreateUserForm),
    mode: 'onSubmit',
  });

  const onSubmit = (data) => console.log(data);

  return (
    <section className='m-4 mx-6 flex h-screen flex-col items-center justify-center'>
      <h1 className='my-8 text-center text-2xl font-extrabold'>
        Bem vindo ao <span className='text-primary'>Ligth Life</span>
      </h1>

      <FormProvider {...createUserForm}>
        <form
          className='flex w-full flex-col items-center gap-3'
          onSubmit={createUserForm.handleSubmit(onSubmit)}
        >
          <Form.Field>
            <Form.Label>Email</Form.Label>
            <Form.Input
              name='email'
              placeholder='email@gmail.com'
              error={createUserForm.formState.errors.email ? 'true' : ''}
            />
          </Form.Field>

          <Form.Field>
            <Form.Label>Senha</Form.Label>
            <Form.Input
              name='password'
              type='password'
              placeholder='••••••'
              error={createUserForm.formState.errors.password ? 'true' : ''}
            />
          </Form.Field>

          <span className='w-full'>
            <Button
              size='sm'
              style='link'
              className='m-2 justify-start p-0 font-display'
            >
              <Link className='w-fit' href='/'>
                Esqueceu a senha?
              </Link>
            </Button>
          </span>

          <Button size='md' style='filled' className='mt-8 w-56' type='submit'>
            Entrar
          </Button>
        </form>
      </FormProvider>

      <div className='my-4 flex items-center'>
        <span className=''>Novo no Ligth Life?</span>
        <Button
          size='sm'
          style='link'
          className='font-display underline underline-offset-2'
        >
          <Link href='/register'> Criar sua conta</Link>
        </Button>
      </div>

      <div className='flex gap-4'>
        <Button
          style='icon'
          className='rounded-2xl border border-secondary-dark-100 hover:bg-secondary-dark-100'
        >
          <GoogleLogo />
        </Button>

        <Button
          style='icon'
          className='rounded-2xl border border-secondary-dark-100 p-3 hover:bg-secondary-dark-100'
        >
          <AppleLogo />
        </Button>
      </div>
    </section>
  );
}

export default Login;
