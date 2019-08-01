import React from 'react';
import Helmet from 'react-helmet';






export default ({ frontmatter }) => {

  const siteUrl = 'https://www.send-ev.de';
  const siteLang = 'de_DE';
  const siteName = 'Social Entrepreneur Netzwerk Deutschland';
  const siteDescription = 'Das Netzwerk für Social Entrepreneure und Social Startups in Deutschland.';
  const siteImage = `${siteUrl}/static/logo.png`;

  const pageTitle = frontmatter.title || siteName;
  const pageDescription = frontmatter.excerpt || siteDescription;
  const pageImage = frontmatter.image ? `${siteUrl}${frontmatter.image}` : siteImage;

  return (
    <Helmet
      title={`${frontmatter.title} | SEND`}
      meta={[
        { name: 'title', content: `${pageTitle}` },
        { name: 'description', content: `${pageDescription}` },
        { property: 'og:locale', content: `${siteLang}` },
        { property: 'og:site_name', content: `${siteName}` },
        { property: 'og:title', content: `${pageTitle}` },
        { property: 'og:description', content: `${pageDescription}` },
        { property: 'og:image', content: `${pageImage}` },
        { name: 'twitter:card', content: `${siteLang}` },
        { name: 'twitter:title', content: `${pageTitle}` },
        { name: 'twitter:description', content: `${pageDescription}` },
        { name: 'twitter:image', content: `${pageImage}` }
      ]}
    >
      {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-111699277-1"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-111699277-1');
        `}  
      </script>
    </Helmet>
  )
};
