function LayoutRootIntro({ children }) {
  return (
    <section className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(119, 198, 181, 0.541),rgba(255,255,255,0))]">
      <div className="h-screen flex flex-col justify-center items-center m-6 gap-7">
        {children}
      </div>
    </section>
  )
}
export default LayoutRootIntro;
