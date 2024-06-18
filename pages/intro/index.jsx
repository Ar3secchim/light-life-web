import Link from 'next/link';
import Button from '../components/button';
import LayoutRootIntro from './layout';
import ArrowCircleRight from '../components/icons/arrows/arrow-circle-rigth';
import SwitchPoint from '../components/icons/switch-point';

function Intro() {
  return (
    <LayoutRootIntro>
      <h1 className='text-center text-2xl font-bold text-primary'>
        Começando pelo o começo
      </h1>

      <div className='text-md text-center font-semibold text-secondary-dark-500'>
        <p className='pb-4'>
          Primeiro você tem que decidir aonde quer chegar. Com isso claro, damos
          o primeiro passo de uma longa maratona que se chama vida.
        </p>
        <p>
          Começa a melhor parte: descobrir que a vida não é uma corrida de 100
          metro!
        </p>
      </div>

      <div className='flex w-full justify-between'>
        <SwitchPoint width={40} />
        <Link href='/intro/pageOne'>
          <ArrowCircleRight width={32} className='fill-none stroke-primary' />
        </Link>
      </div>
    </LayoutRootIntro>
  );
}

export default Intro;
