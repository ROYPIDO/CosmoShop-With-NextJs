import { montserrat, poppins } from "@/helpers/fonts";
import "../global.scss";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata = {
  title: { template: "%s | Cosmo Shop", default: "Cosmo Shop" },
  description: "CosmoShop v2 – Minimal dark UI for a tiny storefront."
};

export default async function RootLayout({ children }) {
  const session = await auth();
  return (
    <html lang="en" className={`${montserrat.variable} ${poppins.variable}`}>
      <body className="d-flex flex-column justify-content-between vh-100">
        <SessionProvider session={session}>
          <Header />
          <main>{children}</main>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
