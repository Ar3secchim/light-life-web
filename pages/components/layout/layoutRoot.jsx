function LayoutRootIntro({ children }) {
  return (
    <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(119, 198, 181, 0.541),rgba(255,255,255,0))]">
      {children}
    </div>
  )
}
export default LayoutRootIntro;
