import Header from "../../components/header";
import Footer from "../../components/footer";
import "../../global.scss";
import { poppins } from "@/helpers/fonts";

export const metadata = {
  title: {
    default: "CosmoShop",
    template: "%s | CosmoShop",
  },
  description: "Modern E-Commerce storefront built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
