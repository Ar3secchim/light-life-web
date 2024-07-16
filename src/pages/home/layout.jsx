import Navigation from '../../components/navigation';

function LayoutRoot({ children }) {
  return (
    <section className='flex h-screen flex-col justify-between'>
      <div className='sticky h-24 w-full rounded-b-[20px] bg-bg-green-850 p-6 shadow-lg'>
        NavBar
      </div>
      <div className='h-full'>{children}</div>
      <Navigation />
    </section>
  );
}

export default LayoutRoot;
