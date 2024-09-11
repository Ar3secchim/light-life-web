import { routes } from "@app/Router/routes";

import { ArrowRightCircleIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { LayoutRootIntro } from "../Layout/layoutIntro";

import IntroImg from '@img/IntroImg.svg?react';
import SwitchPoint from "@views/components/switch-point";

export function Intro() {
  return (
    <LayoutRootIntro>
      <h1 className="text-center text-2xl font-bold text-primary font-SFRoud">
        Começando pelo o começo
      </h1>

      <IntroImg />
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
        <Link to={routes.introOne}>
          <ArrowRightCircleIcon width={32} className="fill-none stroke-primary" />
        </Link>
      </div>
    </LayoutRootIntro>
  );
}