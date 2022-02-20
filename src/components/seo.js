import React from 'react';
import Head from 'next/head';

export default function SEO({
  description = 'Olá, sou Francisco Jaime Inoque. Sou Full Stack Developer, especialista em Desenvolvimento Back-End com Node.js. No Front-End trabalho com Angular, React.js e Next.js. Busco crescer na minha carreira como desenvolvedor atuando em uma área focada em inovar, podendo com minha ajuda construir aplicações escaláveis ​​e de alto desempenho.',
  author = 'Francisco Inoque',
  meta,
  title = 'Francisco Inoque',
}) {
  const metaData = [
    {
      name: `description`,
      content: description,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: description,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: description,
    },
  ].concat(meta);
  return (
    <Head>
      <title>{title}</title>
      {metaData.map(({ name, content }, i) => (
        <meta key={i} name={name} content={content} />
      ))}
    </Head>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};
