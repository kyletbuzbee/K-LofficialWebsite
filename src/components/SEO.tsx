// src/components/SEO.tsx
import Head from "next/head";
import { FC } from "react";

interface SEOProps {
  title: string;
  description: string;
  ogImage?: string;
}

const SEO: FC<SEOProps> = ({
  title,
  description,
  ogImage = "/images/logo.png",
}) => {
  return (
    <Head>
      <title>{`${title} | K&L Recycling`}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={`${title} | K&L Recycling`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:title" content={`${title} | K&L Recycling`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Head>
  );
};

export default SEO;
