import Navigation from "@/components/navigation"

function LayoutRoot({children}) {
  return ( 
    <section className="h-">
      <div>
        cabeçalho
      </div>
      <div>
        {children}
      </div>
      <Navigation />
    </section>
    )
}

export default LayoutRoot;