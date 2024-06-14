import Link from 'next/link';
import ArrowCircleRight from '../../components/icons/arrows/arrow-circle-rigth';
import SwitchPoint from '../../components/icons/switch-point';
import LayoutRootIntro from '../layout';

function IntroOne() {
  return (
    <LayoutRootIntro>
      <h1 className='text-xl font-bold'>Como chegar lá?</h1>

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
        <Link href='/intro/pageTwo'>
          <ArrowCircleRight width={32} className='fill-none stroke-primary' />
        </Link>
      </div>
    </LayoutRootIntro>
  );
}

export default IntroOne;
