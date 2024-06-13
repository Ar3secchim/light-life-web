import Link from "next/link"
import Button from "../components/button"
import LayoutRootIntro from "./layout"
import ArrowCircleRight from "../components/icons/arrows/arrow-circle-rigth"
import SwitchPoint from "../components/icons/switch-point"

function Intro() {
  return (
    <LayoutRootIntro>
      <Button size="md" >
        <Link href="/">
          Pular
        </Link>
      </Button>

      <h1 className="font-bold text-xl">Começando pelo o começo</h1>

      <div className="text-center text-md font-bold text-secondary-dark-500">
        <p>Primeiro você tem que decidir aonde quer chegar. Com isso claro,
          damos o primeiro passo de uma longa maratona que se chama vida.</p>
        <p>Começa a melhor parte: descobrir que a vida não é uma corrida de 100 metro!</p>
      </div>

      <div className="flex justify-between w-full">
       <SwitchPoint  activePosition={1} />
        <Button style="icon">
          <ArrowCircleRight className="w-6 h-6 fill-none stroke-primary" />
        </Button>
      </div>
    </LayoutRootIntro>
  )
}

export default Intro