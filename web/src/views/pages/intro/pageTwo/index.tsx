import { routes } from '@app/Router/routes';
import SwitchPoint from '@views/components/switch-point';
import { Button } from '@views/components/ui/button';

import { LayoutRootIntro } from '@views/pages/Layout/layoutIntro';
import { Link } from 'react-router-dom';

export function IntroTwo() {
  return (
    <LayoutRootIntro>
      <h1 className="text-2xl font-bold text-primary">
        Ambiente é a sua chave!
      </h1>

      <div className="text-md text-secondary-dark-500 text-center font-semibold">
        <p className="pb-4">
          Desenvolva um ambiente que module seu comportamento! Se quer realizar
          exercícios deixa a roupa pronta no dia anterior, que ter alimentação
          saudável?Tenha comida pronta!
        </p>
        <p>
          Tenha pessoas com o mesmo propósito junto com você! E não tenha duvida
          que o
          <span className="font-bold text-primary">Light Life</span>
          estará com você em cada etapa do processo.
        </p>
      </div>

      <div className="flex w-full justify-between">
        <SwitchPoint width={40} />
        <Button size="sm" className="px-4">
          <Link to={routes.login}>Vou me comprometer</Link>
        </Button>
      </div>
    </LayoutRootIntro>
  );
}
