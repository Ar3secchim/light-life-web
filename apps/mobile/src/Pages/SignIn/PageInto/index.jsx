import { Link } from 'react-router-dom'
import ElipseSuperior from '../../../assets/SignIn/elipse-superior.png'
import IlustracaoPageInto from '../../../assets/SignIn/ilustratorPageInto.png'

function PageInto() {
  return (
    <main>
      <img
        className="z-0 relative -top-6 -left-5"
        src={ElipseSuperior}
        alt="Elipses verdes no canto superior esquerdo"
      />

      <section className="container">
        <img
          src={IlustracaoPageInto}
          alt="ilustração de um rapaz moreno sentado em uma poltrona verde e mexendo no celular"
        />
        <div className="flex flex-col justify-center items-center gap-4">
          <h1
            className="text-center text-lg text-secondary font-semibold flex
          justify-center"
          >
            FAÇA DA SUA MELHOR VERSÃO
          </h1>
          <h3 className="text-center text-base">
            O passo a passo que você precisa para mudar seus hábitos e alcançar
            a alta performance pessoal e profissional.
          </h3>
          <Link to={'/signin'}>
            <button className="btn btn-primary btn-wide mt-6 ">
              Vamos começar
            </button>
          </Link>
        </div>
      </section>
    </main>
  )
}
export default PageInto
