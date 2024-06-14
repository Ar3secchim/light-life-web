function LayoutRootIntro({ children }) {
  return (
    <section className='bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(119, 198, 181, 0.541),rgba(255,255,255,0))] absolute top-0 z-[-2] h-screen w-screen bg-white'>
      <div className='m-6 flex h-screen flex-col items-center justify-center gap-7'>
        {children}
      </div>
    </section>
  );
}
export default LayoutRootIntro;
