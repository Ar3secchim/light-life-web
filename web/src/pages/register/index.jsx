'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '../../components/button';
import Field from '../../components/field';
import Input from '../../components/input';
import Label from '../../components/label';

function Register() {
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
    <section className='m-4 mx-6 flex h-screen flex-col items-center justify-center'>
      <h1 className='text-center text-2xl font-extrabold'>
        Bem vindo a bordo!
      </h1>
      <h2 className='mb-8 text-xl font-bold text-primary'>
        Vamos ajudá-lo a seguir seus hábitos
      </h2>

      <FormProvider {...createUserForm}>
        <form
          className='flex w-full flex-col items-center gap-3'
          onSubmit={handleSubmit(onSubmit)}
        >
          <Field>
            <Label htmlFor='email'>Email</Label>
            <Input
              name='email'
              placeholder='email@gmail.com'
              error={errors.email ? 'true' : ''}
            />
          </Field>

          <Field>
            <Label htmlFor='Name'>Nome</Label>
            <Input
              name='name'
              type='name'
              placeholder='Nome Sobrenome'
              error={errors.name ? 'true' : ''}
            />
          </Field>

          <Field>
            <Label htmlFor='password'>Senha</Label>
            <Input
              name='password'
              type='password'
              placeholder='••••••'
              error={errors.password ? 'true' : ''}
            />
          </Field>

          <Field>
            <Label htmlFor='password'>Confirme sua senha</Label>
            <Input
              name='confirmedPassword'
              type='password'
              placeholder='••••••'
              error={errors.confirmedPassword ? 'true' : ''}
            />
          </Field>

          <span className='w-full'>
            <Button asChild variant='link' className='p-2'>
              <Link className='w-fit' href='/'>
                Esqueceu a senha?
              </Link>
            </Button>
          </span>

          <Button type='submit' className='mt-8 w-56'>
            Entrar
          </Button>
        </form>
      </FormProvider>

      <div className='my-4 flex w-full items-center justify-center text-center'>
        <span>Já tem um conta?</span>

        <Button asChild variant='link' className='p-2'>
          <Link href='/login'>Faça seu login.</Link>
        </Button>
      </div>
    </section>
  );
}

export default Register;
