import { UMAMI_SRC, UMAMI_WEBSITE_ID } from "lib/constants/umami";

const APP_NAME = "codenime";

const DocumentMeta = () => {
  return (
    <>
      <link rel="icon" href="/avatar_codenime.png" />
      <link
        rel="alternate"
        type="application/rss+xml"
        title="RSS codenime"
        href="https://codenime.xyz/rss.xml"
      />

      <meta name="application-name" content={APP_NAME} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={APP_NAME} />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="theme-color" content="#444444" />

      <meta name="description" content="Tempat yang cocok bagi kamu yang ingin belajar bahasa pemrograman"/>
      <link rel="manifest" href="/manifest.json" />

      {/* umami self-hosted analytics */}
      <script
        async
        defer
        data-website-id={UMAMI_WEBSITE_ID}
        src={UMAMI_SRC}
        data-domains="codenime.xyz"
      />
    </>
  );
};

export default DocumentMeta;
