import { routes } from "@app/Router/routes";
import { CircleChevronRight } from 'lucide-react';

import { Link } from "react-router-dom";
import { LayoutRootIntro } from "../Layout/layoutIntro";

import SwitchPoint from "@views/components/switch-point";

export function Intro() {
  return (
    <LayoutRootIntro>
      <h1 className="text-center text-2xl font-bold text-primary font-SFRoud">
        Começando pelo o começo
      </h1>

      <div className="text-md text-secondary-dark-500 text-center font-semibold">
        <p className="pb-4">
          Primeiro você tem que decidir aonde quer chegar. Com isso claro, damos
          o primeiro passo de uma longa maratona que se chama vida.
        </p>
        <p>
          Começa a melhor parte: descobrir que a vida não é uma corrida de 100
          metro!
        </p>
      </div>

      <div className="flex w-full justify-between">

        <SwitchPoint width={40} />
        <Link to={routes.introOne} className="dark:bg-[#12f7c50a] flex items-center rounded-xl h-fit">
          <CircleChevronRight width={28} className="stroke-primary mx-1 my-1.5" />
        </Link>
      </div>
    </LayoutRootIntro>
  );
}
