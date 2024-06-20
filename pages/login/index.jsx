import Link from 'next/link';
import Button from '../components/button';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Form from '../components/form';
import ArrowCircleRight from '../components/icons/arrows/arrow-circle-rigth';
import GoogleLogo from '../components/icons/google-logo';
import AppleLogo from '../components/icons/apple-logo';

function Login() {
  const onSubmit = (data) => console.log(data);

  return (
    <section className='m-4 mx-6 flex h-screen flex-col items-center justify-center'>
      <h1 className='my-8 text-center text-2xl font-extrabold'>
        Bem vindo ao <span className='text-primary'>Ligth Life</span>
      </h1>

      <Form onSubmit={onSubmit} />

      <span className='m-4 flex items-center font-display'>
        Já tem uma conta?
        <Button size='sm' style='link' className='font-display'>
          <span> Criar uma conta.</span>
        </Button>
      </span>

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
