import { SfPro, SfProRoudend } from './styles/font';
import './styles/global.css';

function App({ Component, pageProps }) {
  return (
    <main className={`${SfProRoudend.className} ${SfPro.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}

export default App;
