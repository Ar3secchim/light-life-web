import { Button } from '@/Components/ui/button'
import { Link } from 'react-router-dom'

import ElipseSuperior from '../../../assets/SignIn/elipse-superior.png'
import IlustracaoPageInto from '../../../assets/SignIn/ilustratorPageInto.png'

function PageInto() {
  return (
    <main className="container">
      <img
        className="relative -left-8 z-0"
        src={ElipseSuperior}
        alt="Elipses verdes no canto superior esquerdo"
      />

      <section>
        <img
          src={IlustracaoPageInto}
          alt="ilustração de um rapaz moreno sentado em uma poltrona verde e mexendo no celular"
        />
        <div className="flex flex-col items-center justify-center gap-8">
          <h1
            className="text-secondary flex justify-center text-center text-lg
          font-semibold"
          >
            FAÇA SUA MELHOR VERSÃO
          </h1>
          <h3 className="text-center text-base ">
            O passo a passo que você precisa para mudar seus hábitos e alcançar
            a alta performance pessoal e profissional.
          </h3>
          <Link to={'/signin'} className="w-full">
            <Button variant="secondary" size="lg" className="w-full">
              entre aqui
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
export default PageInto
