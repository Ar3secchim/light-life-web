import { Html, Main, NextScript, Head } from "next/document";

function Document() {
  return (
    <Html>
      <Head>
        <link rel="shortcut icon" href="/iconRounded.png" />
        <link rel="apple-touch-icon" href="/iconRounded.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#428577" />
        <meta
          name="Projeto de habitos"
          content="Projeto de gerenciamento de habitos em um determinado periodo"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
