import { ArrowRightCircleIcon } from "lucide-react";
import { Link } from "react-router-dom";

import { routes } from "@app/Router/routes";
import { LayoutRootIntro } from "@views/pages/Layout/layoutIntro";

import IntroOneImg from '@img/IntroOneImg.svg?react';
import SwitchPoint from "@views/components/switch-point";

export function IntroOne() {
  return (
    <LayoutRootIntro>
      <h1 className="text-2xl font-bold text-primary">Como chegar lá?</h1>
      <IntroOneImg />
      <div className="text-md text-center font-semibold text-secondary-dark-500">
        <p className="pb-4">
          Com consistência. Modulando seu ambiente. Fazendo oque precisar ser
          feito mesmo no dias ruins e que está sem motivação!
        </p>
        <p>
          Criando repertorio comportamental no seu cérebro, fazendo que as
          pequenas decisões sejam automáticas!
        </p>
      </div>

      <div className="flex w-full justify-between">
        <SwitchPoint width={40} />
        <Link to={routes.introTwo}>
          <ArrowRightCircleIcon />
        </Link>
      </div>
    </LayoutRootIntro>
  );
}
