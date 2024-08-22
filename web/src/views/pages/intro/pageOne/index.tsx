import { ArrowCircleRight } from "@views/components/arrow-circle-rigth";
import SwitchPoint from "@views/components/switch-point";
import { LayoutRootIntro } from "@views/pages/Layout/layoutIntro";

import { Link } from "react-router-dom";

export function IntroOne() {
  return (
    <LayoutRootIntro>
      <h1 className="text-2xl font-bold text-primary">Como chegar lá?</h1>

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
        <Link href="/intro/pageTwo">
          <ArrowCircleRight width={32} className="fill-none stroke-primary" />
        </Link>
      </div>
    </LayoutRootIntro>
  );
}

