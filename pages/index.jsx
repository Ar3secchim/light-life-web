import Button from './components/button';
import Link from 'next/link';

function Index() {
  return (
    <section className='mx-6 flex h-screen flex-col items-center justify-center gap-7'>
      <h1 className='text-center text-2xl font-extrabold'>
        Conquiste seus objetivos com{' '}
        <span className='text-primary'>Ligth Life</span>
      </h1>

      <div className='text-md text-center font-semibold text-secondary-dark-500'>
        <p>Você é o que você faz consistentemente.</p>
        <p>
          Quando ciência, comportamento e tecnolofia se encontram, nasce a
          ferramente de gestão para te ajudar no processo de voar alto e leve!
        </p>
      </div>

      <Button size='md' style='filled' className='w-full'>
        <Link href='/intro'>Começar uma nova jornada</Link>
      </Button>
      <Button size='md' style='outline' className='w-full'>
        <Link href='/login'> Já tenho um conta</Link>
      </Button>
    </section>
  );
}

export default Index;
