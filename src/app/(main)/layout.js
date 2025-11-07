import Header from "../../components/header";
import Footer from "../../components/footer";
import "../../global.scss";

export const metadata = {
  title: "CosmoShop",
  description: "Modern UI E-Commerce Template",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
