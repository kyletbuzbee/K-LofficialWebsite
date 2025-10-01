import React, { ReactNode, useEffect } from "react";
import Script from "next/script";
import Header from "./Header";
import Footer from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      <Script src="//code.tidio.co/your-tidio-key.js" strategy="lazyOnload" />
    </div>
  );
};

export default Layout;
