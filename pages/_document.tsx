import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Sora:wght@100;200;300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <link rel="shortcut icon" href="/image/favicon.ico" />
        <title>WonderTech - Encontro de Comunidades</title>
        <meta name="title" content="WonderTech - Encontro de Comunidades" />
        <meta name="description" content="O evento é sem fins lucrativos, todo montante doado será utilizado para a alimentação dos participantes e brindes e qualquer quantia que sobrar será revertido em doação para o núcleo de Tecnologia do MTST. Qualquer quantia é bem vinda, tanto de pessoa física, quanto empresas." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://wondertech.dev" />
        <meta property="og:title" content="WonderTech - Encontro de Comunidades" />
        <meta property="og:description" content="O evento é sem fins lucrativos, todo montante doado será utilizado para a alimentação dos participantes e brindes e qualquer quantia que sobrar será revertido em doação para o núcleo de Tecnologia do MTST. Qualquer quantia é bem vinda, tanto de pessoa física, quanto empresas." />
        <meta property="og:image" content="https://i.imgur.com/vzhtLee.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://wondertech.dev" />
        <meta property="twitter:title" content="WonderTech - Encontro de Comunidades" />
        <meta property="twitter:description" content="O evento é sem fins lucrativos, todo montante doado será utilizado para a alimentação dos participantes e brindes e qualquer quantia que sobrar será revertido em doação para o núcleo de Tecnologia do MTST. Qualquer quantia é bem vinda, tanto de pessoa física, quanto empresas." />
        <meta property="twitter:image" content="https://i.imgur.com/vzhtLee.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}