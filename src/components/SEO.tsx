import Head from "next/head";
import { FC } from "react";

interface SEOProps {
  title: string;
  description: string;
  ogImage?: string;
}

const SEO: FC<SEOProps> = ({ title, description, ogImage }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {ogImage && <meta property="og:image" content={ogImage} />}
    </Head>
  );
};

export default SEO;
