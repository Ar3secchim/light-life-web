import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import Button from './button';
import Link from 'next/link';

function Form({ onSubmit, ...props }) {
  const schemaCreateUserForm = z.object({
    email: z
      .string()
      .min(1, { message: 'email obrigátorio' })
      .email('Formato de email inválido'),
    password: z.string().trim().min(6, {
      message: 'A senha deve ter pelo menos 6 caractéres.',
    }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schemaCreateUserForm),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  return (
    <form
      className='flex w-full flex-col items-center gap-3'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className='flex w-full flex-col gap-2 font-normal'>
        <label className='text-base font-medium text-secondary'>Email</label>
        <input
          className={`h-10 rounded-lg border bg-white px-2 font-sans font-light placeholder-secondary-dark-200 ${errors.email ? 'border-error text-error focus:border-error focus:outline-error' : 'border-secondary-dark-100 focus:outline-primary'}`}
          placeholder='email@email.com'
          {...register('email')}
        />
        {
          <span className='font-sans text-sm text-error'>
            {errors.email?.message}
          </span>
        }
      </div>

      <div className='flex w-full flex-col gap-2 font-normal'>
        <label className='text-base font-medium text-secondary'>Senha</label>
        <input
          type='password'
          {...register('password')}
          className={`h-10 rounded-lg border bg-white px-2 font-sans font-light placeholder-secondary-dark-200 ${errors.password ? 'border-error text-error focus:border-error focus:outline-error' : 'border-secondary-dark-100 focus:outline-primary'}`}
        />
        {
          <span className='font-sans text-sm text-error'>
            {errors.password?.message}
          </span>
        }
      </div>

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
  );
}

export default Form;
