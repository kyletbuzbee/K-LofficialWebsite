import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Google Analytics or other analytics tracking
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      // Add your analytics tracking here
      if (
        typeof window !== "undefined" &&
        window.gtag &&
        process.env.NEXT_PUBLIC_GA_ID
      ) {
        window.gtag("config", process.env.NEXT_PUBLIC_GA_ID, {
          page_path: url,
        });
      }
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
}

export default MyApp;
