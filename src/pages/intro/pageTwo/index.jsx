import Link from 'next/link';
import Button from '../../../components/button';
import ArrowCircleRight from '../../../components/icons/arrows/arrow-circle-rigth';
import LayoutRootIntro from '../layout';
import SwitchPoint from '../../../components/icons/switch-point';

function IntroTwo() {
  return (
    <LayoutRootIntro>
      <h1 className='text-2xl font-bold text-primary'>
        Ambiente é a sua chave!
      </h1>

      <div className='text-md text-center font-semibold text-secondary-dark-500'>
        <p className='pb-4'>
          Desenvolva um ambiente que module seu comportamento! Se quer realizar
          exercícios deixa a roupa pronta no dia anterior, que ter alimentação
          saudável?Tenha comida pronta!
        </p>
        <p>
          Tenha pessoas com o mesmo propósito junto com você! E não tenha duvida
          que o <span className='font-bold text-primary'>Light Life</span>{' '}
          estará com você em cada etapa do processo.
        </p>
      </div>

      <div className='flex w-full justify-between'>
        <SwitchPoint width={40} />
        <Button size='md' style='filled'>
          <Link href='/login'>Vou me comprometer</Link>
        </Button>
      </div>
    </LayoutRootIntro>
  );
}

export default IntroTwo;
