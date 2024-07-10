import localFont from 'next/font/local';
import '../styles/global.css';

const SfPro = localFont({
  src: '../../fonts/SF-Pro/SF-Pro.ttf',
  display: 'swap',
  style: 'regular',
  variable: '--font-Sf-Pro',
});

const SfProRoudend = localFont({
  src: [
    {
      path: '../../fonts/SF-Roudend/SF-Pro-Rounded-Thin.otf',
      weight: '100',
      style: 'thin',
      variable: '--font-Sf-Roudend-Thin',
    },
    {
      path: '../../fonts/SF-Roudend/SF-Pro-Rounded-Light.otf',
      weight: '300',
      style: 'light',
      variable: '--font-Sf-Roudend-Thin',
    },
    {
      path: '../../fonts/SF-Roudend/SF-Pro-Rounded-Regular.otf',
      weight: '400',
      style: 'regular',
      variable: '--font-Sf-Roudend',
    },
    {
      path: '../../fonts/SF-Roudend/SF-Pro-Rounded-Medium.otf',
      weight: '500',
      style: 'medium',
      variable: '--font-Sf-Roudend-Medium',
    },
    {
      path: '../../fonts/SF-Roudend/SF-Pro-Rounded-Semibold.otf',
      weight: '600',
      style: 'semibold',
      variable: '--font-Sf-Roudend-Semibold',
    },
    {
      path: '../../fonts/SF-Roudend/SF-Pro-Rounded-Bold.otf',
      weight: '700',
      style: 'bold',
      variable: '--font-Sf-Roudend-Medium',
    },
    {
      path: '../../fonts/SF-Roudend/SF-Pro-Rounded-Heavy.otf',
      weight: '800',
      style: 'extrabold',
      variable: '--font-Sf-Roudend-Heavy',
    },
    {
      path: '../../fonts/SF-Roudend/SF-Pro-Rounded-Black.otf',
      weight: '900',
      style: 'black',
      variable: '--font-Sf-Roudend-Heavy',
    },
  ],
});

function App({ Component, pageProps }) {
  return (
    <main className={`${SfProRoudend.className} ${SfPro.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}

export default App;
