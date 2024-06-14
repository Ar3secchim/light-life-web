import Link from 'next/link';
import Button from '../../components/button';
import ArrowCircleRight from '../../components/icons/arrows/arrow-circle-rigth';
import LayoutRootIntro from '../layout';
import SwitchPoint from '../../components/icons/switch-point';

function IntroTwo() {
  return (
    <LayoutRootIntro>
      <h1 className='text-xl font-bold'>Ambiente é a sua chave!</h1>

      <div className='text-md text-center font-bold text-secondary-dark-500'>
        <p>
          Com consistência. Modulando seu ambiente. Fazendo oque precisar ser
          feito mesmo no dias ruins e que está sem motivação!
        </p>
        <p>
          Criando repertorio comportamental no seu cérebro, fazendo que as
          pequenas decisões sejam automáticas!
        </p>
      </div>

      <div className='flex w-full justify-between'>
        <SwitchPoint width={40} />
        <Button size='md' style='filled' className='bg-secondary-dark-800'>
          <Link href='/'>Vou me comprometer</Link>
        </Button>
      </div>
    </LayoutRootIntro>
  );
}

export default IntroTwo;
