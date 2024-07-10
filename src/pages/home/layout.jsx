import Navigation from "../../components/navigation";

function LayoutRoot({children}) {
  return ( 
    <section className="h-screen flex justify-between flex-col">
   <div className="shadow-lg  h-24 w-full bg-bg-green-850 rounded-b-[20px] p-6 sticky "> 
      NavBar
    </div>
      <div className="h-full">
        {children}
      </div>
      <Navigation />
    </section>
    )
}

export default LayoutRoot;