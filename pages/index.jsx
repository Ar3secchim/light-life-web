import Button from './components/button';
import LayoutRootIntro from './intro/layout';
import Link from 'next/link';

function Home() {
  return (
    <LayoutRootIntro>
      <h1 className='text-xl font-bold'>
        Conquiste seus objetivos com{' '}
        <span className='text-primary'>Ligth Life</span>
      </h1>

      <div className='text-md text-center font-bold text-secondary-dark-500'>
        <p>Você é o que você faz consistentemente.</p>
        <p>
          Quando ciência, comportamento e tecnolofia se encontram, nasce a
          ferramente de gestão para te ajudar no processo de voar alto e leve!
        </p>
      </div>

      <Button size='md' style='filled'>
        <Link href='/intro'>Começar uma nova jornada</Link>
      </Button>
      <Button size='md' style='outline'>
        Já tenho um conta
      </Button>
    </LayoutRootIntro>
  );
}

export default Home;
