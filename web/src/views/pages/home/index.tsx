import { routes } from "@app/Router/routes";
import { Button } from "@views/components/ui/button";
import { Link } from "react-router-dom";

import HomeImg from "@img/HomeImg.svg?react";

export function Home() {
  return (
    <section className="mx-6 flex h-screen flex-col items-center justify-center gap-7">
      <svg className="absolute top-0 -left-1" width="200" height="150" viewBox="0 0 184 123" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M93 22.7644C93 77.9928 48.2285 122.764 -7 122.764C-62.2285 122.764 -107 77.9928 -107 22.7644C-107 -32.4641 -62.2285 -77.2356 -7 -77.2356C48.2285 -77.2356 93 -32.4641 93 22.7644Z" fill="#34786A" fill-opacity="0.5" />
        <path d="M184 -22C184 33.2285 139.228 78 84 78C28.7715 78 -16 33.2285 -16 -22C-16 -77.2285 28.7715 -122 84 -122C139.228 -122 184 -77.2285 184 -22Z" fill="#34786A" fill-opacity="0.5" />
      </svg>

      <HomeImg />
      <h1 className="text-center text-3xl font-bold font-SFRoud">
        Conquiste seus objetivos com
        <span className="text-primary  font-SFRoud"> Ligth Life</span>
      </h1>

      <div className="text-md text-secondary-dark-500 text-center font-bold">
        <p>Você é o que você faz consistentemente.</p>
        <p>
          Quando ciência, comportamento e tecnolofia se encontram, nasce a
          ferramente de gestão para te ajudar no processo de voar alto e leve!
        </p>
      </div>

      <Button asChild size="lg" className="w-full font-SFRoud">
        <Link to={routes.intro}>Começar uma nova jornada</Link>
      </Button>

      <Button
        asChild
        variant="outline"
        size='lg'
        className="w-full border-primary text-primary"
      >
        <Link to={routes.login}> Já tenho um conta</Link>
      </Button>
    </section>
  )
}
