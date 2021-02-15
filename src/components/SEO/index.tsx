import React from 'react';

import Head from 'next/head';

interface SEOProps {
  titleCounter: string;
}

const SEO: React.FC<SEOProps> = ({ titleCounter }) => {
  const pageTitle = titleCounter
    ? `(${titleCounter}) Pomodoro Timer`
    : 'Pomodoro Timer';

  const pageDescription =
    'Pomodoro Timer é um temporizador de técnica Pomodoro online flexível e fácil de usar, que vai te ajudar a administrar seu tempo e permitirá que você se concentre em qualquer tarefa, como estudar, escrever ou programar.';

  const pageImage = `https://pomodorotimer.com.br/pomodoro-timer-preview.png`;

  return (
    <Head>
      <title>{pageTitle}</title>
      <link rel="icon" href="/favicon.png" />

      <meta name="description" content={pageDescription} />
      <meta name="image" content={pageImage} />
      <meta
        name="keywords"
        content="pomodoro, técnica pomodoro, pomodoro technique, tomato timer, pomodoro timer, cronômetro, pomodoro online, ferramentas de produtividade, produtividade, cronômetro digital, técnicas de concentração"
      />

      <meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />
      <meta name="MobileOptimized" content="320" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="theme-color" content="#121214" />
      <meta name="msapplication-TileColor" content="#121214" />
      <meta name="referrer" content="no-referrer-when-downgrade" />
      <meta name="google" content="notranslate" />

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={pageTitle} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:image:secure_url" content={pageImage} />
      <meta property="og:image:alt" content="Thumbnail" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ale_monteiro14" />
      <meta name="twitter:creator" content="@ale_monteiro14" />
      <meta name="twitter:image" content={pageImage} />
      <meta name="twitter:image:src" content={pageImage} />
      <meta name="twitter:image:alt" content="Thumbnail" />
      <meta name="twitter:image:width" content="1200" />
      <meta name="twitter:image:height" content="620" />

      <meta
        name="google-site-verification"
        content="7DnGvprwPQLe7--JUrn9234cRG2WJT6CDLqoDzvi3PA"
      />
    </Head>
  );
};

export default SEO;
