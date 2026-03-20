import "bootstrap/dist/css/bootstrap.min.css";
import "../global.scss";
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
      <body>{children}</body>
    </html>
  );
}
